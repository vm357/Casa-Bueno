/* Casa Bueno — homepage sections + app assembly. */

const { Button, Badge, FeatureCard, TestimonialCard, GradientOrbCard } = window.ElevenLabsDesignSystem_2f7f30;

/* Bloom — a soft pastel gradient orb used purely as atmosphere behind a band. */
const Bloom = ({ hue = 'mint', x = '85%', y = '10%', size = 620, opacity = 0.7, blur = 40, drift }) => (
  <div aria-hidden className={drift ? 'cb-bloom-' + drift : undefined} style={{
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

/* Atmospheric — centered headline over a slow crossfading reel of property clips. */
const HERO_CLIPS = [
  'uploads/clips-1786061857991-9z7h.mp4',
  'uploads/Video Project 1.mp4',
  'uploads/Video Project 2.mp4',
  'uploads/17224730-hd_1920_1080_30fps.mp4',
];

function HeroReel({ index }) {
  const refs = React.useRef([]);
  const playing = React.useRef(null);

  /* Only the current clip (and the next one, warming) is allowed to download.
   * Playback waits for a decodable frame; pauses are sequenced after the in-flight play.
   * Visitors who ask for reduced motion get a single still frame instead. */
  React.useEffect(() => {
    if (CB_REDUCED_MOTION) {
      cbAttachClip(refs.current[0], HERO_CLIPS[0], 'metadata');
      return;
    }
    const next = (index + 1) % HERO_CLIPS.length;
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.preload = 'auto';
        cbAttachClip(v, HERO_CLIPS[i], 'auto');
        const start = () => {
          v.muted = true;
          if (v.readyState >= 2) { try { v.currentTime = 0; } catch (e) {} }
          const p = v.play();
          if (p && p.then) { playing.current = p.catch(() => {}); }
        };
        if (v.readyState >= 2) start();
        else {
          /* loadeddata alone is unreliable on iOS when the tab was backgrounded
           * during the fetch; canplay covers the case where it never fires. */
          v.addEventListener('loadeddata', start, { once: true });
          v.addEventListener('canplay', start, { once: true });
        }
      } else {
        const stop = () => { try { v.pause(); } catch (e) {} };
        if (playing.current) playing.current.then(stop, stop); else stop();
        if (i === next) cbAttachClip(v, HERO_CLIPS[i], 'auto');
      }
    });
  }, [index]);

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
      {HERO_CLIPS.map((src, i) => (
        <video key={src} ref={el => { refs.current[i] = el; cbPrimeClip(el); }} src={i === 0 ? src : undefined} muted loop playsInline autoPlay={!CB_REDUCED_MOTION} preload={i === 0 ? 'auto' : 'none'} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: i === index ? 1 : 0, transition: 'opacity 1.4s ease',
        }}></video>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12,10,9,0.58) 0%, rgba(12,10,9,0.34) 42%, rgba(12,10,9,0.74) 100%)' }}></div>
    </div>
  );
}

function HeroAtmospheric({ t }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (CB_REDUCED_MOTION) return;
    const id = setInterval(() => setI(v => (v + 1) % HERO_CLIPS.length), 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <HeroReel index={i} />
        <div className="cb-hero-pad" style={{ maxWidth: 920, margin: '0 auto', padding: '136px var(--space-lg) 152px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xl)', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', padding: '6px 14px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.42)', background: 'rgba(255,255,255,0.12)',
            color: '#fff', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.96px', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>New Jersey</span>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
            fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.04, letterSpacing: 'var(--type-display-mega-ls)',
            color: '#fff', textWrap: 'balance', maxWidth: '15ch',
          }}>{t.headline}</h1>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-title-md-size)', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)', maxWidth: 480, textWrap: 'pretty' }}>{t.sub}</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="Listings.html" className="cb-hero-cta cb-hero-cta-solid" style={{
              display: 'inline-flex', alignItems: 'center', padding: '14px 26px', borderRadius: 999,
              background: '#fff', color: 'var(--color-ink)', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', fontWeight: 500,
            }}>Browse listings</a>
            <a href="#contact" className="cb-hero-cta cb-hero-cta-ghost" style={{
              display: 'inline-flex', alignItems: 'center', padding: '14px 26px', borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.55)', color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', fontWeight: 500,
            }}>Get a cash offer</a>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 26, display: 'flex', justifyContent: 'center', gap: 8 }}>
          {HERO_CLIPS.map((src, n) => (
            <button key={src} onClick={() => setI(n)} aria-label={'Show clip ' + (n + 1)} style={{
              width: n === i ? 26 : 8, height: 8, borderRadius: 999, border: 0, padding: 0, cursor: 'pointer',
              background: n === i ? '#fff' : 'rgba(255,255,255,0.42)', transition: 'width .3s ease, background .3s ease',
            }}></button>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-xl) var(--space-lg) var(--space-section)', position: 'relative' }}>
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

/* Counts a leading number up from zero; non-numeric values just render. */
function StatValue({ value, run }) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const [shown, setShown] = React.useState(m ? m[1] + '0' + m[3] : value);
  React.useEffect(() => {
    if (!m || !run) return;
    const target = parseFloat(m[2].replace(/,/g, ''));
    const dec = (m[2].split('.')[1] || '').length;
    const dur = 1100, t0 = performance.now();
    let raf;
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = target * eased;
      setShown(m[1] + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + m[3]);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run]);
  return <React.Fragment>{m ? shown : value}</React.Fragment>;
}

function TrustRow() {
  const stats = [
    { n: '11 days', l: 'Average time to a signed cash offer' },
    { n: 'Millions of $', l: 'In closed sales across New Jersey' },
    { n: 'international', l: 'Relocations handled, door to door' },
    { n: '4.9 / 5', l: 'Average client rating' },
  ];
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(() => typeof document !== 'undefined' && document.hidden);
  React.useEffect(() => {
    if (!ref.current || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return; }
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
      <Bloom hue="peach" x="18%" y="12%" size={600} opacity={0.6} />
      <Bloom hue="lavender" x="82%" y="92%" size={600} opacity={0.6} />
      <div ref={ref} style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-xxl) var(--space-lg)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-xl)' }} className="cb-stat-grid">
        {stats.map((s, i) => (
          <div key={s.n} style={{
            display: 'flex', flexDirection: 'column', gap: 6,
            opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(14px)',
            transition: `opacity .7s ease-out ${i * 0.12}s, transform .7s ease-out ${i * 0.12}s`,
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-md-size)', letterSpacing: '-0.4px', color: 'var(--color-ink)' }}><StatValue value={s.n} run={seen} /></span>
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

/* Reveal — soft fade-and-rise the first time an element scrolls into view. */
function Reveal({ children, delay = 0, y = 16, style = {}, className }) {
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

function Services() {
  const items = [
    { icon: HouseIcon, eyebrow: 'Sell for cash', title: 'Sell your home as-is', body: 'Skip repairs, showings, and delays. Get a competitive cash offer and close on your timeline — exactly as the home stands today.', cta: 'Get a cash offer', href: '#contact' },
    { icon: GlobeIcon, eyebrow: 'Relocation', title: 'Move across the country, or the world', body: 'Out of state or overseas, we handle your sale here while guiding your next move — from the Dominican Republic to Mexico and beyond.', cta: 'Plan a relocation', href: 'Relocation.html' },
    { icon: KeyIcon, eyebrow: 'First home', title: 'Buy your first home with confidence', body: 'We simplify the process, explain every page, and help you make smart decisions that start building long-term wealth.', cta: 'Start the journey', href: '#contact' },
  ];
  return (
    <Band id="services" soft blooms={[{ hue: 'lavender', x: '92%', y: '18%', size: 760, opacity: 0.6 }, { hue: 'mint', x: '4%', y: '88%', size: 640, opacity: 0.6 }]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <Reveal><SectionHead eyebrow="What we do" title="Three ways we open doors." intro="Whether you are selling fast, moving far, or buying your first place, the work is the same: clear guidance and a steady hand." /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.12 + i * 0.12} style={{ display: 'flex' }}>
            <FeatureCard icon={it.icon} eyebrow={it.eyebrow} title={it.title} style={{ gap: 'var(--space-base)' }}>
              <span style={{ display: 'block' }}>{it.body}</span>
              <span style={{ marginTop: 'var(--space-xs)', display: 'inline-block' }}>
                <Button href={it.href} variant="tertiary" style={{ fontWeight: 'var(--weight-medium)' }}>{it.cta} →</Button>
              </span>
            </FeatureCard>
            </Reveal>
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
        <Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
          <SectionHead eyebrow="Featured listings" title="Homes on the market now." intro="Take a look at the hottest listing on the market!" />
          <Button href="Listings.html" variant="outline">View all listings</Button>
        </div>
        </Reveal>
        <IdxWidget id="149786" label="Featured listings slideshow" height="auto" />
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
          <Reveal style={{ position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div><Badge tone="dark" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Cash offer</Badge></div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-xl-size)', lineHeight: 1.08, letterSpacing: 'var(--type-display-xl-ls)', color: 'var(--color-on-dark)', textWrap: 'balance' }}>Sell as-is, for cash, on your timeline.</h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-on-dark-soft)', maxWidth: 420, textWrap: 'pretty' }}>Tell us about your home and receive a competitive, no-obligation offer. No repairs, no staging, no waiting on the market.</p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <span className="cb-cta-aura"><Button href="#contact" variant="primary" size="lg" className="cb-light-pill" style={{ background: 'var(--color-on-dark)', color: 'var(--color-ink)' }}>Request my offer</Button></span>
            </div>
          </div>
          </Reveal>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
            {['Share your address and a few details', 'Receive your cash offer within 48 hours', 'Choose your closing date — we handle the rest'].map((s, i) => (
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

/* ------------------------------------------------------------------ about --- */

function About() {
  return (
    <Band id="about" blooms={[{ hue: 'rose', x: '88%', y: '20%', size: 720, opacity: 0.6, drift: 'fall' }, { hue: 'sky', x: '6%', y: '84%', size: 660, opacity: 0.55, drift: 'rise' }]}>
      <div className="cb-about" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-xxl)', alignItems: 'center' }}>
        <Reveal y={20}>
        <div style={{
          position: 'relative', aspectRatio: '4 / 5', borderRadius: 'var(--radius-xxl)', overflow: 'hidden',
          background: 'var(--color-surface-strong)', border: '1px solid var(--color-hairline)',
        }}>
          <img src="uploads/vanessabueno.png" alt="Casa Bueno agent portrait"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 32%', display: 'block' }} />
        </div>
        </Reveal>
        <Reveal delay={0.16}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <Eyebrow>About Vanessa Bueno</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.15, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Real estate is a relationship, not a transaction.</h2>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 540, textWrap: 'pretty' }}>Casa Bueno was built on a simple belief: that buying and selling a home should feel calm, clear, and a little bit personal. We move quickly when speed matters and slowly when care matters — and we treat every client like family across town or across borders.</p>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 540, textWrap: 'pretty' }}>From as-is cash sales to international relocations and first-home guidance, the throughline is trust — earned one honest conversation at a time.</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
            <span className="cb-cta-aura"><Button href="#contact" variant="primary">Work with us</Button></span>
            <Button href="About.html" variant="outline">More about Vanessa</Button>
          </div>
        </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* ----------------------------------------------------------- testimonials --- */

function Testimonials() {
  return (
    <Band id="reviews" soft blooms={[{ hue: 'sky', x: '10%', y: '16%', size: 700, opacity: 0.6 }, { hue: 'peach', x: '90%', y: '84%', size: 700, opacity: 0.6 }]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <Reveal><SectionHead eyebrow="Client stories" title="Quietly, the work speaks." align="center" maxWidth={560} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
          {window.CB_TESTIMONIALS.map((q, i) => (
            <Reveal key={q.name} delay={0.12 + i * 0.12} style={{ display: 'flex' }}>
              <div className="cb-quote-lift" style={{ display: 'flex', width: '100%', borderRadius: 'var(--radius-xl)', transition: 'transform .22s ease-out, box-shadow .22s ease-out' }}>
                <TestimonialCard {...q} />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="cb-cta-aura"><Button href="Reviews.html" variant="outline" size="lg">Read all reviews</Button></span>
        </Reveal>
      </div>
    </Band>
  );
}

/* ---------------------------------------------------------------- contact --- */

/* Follow Up Boss lead capture.
 * The FUB API key must NEVER live in client-side code, so this posts a FUB-shaped
 * payload to a relay you own (a serverless function, Zapier/Make webhook, or
 * Cloudflare Pages Function at functions/api/lead.js, which forwards it to
 * POST https://api.followupboss.com/v1/events using the FUB_API_KEY environment
 * variable. The key never reaches the browser. Until that variable is set in the
 * Cloudflare dashboard the endpoint accepts submissions and logs them. */
const CB_LEAD_ENDPOINT = '/api/lead';
const CB_CONSENT_TEXT = 'I agree to be contacted by Casa Bueno via call, email, and text for real estate services. To opt out, you can reply \u2018stop\u2019 at any time or reply \u2018help\u2019 for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.';

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  /* Spam defence, no third-party captcha:
   *  1. a honeypot field only a bot would fill in
   *  2. a minimum time on the form — bots submit near-instantly
   * A caught submission shows the normal thank-you and quietly goes nowhere,
   * so the bot gets no signal that it was rejected. */
  const openedAt = React.useRef(Date.now());

  async function submitLead(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    if (String(f.get('website') || '').trim() !== '' || Date.now() - openedAt.current < 3000) {
      setSent(true);
      return;
    }
    const payload = {
      source: 'Casa Bueno Website',
      system: 'Casa Bueno Website',
      type: String(f.get('interest') || 'General Inquiry'),
      message: String(f.get('message') || ''),
      consent: {
        given: true,
        text: CB_CONSENT_TEXT,
        timestamp: new Date().toISOString(),
      },
      person: {
        firstName: String(f.get('firstName') || ''),
        lastName: String(f.get('lastName') || ''),
        emails: [{ value: String(f.get('email') || ''), type: 'home' }],
        phones: f.get('phone') ? [{ value: String(f.get('phone')), type: 'mobile' }] : [],
        tags: ['Website Lead'],
        sourceUrl: location.href,
      },
    };
    if (window.CB_TRACK) window.CB_TRACK('lead_submitted', { form: 'home_contact' });
    if (!CB_LEAD_ENDPOINT) { setSent(true); return; }
    setBusy(true); setErr('');
    try {
      const res = await fetch(CB_LEAD_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(res.status);
      setSent(true);
    } catch (e2) {
      setErr('Something went wrong. Please call (732) 631-3267 or email vanessasellsnj1@gmail.com.');
    } finally { setBusy(false); }
  }
  return (
    <Band id="contact" blooms={[{ hue: 'mint', x: '4%', y: '78%', size: 740, opacity: 0.6, drift: 'rise' }, { hue: 'lavender', x: '94%', y: '10%', size: 680, opacity: 0.6, drift: 'fall' }]}>
      <style>{`
@keyframes cbBloomRise{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-44%,-62%) scale(1.12)}}
@keyframes cbBloomFall{0%,100%{transform:translate(-50%,-50%) scale(1.06)}50%{transform:translate(-58%,-36%) scale(.94)}}
.cb-bloom-rise{animation:cbBloomRise 26s ease-in-out infinite}
.cb-bloom-fall{animation:cbBloomFall 26s ease-in-out infinite;animation-delay:-13s}
@media (prefers-reduced-motion: reduce){.cb-bloom-rise,.cb-bloom-fall{animation:none}}
`}</style>
      <div className="cb-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
        <Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <SectionHead eyebrow="Get in touch" title="Let's talk about your next move." intro="Selling, buying, or relocating — send a note and we'll reply within one business day." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)', marginTop: 'var(--space-sm)' }}>
            {[['Email', 'vanessasellsnj1@gmail.com'], ['Phone', '(732) 631-3267'], ['Office', '151 Forest Street, Unit H, Montclair, NJ 07042']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 'var(--space-base)', borderBottom: '1px solid var(--color-hairline)', paddingBottom: 'var(--space-base)' }}>
                <span style={{ width: 80, fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-body-strong)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
        <Reveal delay={0.18}>
        <div style={{ background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-hairline)', padding: 'var(--space-xl)' }}>
          {sent ? (
            <div role="status" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', minHeight: 380, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Badge tone="success">Sent</Badge>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--type-display-md-size)', letterSpacing: '-0.3px', color: 'var(--color-ink)' }}>Thank you — we'll be in touch.</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-body)' }}>Expect a reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submitLead} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
              <div className="cb-hp" aria-hidden="true">
                <label htmlFor="cb-website">Website</label>
                <input id="cb-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="cb-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-base)' }}>
                <Field label="First name"><CBInput required name="firstName" autoComplete="given-name" placeholder="Jane" /></Field>
                <Field label="Last name"><CBInput required name="lastName" autoComplete="family-name" placeholder="Realtor" /></Field>
              </div>
              <Field label="Email"><CBInput required name="email" type="email" autoComplete="email" placeholder="you@email.com" /></Field>
              <Field label="Phone"><CBInput required name="phone" type="tel" autoComplete="tel" placeholder="(732) 631-3267" /></Field>
              <Field label="I'm interested in">
                <CBSelect name="interest" options={[{ value: 'Seller Inquiry', label: 'Selling for cash' }, { value: 'Buyer Inquiry', label: 'Buying a home' }, { value: 'Relocation Inquiry', label: 'Relocating' }, { value: 'First-Time Buyer Inquiry', label: 'First-time buying' }]} defaultValue="Seller Inquiry" />
              </Field>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Message</span>
                <textarea rows={4} name="message" placeholder="Tell us a little about your home or your plans." style={{ ...window.cbTextareaStyle }} />
              </label>
              {err ? <span role="alert" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-body-strong)' }}>{err}</span> : null}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 'var(--space-xs)', cursor: 'pointer', padding: '6px 0' }}>
                <input type="checkbox" name="consent" required checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ width: 20, height: 20, marginTop: 1, flexShrink: 0, accentColor: 'var(--color-ink)', cursor: 'pointer' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', lineHeight: 1.55, color: 'var(--color-body)' }}>{CB_CONSENT_TEXT}{' '}<a href="Terms-Conditions.html" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textUnderlineOffset: 2 }}>Privacy Policy & Terms and Conditions</a>.</span>
              </label>
              <span className="cb-cta-aura" style={{ width: '100%', marginTop: 'var(--space-xs)' }}><Button type="submit" variant="primary" size="lg" disabled={busy || !consent} style={{ width: '100%' }}>{busy ? 'Sending\u2026' : 'Send message'}</Button></span>
            </form>
          )}
        </div>
        </Reveal>
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

/* Hero settings, locked in from the design phase. These were live controls in a
 * tweaks panel while the layout was being decided; the panel shipped a floating
 * UI to every visitor, so it has been removed and the chosen values frozen here.
 * Layout options were editorial / atmospheric / minimal — see git history. */
const HERO = {
  hero: 'atmospheric',
  orb: 'mint',
  headline: 'Find the home that feels like yours.',
  sub: 'Casa Bueno helps you sell for cash, relocate near or far, and buy with confidence — across New Jersey and beyond.',
};

function App() {
  const t = HERO;
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
      <main id="cb-main">
      <Hero t={t} />
      <TrustRow />
      <Services />
      <Featured />
      <CashOffer t={t} />
      <About />
      <Testimonials />
      <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<App />);
