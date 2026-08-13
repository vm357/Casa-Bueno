/* Casa Bueno — shared building blocks (nav, footer, search, listing cards, data).
 * Styled strictly against the ElevenLabs design tokens. Exposed on window for
 * use across the homepage and the linked pages. */

const { Button, Badge } = window.ElevenLabsDesignSystem_2f7f30;

/* ------------------------------------------------------------------ data --- */

/* Visitors who ask their OS to reduce motion get stills instead of moving video. */
const CB_REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CB_NAV = [
{ label: 'Listings', href: 'Listings.html' },
{ label: 'Buy/Sell', href: 'Buy-Sell.html' },
{ label: 'Relocation', href: 'Relocation.html' },
{ label: 'About', href: 'About.html' },
{ label: 'Contact', href: 'index.html#contact' }];


/* Live listings — Garden State MLS via sellwithbueno.idxbroker.com (Essex County, NJ,
 * 2+ beds, newest first). Photos served from IDX's S3 bucket. */
const IDX_PHOTO = 'https://s3.amazonaws.com/idx-listing-photos/photos/';
const IDX_DETAIL = 'https://sellwithbueno.idxbroker.com/idx/details/listing/c118/';
/* Listings data lives in app/listings-data.js — loaded only on pages that need it. */
const CB_LISTINGS = window.CB_LISTINGS || [];

const CB_ORB_CYCLE = ['mint', 'peach', 'lavender', 'sky', 'rose'];

/* Real client reviews from Vanessa's Zillow profile (zillow.com/profile/vanessabuenoo),
 * transcribed word for word. Never reword or trim these. */
const CB_TESTIMONIALS = [
{ quote: 'Vanessa was an absolute gem throughout our home buying journey! She listened attentively to everything we wanted and had incredible patience with us every step of the way. Her expertise and guidance made the process seamless, even as first-time homebuyers. Highly recommend!', name: 'Eliana L.', role: 'Bought a home · 2025', initials: 'EL' },
{ quote: 'Our process took 7 months but Vanessa was able to guide us through the process and thanks to her recommendation to do inspection we were able to save 40,000 dollars.', name: 'Andreina M.', role: 'Bought a single family home · Pennington, NJ', initials: 'AM' },
{ quote: 'Vanessa does an excellent job while assisting me with the purchase of my first home! She goes above and beyond to help me find exactly what I am looking for. She is willing to accommodate in regards to scheduling viewings and is very responsive. Overall, I am happy to be working with Vanessa.', name: 'Jennifer B.', role: 'Showed home · NJ 08901', initials: 'JB' }];


const ORB_STOPS = {
  mint: 'var(--color-gradient-mint)',
  peach: 'var(--color-gradient-peach)',
  lavender: 'var(--color-gradient-lavender)',
  sky: 'var(--color-gradient-sky)',
  rose: 'var(--color-gradient-rose)'
};

/* Atmosphere bloom — same gradient formula as the home page. Sits behind
   in-flow content via z-index:-1 inside a .cb-band stacking context. */
function PageBloom({ hue = 'mint', x = '85%', y = '10%', size = 620, opacity = 0.55, blur = 40 }) {
  return <div aria-hidden className="cb-bloom" style={{
    left: x, top: y, width: size, height: size, transform: 'translate(-50%,-50%)',
    background: `radial-gradient(circle at center, ${ORB_STOPS[hue]} 0%, ${ORB_STOPS[hue]} 22%, rgba(245,245,245,0) 72%)`,
    filter: `blur(${blur}px)`, opacity,
  }} />;
}

/* --------------------------------------------------------------- wordmark --- */

function Wordmark({ light = false, size = 19 }) {
  return (
    <a href="index.html" style={{
      fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size,
      letterSpacing: '2.5px', textTransform: 'uppercase', textDecoration: 'none',
      color: light ? 'var(--color-on-dark)' : 'var(--color-ink)', whiteSpace: 'nowrap',
      display: 'inline-flex', alignItems: 'center', gap: 2
    }}>Casa&nbsp;Bueno</a>);

}

/* -------------------------------------------------------------------- nav --- */

function NavBar({ active }) {
  const [open, setOpen] = React.useState(false);
  const burgerRef = React.useRef(null);
  const sheetRef = React.useRef(null);
  const wasOpen = React.useRef(false);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  /* Keyboard: focus moves into the sheet on open and returns to the button on close,
   * and Tab is kept inside the sheet while it is the only thing on screen. */
  React.useEffect(() => {
    if (open) {
      /* The sheet animates in from visibility:hidden, and focus() on a hidden
       * element is a silent no-op — wait for it to actually be visible. */
      let raf1 = 0, raf2 = 0;
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          const el = sheetRef.current;
          if (!el) return;
          const focusFirst = () => {
            const first = el.querySelector('a,button');
            if (first) first.focus();
          };
          if (getComputedStyle(el).visibility === 'visible') focusFirst();
          else el.addEventListener('transitionend', focusFirst, { once: true });
        });
      });
      return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); };
    }
    if (wasOpen.current && burgerRef.current) burgerRef.current.focus();
    wasOpen.current = open;
  }, [open]);
  React.useEffect(() => { wasOpen.current = open; }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const onTab = (e) => {
      if (e.key !== 'Tab' || !sheetRef.current) return;
      const items = sheetRef.current.querySelectorAll('a[href],button:not([disabled])');
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onTab);
    return () => document.removeEventListener('keydown', onTab);
  }, [open]);
  return (
    <React.Fragment>
    <a className="cb-skip" href="#cb-main">Skip to content</a>
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,245,245,0.82)', backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-hairline)'
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', height: 68,
        padding: '0 var(--space-lg)', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 'var(--space-xl)'
      }}>
        <a href="index.html" className="cb-nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', textDecoration: 'none' }}>
          <style>{`
.cb-nav-logo img{transition:transform .22s ease-out,opacity .22s ease-out;opacity:.9}
.cb-nav-logo:hover img{opacity:1;transform:translateY(-2px)}
.cb-nav-logo span{transition:opacity .22s ease-out}
@media (max-width:900px){.cb-nav-logo{min-height:44px}}
@media (prefers-reduced-motion: reduce){.cb-nav-logo img{transition:none}.cb-nav-logo:hover img{transform:none}}
`}</style>
          <img src="assets/casa-bueno-mark-ink.png" alt="" width="26" style={{ display: 'block', height: 'auto' }} />
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19,
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: 'var(--color-ink)', whiteSpace: 'nowrap',
          }}>Casa&nbsp;Bueno</span>
        </a>
        <nav className="cb-nav-desktop" aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>
          {CB_NAV.map((it) =>
          <a key={it.label} href={it.href} aria-current={it.label === active ? 'page' : undefined} style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-nav-link-size)',
            fontWeight: 'var(--weight-medium)', textDecoration: 'none',
            color: it.label === active ? 'var(--color-ink)' : 'var(--color-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-ink)'}
          onMouseLeave={(e) => e.currentTarget.style.color = it.label === active ? 'var(--color-ink)' : 'var(--color-body)'}>
            {it.label}</a>
          )}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <style>{`
.cb-cta-aura{position:relative;display:inline-flex;border-radius:var(--radius-pill)}
.cb-cta-aura::before{content:'';position:absolute;inset:-16px;border-radius:inherit;pointer-events:none;opacity:0;transform:scale(.85);transition:opacity .28s ease-out,transform .28s ease-out;background:radial-gradient(closest-side at 22% 45%,${ORB_STOPS.mint} 0%,rgba(245,245,245,0) 72%),radial-gradient(closest-side at 72% 30%,${ORB_STOPS.peach} 0%,rgba(245,245,245,0) 72%),radial-gradient(closest-side at 50% 85%,${ORB_STOPS.lavender} 0%,rgba(245,245,245,0) 72%);filter:blur(10px)}
.cb-cta-aura:hover::before{opacity:.95;transform:scale(1)}
.cb-cta-aura > a,.cb-cta-aura > button{position:relative;width:100%;transition:transform .18s ease-out}
.cb-cta-aura:hover > a,.cb-cta-aura:hover > button{transform:translateY(-1px)}
@media (prefers-reduced-motion: reduce){.cb-cta-aura::before,.cb-cta-aura > a,.cb-cta-aura > button{transition:none}.cb-cta-aura:hover > a,.cb-cta-aura:hover > button{transform:none}}
.cb-nav-ig{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;color:var(--color-body);text-decoration:none;transition:color .22s ease-out,background .22s ease-out,transform .22s ease-out}
.cb-nav-ig:hover{color:var(--color-ink);background:var(--color-surface-strong);transform:translateY(-1px)}
@media (max-width:900px){.cb-nav-ig{display:none}}
@media (prefers-reduced-motion: reduce){.cb-nav-ig{transition:none}.cb-nav-ig:hover{transform:none}}
.cb-nav-burger{display:none;align-items:center;justify-content:center;width:40px;height:40px;margin-right:-6px;border:0;background:none;padding:0;cursor:pointer;color:var(--color-ink);border-radius:50%;transition:background .2s ease-out}
.cb-nav-burger:hover{background:var(--color-surface-strong)}
.cb-nav-burger span{display:block;position:relative;width:20px;height:1.5px;background:currentColor;border-radius:2px;transition:transform .28s cubic-bezier(.22,1,.36,1),opacity .18s ease-out}
.cb-nav-burger span::before,.cb-nav-burger span::after{content:'';position:absolute;left:0;width:20px;height:1.5px;background:currentColor;border-radius:2px;transition:transform .28s cubic-bezier(.22,1,.36,1)}
.cb-nav-burger span::before{top:-6px}
.cb-nav-burger span::after{top:6px}
.cb-nav-burger[aria-expanded="true"] span{background:transparent}
.cb-nav-burger[aria-expanded="true"] span::before{transform:translateY(6px) rotate(45deg)}
.cb-nav-burger[aria-expanded="true"] span::after{transform:translateY(-6px) rotate(-45deg)}
.cb-nav-sheet{position:fixed;left:0;right:0;top:68px;height:calc(100dvh - 68px);z-index:49;background:rgba(245,245,245,.97);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);display:flex;flex-direction:column;padding:var(--space-lg) var(--space-lg) calc(var(--space-xxl) + env(safe-area-inset-bottom));gap:var(--space-xs);overflow-y:auto;opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity .26s ease-out,transform .26s cubic-bezier(.22,1,.36,1),visibility .26s}
.cb-nav-sheet.is-open{opacity:1;visibility:visible;transform:none}
.cb-nav-sheet a.cb-nav-sheet-link{position:relative;display:flex;align-items:center;justify-content:space-between;min-height:56px;padding:0 4px;font-family:var(--font-body);font-size:20px;font-weight:var(--weight-medium);letter-spacing:-.2px;text-decoration:none;color:var(--color-body);border-bottom:1px solid var(--color-hairline);opacity:0;transform:translateY(10px);transition:color .2s ease-out}
.cb-nav-sheet a.cb-nav-sheet-link span.cb-nav-sheet-label{display:inline-block;transition:transform .24s cubic-bezier(.22,1,.36,1)}
.cb-nav-sheet a.cb-nav-sheet-link::after{content:'';width:14px;height:14px;flex:none;margin-right:4px;border-right:1.5px solid currentColor;border-top:1.5px solid currentColor;transform:rotate(45deg) translate(-4px,4px) scale(.8);opacity:0;transition:opacity .24s ease-out,transform .24s cubic-bezier(.22,1,.36,1)}
.cb-nav-sheet a.cb-nav-sheet-link::before{content:'';position:absolute;left:-12px;right:-12px;top:2px;bottom:3px;border-radius:12px;background:rgba(12,10,9,.035);opacity:0;transform:scale(.98);transition:opacity .22s ease-out,transform .24s cubic-bezier(.22,1,.36,1);pointer-events:none}
.cb-nav-sheet a.cb-nav-sheet-link[data-active="true"]{color:var(--color-ink)}
.cb-nav-sheet a.cb-nav-sheet-link[data-active="true"]::after{opacity:.35;transform:rotate(45deg) translate(0,0) scale(.8)}
@media (hover:hover){.cb-nav-sheet a.cb-nav-sheet-link:hover{color:var(--color-ink)}.cb-nav-sheet a.cb-nav-sheet-link:hover::before{opacity:1;transform:none}.cb-nav-sheet a.cb-nav-sheet-link:hover span.cb-nav-sheet-label{transform:translateX(6px)}.cb-nav-sheet a.cb-nav-sheet-link:hover::after{opacity:.6;transform:rotate(45deg) translate(0,0) scale(.8)}.cb-nav-sheet-social:hover{color:var(--color-ink)}.cb-nav-sheet-social:hover svg{transform:scale(1.08) rotate(-4deg)}}
.cb-nav-sheet a.cb-nav-sheet-link:active{color:var(--color-ink)}
.cb-nav-sheet a.cb-nav-sheet-link:active::before{opacity:1;transform:none;background:rgba(12,10,9,.06)}
.cb-nav-sheet a.cb-nav-sheet-link:active span.cb-nav-sheet-label{transform:translateX(4px)}
.cb-nav-sheet.is-open a.cb-nav-sheet-link{animation:cbSheetIn .42s cubic-bezier(.22,1,.36,1) forwards}
@keyframes cbSheetIn{to{opacity:1;transform:none}}
.cb-nav-sheet-foot{margin-top:var(--space-lg);display:flex;flex-direction:column;gap:var(--space-base)}
.cb-nav-sheet-foot .cb-cta-aura > a{justify-content:center}
.cb-nav-sheet-social{display:flex;align-items:center;gap:var(--space-sm);min-height:44px;font-family:var(--font-body);font-size:var(--type-body-sm-size);color:var(--color-muted);text-decoration:none;transition:color .2s ease-out}
.cb-nav-sheet-social svg{transition:transform .24s cubic-bezier(.22,1,.36,1)}
.cb-nav-sheet-social:active{color:var(--color-ink)}
@media (max-width:900px){.cb-nav-desktop{display:none!important}.cb-nav-burger{display:inline-flex}.cb-nav-cta-desktop{display:none}}
@media (prefers-reduced-motion: reduce){.cb-nav-sheet,.cb-nav-burger span,.cb-nav-burger span::before,.cb-nav-burger span::after{transition:none}.cb-nav-sheet.is-open a.cb-nav-sheet-link{animation:none;opacity:1;transform:none}.cb-nav-sheet a.cb-nav-sheet-link span.cb-nav-sheet-label,.cb-nav-sheet a.cb-nav-sheet-link::after,.cb-nav-sheet a.cb-nav-sheet-link::before,.cb-nav-sheet-social svg{transition:none}}
`}</style>
          <a className="cb-nav-ig" href="https://www.instagram.com/sellwithbueno" target="_blank" rel="noopener" aria-label="Casa Bueno on Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <span className="cb-cta-aura cb-nav-cta-desktop"><Button href="index.html#contact" variant="primary" size="sm">Get started</Button></span>
          <button ref={burgerRef} className="cb-nav-burger" type="button" aria-expanded={open} aria-controls="cb-nav-sheet" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span></span></button>
        </div>
      </div>
    </header>
    <div ref={sheetRef} id="cb-nav-sheet" role="dialog" aria-modal="true" aria-label="Menu" className={'cb-nav-sheet' + (open ? ' is-open' : '')} aria-hidden={!open}>
      {CB_NAV.map((it, i) => (
        <a key={it.label} href={it.href} className="cb-nav-sheet-link" data-active={it.label === active} aria-current={it.label === active ? 'page' : undefined} tabIndex={open ? 0 : -1} style={{ animationDelay: (0.04 + i * 0.045) + 's' }} onClick={() => setOpen(false)}><span className="cb-nav-sheet-label">{it.label}</span></a>
      ))}
      <div className="cb-nav-sheet-foot">
        <span className="cb-cta-aura"><Button href="index.html#contact" variant="primary" size="lg">Get started</Button></span>
        <a className="cb-nav-sheet-social" href="https://www.instagram.com/sellwithbueno" target="_blank" rel="noopener" tabIndex={open ? 0 : -1}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>
          @sellwithbueno
        </a>
      </div>
    </div>
    </React.Fragment>);

}

/* ----------------------------------------------------------- section head --- */

function Eyebrow({ children, light = false }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
      fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
      textTransform: 'uppercase',
      color: light ? 'var(--color-on-dark-soft)' : 'var(--color-muted)'
    }}>{children}</span>);

}

function SectionHead({ eyebrow, title, intro, align = 'left', light = false, maxWidth = 640 }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-base)',
      maxWidth, marginInline: align === 'center' ? 'auto' : 0, textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
        fontSize: 'var(--type-display-lg-size)', lineHeight: 'var(--type-display-lg-lh)',
        letterSpacing: 'var(--type-display-lg-ls)',
        color: light ? 'var(--color-on-dark)' : 'var(--color-ink)', textWrap: 'balance'
      }}>{title}</h2>
      {intro && <p style={{
        margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)',
        lineHeight: 'var(--type-body-md-lh)', letterSpacing: 'var(--type-body-md-ls)',
        color: light ? 'var(--color-on-dark-soft)' : 'var(--color-body)', textWrap: 'pretty'
      }}>{intro}</p>}
    </div>);

}

/* ----------------------------------------------------------------- select --- */

function Field({ label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minWidth: 0 }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
        textTransform: 'uppercase', color: 'var(--color-muted)'
      }}>{label}</span>
      {children}
    </label>);

}

const cbControlStyle = {
  fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)',
  letterSpacing: 'var(--type-body-md-ls)', color: 'var(--color-ink)',
  background: 'var(--color-surface-card)', height: 46, padding: '0 14px', width: '100%',
  boxSizing: 'border-box', borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-hairline-strong)', outline: 'none',
  appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer'
};

function CBInput(props) {
  const [f, setF] = React.useState(false);
  return <input {...props} onFocus={() => setF(true)} onBlur={() => setF(false)}
  style={{ ...cbControlStyle, cursor: 'text', border: f ? '2px solid var(--color-ink)' : cbControlStyle.border }} />;
}

function CBSelect({ options, ...rest }) {
  const [f, setF] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select {...rest} onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ ...cbControlStyle, paddingRight: 34, border: f ? '2px solid var(--color-ink)' : cbControlStyle.border }}>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span aria-hidden style={{
        position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
        pointerEvents: 'none', color: 'var(--color-muted)', fontSize: 12
      }}>▾</span>
    </div>);

}

const PRICE_MIN = ['No min', '$200k', '$300k', '$400k', '$500k', '$750k'].map((l, i) => ({ value: i, label: l }));
const PRICE_MAX = ['No max', '$300k', '$400k', '$500k', '$750k', '$1M+'].map((l, i) => ({ value: i, label: l }));
const COUNT_OPTS = ['Any', '1+', '2+', '3+', '4+', '5+'].map((l, i) => ({ value: i, label: l }));
const PRICE_MIN_VALUES = [0, 200000, 300000, 400000, 500000, 750000];
const PRICE_MAX_VALUES = [Infinity, 300000, 400000, 500000, 750000, Infinity];

/* SearchBar — property search. When `onSearch` is given it filters in place;
 * otherwise it navigates to the listings page. */
function SearchBar({ style = {}, elevated = true, onSearch }) {
  const [loc, setLoc] = React.useState('');
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [beds, setBeds] = React.useState(0);
  const [baths, setBaths] = React.useState(0);

  const submit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ loc: loc.trim(), min: PRICE_MIN_VALUES[min], max: PRICE_MAX_VALUES[max], beds, baths });
    } else {
      window.location.href = 'Listings.html';
    }
  };

  return (
    <form onSubmit={submit}
    style={{
      background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-hairline)',
      boxShadow: elevated ? '0 12px 40px rgba(12,10,9,0.06)' : 'none',
      padding: 'var(--space-md)',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr auto',
      gap: 'var(--space-sm)', alignItems: 'end',
      ...style
    }}
    className="cb-searchbar">
      <Field label="Location"><CBInput placeholder="City, ZIP, or address" value={loc} onChange={(e) => setLoc(e.target.value)} /></Field>
      <Field label="Min price"><CBSelect options={PRICE_MIN} value={min} onChange={(e) => setMin(+e.target.value)} /></Field>
      <Field label="Max price"><CBSelect options={PRICE_MAX} value={max} onChange={(e) => setMax(+e.target.value)} /></Field>
      <Field label="Beds"><CBSelect options={COUNT_OPTS} value={beds} onChange={(e) => setBeds(+e.target.value)} /></Field>
      <Field label="Baths"><CBSelect options={COUNT_OPTS} value={baths} onChange={(e) => setBaths(+e.target.value)} /></Field>
      <Button type="submit" variant="primary" size="lg" style={{ height: 46, paddingInline: 26 }}>Search</Button>
    </form>);

}

/* ------------------------------------------------------------ listing card --- */

function ListingPhoto({ orb = 'mint', img, tag, openHouse, height = 220 }) {
  const stop = ORB_STOPS[orb] || ORB_STOPS.mint;
  const [failed, setFailed] = React.useState(false);
  const showImg = img && !failed;
  return (
    <div style={{
      position: 'relative', height, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      background: 'var(--color-surface-strong)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {showImg ?
      <img src={IDX_PHOTO + img + '/c118'} alt="" loading="lazy" onError={() => setFailed(true)}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /> :

      <React.Fragment>
          <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(120% 90% at 70% 15%, ${stop} 0%, rgba(255,255,255,0) 60%)`,
          opacity: 0.5
        }} />
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted-soft)"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ position: 'relative' }}>
            <path d="M3 9.5 12 3l9 6.5" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" />
          </svg>
        </React.Fragment>
      }
      {tag && <span style={{
        position: 'absolute', top: 12, left: 12,
        fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
        textTransform: 'uppercase', color: 'var(--color-ink)',
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)'
      }}>{tag}</span>}
      {openHouse && <span style={{
        position: 'absolute', bottom: 12, left: 12,
        fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-size)',
        fontWeight: 'var(--weight-medium)', color: 'var(--color-on-primary)',
        background: 'rgba(12,10,9,0.82)', backdropFilter: 'blur(4px)',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)'
      }}>{openHouse}</span>}
    </div>);

}

function ListingCard({ data, index = 0 }) {
  const [hover, setHover] = React.useState(false);
  const orb = CB_ORB_CYCLE[index % CB_ORB_CYCLE.length];
  return (
    <a href={IDX_DETAIL + data.id + '/' + data.photo} target="_blank" rel="noopener"
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    style={{
      textDecoration: 'none', background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: `1px solid ${hover ? 'var(--color-hairline-strong)' : 'var(--color-hairline)'}`,
      boxShadow: hover ? 'var(--shadow-soft)' : 'none',
      padding: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)',
      transition: 'box-shadow 180ms ease, border-color 180ms ease, transform 180ms ease',
      transform: hover ? 'translateY(-3px)' : 'none'
    }}>
      <ListingPhoto orb={orb} img={data.img} tag={data.status} openHouse={data.openHouse} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', padding: '0 var(--space-xs) var(--space-xs)' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
          fontSize: 'var(--type-display-sm-size)', letterSpacing: '-0.2px', color: 'var(--color-ink)'
        }}>{data.price}</span>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-strong-size)',
          fontWeight: 'var(--weight-medium)', color: 'var(--color-body-strong)'
        }}>{data.address}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-muted)' }}>{data.city}</span>
        <div style={{
          marginTop: 'var(--space-xs)', paddingTop: 'var(--space-sm)',
          borderTop: '1px solid var(--color-hairline)',
          display: 'flex', gap: 'var(--space-base)', flexWrap: 'wrap',
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-body)'
        }}>
          <span>{data.beds} bd</span><span style={{ color: 'var(--color-hairline-strong)' }}>·</span>
          <span>{data.baths} ba</span>
          {data.lot && <React.Fragment><span style={{ color: 'var(--color-hairline-strong)' }}>·</span><span>{data.lot}</span></React.Fragment>}
        </div>
      </div>
    </a>);

}

/* ----------------------------------------------------------------- footer --- */

function Footer() {
  const cols = [
  { h: 'Explore', links: [...CB_NAV.map(n => n.label).filter(l => l !== 'Contact'), 'Reviews'] },
  { h: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Accessibility'] }];
  const contact = [['Phone', '(732) 631-3267', 'tel:+17326313267'], ['Email', 'vanessasellsnj1@gmail.com', 'mailto:vanessasellsnj1@gmail.com'], ['Office', '151 Forest Street, Unit H\nMontclair, NJ 07042', 'https://www.google.com/maps/search/?api=1&query=151+Forest+Street+Unit+H+Montclair+NJ+07042']];
  const footHrefs = { 'About Casa Bueno': 'About.html', 'Contact': 'index.html#contact', 'Listings': 'Listings.html', 'Open house': 'Listings.html#open-house', 'Relocation': 'Relocation.html', 'Sell as-is': 'Buy-Sell.html', 'First-time buyers': 'Buy-Sell.html#what-we-do', 'Reviews': 'Reviews.html', 'Cash offer': 'Buy-Sell.html#cash-offer', 'Property updates': 'Listings.html#property-updates', 'Privacy Policy': 'Privacy.html', 'Terms of Service': 'Terms.html', 'Accessibility': 'Accessibility.html', ...Object.fromEntries(CB_NAV.map(n => [n.label, n.href])) };

  return (
    <footer style={{ background: '#1c1512', color: 'var(--color-on-dark)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--space-section) var(--space-lg) var(--space-xxl)',
        display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) auto', gap: 'var(--space-xxl)', alignItems: 'start'
      }} className="cb-footer-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)', maxWidth: 380 }}>
          <div className="cb-footer-logo" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <style>{`
.cb-footer-logo > a{transition:opacity .2s ease-out,transform .2s ease-out}
.cb-footer-logo:hover > a{opacity:1}
.cb-footer-logo:hover img{opacity:1 !important;transform:translateY(-2px)}
.cb-footer-logo img{transition:opacity .2s ease-out,transform .2s ease-out}
.cb-foot-link{position:relative;display:inline-flex;align-items:center;padding:3px 10px;margin-left:-10px;border-radius:var(--radius-pill);opacity:.85;transition:opacity .25s ease-out,transform .25s ease-out}
.cb-foot-link::before{content:'';position:absolute;inset:-4px -6px;border-radius:inherit;pointer-events:none;opacity:0;transform:scale(.8);transition:opacity .3s ease-out,transform .3s ease-out;background:radial-gradient(closest-side at 50% 50%,var(--cb-aura) 0%,rgba(255,255,255,0) 75%);filter:blur(7px)}
.cb-foot-link:hover{opacity:1;transform:translateX(2px)}
.cb-foot-link:hover::before{opacity:.8;transform:scale(1)}
.cb-foot-link > span{position:relative}
.cb-social{position:relative;display:inline-flex;overflow:hidden;transition:transform .25s ease-out,border-color .25s ease-out}
.cb-social::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .3s ease-out;background:radial-gradient(120% 140% at 50% 120%,var(--cb-aura) 0%,rgba(255,255,255,0) 70%)}
.cb-social:hover{transform:translateY(-2px);border-color:rgba(255,255,255,0.4) !important}
.cb-social:hover::before{opacity:.85}
.cb-social > span{position:relative}
@keyframes cbKermitSpin{to{transform:rotate(360deg)}}
.cb-kermit{position:relative;display:inline-flex;padding:2px 8px;margin:0 -8px;border-radius:var(--radius-pill);transition:color .3s ease-out;--cb-k1:${window.ORB_STOPS.mint};--cb-k2:${window.ORB_STOPS.sky};--cb-k3:${window.ORB_STOPS.lavender};--cb-k4:${window.ORB_STOPS.peach}}
.cb-kermit::before{content:'';position:absolute;inset:-7px -10px;border-radius:inherit;pointer-events:none;opacity:0;transform:scale(.86);transition:opacity .4s ease-out,transform .4s ease-out;background:radial-gradient(closest-side at 18% 60%,var(--cb-k1) 0%,rgba(255,255,255,0) 70%),radial-gradient(closest-side at 52% 30%,var(--cb-k2) 0%,rgba(255,255,255,0) 70%),radial-gradient(closest-side at 84% 65%,var(--cb-k3) 0%,rgba(255,255,255,0) 70%);filter:blur(9px)}
.cb-kermit:hover::before{opacity:.9;transform:scale(1)}
.cb-kermit > span{position:relative;transition:color .35s ease-out,text-shadow .35s ease-out}
.cb-kermit:hover > span{color:${window.ORB_STOPS.mint};text-shadow:0 0 10px ${window.ORB_STOPS.mint},0 0 22px rgba(167,243,208,.55)}
@media (prefers-reduced-motion: reduce){.cb-kermit::before{transition:none}.cb-social{transition:none}.cb-social:hover{transform:none}}
@media (prefers-reduced-motion: reduce){.cb-footer-logo img,.cb-footer-logo > a{transition:none}.cb-footer-logo:hover img{transform:none}.cb-foot-link,.cb-foot-link::before{transition:none}.cb-foot-link:hover{transform:none}}
`}</style>
            <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="assets/casa-bueno-mark.png" alt="Casa Bueno" width="46" style={{ display: 'block', height: 'auto', opacity: 0.92 }} />
            </a>
            <Wordmark light size={30} />
          </div>
          <p style={{
            margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)',
            lineHeight: 1.6, color: 'var(--color-on-dark-soft)', textWrap: 'pretty'
          }}>Real estate with a steady hand — selling for cash, guiding relocations, and opening the door to first homes.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-xs)', flexWrap: 'wrap' }}>
            <a href="https://www.prestigepropertygrp.com/" target="_blank" rel="noopener" style={{ display: 'block', width: 'fit-content' }}><img src="assets/prestige-property-group-light.png" alt="Prestige Property Group" width="168" style={{ display: 'block', height: 'auto', opacity: 0.75 }} /></a>
            <img src="assets/realtor-eho-light.png" alt="REALTOR® · Equal Housing Opportunity" width="96" style={{ display: 'block', height: 'auto', opacity: 0.7 }} />
          </div>
        </div>
        <div className="cb-footer-links" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 'var(--space-xxl)', alignItems: 'start' }}>
        {cols.map((c, ci) =>
        <div key={c.h} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
            <span style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
            fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
            textTransform: 'uppercase', color: 'var(--color-on-dark-soft)', marginBottom: 4
          }}>{c.h}</span>
            {c.links.map((l, li) =>
          <a key={l} className="cb-foot-link" href={footHrefs[l] || '#'} style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)',
            color: 'var(--color-on-dark)', textDecoration: 'none',
            '--cb-aura': window.ORB_STOPS[['mint', 'peach', 'lavender', 'sky', 'rose'][(ci * 2 + li) % 5]],
          }}>
            <span>{l}</span></a>
          )}
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
            fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
            textTransform: 'uppercase', color: 'var(--color-on-dark-soft)', marginBottom: 4
          }}>Get in touch</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-base)' }}>
            <a className="cb-foot-link" href="index.html#contact" style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)',
              color: 'var(--color-on-dark)', textDecoration: 'none',
              '--cb-aura': window.ORB_STOPS.mint,
            }}><span>Contact</span></a>
            <a className="cb-social" href="https://www.instagram.com/sellwithbueno" target="_blank" rel="noopener" aria-label="Casa Bueno on Instagram" style={{
              alignItems: 'center', justifyContent: 'center', flex: 'none',
              width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.22)',
              color: 'var(--color-on-dark)', textDecoration: 'none',
              '--cb-aura': window.ORB_STOPS.rose,
            }}>
              <span style={{ display: 'inline-flex' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>
              </span>
            </a>
          </div>
          {contact.map(([k, v, href], i) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-size)', color: 'var(--color-on-dark-soft)' }}>{k}</span>
              {href ? (
                <a className="cb-foot-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined} style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', lineHeight: 1.45,
                  color: 'var(--color-on-dark)', textDecoration: 'none', whiteSpace: 'pre-line',
                  '--cb-aura': window.ORB_STOPS[['peach', 'sky', 'lavender'][i % 3]],
                }}><span>{v}</span></a>
              ) : (
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', lineHeight: 1.45, color: 'var(--color-on-dark)', whiteSpace: 'pre-line' }}>{v}</span>
              )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          padding: 'var(--space-lg) var(--space-lg) var(--space-xl)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 'var(--space-base) var(--space-xl)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-size)',
          lineHeight: 1.7, color: 'var(--color-on-dark-soft)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Casa Bueno Group at <a href="https://www.prestigepropertygrp.com/" target="_blank" rel="noopener" style={{ color: 'var(--color-on-dark)', textDecoration: 'underline', textUnderlineOffset: 2 }}>Prestige Property Group</a></span>
            <span>Licensed Real Estate Professional · NJ License #2185517 · Equal Housing Opportunity</span>
          </div>
          <span style={{ whiteSpace: 'nowrap' }}>© 2026 · Crafted by <a className="cb-kermit" href="https://kermitwebcraft.com" target="_blank" rel="noopener" style={{ color: 'var(--color-on-dark)', textDecoration: 'underline', textUnderlineOffset: 2 }}><span>Kermit Webcraft</span></a></span>
        </div>
      </div>
    </footer>);

}

/* Client-rendered pages: re-apply the URL hash once React has mounted the target.
 * Babel loads this script after window 'load' has fired, so run it directly. */
(() => {
  const jump = (smooth = true) => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return false;
    const el = document.getElementById(id);
    if (!el) return false;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 88, behavior: smooth ? 'smooth' : 'auto' });
    return true;
  };
  [0, 60, 200, 500, 900].forEach(ms => setTimeout(() => jump(ms > 0), ms));
  window.addEventListener('hashchange', () => jump(true));
})();

/* IDX Broker widget host.
 *
 * The widget is a <script> that writes its markup at its own position in the
 * document. React never executes script tags it renders, so the element has to
 * be built by hand and appended to a container. Each widget id may only appear
 * once per page — IDX keys its own state off the element id.
 *
 * Widget ids come from the IDX control panel (Design -> Widgets). Legacy
 * widgets (quick search, and anything predating the Prime set) are served from
 * a different path — pass `legacy`. */
/* Widget ids come from the IDX control panel (Design -> Widgets). Each family is
 * served from its own path, so pass `kind`: 'prime' (the default, current
 * widgets), 'quicksearch', or 'map' (both legacy). Served from the custom search
 * subdomain so widget requests, lead cookies and result links share one origin. */
const IDX_HOST = 'search.sellwithbueno.com';
const IDX_SRC = {
  prime: id => 'https://' + IDX_HOST + '/idx/widgets/' + id,
  quicksearch: id => 'https://' + IDX_HOST + '/idx/quicksearchjs.php?widgetid=' + id,
  map: id => 'https://' + IDX_HOST + '/idx/mapwidgetjs.php?widgetid=' + id };

function IdxWidget({ id, height = 520, label, kind = 'prime', legacy = false }) {
  const host = React.useRef(null);
  React.useEffect(() => {
    const mount = host.current;
    if (!mount || mount.dataset.cbLoaded) return;
    mount.dataset.cbLoaded = '1';
    const s = document.createElement('script');
    s.charset = 'UTF-8';
    s.type = 'text/javascript';
    s.id = 'idxwidgetsrc-' + id;
    s.src = (IDX_SRC[legacy ? 'quicksearch' : kind] || IDX_SRC.prime)(id);
    mount.appendChild(s);
  }, [id, kind, legacy]);
  return <div ref={host} className={'cb-idx' + (height === 'auto' ? ' cb-idx--auto' : '')} role="region" aria-label={label} style={{ height }} />;
}

/* Attach a clip and tell the element to fetch it.
 * Safari will not begin downloading after a JS src assignment unless load() is
 * called, so preload="none" clips otherwise stay blank on iOS forever. */
function cbAttachClip(v, src, preload) {
  if (!v || v.getAttribute('src')) return;
  v.preload = preload;
  v.setAttribute('src', src);
  v.load();
}

/* iOS decides whether a video may autoplay inline at the moment the element is
 * created — it reads the muted and playsinline ATTRIBUTES, and React only sets
 * them as properties. Missing attributes mean the clip is treated as a
 * user-initiated video and Safari paints its own play-button overlay.
 *
 * This must therefore run from the ref callback (synchronously, as the element
 * is created), not from an effect, which fires too late. */
function cbPrimeClip(v) {
  if (!v || v.dataset.cbPrimed) return;
  v.dataset.cbPrimed = '1';
  v.muted = true;
  v.defaultMuted = true;
  v.volume = 0;
  v.setAttribute('muted', '');
  v.setAttribute('playsinline', '');
  v.setAttribute('webkit-playsinline', '');
  v.setAttribute('disablepictureinpicture', '');
  v.disableRemotePlayback = true;
  v.controls = false;
}

function cbPrimeClips(videos) { (videos || []).forEach(cbPrimeClip); }

Object.assign(window, {
  CB_NAV, CB_LISTINGS, CB_TESTIMONIALS, ORB_STOPS, CB_ORB_CYCLE, IDX_PHOTO, IDX_DETAIL, CB_REDUCED_MOTION,
  cbAttachClip, cbPrimeClip, cbPrimeClips, IdxWidget, IDX_HOST,
  PageBloom, Wordmark, NavBar, Eyebrow, SectionHead, Field, CBInput, CBSelect,
  SearchBar, ListingPhoto, ListingCard, Footer
});