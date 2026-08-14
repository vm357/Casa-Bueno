/* Casa Bueno — Terms and Conditions. This is the page the contact-form consent
 * checkbox links to. Body copy is pasted in below as supplied; the Privacy Policy
 * link at the end is what carries visitors on to the full policy. */

const { NavBar, Footer, Eyebrow } = window;

const CB_TC_UPDATED = 'August 13, 2026';
const CB_TC_EMAIL = 'vanessasellsnj1@gmail.com';

function TCPage() {
  return (
    <React.Fragment>
      <NavBar />
      <section className="cb-legal-hero">
        <div className="cb-legal-orb cb-orb-a"></div>
        <div className="cb-legal-orb cb-orb-b"></div>
        <div className="cb-legal-orb cb-orb-c"></div>
        <div className="cb-legal-hero-inner">
          <Eyebrow>Legal</Eyebrow>
          <h1>Terms and Conditions</h1>
          <p className="cb-legal-sub">Last updated {CB_TC_UPDATED}</p>
        </div>
      </section>
      <main id="cb-main" className="cb-legal">
        <div className="cb-legal-body">
          <ol className="cb-legal-ol">
            <li>We use SMS to confirm appointments, send reminders, and notify clients of schedule updates or important changes.</li>
            <li>You can cancel the SMS service at any time. Just text “STOP”. After you send the SMS message “STOP” to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.</li>
            <li>If you are experiencing issues with the messaging program you can reply with the keyword “HELP” for more assistance, or you can get help directly at <a href={'mailto:' + CB_TC_EMAIL}>{CB_TC_EMAIL}</a>.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency may vary. If you have any questions about your text plan or data plan, contact your wireless provider.</li>
            <li>By using this Website, you agree to the practices described in this <a href="Privacy.html">Privacy Policy</a>.</li>
          </ol>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<TCPage />);
