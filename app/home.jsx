/* Casa Bueno — homepage sections + app assembly. */

const { Button, Badge, FeatureCard, TestimonialCard, GradientOrbCard } = window.ElevenLabsDesignSystem_2f7f30;

/* Bloom — a soft pastel gradient orb used purely as atmosphere behind a band. */
const Bloom = ({ hue = 'mint', x = '85%', y = '10%', size = 620, opacity = 0.7, blur = 40 }) => (
  <div aria-hidden style={{
    position: 'absolute', left: x, top: y, width: size, height: size,
    transform: 'translate(-50%,-50%)', pointerEvents: 'none',
    background: `radial-gradient(circle at center, ${window.ORB_STOPS[hue]} 0%, ${window.ORB_STOPS[hue]} 22%, rgba(245,245,245,0) 72%)`,
    filter: `blur(${blur}px)`, opacity,
  }} />
);

const Band = ({ children, soft = false, dark = false, id, blooms = [], style = {} }) => (
  <section id={id} style={{
    position: 'relative', overflow: 'hidden',
    background: dark ? 'var(--color-surface-dark)' : soft ? 'var(--color-canvas-soft)' : 'var(--color-canvas)',
    ...style,
  }}>
    {blooms.map((b, i) => <Bloom key={i} {...b} />)}
    <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)' }}>
      {children}
    </div>
  </section>
);

/* ------------------------------------------------------------------- hero --- */

function HeroOrb({ orb, scale = 1, pos = '50% 30%', blur = 30 }) {
  const stop = window.ORB_STOPS[orb] || window.ORB_STOPS.mint;
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute', left: pos.split(' ')[0], top: pos.split(' ')[1],
        transform: 'translate(-50%,-50%)',
        width: 720 * scale, height: 720 * scale,
        background: `radial-gradient(circle at center, ${stop} 0%, ${stop} 20%, rgba(245,245,245,0) 70%)`,
        filter: `blur(${blur}px)`, opacity: 1,
      }} />
    </div>
  );
}

function HeroHeadline({ headline, sub, align = 'left', size = 'mega' }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)',
      alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align,
    }}>
      <Badge style={{ whiteSpace: 'nowrap' }}>New Jersey</Badge>
      <h1 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
        fontSize: size === 'mega' ? 'clamp(44px, 6vw, 72px)' : 'var(--type-display-xl-size)',
        lineHeight: 1.04, letterSpacing: 'var(--type-display-mega-ls)',
        color: 'var(--color-ink)', textWrap: 'balance', maxWidth: 15 + 'ch',
      }}>{headline}</h1>
      <p style={{
        margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)',
        lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 460, textWrap: 'pretty',
      }}>{sub}</p>
    </div>
  );
}

/* Editorial split — type left, framed atmospheric panel right, search below. */
function HeroEditorial({ t }) {
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <HeroOrb orb={t.orb} pos="85% 8%" scale={1.05} />
      <Bloom hue="peach" x="6%" y="72%" size={700} opacity={0.6} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '88px var(--space-lg) var(--space-xxl)', position: 'relative' }}>
        <div className="cb-hero-split" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--space-xxl)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <HeroHeadline headline={t.headline} sub={t.sub} />
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <Button href="Listings.html" variant="primary" size="lg">Browse listings</Button>
              <Button href="#contact" variant="outline" size="lg">Get a cash offer</Button>
            </div>
          </div>
          <div style={{
            position: 'relative', height: 420, borderRadius: 'var(--radius-xxl)', overflow: 'hidden',
            background: 'var(--color-surface-strong)', border: '1px solid var(--color-hairline)',
            display: 'flex', alignItems: 'flex-end', padding: 'var(--space-xl)',
          }} className="cb-hero-panel">
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(110% 80% at 60% 10%, ${window.ORB_STOPS[t.orb]} 0%, rgba(255,255,255,0) 62%)`,
              opacity: 0.7,
            }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Eyebrow>Now showing</Eyebrow>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 28, letterSpacing: '-0.4px', color: 'var(--color-ink)' }}>4 Holmehill Lane</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-body)' }}>$2,500,000 · 5 bd · 4.2 ba · Roseland Boro, NJ</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-xl)' }}><SearchBar /></div>
      </div>
    </section>
  );
}

/* Atmospheric — centered headline over a wide orb bloom, search card under. */
function HeroAtmospheric({ t }) {
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <HeroOrb orb={t.orb} pos="50% 18%" scale={1.3} blur={36} />
      <Bloom hue="peach" x="8%" y="58%" size={760} opacity={0.6} />
      <Bloom hue="lavender" x="94%" y="36%" size={720} opacity={0.6} />
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '104px var(--space-lg) var(--space-xxl)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xl)' }}>
        <HeroHeadline headline={t.headline} sub={t.sub} align="center" />
        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button href="Listings.html" variant="primary" size="lg">Browse listings</Button>
          <Button href="#contact" variant="outline" size="lg">Get a cash offer</Button>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-lg) var(--space-section)', position: 'relative' }}>
        <SearchBar />
      </div>
    </section>
  );
}

/* Minimal — pure editorial type, inline search, no image panel. */
function HeroMinimal({ t }) {
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden', borderBottom: '1px solid var(--color-hairline)' }}>
      <HeroOrb orb={t.orb} pos="12% 92%" scale={0.95} />
      <Bloom hue="sky" x="92%" y="22%" size={740} opacity={0.6} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '120px var(--space-lg) var(--space-section)', position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <div style={{ maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <Badge style={{ whiteSpace: 'nowrap' }}>New Jersey</Badge>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
            fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1.02, letterSpacing: '-2px',
            color: 'var(--color-ink)', textWrap: 'balance',
          }}>{t.headline}</h1>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 540, textWrap: 'pretty' }}>{t.sub}</p>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}

function Hero({ t }) {
  if (t.hero === 'atmospheric') return <HeroAtmospheric t={t} />;
  if (t.hero === 'minimal') return <HeroMinimal t={t} />;
  return <HeroEditorial t={t} />;
}

/* --------------------------------------------------------------- trust row --- */

function TrustRow() {
  const stats = [
    { n: '11 days', l: 'Average time to a signed cash offer' },
    { n: '$10M+', l: 'In closed sales across New Jersey' },
    { n: 'international', l: 'Relocations handled, door to door' },
    { n: '4.9 / 5', l: 'Average client rating' },
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <Bloom hue="peach" x="18%" y="12%" size={600} opacity={0.6} />
      <Bloom hue="lavender" x="82%" y="92%" size={600} opacity={0.6} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-xxl) var(--space-lg)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-xl)' }} className="cb-stat-grid">
        {stats.map((s) => (
          <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-md-size)', letterSpacing: '-0.4px', color: 'var(--color-ink)' }}>{s.n}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', lineHeight: 1.45, color: 'var(--color-muted)', textWrap: 'pretty' }}>{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- services --- */

const HouseIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5 12 3l9 6.5"/><path d="M5 9v11h14V9"/></svg>;
const GlobeIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>;
const KeyIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="4.5"/><path d="m11 11 9 9M18 18l2-2M15 15l2-2"/></svg>;

function Services() {
  const items = [
    { icon: HouseIcon, eyebrow: 'Sell for cash', title: 'Sell your home as-is', body: 'Skip repairs, showings, and delays. Get a competitive cash offer and close on your timeline — exactly as the home stands today.', cta: 'Get a cash offer', href: '#contact' },
    { icon: GlobeIcon, eyebrow: 'Relocation', title: 'Move across the country, or the world', body: 'Out of state or overseas, we handle your sale here while guiding your next move — from the Dominican Republic to Mexico and beyond.', cta: 'Plan a relocation', href: 'Relocation.html' },
    { icon: KeyIcon, eyebrow: 'First home', title: 'Buy your first home with confidence', body: 'We simplify the process, explain every page, and help you make smart decisions that start building long-term wealth.', cta: 'Start the journey', href: '#contact' },
  ];
  return (
    <Band id="services" soft blooms={[{ hue: 'lavender', x: '92%', y: '18%', size: 760, opacity: 0.6 }, { hue: 'mint', x: '4%', y: '88%', size: 640, opacity: 0.6 }]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="What we do" title="Three ways we open doors." intro="Whether you are selling fast, moving far, or buying your first place, the work is the same: clear guidance and a steady hand." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {items.map((it) => (
            <FeatureCard key={it.title} icon={it.icon} eyebrow={it.eyebrow} title={it.title} style={{ gap: 'var(--space-base)' }}>
              <span style={{ display: 'block' }}>{it.body}</span>
              <span style={{ marginTop: 'var(--space-xs)', display: 'inline-block' }}>
                <Button href={it.href} variant="tertiary" style={{ fontWeight: 'var(--weight-medium)' }}>{it.cta} →</Button>
              </span>
            </FeatureCard>
          ))}
        </div>
      </div>
    </Band>
  );
}

/* ----------------------------------------------------------- featured list --- */

function Featured() {
  return (
    <Band blooms={[{ hue: 'peach', x: '6%', y: '12%', size: 680, opacity: 0.6 }, { hue: 'sky', x: '96%', y: '86%', size: 720, opacity: 0.6 }]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
          <SectionHead eyebrow="Featured listings" title="Homes on the market now." intro="A look at what's moving across Essex County this week." />
          <Button href="Listings.html" variant="outline">View all listings</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {window.CB_LISTINGS.slice(0, 3).map((d, i) => <ListingCard key={d.id} data={d} index={i} />)}
        </div>
      </div>
    </Band>
  );
}

/* ------------------------------------------------------------- cash offer --- */

function CashOffer({ t }) {
  return (
    <section style={{ background: 'var(--color-canvas-soft)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)' }}>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xxl)',
          background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)',
          padding: 'clamp(40px, 6vw, 72px)',
          display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-xxl)', alignItems: 'center',
        }} className="cb-cash">
          <div aria-hidden style={{
            position: 'absolute', right: '-8%', top: '-30%', width: 520, height: 520,
            background: `radial-gradient(circle at center, ${window.ORB_STOPS[t.orb]} 0%, rgba(12,10,9,0) 64%)`,
            filter: 'blur(20px)', opacity: 0.55,
          }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div><Badge tone="dark" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Cash offer</Badge></div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-xl-size)', lineHeight: 1.08, letterSpacing: 'var(--type-display-xl-ls)', color: 'var(--color-on-dark)', textWrap: 'balance' }}>Sell as-is, for cash, on your timeline.</h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-on-dark-soft)', maxWidth: 420, textWrap: 'pretty' }}>Tell us about your home and receive a competitive, no-obligation offer. No repairs, no staging, no waiting on the market.</p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <Button href="#contact" variant="primary" size="lg" style={{ background: 'var(--color-on-dark)', color: 'var(--color-ink)' }}>Request my offer</Button>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
            {['Share your address and a few details', 'Receive your cash offer within 48 hours', 'Choose your closing date — we handle the rest'].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-base)', alignItems: 'flex-start', paddingBottom: 'var(--space-base)', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 28, color: 'var(--color-on-dark)', lineHeight: 1, minWidth: 36 }}>{i + 1}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.45, color: 'var(--color-on-dark)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ about --- */

function About() {
  return (
    <Band id="about" blooms={[{ hue: 'rose', x: '88%', y: '20%', size: 720, opacity: 0.6 }]}>
      <div className="cb-about" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-xxl)', alignItems: 'center' }}>
        <div style={{
          position: 'relative', aspectRatio: '4 / 5', borderRadius: 'var(--radius-xxl)', overflow: 'hidden',
          background: 'var(--color-surface-strong)', border: '1px solid var(--color-hairline)',
        }}>
          <img src="uploads/vanessabueno.png" alt="Casa Bueno agent portrait"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 32%', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <Eyebrow>About Vanessa Bueno</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.15, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Real estate is a relationship, not a transaction.</h2>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 540, textWrap: 'pretty' }}>Casa Bueno was built on a simple belief: that buying and selling a home should feel calm, clear, and a little bit personal. We move quickly when speed matters and slowly when care matters — and we treat every client like family across town or across borders.</p>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 540, textWrap: 'pretty' }}>From as-is cash sales to international relocations and first-home guidance, the throughline is trust — earned one honest conversation at a time.</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
            <Button href="#contact" variant="primary">Work with us</Button>
            <Button href="Relocation.html" variant="outline">Relocation services</Button>
          </div>
        </div>
      </div>
    </Band>
  );
}

/* ----------------------------------------------------------- testimonials --- */

function Testimonials() {
  return (
    <Band soft blooms={[{ hue: 'sky', x: '10%', y: '16%', size: 700, opacity: 0.6 }, { hue: 'peach', x: '90%', y: '84%', size: 700, opacity: 0.6 }]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="Client stories" title="Quietly, the work speaks." align="center" maxWidth={560} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {window.CB_TESTIMONIALS.map((q) => <TestimonialCard key={q.name} {...q} />)}
        </div>
      </div>
    </Band>
  );
}

/* ---------------------------------------------------------------- contact --- */

function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <Band id="contact" blooms={[{ hue: 'mint', x: '4%', y: '78%', size: 740, opacity: 0.6 }, { hue: 'lavender', x: '94%', y: '10%', size: 680, opacity: 0.6 }]}>
      <div className="cb-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <SectionHead eyebrow="Get in touch" title="Let's talk about your next move." intro="Selling, buying, or relocating — send a note and we'll reply within one business day." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)', marginTop: 'var(--space-sm)' }}>
            {[['Email', 'hello@casabuenogroup.com'], ['Phone', '(732) 900-3886'], ['Office', 'Manville, New Jersey']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 'var(--space-base)', borderBottom: '1px solid var(--color-hairline)', paddingBottom: 'var(--space-base)' }}>
                <span style={{ width: 80, fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-body-strong)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-hairline)', padding: 'var(--space-xl)' }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', minHeight: 380, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Badge tone="success">Sent</Badge>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--type-display-md-size)', letterSpacing: '-0.3px', color: 'var(--color-ink)' }}>Thank you — we'll be in touch.</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-body)' }}>Expect a reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-base)' }}>
                <Field label="First name"><CBInput required placeholder="Jane" /></Field>
                <Field label="Last name"><CBInput required placeholder="Doe" /></Field>
              </div>
              <Field label="Email"><CBInput required type="email" placeholder="you@email.com" /></Field>
              <Field label="Phone"><CBInput type="tel" placeholder="(732) 900-3886" /></Field>
              <Field label="I'm interested in">
                <CBSelect options={[{ value: 0, label: 'Selling for cash' }, { value: 1, label: 'Buying a home' }, { value: 2, label: 'Relocating' }, { value: 3, label: 'First-time buying' }]} defaultValue={0} />
              </Field>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Message</span>
                <textarea rows={4} placeholder="Tell us a little about your home or your plans." style={{ ...window.cbTextareaStyle }} />
              </label>
              <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: 'var(--space-xs)' }}>Send message</Button>
            </form>
          )}
        </div>
      </div>
    </Band>
  );
}

window.cbTextareaStyle = {
  fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5,
  color: 'var(--color-ink)', background: 'var(--color-surface-card)', padding: '12px 14px',
  width: '100%', boxSizing: 'border-box', borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-hairline-strong)', outline: 'none', resize: 'vertical',
};

/* -------------------------------------------------------------------- app --- */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "atmospheric",
  "orb": "mint",
  "headline": "Find the home that feels like yours.",
  "sub": "Casa Bueno helps you sell for cash, relocate near or far, and buy with confidence — across New Jersey and beyond."
}/*EDITMODE-END*/;

const ORB_SWATCH = { mint: '#a7e5d3', peach: '#f4c5a8', lavender: '#c8b8e0', sky: '#a8c8e8', rose: '#e8b8c4' };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // The page renders after load, so the hash target doesn't exist yet when the
    // browser first tries to jump. Scroll to it once mounted, offset for sticky nav.
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'auto' });
    });
  }, []);
  return (
    <React.Fragment>
      <NavBar active="Home" />
      <Hero t={t} />
      <TrustRow />
      <Services />
      <Featured />
      <CashOffer t={t} />
      <About />
      <Testimonials />
      <Contact />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Layout" value={t.hero}
          options={[{ value: 'editorial', label: 'Editorial' }, { value: 'atmospheric', label: 'Centered' }, { value: 'minimal', label: 'Minimal' }]}
          onChange={(v) => setTweak('hero', v)} />
        <TweakText label="Headline" value={t.headline} onChange={(v) => setTweak('headline', v)} />
        <TweakText label="Subhead" value={t.sub} onChange={(v) => setTweak('sub', v)} />
        <TweakSection label="Atmosphere" />
        <TweakColor label="Gradient orb" value={ORB_SWATCH[t.orb]}
          options={Object.values(ORB_SWATCH)}
          onChange={(hex) => setTweak('orb', Object.keys(ORB_SWATCH).find((k) => ORB_SWATCH[k] === hex) || 'mint')} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<App />);
