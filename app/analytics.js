/* Casa Bueno analytics.
   Paste your GA4 Measurement ID (looks like G-XXXXXXXXXX) below and analytics goes live
   on every page. Leave it empty and nothing loads — no tracking, no cookies, no console noise. */
var CB_GA4_ID = '';

(function () {
  if (!CB_GA4_ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + CB_GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', CB_GA4_ID, { anonymize_ip: true });
})();

/* Call CB_TRACK('lead_submitted', {source: 'home_form'}) from anywhere.
   Safe to call whether or not analytics is configured. */
window.CB_TRACK = function (name, params) {
  if (window.gtag) window.gtag('event', name, params || {});
};
