declare global {
  interface Document {
    documentMode?: any;
  }
}

declare global {
  interface Window {
    CSS?: any;
    StyleMedia?: any;
  }
}

export enum BROWSERS {
  CHROME = 'Chrome',
  OPERA = 'Opera',
  SAFARI = 'Safari',
  FIRE_FOX = 'Firefox',
  EDGE = 'Edge',
  IE = 'IE',
  BLINK = 'Blink',
  UNKNOWN = 'Unknown',
}

export const detectBrowser = ({ userAgent }: Navigator): BROWSERS => {
  const isOpera = (userAgent.indexOf(BROWSERS.OPERA) || userAgent.indexOf('OPR')) !== -1;
  if (isOpera) {
    return BROWSERS.OPERA;
  }
  const isChrome = userAgent.indexOf(BROWSERS.CHROME) !== -1;
  if (isChrome) {
    return BROWSERS.CHROME;
  }
  const isSafari = userAgent.indexOf(BROWSERS.SAFARI) !== -1;
  if (isSafari) {
    return BROWSERS.SAFARI;
  }
  // Firefox 1.0+
  const isFirefox = userAgent.indexOf(BROWSERS.FIRE_FOX) !== -1;
  if (isFirefox) {
    return BROWSERS.FIRE_FOX;
  }
  // Internet Explorer 6-11
  const isIE =
    userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
  if (isIE) {
    return BROWSERS.IE;
  }
  // Edge 20+
  const isEdge = !isIE && !!window.StyleMedia;
  if (isEdge) {
    return BROWSERS.EDGE;
  }
  // Blink engine detection
  const isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isBlink) {
    return BROWSERS.BLINK;
  }
  return BROWSERS.UNKNOWN;
};
