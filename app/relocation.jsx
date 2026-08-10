/* Casa Bueno — Relocation page. Reuses shared NavBar / Footer + design-system cards. */

const { Button, Badge, GradientOrbCard, FeatureCard } = window.ElevenLabsDesignSystem_2f7f30;

const RELOC_CLIPS = ['uploads/Video Project 3.mp4', 'uploads/Video Project 4.mp4'];

function RelocReel({ index }) {
  const refs = React.useRef([]);
  const playing = React.useRef(null);
  /* Only the current clip (and the next, warming) is allowed to download.
   * Reduced-motion visitors get a single still frame instead. */
  React.useEffect(() => {
    if (CB_REDUCED_MOTION) {
      const v = refs.current[0];
      cbAttachClip(v, RELOC_CLIPS[0], 'metadata');
      return;
    }
    const next = (index + 1) % RELOC_CLIPS.length;
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        cbAttachClip(v, RELOC_CLIPS[i], 'auto');
        const start = () => {
          v.muted = true;
          if (v.readyState >= 2) { try { v.currentTime = 0; } catch (e) {} }
          const p = v.play();
          if (p && p.then) playing.current = p.catch(() => {});
        };
        if (v.readyState >= 2) start();
        else {
          v.addEventListener('loadeddata', start, { once: true });
          v.addEventListener('canplay', start, { once: true });
        }
      } else {
        const stop = () => { try { v.pause(); } catch (e) {} };
        if (playing.current) playing.current.then(stop, stop); else stop();
        if (i === next) cbAttachClip(v, RELOC_CLIPS[i], 'auto');
      }
    });
  }, [index]);

  React.useEffect(() => { cbPrimeClips(refs.current); }, []);

  /* iOS can refuse the automatic start outright (Low Power Mode, Safari's
   * media policy). The first touch anywhere on the page is a user gesture, so
   * retry once there rather than leaving the poster frame up. */
  React.useEffect(() => {
    if (CB_REDUCED_MOTION) return;
    const kick = () => {
      const v = refs.current[index];
      if (!v) return;
      v.muted = true;
      if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    };
    document.addEventListener('touchstart', kick, { once: true, passive: true });
    document.addEventListener('click', kick, { once: true });
    return () => {
      document.removeEventListener('touchstart', kick);
      document.removeEventListener('click', kick);
    };
  }, [index]);

  /* Returning from the app switcher or unlocking the phone suspends playback
   * without firing an error; nudge the visible clip when the page comes back. */
  React.useEffect(() => {
    if (CB_REDUCED_MOTION) return;
    const resume = () => {
      if (document.hidden) return;
      const v = refs.current[index];
      if (v && v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    };
    document.addEventListener('visibilitychange', resume);
    window.addEventListener('pageshow', resume);
    return () => {
      document.removeEventListener('visibilitychange', resume);
      window.removeEventListener('pageshow', resume);
    };
  }, [index]);

  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'var(--color-surface-dark)' }}>
      {RELOC_CLIPS.map((src, i) => (
        <video key={src} ref={el => refs.current[i] = el} src={i === 0 ? src : undefined} muted loop playsInline autoPlay={!CB_REDUCED_MOTION} preload={i === 0 ? 'auto' : 'none'} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: i === index ? 1 : 0, transition: 'opacity 1.4s ease',
        }}></video>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12,10,9,0.62) 0%, rgba(12,10,9,0.38) 45%, rgba(12,10,9,0.78) 100%)' }}></div>
    </div>
  );
}

function RelocHero() {
  const [clip, setClip] = React.useState(0);
  React.useEffect(() => {
    if (CB_REDUCED_MOTION) return;
    const id = setInterval(() => setClip(v => (v + 1) % RELOC_CLIPS.length), 5000);
    return () => clearInterval(id);
  }, []);
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
@keyframes cbDriftA{0%{transform:translate(-50%,0) scale(1)}50%{transform:translate(-52%,26px) scale(1.06)}100%{transform:translate(-50%,0) scale(1)}}
@keyframes cbDriftB{0%{transform:translate(0,0) scale(1)}50%{transform:translate(28px,-22px) scale(1.08)}100%{transform:translate(0,0) scale(1)}}
.cb-orb-a{animation:cbDriftA 18s ease-in-out infinite}
.cb-orb-b{animation:cbDriftB 22s ease-in-out infinite}
.cb-orb-card{transition:transform .3s ease-out,box-shadow .3s ease-out}
.cb-orb-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-soft)}
.cb-orb-card > *{height:100%}
.cb-feat-lift > *{flex:1}
.cb-card-aura{position:relative;display:flex;width:100%;border-radius:var(--radius-xl);overflow:hidden;background:var(--color-surface-card);transition:transform .28s ease-out,box-shadow .28s ease-out}
.cb-card-aura::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .35s ease-out;background:radial-gradient(120% 90% at 85% 0%,var(--cb-aura) 0%,rgba(255,255,255,0) 62%)}
.cb-card-aura:hover::before{opacity:.85}
.cb-card-aura:hover{transform:translateY(-4px);box-shadow:var(--shadow-soft)}
.cb-card-aura > *{position:relative;flex:1}
.cb-feat-lift:hover{transform:translateY(-4px);box-shadow:var(--shadow-soft)}
.cb-step-hover{transition:transform .25s ease-out}
.cb-step-hover:hover{transform:translateY(-3px)}
.cb-step-num{display:inline-block;transition:opacity .25s ease-out,transform .25s ease-out;opacity:.55}
.cb-step-hover:hover .cb-step-num{opacity:1;transform:translateY(-2px)}
.cb-hero-cta{transition:transform .18s ease-out,background-color .18s ease-out,border-color .18s ease-out,box-shadow .18s ease-out}
.cb-hero-cta:hover{transform:translateY(-2px)}
.cb-hero-cta-solid:hover{box-shadow:0 6px 20px rgba(0,0,0,0.22)}
.cb-hero-cta-ghost:hover{background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.9)}
.cb-hero-cta:active{transform:translateY(0)}
@media (prefers-reduced-motion: reduce){.cb-orb-a,.cb-orb-b{animation:none}.cb-orb-card:hover,.cb-feat-lift:hover,.cb-card-aura:hover,.cb-step-hover:hover,.cb-step-hover:hover .cb-step-num,.cb-hero-cta:hover{transform:none}}
`}</style>
      <div aria-hidden className="cb-orb-a" style={{
        position: 'absolute', left: '80%', top: '-10%', width: 700, height: 700,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.lavender} 0%, ${window.ORB_STOPS.lavender} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(34px)', opacity: 0.72, transform: 'translateX(-50%)', pointerEvents: 'none',
      }} />
      <div aria-hidden className="cb-orb-b" style={{
        position: 'absolute', left: '-8%', top: '52%', width: 620, height: 620,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.mint} 0%, ${window.ORB_STOPS.mint} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(38px)', opacity: 0.5, pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <RelocReel index={clip} />
        <div className="cb-hero-pad" style={{ maxWidth: 920, margin: '0 auto', padding: '140px var(--space-lg) 152px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xl)', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', padding: '6px 14px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.42)', background: 'rgba(255,255,255,0.12)',
            color: '#fff', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.96px', textTransform: 'uppercase', whiteSpace: 'nowrap', ...rise(0),
          }}>Domestic &amp; international</span>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'clamp(42px, 5.8vw, 68px)', lineHeight: 1.04, letterSpacing: '-1.6px', color: '#fff', textWrap: 'balance', maxWidth: '15ch', ...rise(0.08) }}>Move across the country, or the world.</h1>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', maxWidth: 520, textWrap: 'pretty', ...rise(0.16) }}>We handle your sale here while guiding your next move — whether it's the next state over or a new life in the Dominican Republic or Mexico.</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center', ...rise(0.24) }}>
            <a href="index.html#contact" className="cb-hero-cta cb-hero-cta-solid" style={{
              display: 'inline-flex', alignItems: 'center', padding: '14px 26px', borderRadius: 999,
              background: '#fff', color: 'var(--color-ink)', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', fontWeight: 500,
            }}>Book a relocation consult</a>
            <a href="Listings.html" className="cb-hero-cta cb-hero-cta-ghost" style={{
              display: 'inline-flex', alignItems: 'center', padding: '14px 26px', borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.55)', color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', fontWeight: 500,
            }}>Browse listings</a>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 26, display: 'flex', justifyContent: 'center', gap: 8 }}>
          {RELOC_CLIPS.map((src, n) => (
            <button key={src} onClick={() => setClip(n)} aria-label={'Show clip ' + (n + 1)} style={{
              width: n === clip ? 26 : 8, height: 8, borderRadius: 999, border: 0, padding: 0, cursor: 'pointer',
              background: n === clip ? '#fff' : 'rgba(255,255,255,0.42)', transition: 'width .3s ease, background .3s ease',
            }}></button>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-xxl) var(--space-lg) var(--space-section)', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }} className="cb-3up">
        <div style={rise(0.32)}><div className="cb-orb-card">
          <GradientOrbCard variant="sky" title="Dominican Republic" align="left" style={{ minHeight: 180 }}>Beachfront and city homes, residency guidance, and a trusted partner on the ground.</GradientOrbCard>
        </div></div>
        <div style={rise(0.4)}><div className="cb-orb-card">
          <GradientOrbCard variant="peach" title="Mexico" align="left" style={{ minHeight: 180 }}>From Mérida to the coast — we connect you with vetted local agents and handle the sale at home.</GradientOrbCard>
        </div></div>
      </div>
    </section>
  );
}

const Step = ({ n, title, body }) => (
  <div className="cb-step-hover" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
    <span className="cb-step-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, lineHeight: 1, color: 'var(--color-ink)' }}>{n}</span>
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
    <section className="cb-band" style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="sky" x="93%" y="16%" size={680} opacity={0.5} />
      <PageBloom hue="peach" x="5%" y="86%" size={600} opacity={0.44} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <Reveal><SectionHead eyebrow="How relocation works" title="One team, both ends of the move." intro="Most agents hand you off at the city line. We stay with you the whole way." maxWidth={560} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-xxl)' }} className="cb-3up">
          {steps.map((s, i) => <Reveal key={s.n} delay={0.12 + i * 0.12}><Step {...s} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

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

function RelocServices() {
  const items = [
    { eyebrow: 'For sellers', title: 'Sell before you go', body: 'Cash offers and market listings timed to your departure — no carrying two homes, no rushed decisions.' },
    { eyebrow: 'For movers', title: 'A partner on the ground', body: 'Vetted local agents in the Dominican Republic and Mexico, briefed on exactly what you need.' },
    { eyebrow: 'For families', title: 'The whole picture', body: 'Schools, neighborhoods, residency basics, and a steady point of contact through every time zone.' },
  ];
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas)' }}>
      <PageBloom hue="rose" x="8%" y="18%" size={640} opacity={0.48} />
      <PageBloom hue="lavender" x="95%" y="84%" size={600} opacity={0.44} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <Reveal><SectionHead eyebrow="What's included" title="Everything the move needs." maxWidth={560} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.12 + i * 0.12} style={{ display: 'flex' }}>
              <div className="cb-card-aura" style={{ '--cb-aura': window.ORB_STOPS[['sky', 'peach', 'lavender'][i % 3]] }}>
                <FeatureCard eyebrow={it.eyebrow} title={it.title} style={{ background: 'transparent' }}>{it.body}</FeatureCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelocCta() {
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="mint" x="12%" y="22%" size={580} opacity={0.46} />
      <PageBloom hue="sky" x="90%" y="80%" size={560} opacity={0.42} />
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <Eyebrow>Ready when you are</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.12, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Tell us where you're headed.</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>A short consultation is the best place to start — we'll sketch a timeline and the path forward, no obligation.</p>
        <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Book a relocation consult</Button></span>
      </div>
    </section>
  );
}

function RelocationPage() {
  return (
    <React.Fragment>
      <NavBar active="Relocation" />
      <main id="cb-main">
      <RelocHero />
      <RelocSteps />
      <RelocServices />
      <RelocCta />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<RelocationPage />);
