/* @ds-bundle: {"format":3,"namespace":"ElevenLabsDesignSystem_2f7f30","components":[{"name":"AudioWaveformCard","sourcePath":"components/atmospheric/AudioWaveformCard.jsx"},{"name":"GradientOrbCard","sourcePath":"components/atmospheric/GradientOrbCard.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/forms/Badge.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"PricingTierCard","sourcePath":"components/pricing/PricingTierCard.jsx"},{"name":"VoiceRow","sourcePath":"components/voice/VoiceRow.jsx"}],"sourceHashes":{"components/atmospheric/AudioWaveformCard.jsx":"5eea55093cac","components/atmospheric/GradientOrbCard.jsx":"c136f76dde2f","components/buttons/Button.jsx":"f0a9683b155f","components/cards/FeatureCard.jsx":"818552eedd74","components/cards/TestimonialCard.jsx":"0113a5db263d","components/forms/Badge.jsx":"35ba54f6c101","components/forms/TextInput.jsx":"30c45f4aecc0","components/navigation/TopNav.jsx":"ad4ccb6b8d1b","components/pricing/PricingTierCard.jsx":"a91ab93d49f4","components/voice/VoiceRow.jsx":"2a4b0a9b08d6","ui_kits/marketing-site/App.jsx":"6a04c00e3b7a","ui_kits/marketing-site/sections.jsx":"61e68f17ade3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElevenLabsDesignSystem_2f7f30 = window.ElevenLabsDesignSystem_2f7f30 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/atmospheric/AudioWaveformCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs AudioWaveformCard — a play button + waveform glyph + voice metadata.
 * White surface, 16px radius. The waveform is rendered from a bar-height array.
 */
function AudioWaveformCard({
  name = 'Aria',
  meta = 'Expressive · English',
  playing = false,
  bars,
  style = {},
  ...rest
}) {
  const [isPlaying, setPlaying] = React.useState(playing);
  const heights = bars || [10, 18, 28, 40, 32, 22, 14, 26, 38, 30, 20, 12, 24, 34, 26, 16, 22, 30, 18, 10];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-base)',
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-hairline)',
      padding: 'var(--space-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    "aria-label": isPlaying ? 'Pause' : 'Play',
    style: {
      flex: 'none',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15
    }
  }, isPlaying ? '❚❚' : '▶'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height: 44
    }
  }, heights.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: `${h}px`,
      background: i < heights.length * 0.4 ? 'var(--color-ink)' : 'var(--color-hairline-strong)',
      borderRadius: 'var(--radius-pill)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-strong-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { AudioWaveformCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atmospheric/AudioWaveformCard.jsx", error: String((e && e.message) || e) }); }

// components/atmospheric/GradientOrbCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ORB_COLORS = {
  mint: 'var(--color-gradient-mint)',
  peach: 'var(--color-gradient-peach)',
  lavender: 'var(--color-gradient-lavender)',
  sky: 'var(--color-gradient-sky)',
  rose: 'var(--color-gradient-rose)'
};

/**
 * ElevenLabs GradientOrbCard — the signature atmospheric card.
 * A soft radial-gradient orb (one of five pastel tokens) blooms behind
 * centered display copy. Extra-soft 24px radius. Orb is pure atmosphere.
 */
function GradientOrbCard({
  variant = 'mint',
  title,
  children,
  align = 'center',
  style = {},
  ...rest
}) {
  const orb = ORB_COLORS[variant] || ORB_COLORS.mint;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-canvas-soft)',
      borderRadius: 'var(--radius-xxl)',
      border: '1px solid var(--color-hairline)',
      padding: 'var(--space-xl)',
      minHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: '-30%',
      left: align === 'center' ? '50%' : '10%',
      transform: 'translateX(-50%)',
      width: 320,
      height: 320,
      background: `radial-gradient(circle at center, ${orb} 0%, rgba(255,255,255,0) 68%)`,
      filter: 'blur(8px)',
      opacity: 0.85,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--type-display-md-size)',
      lineHeight: 'var(--type-display-md-lh)',
      letterSpacing: 'var(--type-display-md-ls)',
      color: 'var(--color-ink)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-md-size)',
      lineHeight: 'var(--type-body-md-lh)',
      letterSpacing: 'var(--type-body-md-ls)',
      color: 'var(--color-body)',
      maxWidth: 380,
      textWrap: 'pretty'
    }
  }, children)));
}
Object.assign(__ds_scope, { GradientOrbCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atmospheric/GradientOrbCard.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs Button — the only CTA treatment in the system.
 * variant: 'primary' (near-black ink pill) | 'outline' (transparent, hairline border)
 *          | 'tertiary' (inline ink text link)
 */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  disabled = false,
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--type-button-size)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 'var(--type-button-lh)',
    letterSpacing: 'var(--type-button-ls)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    transition: 'background 150ms ease, border-color 150ms ease, opacity 150ms ease',
    opacity: disabled ? 0.45 : 1
  };
  const sizes = {
    sm: {
      height: '34px',
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)'
    },
    md: {
      height: '40px',
      padding: '0 20px',
      borderRadius: 'var(--radius-pill)'
    },
    lg: {
      height: '48px',
      padding: '0 28px',
      borderRadius: 'var(--radius-pill)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline-strong)'
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      height: 'auto',
      padding: 0,
      borderRadius: 0
    }
  };
  const composed = {
    ...base,
    ...(variant === 'tertiary' ? {} : sizes[size]),
    ...variants[variant],
    ...style
  };
  const handleEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-active)';
    if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--color-ink)';
    if (variant === 'tertiary') e.currentTarget.style.textDecoration = 'underline';
  };
  const handleLeave = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary)';
    if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--color-hairline-strong)';
    if (variant === 'tertiary') e.currentTarget.style.textDecoration = 'none';
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: composed,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs FeatureCard — white card for 2-up/3-up grids.
 * 16px radius, hairline border, soft-drop shadow on hover.
 * Optional eyebrow, title, body, and an icon/glyph slot.
 */
function FeatureCard({
  eyebrow,
  title,
  children,
  icon,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: `1px solid ${hover ? 'var(--color-hairline-strong)' : 'var(--color-hairline)'}`,
      boxShadow: hover ? 'var(--shadow-soft)' : 'none',
      padding: 'var(--space-lg)',
      transition: 'box-shadow 180ms ease, border-color 180ms ease',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-surface-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-ink)',
      marginBottom: 'var(--space-xs)'
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--type-caption-up-ls)',
      textTransform: 'uppercase',
      color: 'var(--color-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-title-md-size)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--type-title-md-lh)',
      color: 'var(--color-ink)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-md-size)',
      lineHeight: 'var(--type-body-md-lh)',
      letterSpacing: 'var(--type-body-md-ls)',
      color: 'var(--color-body)',
      textWrap: 'pretty'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs TestimonialCard — quote card, 32px padding, 16px radius.
 * Quote in body color; attribution row with optional avatar initials.
 */
function TestimonialCard({
  quote,
  name,
  role,
  initials,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-hairline)',
      padding: 'var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--type-display-sm-size)',
      lineHeight: 'var(--type-display-sm-lh)',
      letterSpacing: 'var(--type-display-sm-ls)',
      color: 'var(--color-ink)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)'
    }
  }, initials && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-strong)',
      color: 'var(--color-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 'var(--weight-medium)'
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-strong-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-body-strong)'
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs Badge — small uppercase pill. Surface-strong by default,
 * or a quiet dark inversion. Decoration / status label only.
 */
function Badge({
  children,
  tone = 'default',
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--color-surface-strong)',
      color: 'var(--color-ink)'
    },
    dark: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)'
    },
    success: {
      background: 'rgba(22,163,74,0.12)',
      color: 'var(--color-success)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 'var(--type-caption-up-lh)',
      letterSpacing: 'var(--type-caption-up-ls)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs TextInput — white field, 8px radius, hairline-strong border.
 * Border thickens to 2px ink on focus. Optional label + error.
 */
function TextInput({
  label,
  error,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const fieldStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--type-body-md-size)',
    letterSpacing: 'var(--type-body-md-ls)',
    color: 'var(--color-ink)',
    background: 'var(--color-surface-card)',
    height: '44px',
    padding: '12px 16px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 'var(--radius-md)',
    border: focused ? '2px solid var(--color-ink)' : `1px solid ${error ? 'var(--color-error)' : 'var(--color-hairline-strong)'}`,
    outline: 'none',
    transition: 'border-color 150ms ease',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-title-sm-size)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--type-title-sm-ls)',
      color: 'var(--color-body-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: fieldStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs TopNav — wordmark left, horizontal menu center, Sign in + Try free right.
 * Canvas background, 64px height, ink text. Collapses to a menu button under 768px
 * (cosmetic toggle here).
 */
function TopNav({
  items = ['Creative', 'Agents', 'Video', 'Pricing', 'Enterprise', 'Docs'],
  active,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-xl)',
      padding: '0 var(--space-lg)',
      background: 'var(--color-canvas)',
      borderBottom: '1px solid var(--color-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 22,
      letterSpacing: '-0.5px',
      color: 'var(--color-ink)',
      flex: 'none',
      whiteSpace: 'nowrap'
    }
  }, "ElevenLabs"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      flex: 1
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-nav-link-size)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--type-nav-link-lh)',
      textDecoration: 'none',
      color: item === active ? 'var(--color-ink)' : 'var(--color-body)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-ink)',
    onMouseLeave: e => e.currentTarget.style.color = item === active ? 'var(--color-ink)' : 'var(--color-body)'
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tertiary",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-nav-link-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "Try free")));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingTierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs PricingTierCard — a pricing tier. White by default; the featured
 * tier inverts to the dark surface. 32px padding, 16px radius, hairline border.
 */
function PricingTierCard({
  name,
  price,
  period = '/mo',
  blurb,
  features = [],
  cta = 'Get started',
  featured = false,
  style = {},
  ...rest
}) {
  const fg = featured ? 'var(--color-on-dark)' : 'var(--color-ink)';
  const sub = featured ? 'var(--color-on-dark-soft)' : 'var(--color-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      background: featured ? 'var(--color-surface-dark)' : 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: featured ? '1px solid var(--color-surface-dark)' : '1px solid var(--color-hairline)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--type-caption-up-ls)',
      textTransform: 'uppercase',
      color: sub
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--type-display-md-size)',
      letterSpacing: 'var(--type-display-md-ls)',
      color: fg
    }
  }, price), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-sm-size)',
      color: sub
    }
  }, period)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-sm-size)',
      lineHeight: 'var(--type-body-sm-lh)',
      color: sub,
      textWrap: 'pretty'
    }
  }, blurb)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'outline',
    style: featured ? {
      background: 'var(--color-on-dark)',
      color: 'var(--color-ink)'
    } : {}
  }, cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-body-sm-size)',
      lineHeight: 'var(--type-body-sm-lh)',
      color: featured ? 'var(--color-on-dark)' : 'var(--color-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: sub,
      flex: 'none'
    }
  }, "\u2014"), f))));
}
Object.assign(__ds_scope, { PricingTierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingTierCard.jsx", error: String((e && e.message) || e) }); }

// components/voice/VoiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs VoiceRow — a row in the voice library list.
 * 32px circular voice icon (initials), name + accent stack, optional preview button.
 * Transparent background, 1px hairline divider at the bottom.
 */
function VoiceRow({
  name,
  accent,
  initials,
  onPreview,
  last = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: '12px 8px',
      background: hover ? 'var(--color-canvas-soft)' : 'transparent',
      borderBottom: last ? 'none' : '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-sm)',
      transition: 'background 150ms ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-strong)',
      color: 'var(--color-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-medium)'
    }
  }, initials || (name ? name.slice(0, 2) : '··')), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-title-sm-size)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--type-title-sm-ls)',
      color: 'var(--color-ink)'
    }
  }, name), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-muted)'
    }
  }, accent)), /*#__PURE__*/React.createElement("button", {
    onClick: onPreview,
    "aria-label": `Preview ${name}`,
    style: {
      flex: 'none',
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'transparent',
      border: '1px solid var(--color-hairline-strong)',
      color: 'var(--color-ink)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      opacity: hover ? 1 : 0.7,
      transition: 'opacity 150ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "\u25B6"), " Preview"));
}
Object.assign(__ds_scope, { VoiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/voice/VoiceRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/App.jsx
try { (() => {
/* ElevenLabs marketing-site — interactive shell.
 * Assembles the TopNav + all sections, and wires a lightweight signup dialog:
 * any CTA whose label is a sign-up verb opens it (click delegation keeps the
 * section components purely presentational).
 */
const DSk = window.ElevenLabsDesignSystem_2f7f30;
const {
  TopNav,
  Button,
  TextInput
} = DSk;
const CTA_LABELS = ['try free', 'get started', 'start creator', 'start pro', 'create the voice you imagine'];
function SignupDialog({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(12,10,9,0.32)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(420px, 100%)',
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-hairline)',
      boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 32,
      letterSpacing: '-0.32px',
      color: 'var(--color-ink)'
    }
  }, "Start for free"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      letterSpacing: '0.15px',
      color: 'var(--color-body)'
    }
  }, "10,000 free characters every month. No card required.")), /*#__PURE__*/React.createElement(TextInput, {
    label: "Work email",
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    }
  }, "Create account"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--color-muted)'
    }
  }, "Maybe later")));
}
function App() {
  const [dialog, setDialog] = React.useState(false);
  const [active, setActive] = React.useState('Creative');
  const onRootClick = e => {
    const btn = e.target.closest('button, a');
    if (!btn) return;
    const label = (btn.textContent || '').trim().toLowerCase();
    if (CTA_LABELS.includes(label)) {
      e.preventDefault();
      setDialog(true);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onRootClick,
    style: {
      background: 'var(--color-canvas)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: active
  })), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.ELHero, null), /*#__PURE__*/React.createElement(window.ELFeatureGrid, null), /*#__PURE__*/React.createElement(window.ELAtmosphericSplit, null), /*#__PURE__*/React.createElement(window.ELVoiceLibrarySection, null), /*#__PURE__*/React.createElement(window.ELTestimonialSection, null), /*#__PURE__*/React.createElement(window.ELPricingSection, null), /*#__PURE__*/React.createElement(window.ELCtaBand, null)), /*#__PURE__*/React.createElement(window.ELSiteFooter, null), /*#__PURE__*/React.createElement(SignupDialog, {
    open: dialog,
    onClose: () => setDialog(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/sections.jsx
try { (() => {
/* ElevenLabs marketing-site — section components.
 * Composes the design-system primitives from window.ElevenLabsDesignSystem_2f7f30.
 * Exports each section to window so App.jsx (a separate Babel script) can use them.
 */
const DS = window.ElevenLabsDesignSystem_2f7f30;
const {
  Button,
  FeatureCard,
  GradientOrbCard,
  AudioWaveformCard,
  VoiceRow,
  PricingTierCard,
  TestimonialCard,
  Badge
} = DS;
const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 32px'
};
const display = (size, lh, ls) => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 300,
  fontSize: size,
  lineHeight: lh,
  letterSpacing: ls,
  color: 'var(--color-ink)',
  margin: 0
});
const eyebrow = {
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.96px',
  textTransform: 'uppercase',
  color: 'var(--color-muted)'
};

/* ---------------------------------------------------------------- Hero */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-canvas)',
      padding: '96px 0 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 460,
      height: 460,
      top: -160,
      left: '14%',
      background: 'radial-gradient(circle, var(--color-gradient-peach) 0%, rgba(245,245,245,0) 66%)',
      filter: 'blur(14px)',
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 420,
      height: 420,
      top: -80,
      right: '16%',
      background: 'radial-gradient(circle, var(--color-gradient-lavender) 0%, rgba(245,245,245,0) 66%)',
      filter: 'blur(14px)',
      opacity: 0.75
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 380,
      height: 380,
      top: 40,
      left: '40%',
      background: 'radial-gradient(circle, var(--color-gradient-mint) 0%, rgba(245,245,245,0) 68%)',
      filter: 'blur(16px)',
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Creative platform"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...display(64, 1.05, '-1.92px'),
      maxWidth: 820
    }
  }, "The most realistic voice AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.5,
      letterSpacing: '0.16px',
      color: 'var(--color-body)',
      maxWidth: 600,
      margin: 0,
      textWrap: 'pretty'
    }
  }, "The most powerful, expressive, and lifelike AI audio \u2014 for everyone, in 32 languages."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Try free"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Contact sales")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 560,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(AudioWaveformCard, {
    name: "Aria",
    meta: "Expressive \xB7 English"
  }))));
}

/* ----------------------------------------------------------- Feature grid */
function FeatureGrid() {
  const features = [{
    eyebrow: 'Text to speech',
    title: 'Lifelike voices',
    body: 'Generate natural speech in 32 languages from any text, instantly.'
  }, {
    eyebrow: 'Voice cloning',
    title: 'Your voice, scaled',
    body: 'Clone a voice from a short sample and keep it consistent across projects.'
  }, {
    eyebrow: 'Dubbing',
    title: 'Translate, in voice',
    body: 'Dub video and audio into new languages while preserving the speaker.'
  }, {
    eyebrow: 'Agents',
    title: 'Conversational AI',
    body: 'Build low-latency voice agents that listen, reason, and reply.'
  }, {
    eyebrow: 'Studio',
    title: 'Long-form audio',
    body: 'Produce audiobooks and narration with editorial control over every line.'
  }, {
    eyebrow: 'API',
    title: 'Build with audio',
    body: 'Drop the most realistic audio models into your own product in minutes.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-soft)',
      padding: '96px 0',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 48,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "The platform"), /*#__PURE__*/React.createElement("h2", {
    style: display(36, 1.17, '-0.36px')
  }, "Built for every kind of creator")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, features.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.title,
    eyebrow: f.eyebrow,
    title: f.title,
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\u266A")
  }, f.body)))));
}

/* ------------------------------------------------------- Atmospheric split */
function AtmosphericSplit() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(GradientOrbCard, {
    variant: "mint",
    align: "left",
    title: "Create with sound",
    style: {
      minHeight: 300
    }
  }, "Atmospheric brand voltage \u2014 soft pastel orbs are the only color in the system."), /*#__PURE__*/React.createElement(GradientOrbCard, {
    variant: "rose",
    align: "left",
    title: "Designed to disappear",
    style: {
      minHeight: 300
    }
  }, "Modest type weights and quiet ink let the voice \u2014 and the work \u2014 carry the brand.")));
}

/* ---------------------------------------------------------- Voice library */
function VoiceLibrarySection() {
  const voices = [{
    name: 'Aria',
    accent: 'Expressive · American',
    initials: 'AR'
  }, {
    name: 'Bjorn',
    accent: 'Calm · Norwegian',
    initials: 'BJ'
  }, {
    name: 'Sofia',
    accent: 'Warm · Spanish',
    initials: 'SO'
  }, {
    name: 'Kenji',
    accent: 'Measured · Japanese',
    initials: 'KE'
  }, {
    name: 'Lena',
    accent: 'Bright · German',
    initials: 'LE'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-soft)',
      padding: '96px 0',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Voice library"), /*#__PURE__*/React.createElement("h2", {
    style: display(36, 1.17, '-0.36px')
  }, "5,000+ voices, one library"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: '0.16px',
      color: 'var(--color-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Browse community and professional voices. Preview any of them, then drop it straight into your project."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Explore voices"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-xl)',
      padding: '8px 16px'
    }
  }, voices.map((v, i) => /*#__PURE__*/React.createElement(VoiceRow, {
    key: v.name,
    name: v.name,
    accent: v.accent,
    initials: v.initials,
    last: i === voices.length - 1
  })))));
}

/* ------------------------------------------------------------- Testimonial */
function TestimonialSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "It\u2019s the closest thing to a real human voice we\u2019ve shipped.",
    name: "Maya Okafor",
    role: "Head of Audio, Verdant",
    initials: "MO"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "We dubbed a season into six languages in a week.",
    name: "Tomas Reyes",
    role: "Producer, Northlight",
    initials: "TR"
  })));
}

/* --------------------------------------------------------------- Pricing */
function PricingSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-soft)',
      padding: '96px 0',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: display(36, 1.17, '-0.36px')
  }, "Pricing that scales with you")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(PricingTierCard, {
    name: "Free",
    price: "$0",
    period: "",
    blurb: "Try the platform.",
    cta: "Get started",
    features: ['10k credits / mo', 'Community voices', 'Personal use']
  }), /*#__PURE__*/React.createElement(PricingTierCard, {
    featured: true,
    name: "Creator",
    price: "$22",
    blurb: "For solo creators.",
    cta: "Start Creator",
    features: ['100k credits / mo', '5,000+ voices', 'Commercial license', '44.1kHz audio']
  }), /*#__PURE__*/React.createElement(PricingTierCard, {
    name: "Pro",
    price: "$99",
    blurb: "For studios at scale.",
    cta: "Start Pro",
    features: ['500k credits / mo', 'Professional clones', 'Priority rendering']
  }))));
}

/* --------------------------------------------------------------- CTA band */
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(36, 1.17, '-0.36px'),
      maxWidth: 560
    }
  }, "Create the voice you imagine"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Try free")));
}

/* ----------------------------------------------------------------- Footer */
function SiteFooter() {
  const cols = [{
    h: 'Product',
    links: ['Text to speech', 'Voice cloning', 'Dubbing', 'Agents', 'Studio']
  }, {
    h: 'Solutions',
    links: ['Creators', 'Enterprise', 'Developers', 'Education']
  }, {
    h: 'Resources',
    links: ['Docs', 'API reference', 'Blog', 'Status']
  }, {
    h: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact']
  }, {
    h: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies']
  }];
  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.47,
    letterSpacing: '0.15px',
    color: 'var(--color-body)',
    textDecoration: 'none',
    display: 'block',
    padding: '4px 0'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-canvas)',
      borderTop: '1px solid var(--color-hairline)',
      padding: '48px 0 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(5, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 22,
      letterSpacing: '-0.5px',
      color: 'var(--color-ink)'
    }
  }, "ElevenLabs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--color-muted)'
    }
  }, "\xA9 2026 ElevenLabs")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 12
    }
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))))));
}
Object.assign(window, {
  ELHero: Hero,
  ELFeatureGrid: FeatureGrid,
  ELAtmosphericSplit: AtmosphericSplit,
  ELVoiceLibrarySection: VoiceLibrarySection,
  ELTestimonialSection: TestimonialSection,
  ELPricingSection: PricingSection,
  ELCtaBand: CtaBand,
  ELSiteFooter: SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AudioWaveformCard = __ds_scope.AudioWaveformCard;

__ds_ns.GradientOrbCard = __ds_scope.GradientOrbCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.PricingTierCard = __ds_scope.PricingTierCard;

__ds_ns.VoiceRow = __ds_scope.VoiceRow;

})();
