/* Casa Bueno — Relocation page. Reuses shared NavBar / Footer + design-system cards. */

const { Button, Badge, GradientOrbCard, FeatureCard } = window.ElevenLabsDesignSystem_2f7f30;

function RelocHero() {
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', left: '80%', top: '-10%', width: 700, height: 700,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.lavender} 0%, rgba(245,245,245,0) 64%)`,
        filter: 'blur(34px)', opacity: 0.85, transform: 'translateX(-50%)', pointerEvents: 'none',
      }} />
      <div className="cb-reloc-split" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px var(--space-lg) var(--space-section)', position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-xxl)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <Badge style={{ whiteSpace: 'nowrap' }}>Domestic &amp; international</Badge>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 1.05, letterSpacing: '-1.6px', color: 'var(--color-ink)', textWrap: 'balance' }}>Move across the country, or the world.</h1>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', lineHeight: 1.55, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>We handle your sale here while guiding your next move — whether it's the next state over or a new life in the Dominican Republic or Mexico.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <Button href="index.html#contact" variant="primary" size="lg">Book a relocation consult</Button>
            <Button href="Listings.html" variant="outline" size="lg">Browse listings</Button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
          <GradientOrbCard variant="sky" title="Dominican Republic" align="left" style={{ minHeight: 180 }}>Beachfront and city homes, residency guidance, and a trusted partner on the ground.</GradientOrbCard>
          <GradientOrbCard variant="peach" title="Mexico" align="left" style={{ minHeight: 180 }}>From Mérida to the coast — we connect you with vetted local agents and handle the sale at home.</GradientOrbCard>
        </div>
      </div>
    </section>
  );
}

const Step = ({ n, title, body }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, lineHeight: 1, color: 'var(--color-ink)' }}>{n}</span>
    <h3 style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', fontWeight: 'var(--weight-medium)', color: 'var(--color-ink)' }}>{title}</h3>
    <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', textWrap: 'pretty' }}>{body}</p>
  </div>
);

function RelocSteps() {
  const steps = [
    { n: '01', title: 'Plan the timeline', body: 'We map your sale and your move together so the two never collide — closing here lines up with arriving there.' },
    { n: '02', title: 'Sell with confidence', body: 'List on the market or take a cash offer. Either way, we manage showings, paperwork, and closing while you pack.' },
    { n: '03', title: 'Land softly', body: 'A vetted partner agent meets you at the destination — housing, neighborhoods, and the local know-how to settle in.' },
  ];
  return (
    <section style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="How relocation works" title="One team, both ends of the move." intro="Most agents hand you off at the city line. We stay with you the whole way." maxWidth={560} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-xxl)' }} className="cb-3up">
          {steps.map((s) => <Step key={s.n} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function RelocServices() {
  const items = [
    { eyebrow: 'For sellers', title: 'Sell before you go', body: 'Cash offers and market listings timed to your departure — no carrying two homes, no rushed decisions.' },
    { eyebrow: 'For movers', title: 'A partner on the ground', body: 'Vetted local agents in the Dominican Republic and Mexico, briefed on exactly what you need.' },
    { eyebrow: 'For families', title: 'The whole picture', body: 'Schools, neighborhoods, residency basics, and a steady point of contact through every time zone.' },
  ];
  return (
    <section style={{ background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="What's included" title="Everything the move needs." maxWidth={560} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {items.map((it) => (
            <FeatureCard key={it.title} eyebrow={it.eyebrow} title={it.title}>{it.body}</FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelocCta() {
  return (
    <section style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <Eyebrow>Ready when you are</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.12, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Tell us where you're headed.</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>A short consultation is the best place to start — we'll sketch a timeline and the path forward, no obligation.</p>
        <Button href="index.html#contact" variant="primary" size="lg">Book a relocation consult</Button>
      </div>
    </section>
  );
}

function RelocationPage() {
  return (
    <React.Fragment>
      <NavBar active="Relocation" />
      <RelocHero />
      <RelocSteps />
      <RelocServices />
      <RelocCta />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<RelocationPage />);
