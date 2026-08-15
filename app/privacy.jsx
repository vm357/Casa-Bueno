/* Casa Bueno — Privacy Policy. Content generated with Termly, re-typeset in the
 * site's design language. Update the "Last updated" date whenever Termly reissues. */

const { NavBar, Footer, Eyebrow } = window;

const CB_PRIVACY_UPDATED = 'August 7, 2026';
const CB_DSAR = 'https://app.termly.io/dsar/3d65d780-63eb-4efe-abd8-41d6d4447000';
const CB_EMAIL = 'vanessasellsnj1@gmail.com';

const TOC = [
['infocollect', 'What information do we collect?'],
['infouse', 'How do we process your information?'],
['whoshare', 'When and with whom do we share your personal information?'],
['inforetain', 'How long do we keep your information?'],
['infosafe', 'How do we keep your information safe?'],
['infominors', 'Do we collect information from minors?'],
['privacyrights', 'What are your privacy rights?'],
['dnt', 'Controls for do-not-track features'],
['uslaws', 'Do United States residents have specific privacy rights?'],
['policyupdates', 'Do we make updates to this notice?'],
['contact', 'How can you contact us about this notice?'],
['request', 'How can you review, update, or delete the data we collect from you?']];

const CATEGORIES = [
['A. Identifiers', 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', 'Yes'],
['B. Personal information as defined in the California Customer Records statute', 'Name, contact information, education, employment, employment history, and financial information', 'Yes'],
['C. Protected classification characteristics under state or federal law', 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', 'No'],
['D. Commercial information', 'Transaction information, purchase history, financial details, and payment information', 'No'],
['E. Biometric information', 'Fingerprints and voiceprints', 'No'],
['F. Internet or other similar network activity', 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', 'No'],
['G. Geolocation data', 'Device location', 'No'],
['H. Audio, electronic, sensory, or similar information', 'Images and audio, video or call recordings created in connection with our business activities', 'No'],
['I. Professional or employment-related information', 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', 'No'],
['J. Education information', 'Student records and directory information', 'No'],
['K. Inferences drawn from collected personal information', 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics', 'No'],
['L. Sensitive personal information', '—', 'No']];

const RIGHTS = [
['Right to know', 'whether or not we are processing your personal data'],
['Right to access', 'your personal data'],
['Right to correct', 'inaccuracies in your personal data'],
['Right to request', 'the deletion of your personal data'],
['Right to obtain a copy', 'of the personal data you previously shared with us'],
['Right to non-discrimination', 'for exercising your rights'],
['Right to opt out', 'of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (“profiling”)']];

const STATE_RIGHTS = [
'Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)',
'Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)',
'Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)',
'Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)',
'Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)',
'Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)',
'Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)'];

function Mail() { return <a href={'mailto:' + CB_EMAIL}>{CB_EMAIL}</a>; }
function Dsar({ children }) { return <a href={CB_DSAR} target="_blank" rel="noopener noreferrer">{children || 'data subject access request'}</a>; }
function InShort({ children }) { return <p className="cb-inshort"><strong>In Short:</strong> <em>{children}</em></p>; }
function H({ id, n, children }) { return <h2 id={id}><span className="cb-h-num">{n}</span>{children}</h2>; }

function PrivacyHero() {
  return (
    <section className="cb-legal-hero">
      <div className="cb-legal-orb cb-orb-a"></div>
      <div className="cb-legal-orb cb-orb-b"></div>
      <div className="cb-legal-orb cb-orb-c"></div>
      <div className="cb-legal-hero-inner">
        <Eyebrow>Legal</Eyebrow>
        <h1>Privacy Policy</h1>
        <p className="cb-legal-sub">Last updated {CB_PRIVACY_UPDATED}</p>
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <React.Fragment>
      <NavBar />
      <PrivacyHero />
      <main id="cb-main" className="cb-legal">
        <div className="cb-legal-body">
          {/* SMS terms, repeated from the Terms and Conditions page so carriers and
              visitors find them without a second hop. */}
          <h2>Terms and Conditions</h2>
          <ol className="cb-legal-ol">
            <li>We use SMS to confirm appointments, send reminders, and notify clients of schedule updates or important changes.</li>
            <li>You can cancel the SMS service at any time. Just text “STOP”. After you send the SMS message “STOP” to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.</li>
            <li>If you are experiencing issues with the messaging program you can reply with the keyword “HELP” for more assistance, or you can get help directly at <a href="mailto:vanessasellsnj1@gmail.com">vanessasellsnj1@gmail.com</a>.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency may vary. If you have any questions about your text plan or data plan, contact your wireless provider.</li>
            <li>By using this Website, you agree to the practices described in this Privacy Policy.</li>
          </ol>
          <p>This Privacy Notice for Casa Bueno Group (“<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”) describes how and why we might access, collect, store, use, and/or share (“<strong>process</strong>”) your personal information when you use our services (“<strong>Services</strong>”), including when you:</p>
          <ul>
            <li>Visit our website at <a href="https://sellwithbueno.com" target="_blank" rel="noopener noreferrer">sellwithbueno.com</a>, or any website of ours that links to this Privacy Notice</li>
            <li>Work with us as a real estate agent. We provide professional residential real estate services, assisting clients with buying, selling, and finding properties. Services may include property searches, listing and marketing services, buyer and seller consultations, property showings, negotiations, and guidance throughout the real estate transaction process.</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <Mail />.</p>

          <h2>Summary of key points</h2>
          <p><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#toc">table of contents</a> below to find the section you are looking for.</em></p>
          <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#infocollect">personal information you disclose to us</a>.</p>
          <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered “special” or “sensitive” in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
          <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
          <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#infouse">how we process your information</a>.</p>
          <p><strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Learn more about <a href="#whoshare">when and with whom we share your personal information</a>.</p>
          <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#infosafe">how we keep your information safe</a>.</p>
          <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacyrights">your privacy rights</a>.</p>
          <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <Dsar />, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

          <nav id="toc" className="cb-toc">
            <span className="cb-toc-head">Table of contents</span>
            <ol>{TOC.map(([id, label]) => <li key={id}><a href={'#' + id}>{label}</a></li>)}</ol>
          </nav>

          <H id="infocollect" n="1">What information do we collect?</H>
          <h3>Personal information you disclose to us</h3>
          <InShort>We collect personal information that you provide to us.</InShort>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul><li>names</li><li>phone numbers</li><li>email addresses</li></ul>
          <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

          <H id="infouse" n="2">How do we process your information?</H>
          <InShort>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</InShort>
          <p><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
          <ul>
            <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
            <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
          </ul>

          <H id="whoshare" n="3">When and with whom do we share your personal information?</H>
          <InShort>We may share information in specific situations described in this section and/or with the following categories of third parties.</InShort>
          <p><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (“<strong>third parties</strong>”) who perform services for us or on our behalf and require access to such information to do that work.</p>
          <p>The categories of third parties we may share personal information with are as follows:</p>
          <ul><li>Customer Relationship Manager (CRM)</li></ul>
          <p>We also may need to share your personal information in the following situations:</p>
          <ul>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
            <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
          </ul>

          <H id="inforetain" n="4">How long do we keep your information?</H>
          <InShort>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</InShort>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

          <H id="infosafe" n="5">How do we keep your information safe?</H>
          <InShort>We aim to protect your personal information through a system of organizational and technical security measures.</InShort>
          <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

          <H id="infominors" n="6">Do we collect information from minors?</H>
          <InShort>We do not knowingly collect data from or market to children under 18 years of age.</InShort>
          <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <Mail />.</p>

          <H id="privacyrights" n="7">What are your privacy rights?</H>
          <InShort>You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</InShort>
          <p><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section “<a href="#contact">How can you contact us about this notice?</a>” below.</p>
          <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
          <p><strong><u>Opting out of marketing and promotional communications:</u></strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying “STOP” or “UNSUBSCRIBE” to the SMS messages that we send, or by contacting us using the details provided in the section “<a href="#contact">How can you contact us about this notice?</a>” below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
          <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.</p>
          <p>If you have questions or comments about your privacy rights, you may email us at <Mail />.</p>

          <H id="dnt" n="8">Controls for do-not-track features</H>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
          <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
          <p><strong><u>Global Privacy Control:</u></strong> We recognize and honor Global Privacy Control (GPC) signals. If you use a browser or extension that supports GPC, we will treat this as a valid request to opt out of the sale or sharing of your personal information for targeted advertising purposes under applicable state privacy laws, including the California Consumer Privacy Act (CCPA). When we detect a GPC signal from your browser, we will automatically apply your opt-out preference without requiring you to take any additional action. For more information about GPC and how to enable it, visit <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer">globalprivacycontrol.org</a>.</p>

          <H id="uslaws" n="9">Do United States residents have specific privacy rights?</H>
          <InShort>If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</InShort>
          <h3>Categories of personal information we collect</h3>
          <p>The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section “<a href="#infocollect">What information do we collect?</a>”</p>
          <div className="cb-table-wrap">
            <table className="cb-table">
              <thead><tr><th>Category</th><th>Examples</th><th className="cb-td-c">Collected</th></tr></thead>
              <tbody>{CATEGORIES.map(([c, e, y]) =>
                <tr key={c}><td>{c}</td><td>{e}</td><td className="cb-td-c"><span className={y === 'Yes' ? 'cb-yes' : 'cb-no'}>{y}</span></td></tr>
              )}</tbody>
            </table>
          </div>
          <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
          <ul>
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>
          <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
          <ul>
            <li>Category A — as long as the user has an account with us</li>
            <li>Category B — as long as the user has an account with us</li>
          </ul>
          <h3>Sources of personal information</h3>
          <p>Learn more about the sources of personal information we collect in “<a href="#infocollect">What information do we collect?</a>”</p>
          <h3>How we use and share personal information</h3>
          <p>Learn more about how we use your personal information in the section “<a href="#infouse">How do we process your information?</a>”</p>
          <p><strong>Will your information be shared with anyone else?</strong></p>
          <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section “<a href="#whoshare">When and with whom do we share your personal information?</a>”</p>
          <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be “selling” of your personal information.</p>
          <p>We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under “<a href="#whoshare">When and with whom do we share your personal information?</a>”</p>
          <h3>Your rights</h3>
          <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
          <ul>{RIGHTS.map(([b, rest]) => <li key={b}><strong>{b}</strong> {rest}</li>)}</ul>
          <p>Depending upon the state where you live, you may also have the following rights:</p>
          <ul>{STATE_RIGHTS.map(r => <li key={r}>{r}</li>)}</ul>
          <h3>How to exercise your rights</h3>
          <p>To exercise these rights, you can contact us by submitting a <Dsar />, by emailing us at <Mail />, or by referring to the contact details at the bottom of this document.</p>
          <p>We will honor your opt-out preferences if you enact the <a href="https://globalprivacycontrol.org/" target="_blank" rel="noopener noreferrer">Global Privacy Control</a> (GPC) opt-out signal on your browser.</p>
          <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>
          <h3>Request verification</h3>
          <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
          <p>If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>
          <h3>Appeals</h3>
          <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <Mail />. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
          <h3>California “Shine The Light” law</h3>
          <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section “<a href="#contact">How can you contact us about this notice?</a>”</p>

          <H id="policyupdates" n="10">Do we make updates to this notice?</H>
          <InShort>Yes, we will update this notice as necessary to stay compliant with relevant laws.</InShort>
          <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated “Revised” date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

          <H id="contact" n="11">How can you contact us about this notice?</H>
          <p>If you have questions or comments about this notice, you may email us at <Mail /> or contact us by post at:</p>
          <address className="cb-address">Casa Bueno Group<br />151 Forest St, Unit H<br />Montclair, NJ 07042<br />United States</address>

          <H id="request" n="12">How can you review, update, or delete the data we collect from you?</H>
          <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <Dsar />.</p>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('cb-root')).render(<PrivacyPage />);
