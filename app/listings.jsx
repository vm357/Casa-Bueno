/* Casa Bueno — Listings page. Reuses shared NavBar / SearchBar / ListingCard / Footer. */

const { Button, Badge } = window.ElevenLabsDesignSystem_2f7f30;

function ListingsHeader({ onSearch }) {
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
@keyframes cbPulseSky{0%,100%{transform:translate(0,0) scale(1);opacity:.6}50%{transform:translate(-46px,34px) scale(1.12);opacity:.9}}
@keyframes cbPulseMint{0%,100%{transform:translate(0,0) scale(1.08);opacity:.36}50%{transform:translate(52px,-30px) scale(.94);opacity:.62}}
.cb-ls-orb-a{animation:cbPulseSky 24s ease-in-out infinite}
.cb-ls-orb-b{animation:cbPulseMint 24s ease-in-out infinite;animation-delay:-12s}
@media (prefers-reduced-motion: reduce){.cb-ls-orb-a,.cb-ls-orb-b{animation:none}}
`}</style>
      <div aria-hidden className="cb-ls-orb-a" style={{
        position: 'absolute', right: '-6%', top: '-40%', width: 640, height: 640,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.sky} 0%, ${window.ORB_STOPS.sky} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(30px)', opacity: 0.68, pointerEvents: 'none',
      }} />
      <div aria-hidden className="cb-ls-orb-b" style={{
        position: 'absolute', left: '-10%', bottom: '-55%', width: 560, height: 560,
        background: `radial-gradient(circle at center, ${window.ORB_STOPS.mint} 0%, ${window.ORB_STOPS.mint} 22%, rgba(245,245,245,0) 72%)`,
        filter: 'blur(34px)', opacity: 0.42, pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '88px var(--space-lg) var(--space-xxl)', position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <div style={rise(0)}><SectionHead eyebrow="The listings" title="Homes across New Jersey." intro="Browse what's on the market now across Montclair, Millburn, the Oranges and beyond. New listings added every week." maxWidth={620} /></div>
        <div style={rise(0.14)}><SearchBar onSearch={onSearch} /></div>
      </div>
    </section>
  );
}

function FilterRow({ count, sort, setSort, active, setActive }) {
  const chips = ['All homes', 'Active', 'Coming soon', 'Open house', 'Under $1M'];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
        {chips.map((c) => {
          const on = c === active;
          return (
            <button key={c} onClick={() => setActive(c)} style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', fontWeight: 'var(--weight-medium)',
              cursor: 'pointer', padding: '8px 16px', borderRadius: 'var(--radius-pill)',
              border: `1px solid ${on ? 'var(--color-ink)' : 'var(--color-hairline-strong)'}`,
              background: on ? 'var(--color-ink)' : 'transparent',
              color: on ? 'var(--color-on-primary)' : 'var(--color-body)',
              transition: 'all 150ms ease',
            }}>{c}</button>
          );
        })}
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-muted)' }}>{count} homes ·</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-muted)' }}>Sort</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-ink)',
          background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-hairline-strong)',
          padding: '4px 2px', cursor: 'pointer', outline: 'none',
        }}>
          <option value="featured">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </label>
    </div>
  );
}

const PER_PAGE = 25;

function Pagination({ page, total, onGo }) {
  // condensed window: 1 … (p-1) p (p+1) … total
  const pages = [];
  const push = (n) => { if (!pages.includes(n) && n >= 1 && n <= total) pages.push(n); };
  push(1); push(2);
  for (let n = page - 1; n <= page + 1; n++) push(n);
  push(total - 1); push(total);
  pages.sort((a, b) => a - b);
  const withGaps = [];
  pages.forEach((n, i) => {
    if (i > 0 && n - pages[i - 1] > 1) withGaps.push('gap-' + n);
    withGaps.push(n);
  });
  const navBtn = (label, to, disabled, key) => (
    <button key={key} onClick={() => !disabled && onGo(to)} disabled={disabled} aria-label={key} style={{
      fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', fontWeight: 'var(--weight-medium)',
      cursor: disabled ? 'default' : 'pointer', height: 40, padding: '0 14px', borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--color-hairline-strong)', background: 'transparent',
      color: disabled ? 'var(--color-hairline-strong)' : 'var(--color-body)', transition: 'all 150ms ease',
    }}>{label}</button>
  );
  return (
    <nav aria-label="Listings pages" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
      {navBtn('‹ Prev', page - 1, page <= 1, 'Previous page')}
      {withGaps.map((n) => typeof n === 'string' ? (
        <span key={n} style={{ width: 40, textAlign: 'center', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)' }}>…</span>
      ) : (
        <button key={n} onClick={() => onGo(n)} aria-current={n === page ? 'page' : undefined} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', fontWeight: 'var(--weight-medium)',
          cursor: 'pointer', minWidth: 40, height: 40, padding: '0 6px', borderRadius: 'var(--radius-pill)',
          border: `1px solid ${n === page ? 'var(--color-ink)' : 'var(--color-hairline-strong)'}`,
          background: n === page ? 'var(--color-ink)' : 'transparent',
          color: n === page ? 'var(--color-on-primary)' : 'var(--color-body)', transition: 'all 150ms ease',
        }}>{n}</button>
      ))}
      {navBtn('Next ›', page + 1, page >= total, 'Next page')}
    </nav>
  );
}

function ListingsGrid({ search }) {
  const [sort, setSort] = React.useState('featured');
  const [active, setActive] = React.useState(() => {
    const h = (typeof location !== 'undefined' ? location.hash : '').replace('#', '');
    return h === 'open-house' ? 'Open house' : 'All homes';
  });
  const [page, setPage] = React.useState(1);
  const topRef = React.useRef(null);
  const num = (p) => Number(p.replace(/[^0-9]/g, ''));
  const items = React.useMemo(() => {
    let arr = [...window.CB_LISTINGS];
    // free search from the search bar
    if (search) {
      if (search.loc) {
        const q = search.loc.toLowerCase();
        arr = arr.filter((d) => `${d.address} ${d.city}`.toLowerCase().includes(q));
      }
      if (search.min) arr = arr.filter((d) => num(d.price) >= search.min);
      if (search.max !== Infinity) arr = arr.filter((d) => num(d.price) <= search.max);
      if (search.beds) arr = arr.filter((d) => d.beds >= search.beds);
      if (search.baths) arr = arr.filter((d) => parseFloat(d.baths) >= search.baths);
    }
    // quick chips
    if (active === 'Active') arr = arr.filter((d) => d.status === 'Active');
    if (active === 'Coming soon') arr = arr.filter((d) => d.status === 'Coming soon');
    if (active === 'Open house') arr = arr.filter((d) => d.openHouse);
    if (active === 'Under $1M') arr = arr.filter((d) => num(d.price) < 1000000);
    if (sort === 'low') arr.sort((a, b) => num(a.price) - num(b.price));
    if (sort === 'high') arr.sort((a, b) => num(b.price) - num(a.price));
    return arr;
  }, [sort, active, search]);
  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  // Reset to page 1 whenever the result set changes.
  React.useEffect(() => { setPage(1); }, [sort, active, search]);
  React.useEffect(() => {
    const onHash = () => {
      if (location.hash.replace('#', '') === 'open-house') setActive('Open house');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const safePage = Math.min(page, totalPages);
  const pageItems = items.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);
  const go = (p) => {
    setPage(p);
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <section className="cb-band" style={{ background: 'var(--color-canvas)' }}>
      <PageBloom hue="lavender" x="95%" y="8%" size={680} opacity={0.46} />
      <PageBloom hue="peach" x="5%" y="52%" size={620} opacity={0.4} />
      <PageBloom hue="mint" x="90%" y="92%" size={600} opacity={0.4} />
      <div id="open-house" ref={topRef} style={{ scrollMarginTop: 88, maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-xxl) var(--space-lg) var(--space-section)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <FilterRow count={items.length} sort={sort} setSort={setSort} active={active} setActive={setActive} />
        {totalPages > 1 && <Pagination page={safePage} total={totalPages} onGo={go} />}
        {items.length === 0 ? (
          <div style={{ padding: 'var(--space-section) 0', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-md-size)', color: 'var(--color-ink)' }}>No homes match your search.</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', color: 'var(--color-muted)' }}>Try widening your price range or bedroom count.</span>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-lg)' }} className="cb-3up">
            {pageItems.map((d, i) => <ListingCard key={d.id} data={d} index={i} />)}
          </div>
        )}
        {totalPages > 1 && <Pagination page={safePage} total={totalPages} onGo={go} />}
      </div>
    </section>
  );
}

/* Live MLS search. The curated grid above is a snapshot; this is the real feed,
 * served by IDX Broker. Results open on Vanessa's IDX subdomain, which is what
 * the MLS licenses the display through. */
function ListingsSearch() {
  return (
    <section id="search" className="cb-band" style={{ scrollMarginTop: 88, background: 'var(--color-canvas)', borderTop: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="mint" x="6%" y="14%" size={620} opacity={0.42} />
      <PageBloom hue="peach" x="94%" y="88%" size={560} opacity={0.38} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHead eyebrow="Search the MLS" title="Search every home on the market." intro="Draw a map, set your filters, and see live listings across New Jersey — updated straight from the MLS." />
        <IdxWidget id="4280" legacy label="Quick search" height="auto" />
        <IdxWidget id="4283" kind="map" label="Map search" height={720} />
      </div>
    </section>
  );
}

function ListingsCta() {
  return (
    <section id="property-updates" className="cb-band" style={{ scrollMarginTop: 88, background: 'var(--color-canvas-soft)', borderTop: '1px solid var(--color-hairline)' }}>
      <PageBloom hue="rose" x="12%" y="22%" size={580} opacity={0.46} />
      <PageBloom hue="sky" x="90%" y="80%" size={560} opacity={0.42} />
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-section) var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <Eyebrow>Don't see it yet?</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: 'var(--type-display-lg-size)', lineHeight: 1.12, letterSpacing: 'var(--type-display-lg-ls)', color: 'var(--color-ink)', textWrap: 'balance' }}>Tell us what you're looking for, and we'll find it.</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)', lineHeight: 1.5, color: 'var(--color-body)', maxWidth: 480, textWrap: 'pretty' }}>Many of our best homes sell before they hit the open market. Sign up for property updates matched to your search.</p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Get property updates</Button></span>
          <Button href="index.html#contact" variant="outline" size="lg">Talk to an agent</Button>
        </div>
      </div>
    </section>
  );
}

function ListingsPage() {
  const [search, setSearch] = React.useState(null);
  return (
    <React.Fragment>
      <NavBar active="Listings" />
      <main id="cb-main">
      <ListingsHeader onSearch={setSearch} />
      <ListingsGrid search={search} />
      <ListingsSearch />
      <ListingsCta />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<ListingsPage />);
