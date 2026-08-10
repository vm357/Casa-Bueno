/* POST /api/review — collects a submitted client review.
 *
 * Reviews are not leads, so they do not go to Follow Up Boss as events. If
 * REVIEW_WEBHOOK is set (a Zapier/Make hook, a Slack hook, or anything that
 * accepts JSON) the review is forwarded there. Otherwise it is logged and the
 * submission still succeeds — the browser keeps its own pending copy. */

export async function onRequestPost({ request, env }) {
  let review;
  try { review = await request.json(); } catch { return new Response('Bad request', { status: 400 }); }
  if (review.company) return new Response(null, { status: 204 });

  if (env.REVIEW_WEBHOOK) {
    await fetch(env.REVIEW_WEBHOOK, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...review, receivedAt: new Date().toISOString() }),
    }).catch(() => {});
  } else {
    console.log('Review submitted (no REVIEW_WEBHOOK set):', JSON.stringify(review));
  }
  return new Response(null, { status: 204 });
}
