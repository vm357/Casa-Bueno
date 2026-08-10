const { NavBar, Footer, Eyebrow } = window;
const { Button } = window.ElevenLabsDesignSystem_2f7f30;


function NotFoundPage() {
  return (
    <React.Fragment>
      <NavBar />
      <main id="cb-main" className="cb-legal-hero" style={{ borderBottom: 'none', minHeight: '68vh', display: 'flex', alignItems: 'center' }}>
        <div className="cb-legal-orb cb-orb-a"></div>
        <div className="cb-legal-orb cb-orb-b"></div>
      <div className="cb-legal-orb cb-orb-c"></div>
        <div className="cb-legal-hero-inner" style={{ width: '100%' }}>
          <Eyebrow>Page not found</Eyebrow>
          <h1>This door doesn’t open.</h1>
          <p className="cb-legal-sub" style={{ maxWidth: 480 }}>The page you were looking for has moved or never existed. Let’s get you back to something useful.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginTop: 'var(--space-xl)', alignItems: 'center' }}>
            <span className="cb-cta-aura"><Button href="index.html" variant="primary" size="lg">Back home</Button></span>
            <Button href="index.html#contact" variant="outline" size="lg">Get in touch</Button>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<NotFoundPage />);
