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
  const [up, setUp] = React.useState(() => typeof document !== 'undefined' && document.hidden);
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setUp(true));
    const t = setTimeout(() => setUp(true), 120);
    const onVis = () => { if (document.hidden) setUp(true); };
    document.addEventListener('visibilitychange', onVis);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); document.removeEventListener('visibilitychange', onVis); };
  }, []);
  const rise = (d) => ({
    opacity: up ? 1 : 0, transform: up ? 'none' : 'translateY(18px)',
    transition: `opacity .8s ease-out ${d}s, transform .8s ease-out ${d}s`,
  });
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <style>{`
@keyframes cbBreatheA{0%,100%{transform:translateX(-50%) scale(1);opacity:.78}50%{transform:translateX(-50%) scale(1.1);opacity:.95}}
@keyframes cbBreatheB{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.12);opacity:.72}}
.cb-bs-orb-a{animation:cbBreatheA 14s ease-in-out infinite}
.cb-bs-orb-b{animation:cbBreatheB 17s ease-in-out infinite}
.cb-lift{transition:transform .28s ease-out,box-shadow .28s ease-out;border-radius:var(--radius-xxl)}
.cb-lift:hover{transform:translateY(-4px);box-shadow:var(--shadow-soft)}
.cb-lift > *{height:100%}
.cb-card-aura{position:relative;display:flex;width:100%;border-radius:var(--radius-xl);overflow:hidden;background:var(--color-surface-card);transition:transform .28s ease-out,box-shadow .28s ease-out}
.cb-card-aura::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .35s ease-out;background:radial-gradient(120% 90% at 85% 0%,var(--cb-aura) 0%,rgba(255,255,255,0) 62%)}
.cb-card-aura:hover::before{opacity:.85}
.cb-card-aura:hover{transform:translateY(-4px);box-shadow:var(--shadow-soft)}
.cb-card-aura > *{position:relative;flex:1}
.cb-step-hover{transition:transform .25s ease-out}
.cb-step-hover:hover{transform:translateY(-3px)}
.cb-step-num{display:inline-block;transition:opacity .25s ease-out,transform .25s ease-out;opacity:.55}
.cb-step-hover:hover .cb-step-num{opacity:1;transform:translateY(-2px)}
.cb-light-pill,.cb-light-pill:hover,.cb-light-pill:active,.cb-light-pill:focus{background:var(--color-on-dark) !important;color:var(--color-ink) !important}
.cb-light-pill{transition:transform .45s cubic-bezier(.22,.61,.36,1),box-shadow .45s ease-out}
.cb-light-pill:hover{transform:scale(1.035);box-shadow:0 0 0 6px rgba(255,255,255,0.07)}
.cb-light-pill:active{transform:scale(1)}
@media (prefers-reduced-motion: reduce){.cb-bs-orb-a,.cb-bs-orb-b{animation:none}.cb-lift:hover,.cb-card-aura:hover,.cb-light-pill:hover,.cb-step-hover:hover,.cb-step-hover:hover .cb-step-num{transform:none}}
`}</style>
      <div aria-hidden className="cb-bs-orb-a" style={{
        position: 'absolute', left: '82%', top: '-12%', width: 700, height: 700,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.peach} 0%, ${window.ORB_STOPS.peach} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(34px)', opacity: 0.72, transform: 'translateX(-50%)', pointerEvents: 'none',
      }} />
      <div aria-hidden className="cb-bs-orb-b" style={{
        position: 'absolute', left: '-10%', top: '48%', width: 600, height: 600,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.sky} 0%, ${window.ORB_STOPS.sky} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(38px)', opacity: 0.46, pointerEvents: 'none',
      }} />
      <div className="cb-reloc-split" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px var(--space-lg) var(--space-section)', position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-xxl)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={rise(0)}><Badge style={{ whiteSpace: 'nowrap' }}>Buying &amp; selling</Badge></div>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 1.05, letterSpacing: '-1.6px', color: 'var(--color-ink)', textWrap: 'balance', ...rise(0.08) }}>Selling or Buying, with a steady hand.</h1>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', lineHeight: 1.55, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty', ...rise(0.16) }}>From an as-is cash sale to a full-market listing or your very first home — clear guidance at every page, across New Jersey.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', ...rise(0.24) }}>
            <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Get a cash offer</Button></span>
            <Button href="Listings.html" variant="outline" size="lg">Browse listings</Button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
          <div style={rise(0.32)}><div className="cb-lift">
            <GradientOrbCard variant="peach" title="Sellers" align="left" style={{ minHeight: 180 }}>Cash offers, as-is sales, and full-service listings priced to move.</GradientOrbCard>
          </div></div>
          <div style={rise(0.4)}><div className="cb-lift">
            <GradientOrbCard variant="mint" title="Buyers" align="left" style={{ minHeight: 180 }}>First-home guidance and a calm, well-explained path to the keys.</GradientOrbCard>
          </div></div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- services --- */

function Reveal({ children, delay = 0, y = 16, className, style = {} }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(() => typeof document !== 'undefined' && document.hidden);
  React.useEffect(() => {
    if (!ref.current || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return; }
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: seen ? 1 : 0, transform: seen ? 'none' : `translateY(${y}px)`,
      transition: `opacity .75s ease-out ${delay}s, transform .75s ease-out ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

const CARD_HUES = ['peach', 'mint', 'sky', 'lavender'];

function BuySellServices() {
  const items = [
    { icon: BsHouseIcon, eyebrow: 'Sell for cash', title: 'Sell your home as-is', body: 'Skip repairs, showings, and delays. Get a competitive cash offer and close on your timeline — exactly as the home stands today.', cta: 'Get a cash offer', href: 'index.html#contact' },
    { icon: BsTagIcon, eyebrow: 'List on the market', title: 'Sell for top dollar', body: 'When the market is the right move, we price it sharp, market it well, and manage every showing and offer until the day you close.', cta: 'Request a valuation', href: 'index.html#contact' },
    { icon: BsKeyIcon, eyebrow: 'First home', title: 'Buy your first home', body: 'We simplify the process, explain every page, and help you make smart decisions that start building long-term wealth.', cta: 'Start the journey', href: 'index.html#contact' },
    { icon: BsToolIcon, eyebrow: 'For investors', title: 'Build your portfolio', body: 'Off-market deals, fixer-uppers, and cash-flow rentals across New Jersey. We bring the numbers, the comps, and the inside track to investors buying to hold or flip.', cta: 'See investor deals', href: 'index.html#contact' },
  ];
  return (
    <section id="what-we-do" className="cb-band" style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="mint" x="92%" y="16%" size={660} opacity={0.5} />
      <PageBloom hue="rose" x="4%" y="84%" size={600} opacity={0.42} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <Reveal><SectionHead eyebrow="What we do" title="Four ways we open doors." intro="Whether you're cashing out, listing for the most, buying your first place, or growing a portfolio — the work is the same: clear guidance and a steady hand." maxWidth={620} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.1 + i * 0.1} style={{ display: 'flex' }}>
              <div className="cb-card-aura" style={{ '--cb-aura': window.ORB_STOPS[CARD_HUES[i % 4]] }}>
                <FeatureCard icon={it.icon} eyebrow={it.eyebrow} title={it.title} style={{ gap: 'var(--space-base)', background: 'transparent' }}>
                  <span style={{ display: 'block' }}>{it.body}</span>
                  <span style={{ marginTop: 'var(--space-xs)', display: 'inline-block' }}>
                    <Button href={it.href} variant="tertiary" style={{ fontWeight: 'var(--weight-medium)' }}>{it.cta} →</Button>
                  </span>
                </FeatureCard>
              </div>
            </Reveal>
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
    <section className="cb-band" style={{ background: 'var(--color-canvas)' }}>
      <PageBloom hue="lavender" x="6%" y="16%" size={660} opacity={0.5} />
      <PageBloom hue="mint" x="96%" y="86%" size={600} opacity={0.42} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)' }}>
        <div id="cash-offer" style={{
          scrollMarginTop: 96,
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
          <Reveal style={{ position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div><Badge tone="dark" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Cash offer</Badge></div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-xl-size)', lineHeight: 1.08, letterSpacing: 'var(--type-display-xl-ls)', color: 'var(--color-on-dark)', textWrap: 'balance' }}>Sell as-is, for cash, on your timeline.</h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-on-dark-soft)', maxWidth: 420, textWrap: 'pretty' }}>Tell us about your home and receive a competitive, no-obligation offer. No repairs, no staging, no waiting on the market.</p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg" className="cb-light-pill" style={{ background: 'var(--color-on-dark)', color: 'var(--color-ink)' }}>Request my offer</Button></span>
            </div>
          </div>
          </Reveal>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={0.15 + i * 0.14}>
              <div style={{ display: 'flex', gap: 'var(--space-base)', alignItems: 'flex-start', paddingBottom: 'var(--space-base)', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 28, color: 'var(--color-on-dark)', lineHeight: 1, minWidth: 36 }}>{i + 1}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.45, color: 'var(--color-on-dark)' }}>{s}</span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- buyer steps --- */

const BsStep = ({ n, title, body }) => (
  <div className="cb-step-hover" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
    <span className="cb-step-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, lineHeight: 1, color: 'var(--color-ink)' }}>{n}</span>
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
    <section className="cb-band" style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="rose" x="90%" y="20%" size={640} opacity={0.46} />
      <PageBloom hue="sky" x="6%" y="88%" size={600} opacity={0.44} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <Reveal><SectionHead eyebrow="Buying a home" title="A first home, without the overwhelm." intro="Most first-time buyers feel lost by the paperwork. We make every step legible." maxWidth={560} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-xxl)' }} className="cb-3up">
          {steps.map((s, i) => <Reveal key={s.n} delay={0.12 + i * 0.12}><BsStep {...s} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- cta --- */

function BuySellCta() {
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas)' }}>
      <PageBloom hue="peach" x="14%" y="24%" size={580} opacity={0.44} />
      <PageBloom hue="lavender" x="88%" y="82%" size={560} opacity={0.4} />
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <Reveal><Eyebrow>Ready when you are</Eyebrow></Reveal>
        <Reveal delay={0.08}><h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.12, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Let's talk about your next move.</h2></Reveal>
        <Reveal delay={0.16}><p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>Selling, buying, or just weighing your options — a short conversation is the best place to start, no obligation.</p></Reveal>
        <Reveal delay={0.24}>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Get in touch</Button></span>
          <Button href="Listings.html" variant="outline" size="lg">Browse listings</Button>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- page --- */

function BuySellPage() {
  return (
    <React.Fragment>
      <NavBar active="Buy/Sell" />
      <main id="cb-main">
      <BuySellHero />
      <BuySellServices />
      <BuySellCashOffer />
      <BuyerJourney />
      <BuySellCta />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<BuySellPage />);
