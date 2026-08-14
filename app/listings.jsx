/* Casa Bueno — Listings page. Listings and search are IDX Broker widgets; this
 * file supplies the page frame around them. */

const { Button } = window.ElevenLabsDesignSystem_2f7f30;


/* Live MLS listings, replacing the curated grid that used to sit here. IDX
 * queries the MLS on load, so new listings appear and sold ones drop off with no
 * upkeep. */
/* Reveals its children the first time they scroll into view. Triggers on the
 * first visible pixel because these wrappers are taller than any viewport, and
 * reveals outright where IntersectionObserver is unavailable, so content can
 * never be left hidden. */
function Reveal({ children, style }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    /* The observer only drives the animation — it must never be the only route to
       visible. It can exist, construct fine and still never deliver entries (seen
       in embedded/preview frames), so a rect check runs immediately and a timer
       reveals unconditionally as a last resort. */
    if (el.getBoundingClientRect().top < window.innerHeight) { setShown(true); return; }
    const timer = setTimeout(() => setShown(true), 1200);
    let io;
    if (typeof IntersectionObserver === 'function') {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(timer); setShown(true); io.disconnect(); } });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      io.observe(el);
    }
    return () => { clearTimeout(timer); if (io) io.disconnect(); };
  }, []);
  /* State-driven rather than classList.add: the IDX widgets mounting and resizing
     re-render this subtree, and a hard-coded className would wipe the class. */
  return <div ref={ref} className={'cb-inview' + (shown ? ' is-in' : '')} style={style}>{children}</div>;
}

function ListingsFeed() {
  const stack = { display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' };
  return (
    <section id="homes" className="cb-band" style={{ scrollMarginTop: 88, background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-section)' }}>
        <Reveal style={stack}>
          <SectionHead align="center" eyebrow="On the market" title="Recent Homes for Sale in New Jersey" intro="Live from the MLS, updated continuously." />
          <div className="cb-idx--cards">
            <IdxWidget id="167695" label="Listings" height="auto" />
          </div>
        </Reveal>
        {/* The blooms live inside this wrapper, not the section: the section's
            height is driven by the listings widget and shifts with listing count,
            so percentage offsets against it would not stay behind the map. */}
        <Reveal style={{ ...stack, position: 'relative', isolation: 'isolate' }}>
          <PageBloom hue="rose" x="6%" y="18%" size={620} opacity={0.44} drift />
          <PageBloom hue="mint" x="94%" y="86%" size={560} opacity={0.4} drift="alt" />
          <SectionHead align="center" eyebrow="Search by map" title="Know the neighborhood, not just the house." intro="Pan and zoom to see what's for sale street by street. Draw your own boundary, or start from a town and work outward." />
          <IdxWidget id="4283" kind="map" label="Map search" height={720} />
          {/* Out to IDX's own full-featured pages: every filter the MLS exposes,
              and the full paginated results list. Its own Reveal so it animates
              after the map, on a tighter gap than the section rhythm. */}
          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
            <SectionHead align="center" eyebrow="Go deeper" title="Every filter the MLS offers." intro="Narrow by subdivision, school, acreage and more, or page through the full list of active listings." />
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="cb-cta-aura"><Button href={'https://' + IDX_HOST + '/idx/search/advanced'} variant="primary" size="lg">Advanced search</Button></span>
              <span className="cb-cta-aura"><Button href={'https://' + IDX_HOST + '/idx/results/listings'} variant="outline" size="lg">Browse all MLS listings</Button></span>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

/* Live MLS search. Results open on Vanessa's IDX subdomain, which is what the MLS
 * licenses the display through. */
function ListingsSearch() {
  /* On-load rise rather than a scroll reveal: this is the page hero, so it is
     already in view. Starts hidden only once mounted, so no-JS still shows it. */
  const [up, setUp] = React.useState(false);
  React.useEffect(() => { const r = requestAnimationFrame(() => setUp(true)); return () => cancelAnimationFrame(r); }, []);
  const rise = (d) => ({ opacity: up ? 1 : 0, transform: up ? 'none' : 'translateY(20px)', transition: `opacity .85s ease-out ${d}s, transform .85s cubic-bezier(.22,.61,.36,1) ${d}s` });
  return (
    <section id="search" className="cb-band" style={{ scrollMarginTop: 88, background: 'var(--color-canvas)' }}>
      <PageBloom hue="lavender" x="6%" y="14%" size={620} opacity={0.5} drift />
      <PageBloom hue="sky" x="94%" y="88%" size={560} opacity={0.46} drift="alt" />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '104px var(--space-lg) var(--space-section)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <div style={rise(0.05)}><SectionHead align="center" eyebrow="The listings" title="Search every home on the market." intro="Browse live listings across Montclair, Millburn, the Oranges and beyond — straight from the MLS, updated continuously." /></div>
        <div style={rise(0.22)}><IdxWidget id="4280" legacy label="Quick search" height="auto" /></div>
      </div>
    </section>
  );
}

function ListingsCta() {
  return (
    <section id="property-updates" className="cb-band" style={{ scrollMarginTop: 88, background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="rose" x="12%" y="22%" size={580} opacity={0.46} />
      <PageBloom hue="sky" x="90%" y="80%" size={560} opacity={0.42} />
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)' }}>
      <Reveal style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <Eyebrow>Don't see it yet?</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.12, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Tell us what you're looking for, and we'll find it.</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>Many of our best homes sell before they hit the open market. Sign up for property updates matched to your search.</p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Get property updates</Button></span>
          <span className="cb-cta-aura"><Button href="index.html#contact" variant="outline" size="lg">Talk to an agent</Button></span>
        </div>
      </Reveal>
      </div>
    </section>
  );
}

function ListingsPage() {
  return (
    <React.Fragment>
      <NavBar active="Listings" />
      <main id="cb-main">
      <ListingsSearch />
      <ListingsFeed />
      <ListingsCta />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<ListingsPage />);
