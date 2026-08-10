/* Casa Bueno — About page. Vanessa's story, service focus, and languages.
 * Copy comes from Vanessa directly; keep her wording intact on edits. */

const { NavBar, Footer, Eyebrow, SectionHead } = window;
const { Button } = window.ElevenLabsDesignSystem_2f7f30;

const AB_FOCUS = [
['Selling as-is', 'Cash offers and straightforward sales for homes that need work — no repairs, no staging, no waiting.'],
['First-time buyers', 'Patient guidance through the parts nobody explains: pre-approval, offers, inspections, closing.'],
['Listings', 'Honest pricing and marketing that puts your home in front of the right buyers.'],
['Investment property', 'Numbers-first help evaluating returns, rents, and long-term hold potential.'],
['Multi-family', 'Two-, three-, and four-family homes across New Jersey — for owner-occupants and investors alike.'],
['Se habla español', 'Full service in Spanish, from the first conversation through the closing table.']];

const AB_POINTS = [
['7+ Years', 'Sales/Negotiation Experience'],
['Hundreds', 'Of Clients Helped'],
['New Jersey', 'Serving Buyers, Sellers & Investors'],
['One Goal', 'Your Next Move, Made With Confidence']];

const AB_STORY = [
'Before becoming a Realtor®, I spent seven years in automotive sales, helping hundreds of people make one of the biggest financial decisions of their lives. During that time, I learned that success isn’t about making a sale — it’s about earning trust, listening carefully, and putting people first.',
'Those lessons continue to guide me every day in real estate. I wanted to help people with an even more meaningful milestone: buying and selling their homes.',
'Six years into this work, that’s still the whole job. I serve clients across New Jersey, in English and Spanish, and I answer the phone.'];

function useReveal() {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

function AboutHero() {
  return (
    <section className="cb-legal-hero" style={{ borderBottom: 'none' }}>
      <div className="cb-legal-orb cb-orb-a"></div>
      <div className="cb-legal-orb cb-orb-b"></div>
      <div className="cb-legal-orb cb-orb-c"></div>
      <div className="cb-legal-hero-inner cb-about-hero cb-about-enter">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)', maxWidth: 560 }}>
          <Eyebrow>About</Eyebrow>
          <h1 style={{ margin: 0 }}>Vanessa Bueno</h1>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-strong-size)', lineHeight: 1.6, color: 'var(--color-body-strong)', textWrap: 'pretty' }}>Real estate wasn’t my first career — it was my calling.</p>
          {AB_STORY.map((p, i) => (
            <p key={i} style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.7, color: 'var(--color-body)', textWrap: 'pretty' }}>{p}</p>
          ))}
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-sm)' }}>
            <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Work with Vanessa</Button></span>
            <Button href="Reviews.html" variant="outline" size="lg">Read reviews</Button>
          </div>
        </div>
        <div className="cb-about-portrait">
          <img src="assets/vanessa-bueno-portrait.webp" alt="Vanessa Bueno" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>
    </section>
  );
}

function AboutFocus() {
  const [ref, seen] = useReveal();
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="peach" x="92%" y="14%" size={680} opacity={0.5} />
      <PageBloom hue="mint" x="4%" y="86%" size={600} opacity={0.42} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="What I do" title="Where I can help." maxWidth={560} />
        <div className={'cb-about-grid' + (seen ? ' is-in' : '')} ref={ref}>
          {AB_FOCUS.map(([title, body], i) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 'var(--space-base)', borderTop: '1px solid var(--color-hairline-strong)', transitionDelay: (i * 90) + 'ms' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 'var(--weight-semibold)', color: 'var(--color-ink)' }}>{title}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', lineHeight: 1.65, color: 'var(--color-body)', textWrap: 'pretty' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPoints() {
  const [ref, seen] = useReveal();
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas)', borderTop: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="lavender" x="8%" y="18%" size={640} opacity={0.5} />
      <PageBloom hue="sky" x="94%" y="82%" size={620} opacity={0.44} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="Why Vanessa" title="What you get working with me." align="center" maxWidth={560} />
        <div className={'cb-about-points' + (seen ? ' is-in' : '')} ref={ref}>
          {AB_POINTS.map(([stat, label], i) => (
            <div key={stat} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center', transitionDelay: (i * 110) + 'ms' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 1.05, letterSpacing: '-0.8px', color: 'var(--color-ink)' }}>{stat}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 190, textWrap: 'pretty' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCta() {
  const [ref, seen] = useReveal();
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas)' }}>
      <PageBloom hue="rose" x="88%" y="12%" size={620} opacity={0.44} />
      <PageBloom hue="mint" x="10%" y="90%" size={560} opacity={0.4} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)' }}>
        <div ref={ref} className={'cb-about-cta' + (seen ? ' is-in' : '')} style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xxl)', background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)', padding: 'clamp(40px, 6vw, 72px)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', alignItems: 'flex-start', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          <Eyebrow light>Let’s talk</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-md-size)', lineHeight: 1.15, letterSpacing: '-0.6px', color: 'var(--color-on-dark)', textWrap: 'balance' }}>Tell me what you’re thinking about.</h2>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.6, color: 'var(--color-on-dark-soft)', maxWidth: 440, textWrap: 'pretty' }}>Selling, buying, or just weighing options — a short conversation costs nothing and usually clears things up.</p>
          <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Get in touch</Button></span>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <React.Fragment>
      <NavBar active="About" />
      <main id="cb-main">
        <AboutHero />
        <AboutFocus />
        <AboutPoints />
        <AboutCta />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<AboutPage />);
