/* global React, ReactDOM */
const { NavBar, Footer, Eyebrow } = window;

const CB_A11Y_UPDATED = 'August 9, 2026';
const CB_EMAIL = 'vanessasellsnj1@gmail.com';
const CB_PHONE = '(732) 631-3267';

function H({ id, n, children }) { return <h2 id={id}><span className="cb-h-num">{n}</span>{children}</h2>; }
function Mail() { return <a href={'mailto:' + CB_EMAIL}>{CB_EMAIL}</a>; }

function AccessibilityHero() {
  return (
    <section className="cb-legal-hero">
      <div className="cb-legal-orb cb-orb-a"></div>
      <div className="cb-legal-orb cb-orb-b"></div>
      <div className="cb-legal-orb cb-orb-c"></div>
      <div className="cb-legal-hero-inner">
        <Eyebrow>Legal</Eyebrow>
        <h1>Accessibility Statement</h1>
        <p className="cb-legal-sub">Last updated {CB_A11Y_UPDATED}</p>
      </div>
    </section>
  );
}

function AccessibilityPage() {
  return (
    <React.Fragment>
      <NavBar />
      <AccessibilityHero />
      <main id="cb-main" className="cb-legal">
        <div className="cb-legal-body">
          <p>Casa Bueno Group is committed to making sellwithbueno.com usable by as many people as possible, including people who browse with a keyboard, a screen reader, magnification, or other assistive technology. Housing is not optional, and neither is being able to look for one.</p>

          <p className="cb-inshort"><strong>In short:</strong> <em>We have built this site to meet WCAG 2.1 Level AA and we test it as we go. If something on this site gets in your way, email <Mail /> or call {CB_PHONE} and we will help you directly and fix the problem.</em></p>

          <H id="standard" n="1">The standard we work to</H>
          <p>We aim to conform to the <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</a>. These guidelines are the international reference for making web content accessible, and they are the standard most commonly cited under the Americans with Disabilities Act and the Fair Housing Act.</p>
          <p>Our current conformance status is <strong>partially conformant</strong>. Partially conformant means that most of the site meets the standard, and that we know of specific areas that have not yet been independently verified. We would rather tell you that plainly than claim a level of certainty we have not earned.</p>

          <H id="measures" n="2">What we have done</H>
          <p>Accessibility was addressed as part of building this site, not added afterward. Specific measures include:</p>
          <ul>
            <li>A skip-to-content link on every page, so keyboard users can bypass the navigation.</li>
            <li>Visible focus outlines on every link, button, and form field, shown for keyboard navigation and adjusted to remain visible on dark backgrounds.</li>
            <li>Proper landmark structure — each page has a single main content region and a labeled navigation region — so screen reader users can move directly to the content.</li>
            <li>The mobile menu is a true dialog. Focus moves into it when it opens, stays within it while it is open, returns to the menu button when it closes, and the Escape key closes it.</li>
            <li>The current page is identified to assistive technology in both the desktop and mobile navigation.</li>
            <li>Form fields carry visible labels. Errors are announced when they appear, and confirmation of a successful submission is announced rather than only shown.</li>
            <li>Touch targets on phones are sized to be operable without precise aim.</li>
            <li>Text meets or exceeds the 4.5:1 contrast ratio against its background, including the white text in the footer.</li>
            <li>Background video is decorative, silent, and marked as such so screen readers ignore it. Visitors whose devices request reduced motion see a still frame instead, and the site's animations, transitions, and drifting background gradients are disabled for them.</li>
            <li>Images that convey information carry alternative text. Decorative images are marked so they are skipped rather than announced.</li>
            <li>The site reflows to a single column on small screens and remains usable when text is enlarged.</li>
          </ul>

          <H id="limitations" n="3">Known limitations</H>
          <p>We want to be specific about where the gaps are rather than imply there are none.</p>
          <ul>
            <li><strong>No independent audit has been performed.</strong> Our testing has been done by the people who built the site. A formal review by an accessibility specialist, and testing with people who use assistive technology daily, has not yet taken place.</li>
            <li><strong>Property listing content comes from a third party.</strong> Listing photographs and descriptions are supplied by the Garden State Multiple Listing Service and its member brokerages. We do not write that content and cannot guarantee that photographs supplied to us carry meaningful descriptions.</li>
            <li><strong>Client reviews are quoted as written.</strong> Reviews are reproduced word for word from Zillow, so their wording and formatting are outside our control.</li>
            <li><strong>Documents linked from this site</strong> may originate from other parties and may not meet the same standard.</li>
          </ul>

          <H id="feedback" n="4">Tell us if something does not work</H>
          <p>If you have trouble using any part of this site, we want to hear about it. Please tell us what page you were on, what you were trying to do, and what happened. If you can, mention the browser and any assistive technology you were using, though this is not required.</p>
          <ul>
            <li>Email: <Mail /></li>
            <li>Phone: <a href="tel:+17326313267">{CB_PHONE}</a></li>
          </ul>
          <p>We aim to respond within two business days. If a problem prevents you from getting information about a property or from contacting us about buying or selling, call and we will provide that information directly, by phone, email, or in person, in whatever format works for you.</p>

          <H id="alternatives" n="5">Getting help another way</H>
          <p>Nothing on this site is the only route to our services. Every property search, listing detail, form, and document available here can also be handled by phone, by email, or in person. If the website is not working for you, that is our problem to solve, and it will never prevent you from working with us.</p>
          <p>We speak English and Spanish. Se habla español.</p>

          <H id="fairhousing" n="6">Fair housing</H>
          <p>Prestige Property Group Montclair and its technology provider, Inside Real Estate, fully support the principles of the Fair Housing Act (Title VIII of the Civil Rights Act of 1968), as amended, which generally prohibits discrimination in the sale, rental, and financing of dwellings, and in other housing-related transactions, based on race, color, national origin, religion, sex, familial status (including children under the age of 18 living with parents of legal custodians, pregnant women, and people securing custody of children under the age of 18), and handicap (disability). As an adjunct to the foregoing commitment, both Prestige Property Group Montclair and Inside Real Estate actively promote, and are committed to, creating and fostering an environment of diversity throughout their respective organizations and franchise systems, and each views such a concept as a critical component to the on-going success of their business operations.</p>

          <H id="tech" n="7">Technical information</H>
          <p>The accessibility of this site relies on HTML, CSS, and JavaScript, and on the following features being supported by your browser and any assistive technology you use: ARIA landmark and dialog roles, live regions for status messages, and the <code>prefers-reduced-motion</code> setting.</p>

          <H id="assessment" n="8">How this was assessed</H>
          <p>This site was assessed by self-evaluation, carried out by the team that built it. Testing covered keyboard navigation, focus behavior, landmark structure, text contrast, touch target size, and layout at phone, tablet, and desktop widths. It did not include a formal audit by a third party or testing sessions with assistive technology users. Those remain planned.</p>

          <H id="updates" n="9">Keeping this current</H>
          <p>We review this statement when the site changes in a way that affects accessibility, and at least once a year. This statement was created on {CB_A11Y_UPDATED} and applies to sellwithbueno.com.</p>

          <H id="contact" n="10">Contact</H>
          <p>Accessibility questions, or anything else, reach us at <Mail /> or <a href="tel:+17326313267">{CB_PHONE}</a>, or by post at:</p>
          <address className="cb-address">Casa Bueno Group<br />151 Forest St, Unit H<br />Montclair, NJ 07042<br />United States</address>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<AccessibilityPage />);
