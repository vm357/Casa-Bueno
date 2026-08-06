/* Casa Bueno — Buy/Sell page. Covers every service except relocation.
 * Reuses shared NavBar / Footer + SearchBar + design-system cards. */

const { Button, Badge, GradientOrbCard, FeatureCard } = window.ElevenLabsDesignSystem_2f7f30;

/* thin-line icons, monochrome — matched to the homepage set */
const BsHouseIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5 12 3l9 6.5"/><path d="M5 9v11h14V9"/></svg>;
const BsTagIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11.5V4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7Z"/><circle cx="7.5" cy="7.5" r="1.3"/></svg>;
const BsKeyIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="4.5"/><path d="m11 11 9 9M18 18l2-2M15 15l2-2"/></svg>;
const BsToolIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 7-7"/><path d="M17 7h4v4"/></svg>;

/* --------------------------------------------------------------------- hero --- */

function BuySellHero() {
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', left: '82%', top: '-12%', width: 700, height: 700,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.peach} 0%, rgba(245,245,245,0) 64%)`,
        filter: 'blur(34px)', opacity: 0.85, transform: 'translateX(-50%)', pointerEvents: 'none',
      }} />
      <div className="cb-reloc-split" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px var(--space-lg) var(--space-section)', position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-xxl)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <Badge style={{ whiteSpace: 'nowrap' }}>Buying &amp; selling</Badge>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 1.05, letterSpacing: '-1.6px', color: 'var(--color-ink)', textWrap: 'balance' }}>Selling or buying, with a steady hand.</h1>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', lineHeight: 1.55, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>From an as-is cash sale to a full-market listing or your very first home — clear guidance at every page, across New Jersey.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <Button href="index.html#contact" variant="primary" size="lg">Get a cash offer</Button>
            <Button href="Listings.html" variant="outline" size="lg">Browse listings</Button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
          <GradientOrbCard variant="peach" title="Sellers" align="left" style={{ minHeight: 180 }}>Cash offers, as-is sales, and full-service listings priced to move.</GradientOrbCard>
          <GradientOrbCard variant="mint" title="Buyers" align="left" style={{ minHeight: 180 }}>First-home guidance and a calm, well-explained path to the keys.</GradientOrbCard>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- services --- */

function BuySellServices() {
  const items = [
    { icon: BsHouseIcon, eyebrow: 'Sell for cash', title: 'Sell your home as-is', body: 'Skip repairs, showings, and delays. Get a competitive cash offer and close on your timeline — exactly as the home stands today.', cta: 'Get a cash offer', href: 'index.html#contact' },
    { icon: BsTagIcon, eyebrow: 'List on the market', title: 'Sell for top dollar', body: 'When the market is the right move, we price it sharp, market it well, and manage every showing and offer until the day you close.', cta: 'Request a valuation', href: 'index.html#contact' },
    { icon: BsKeyIcon, eyebrow: 'First home', title: 'Buy your first home', body: 'We simplify the process, explain every page, and help you make smart decisions that start building long-term wealth.', cta: 'Start the journey', href: 'index.html#contact' },
    { icon: BsToolIcon, eyebrow: 'For investors', title: 'Build your portfolio', body: 'Off-market deals, fixer-uppers, and cash-flow rentals across New Jersey. We bring the numbers, the comps, and the inside track to investors buying to hold or flip.', cta: 'See investor deals', href: 'index.html#contact' },
  ];
  return (
    <section style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="What we do" title="Four ways we open doors." intro="Whether you're cashing out, listing for the most, buying your first place, or growing a portfolio — the work is the same: clear guidance and a steady hand." maxWidth={620} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
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
    </section>
  );
}

/* --------------------------------------------------------------- cash offer --- */

function BuySellCashOffer() {
  const steps = [
    'Share your address and a few details',
    'Receive your cash offer within 48 hours',
    'Choose your closing date — we handle the rest',
  ];
  return (
    <section style={{ background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)' }}>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xxl)',
          background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)',
          padding: 'clamp(40px, 6vw, 72px)',
          display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-xxl)', alignItems: 'center',
        }} className="cb-cash">
          <div aria-hidden style={{
            position: 'absolute', right: '-8%', top: '-30%', width: 520, height: 520,
            background: `radial-gradient(circle at center, ${window.ORB_STOPS.peach} 0%, rgba(12,10,9,0) 64%)`,
            filter: 'blur(20px)', opacity: 0.55,
          }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <Badge tone="dark" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Cash offer</Badge>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-xl-size)', lineHeight: 1.08, letterSpacing: 'var(--type-display-xl-ls)', color: 'var(--color-on-dark)', textWrap: 'balance' }}>Sell as-is, for cash, on your timeline.</h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-on-dark-soft)', maxWidth: 420, textWrap: 'pretty' }}>Tell us about your home and receive a competitive, no-obligation offer. No repairs, no staging, no waiting on the market.</p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <Button href="index.html#contact" variant="primary" size="lg" style={{ background: 'var(--color-on-dark)', color: 'var(--color-ink)' }}>Request my offer</Button>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
            {steps.map((s, i) => (
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

/* ------------------------------------------------------------- buyer steps --- */

const BsStep = ({ n, title, body }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, lineHeight: 1, color: 'var(--color-ink)' }}>{n}</span>
    <h3 style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', fontWeight: 'var(--weight-medium)', color: 'var(--color-ink)' }}>{title}</h3>
    <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', textWrap: 'pretty' }}>{body}</p>
  </div>
);

function BuyerJourney() {
  const steps = [
    { n: '01', title: 'Get clear on numbers', body: 'We connect you with lenders, sort out your budget, and make sure your pre-approval is ready before you fall for a home.' },
    { n: '02', title: 'Tour with intent', body: 'We line up showings that fit your list, read each home honestly, and flag what photos never show — good and bad.' },
    { n: '03', title: 'Offer and close', body: 'We write a smart offer, negotiate hard on your behalf, and walk you through inspection, appraisal, and the keys.' },
  ];
  return (
    <section style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="Buying a home" title="A first home, without the overwhelm." intro="Most first-time buyers feel lost by the paperwork. We make every step legible." maxWidth={560} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-xxl)' }} className="cb-3up">
          {steps.map((s) => <BsStep key={s.n} {...s} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- cta --- */

function BuySellCta() {
  return (
    <section style={{ background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <Eyebrow>Ready when you are</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.12, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Let's talk about your next move.</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>Selling, buying, or just weighing your options — a short conversation is the best place to start, no obligation.</p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button href="index.html#contact" variant="primary" size="lg">Get in touch</Button>
          <Button href="Listings.html" variant="outline" size="lg">Browse listings</Button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- page --- */

function BuySellPage() {
  return (
    <React.Fragment>
      <NavBar active="Buy/Sell" />
      <BuySellHero />
      <BuySellServices />
      <BuySellCashOffer />
      <BuyerJourney />
      <BuySellCta />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<BuySellPage />);
