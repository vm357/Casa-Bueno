/* POST /api/lead — server-side relay to Follow Up Boss.
 *
 * Runs on Cloudflare's edge, so the FUB API key stays out of the browser. Set
 * FUB_API_KEY as an encrypted environment variable on the Pages project
 * (Settings -> Environment variables). Until it is set this endpoint accepts the
 * submission and returns 200 without forwarding, so a visitor never sees an error.
 *
 * Uses POST /v1/events, not /v1/people: events trigger FUB's automations
 * (assignment, action plans, notifications) and de-duplicate against existing
 * contacts. /people does neither.
 *
 * The browser posts an already FUB-shaped body. This function validates it,
 * overrides source/system so they cannot be spoofed, and folds the consent
 * record into the message so it is preserved on the contact timeline. */

const FUB_EVENTS = 'https://api.followupboss.com/v1/events';
const SOURCE = 'sellwithbueno.com';   // bare domain, per FUB's lead provider guide
const SYSTEM = 'Casa Bueno Website';

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json' },
});

export async function handleLead(request, env) {
  let data;
  try { data = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }

  if (data.company) return json({ ok: true });          // honeypot

  const p = data.person || {};
  const email = (p.emails || []).map((e) => e && e.value).find(Boolean) || '';
  const phone = (p.phones || []).map((e) => e && e.value).find(Boolean) || '';
  if (!p.firstName || (!email && !phone)) return json({ error: 'Missing contact details' }, 400);

  const consent = data.consent && data.consent.given
    ? `\n\n--\nConsent given ${data.consent.timestamp}: ${data.consent.text}`
    : '';

  const payload = {
    source: SOURCE,
    system: SYSTEM,
    type: String(data.type || 'General Inquiry'),
    message: String(data.message || '') + consent,
    person: {
      firstName: String(p.firstName || ''),
      lastName: String(p.lastName || ''),
      emails: email ? [{ value: email, type: 'home' }] : [],
      phones: phone ? [{ value: phone, type: 'mobile' }] : [],
      tags: Array.isArray(p.tags) ? p.tags : ['Website Lead'],
      sourceUrl: String(p.sourceUrl || 'https://sellwithbueno.com/'),
    },
  };

  if (!env.FUB_API_KEY) {
    console.log('FUB_API_KEY not set — lead not forwarded:', JSON.stringify(payload));
    return json({ ok: true, forwarded: false });
  }

  const res = await fetch(FUB_EVENTS, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa(env.FUB_API_KEY + ':'),
      'Content-Type': 'application/json',
      'X-System': SYSTEM,
      ...(env.FUB_SYSTEM_KEY ? { 'X-System-Key': env.FUB_SYSTEM_KEY } : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error('Follow Up Boss rejected the lead', res.status, await res.text());
    return json({ error: 'Could not reach Follow Up Boss' }, 502);
  }
  return json({ ok: true, forwarded: true });
}
