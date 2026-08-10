/* Casa Bueno — Reviews page. Shows every client story and lets visitors add one.
 * Submitted reviews are held in localStorage (front-end only) and flagged pending
 * until Vanessa approves them, and posted to the Cloudflare Pages Function at
 * functions/api/review.js so Vanessa receives a copy. */

const { Button, Badge, TestimonialCard } = window.ElevenLabsDesignSystem_2f7f30;
const { NavBar, Footer, SectionHead, Field, CBInput, CBSelect, ORB_STOPS } = window;

const CB_REVIEW_ENDPOINT = '/api/review';
const CB_REVIEW_KEY = 'cb-reviews-v1';

const cbTextarea = {
  fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5,
  color: 'var(--color-ink)', background: 'var(--color-surface-card)', padding: '12px 14px',
  width: '100%', boxSizing: 'border-box', borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-hairline-strong)', outline: 'none', resize: 'vertical',
};

/* The remaining Zillow reviews, transcribed word for word. The 1-star review on the
 * Zillow profile is intentionally not shown here. */
const CB_ALL_REVIEWS = [
  ...window.CB_TESTIMONIALS.map(t => ({ ...t, rating: 5 })),
  { quote: 'My experience working with Vanessa was absolutely amazing. I can’t say enough great things about her. She was an absolute angel and very knowledgeable. I had worked with other agents years ago and gave up hope and had really given up on my dream to own a house until I met Vanessa. She just made this process easy for me she literally walked me through the process. My family and I will forever be grateful for her help and for making our dream come true. Thank you Vanessa Bueno!', name: 'Cristal Y.', role: 'Bought a single family home · Willingboro, NJ', initials: 'CY', rating: 5 },
  { quote: 'Vanessa is an amazing Realtor and I’m happy that I was able to find an amazing home with her help! She was on point with everything from the start and she was eager to make us happy and find a home within our budget. Thank you one million times Vanessa more blessing towards you!!!', name: 'Zillow reviewer', role: 'Bought a single family home · Irvington Twp., NJ', initials: 'ZR', rating: 5 },
  { quote: 'I highly recommend Vanessa Bueno to anyone looking to buy a property. Vanessa’s knowledge of the local housing market, commitment to understanding my specific needs, remaining between my budget and even having negotiating skills, all while making time to address any questions and concerns after hours were beyond. Midway through my journey in closing, we encountered unexpected hurdles that could have easily discouraged me. However, Vanessa Bueno continued to reassure me with her optimism and proactive approach. She worked tirelessly to find solutions and keep my spirits high, demonstrating true professionalism and empathy. Her unwavering positivity and support were invaluable throughout the entire process. She guided me through each step of the process with patience and clarity. Thanks to Vanessa Bueno’s dedication and expertise, I am now a proud first-time homeowner.', name: 'Maria T.', role: 'Bought a multiple occupancy home · Newark, NJ', initials: 'MT', rating: 5 },
  { quote: 'Thanks to Vanessa I’m in the right way to become a real estate investor, this is my first step and she was there to help me to go through in every single step with the paper work and answering all the questions, if she did not know the answers, she was ready to find the answers all the time, keep it up, thanks so much.', name: 'Zillow reviewer', role: 'Bought a multiple occupancy home · Newark, NJ', initials: 'ZR', rating: 5 },
  { quote: 'Vanessa and her team did an amazing job with helping & guiding us. She is patient she listens and she helps I couldn’t have done it without her and her team. I will refer everyone I know that is interested buying a house to Vanessa.', name: 'Luzaida V.', role: 'Bought a single family home · Irvington Twp., NJ', initials: 'LV', rating: 5 },
  { quote: 'Vanessa was very patient and knowledgeable. She helped us find a perfect home. My husband have very specific requests and Vanessa was always working hard to only present us with viable homes', name: 'Nancy Z.', role: 'Bought a single family home · Toms River, NJ', initials: 'NZ', rating: 5 },
  { quote: 'Vanessa was amazing, she helped us from beginning to end. Was always available to answer and will make the process super smooth. I’m looking forward to working with her again', name: 'Samuel F.', role: 'Bought a multiple occupancy home · Newark, NJ', initials: 'SF', rating: 5 },
  { quote: 'I can’t express enough how fortunate I was to have Vanessa Bueno as my realtor during my recent home purchase in Woodbridge, New Jersey. Vanessa went above and beyond to ensure that I found the perfect home. Her professionalism, knowledge, and attention to detail were outstanding. Vanessa made the entire process stress-free and enjoyable. She was always available to answer my questions and provide guidance, making me feel like a top priority. Thanks to Vanessa, I found my dream home. I wholeheartedly recommend her to anyone looking for a dedicated and highly skilled realtor. Vanessa Bueno is simply the best in the business!', name: 'Zillow reviewer', role: 'Bought a single family home · Woodbridge, NJ', initials: 'ZR', rating: 5 },
  { quote: 'As a first time home purchaser, there were soooo many things about this process that I knew nothing about and Vanessa did well to educate me! I really appreciated her always being available to respond to questions I would have, working with me throughout to strategize on making the best purchase, guiding from start to finish and most importantly saving me money! Vanessa is elite at what she does! Thanks again Vanessa!', name: 'Kyle A.', role: 'Bought a multiple occupancy home · Newark, NJ', initials: 'KA', rating: 5 },
  { quote: 'Vanessa Bueno was truly exceptional. She was recommended/assigned following a home search application I filled out online. I was impressed with her level of knowledge and the amount of patience she had with me. It was a no-brainer for me to work with Vanessa since I had set goals and I’m so thankful I did. Vanessa was ALWAYS available to tour homes. Her responsiveness was incredible even when I got frustrated with the reality of the market. Vanessa worked with my family to make our desires a reality. She is also very well-versed in dealing with other real estate agents and lending institutions. When there were disagreements about certain verbiage in documents, Vanessa was a call/text away, she was patient and worked through some tough situations without breaking a sweat. Her cool, calm mindset kept my anxiety low and gave me the confidence they would get the job done – and they did! Her promptness, in-depth knowledge of the market, strategic mindset, kindness, and good energy made a potentially chaotic purchase process simple. I’ve already recommended her to friends. I am looking forward to a long and prosperous business with Vanessa Bueno in the near future.', name: 'Zillow reviewer', role: 'Bought a single family home · Mercerville, Hamilton, NJ', initials: 'ZR', rating: 5 },
];

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

function ReviewsHero({ count, avg }) {
  const [up, setUp] = React.useState(() => typeof document !== 'undefined' && document.hidden);
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setUp(true));
    const t = setTimeout(() => setUp(true), 120);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, []);
  const rise = (d) => ({
    opacity: up ? 1 : 0, transform: up ? 'none' : 'translateY(18px)',
    transition: `opacity .8s ease-out ${d}s, transform .8s ease-out ${d}s`,
  });
  return (
    <section style={{ position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden', borderBottom: '1px solid var(--color-hairline)' }}>
      <style>{`
@keyframes cbRvRise{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.58}33%{transform:translate3d(-46px,30px,0) scale(1.14);opacity:.88}66%{transform:translate3d(22px,44px,0) scale(1.02);opacity:.7}}
@keyframes cbRvFall{0%,100%{transform:translate3d(0,0,0) scale(1.08);opacity:.36}40%{transform:translate3d(52px,-30px,0) scale(.92);opacity:.64}72%{transform:translate3d(-20px,-14px,0) scale(1.05);opacity:.48}}
@keyframes cbRvOrbC{0%,100%{transform:translate3d(0,0,0) scale(.98);opacity:.3}50%{transform:translate3d(-34px,-26px,0) scale(1.16);opacity:.58}}
.cb-rv-orb-a{animation:cbRvRise 28s ease-in-out infinite;will-change:transform,opacity}
.cb-rv-orb-b{animation:cbRvFall 34s ease-in-out infinite;animation-delay:-12s;will-change:transform,opacity}
.cb-rv-orb-c{animation:cbRvOrbC 40s ease-in-out infinite;animation-delay:-6s;will-change:transform,opacity}
.cb-quote-lift{transition:transform .22s ease-out,box-shadow .22s ease-out;--cb-aura:${window.ORB_STOPS.mint}}
.cb-quote-lift::before{content:'';position:absolute;inset:-18px;border-radius:calc(var(--radius-xl) + 18px);pointer-events:none;z-index:0;opacity:0;transform:scale(.94);transition:opacity .35s ease-out,transform .35s ease-out;background:radial-gradient(60% 60% at 50% 55%,var(--cb-aura) 0%,rgba(245,245,245,0) 72%);filter:blur(16px)}
.cb-quote-lift:hover::before{opacity:.75;transform:scale(1)}
.cb-quote-lift > *{position:relative;z-index:1}
.cb-quote-lift:hover{transform:translateY(-4px);box-shadow:var(--shadow-soft)}
.cb-quote-lift > figure{flex:1}
.cb-quote-lift > *:first-child{flex:1}
.cb-rv-card{display:flex;flex-direction:column;width:100%;background:var(--color-surface-card);border:1px solid var(--color-hairline);border-radius:var(--radius-xl);overflow:hidden}
.cb-rv-card > figure{border:0 !important;border-radius:0 !important;background:transparent !important;flex:1}
.cb-star{cursor:pointer;background:none;border:0;padding:11px 8px;margin:-11px -4px;display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;color:var(--color-hairline-strong);transition:color .15s ease-out,transform .15s ease-out}
.cb-star[data-on="1"]{color:var(--color-ink)}
.cb-star:hover{transform:translateY(-1px)}
.cb-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:var(--space-lg);border:1px dashed var(--color-hairline-strong);border-radius:var(--radius-md);background:var(--color-canvas-soft);cursor:pointer;transition:border-color .2s ease-out,background .2s ease-out}
.cb-drop:hover{border-color:var(--color-ink);background:var(--color-surface-card)}
.cb-thumb{position:relative;width:72px;height:72px;border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--color-hairline)}
.cb-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.cb-thumb button{position:absolute;top:3px;right:3px;width:22px;height:22px;border:0;border-radius:999px;background:rgba(12,10,9,.72);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.cb-rv-photos{display:flex;gap:6px;margin-top:var(--space-sm)}
.cb-rv-photos img{width:56px;height:56px;object-fit:cover;border-radius:var(--radius-md);border:1px solid var(--color-hairline);display:block}
@media (prefers-reduced-motion: reduce){.cb-rv-orb-a,.cb-rv-orb-b,.cb-rv-orb-c{animation:none}.cb-quote-lift:hover,.cb-star:hover{transform:none}.cb-quote-lift::before{transition:none}}
`}</style>
      <div aria-hidden className="cb-rv-orb-a" style={{
        position: 'absolute', right: '-4%', top: '-46%', width: 640, height: 640,
        background: `radial-gradient(circle at center, ${ORB_STOPS.rose} 0%, ${ORB_STOPS.rose} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(30px)', opacity: 0.63, pointerEvents: 'none',
      }} />
      <div aria-hidden className="cb-rv-orb-b" style={{
        position: 'absolute', left: '-8%', bottom: '-58%', width: 560, height: 560,
        background: `radial-gradient(circle at center, ${ORB_STOPS.sky} 0%, ${ORB_STOPS.sky} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(34px)', opacity: 0.42, pointerEvents: 'none',
      }} />
      <div aria-hidden className="cb-rv-orb-c" style={{
        position: 'absolute', left: '38%', top: '-30%', width: 480, height: 480,
        background: `radial-gradient(circle at center, ${ORB_STOPS.peach} 0%, ${ORB_STOPS.peach} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(40px)', opacity: 0.34, pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '88px var(--space-lg) var(--space-xxl)', position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', alignItems: 'center', textAlign: 'center' }}>
        <div style={rise(0)}><SectionHead eyebrow="Client stories" title="What it's like to work with us." intro="Every review below was left by a client Vanessa represented across New Jersey." align="center" maxWidth={620} /></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, ...rise(0.12) }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', letterSpacing: '-1px', color: 'var(--color-ink)' }}>{avg}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-body)' }}>average across the {count} reviews shown here</span>
          </div>
          <a href="https://www.zillow.com/profile/vanessabuenoo#reviews" target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-muted)', textDecoration: 'underline', textUnderlineOffset: 2 }}>See all reviews on Zillow</a>
        </div>
      </div>
    </section>
  );
}

function ReviewGrid({ all }) {
  /* Order by quote length so each row of the 3-up grid holds similar-height cards
   * and the long reviews sit beside each other instead of stranding short ones. */
  const ordered = React.useMemo(() => {
    const pending = all.filter(r => r.pending);
    const rest = all.filter(r => !r.pending).slice().sort((a, b) => a.quote.length - b.quote.length);
    return [...pending, ...rest];
  }, [all]);
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas-soft)' }}>
      <PageBloom hue="peach" x="94%" y="10%" size={700} opacity={0.5} />
      <PageBloom hue="mint" x="4%" y="44%" size={640} opacity={0.42} />
      <PageBloom hue="lavender" x="88%" y="86%" size={620} opacity={0.44} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)', alignItems: 'start' }} className="cb-3up">
        {ordered.map((q, i) => {
          const { rating, pending, photos, ...card } = q;
          return (
          <Reveal key={q.name + i} delay={0.06 * (i % 3)} style={{ display: 'flex' }}>
            <div className="cb-quote-lift" style={{ display: 'flex', width: '100%', borderRadius: 'var(--radius-xl)', position: 'relative', '--cb-aura': window.ORB_STOPS[window.CB_ORB_CYCLE[i % window.CB_ORB_CYCLE.length]] }}>
              {photos && photos.length ? (
                <div className="cb-rv-card">
                  <TestimonialCard {...card} />
                  <div className="cb-rv-photos" style={{ padding: '0 var(--space-xl) var(--space-xl)' }}>
                    {photos.map((src, n) => <img key={n} src={src} alt="" />)}
                  </div>
                </div>
              ) : (
                <TestimonialCard {...card} />
              )}
              {pending ? (
                <span style={{ position: 'absolute', top: 'var(--space-base)', right: 'var(--space-base)' }}><Badge>Pending</Badge></span>
              ) : null}
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Stars({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 2 }} role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map(n => (
        <button key={n} type="button" className="cb-star" data-on={n <= value ? '1' : '0'}
          aria-label={n + ' star' + (n > 1 ? 's' : '')} onClick={() => onChange(n)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill={n <= value ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8z" /></svg>
        </button>
      ))}
    </div>
  );
}

/* Downscale to a long edge of 900px so photos survive localStorage. */
function shrink(file, max = 900) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL('image/jpeg', 0.72));
      };
      img.onerror = reject;
      img.src = fr.result;
    };
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });
}

function PhotoUpload({ photos, setPhotos }) {
  const ref = React.useRef(null);
  async function pick(e) {
    const files = Array.from(e.target.files || []).slice(0, 3 - photos.length);
    const next = [];
    for (const f of files) { try { next.push(await shrink(f)); } catch (e2) {} }
    setPhotos([...photos, ...next].slice(0, 3));
    e.target.value = '';
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Photos <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>(optional, up to 3)</span></span>
      {photos.length < 3 ? (
        <div className="cb-drop" role="button" tabIndex={0} onClick={() => ref.current.click()}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ref.current.click(); } }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M21 16l-5-5-7 7" /></svg>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-body)' }}>Add a photo of the home</span>
        </div>
      ) : null}
      <input ref={ref} type="file" accept="image/*" multiple onChange={pick} style={{ display: 'none' }} />
      {photos.length ? (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {photos.map((src, i) => (
            <div key={i} className="cb-thumb">
              <img src={src} alt="" />
              <button type="button" aria-label="Remove photo" onClick={() => setPhotos(photos.filter((_, n) => n !== i))}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function AddReview({ onAdd }) {
  const [sent, setSent] = React.useState(false);
  const [rating, setRating] = React.useState(5);
  const [photos, setPhotos] = React.useState([]);
  const [busy, setBusy] = React.useState(false);
  /* Same honeypot + timing trap as the lead form. */
  const openedAt = React.useRef(Date.now());

  async function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    if (String(f.get('website') || '').trim() !== '' || Date.now() - openedAt.current < 3000) {
      setSent(true);
      return;
    }
    const name = String(f.get('name') || '').trim();
    const review = {
      quote: String(f.get('quote') || '').trim(),
      name,
      role: String(f.get('role') || 'Client'),
      initials: name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || 'CB',
      rating, photos, pending: true,
    };
    if (CB_REVIEW_ENDPOINT) {
      setBusy(true);
      try { await fetch(CB_REVIEW_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(review) }); } catch (e2) {}
      setBusy(false);
    }
    onAdd(review);
    setSent(true);
  }

  return (
    <section id="add-review" style={{ scrollMarginTop: 88, position: 'relative', background: 'var(--color-canvas)', overflow: 'hidden', borderTop: '1px solid var(--color-hairline)' }}>
      <div aria-hidden className="cb-rv-orb-b cb-orb-drift-a" style={{
        position: 'absolute', right: '-6%', top: '10%', width: 560, height: 560,
        background: `radial-gradient(circle at center, ${ORB_STOPS.lavender} 0%, ${ORB_STOPS.lavender} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(34px)', opacity: 0.42, pointerEvents: 'none',
      }} />
      <div aria-hidden className="cb-orb-drift-b" style={{
        position: 'absolute', left: '-10%', bottom: '4%', width: 460, height: 460,
        background: `radial-gradient(circle at center, ${ORB_STOPS.peach} 0%, ${ORB_STOPS.peach} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(38px)', opacity: 0.36, pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <Reveal><SectionHead eyebrow="Add your review" title="Worked with us? Tell the next family." intro="Reviews are read before they appear on the site." align="center" maxWidth={520} /></Reveal>
        <Reveal delay={0.14}>
          <div style={{ background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-hairline)', padding: 'var(--space-xl)' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start', minHeight: 260, justifyContent: 'center' }}>
                <Badge tone="success">Received</Badge>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--type-display-md-size)', letterSpacing: '-0.3px', color: 'var(--color-ink)' }}>Thank you for writing this.</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-body)' }}>Your review is marked pending and will appear once it has been read.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)' }}>
                <div className="cb-hp" aria-hidden="true">
                  <label htmlFor="cb-rv-website">Website</label>
                  <input id="cb-rv-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Rating</span>
                  <Stars value={rating} onChange={setRating} />
                </label>
                <Field label="Your name"><CBInput required name="name" placeholder="Jane Realtor" /></Field>
                <Field label="What we worked on">
                  <CBSelect name="role" defaultValue="Sold in New Jersey" options={[
                    { value: 'Sold in New Jersey', label: 'Selling a home' },
                    { value: 'Cash offer · New Jersey', label: 'Cash offer' },
                    { value: 'First home · New Jersey', label: 'Buying a first home' },
                    { value: 'Relocated', label: 'Relocation' },
                  ]} />
                </Field>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)', fontWeight: 600, letterSpacing: 'var(--type-caption-up-ls)', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Your review</span>
                  <textarea required rows={5} name="quote" placeholder="Tell us how it went." style={cbTextarea} />
                </label>
                <PhotoUpload photos={photos} setPhotos={setPhotos} />
                <span className="cb-cta-aura" style={{ width: '100%', marginTop: 'var(--space-xs)' }}>
                  <Button type="submit" variant="primary" size="lg" disabled={busy} style={{ width: '100%' }}>{busy ? 'Sending…' : 'Submit review'}</Button>
                </span>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewsApp() {
  const [extra, setExtra] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem(CB_REVIEW_KEY) || '[]'); } catch (e) { return []; }
  });
  const add = (r) => {
    const next = [r, ...extra];
    setExtra(next);
    try { localStorage.setItem(CB_REVIEW_KEY, JSON.stringify(next)); } catch (e) {}
  };
  const all = [...extra, ...CB_ALL_REVIEWS];
  const avg = (all.reduce((s, r) => s + (r.rating || 5), 0) / all.length).toFixed(1);
  return (
    <React.Fragment>
      <NavBar active="Reviews" />
      <main id="cb-main">
      <ReviewsHero count={all.length} avg={avg} />
      <ReviewGrid all={all} />
      <AddReview onAdd={add} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<ReviewsApp />);
