interface FontProps {
  fontSize: any;
  fontWeight: any;
  lineHeight: any;
}

interface ThemeFontsProps {
  h1: FontProps;
  h2: FontProps;
  h3: FontProps;
  h4: FontProps;
  h5: FontProps;
  h6: FontProps;
  p: FontProps;
}

interface ThemeFontColorProps {
  highlight: string;
  primary: string;
  secondary: string;
  color: string;
  inner: string;
  disabled: string;
}

const lightFontsColors: ThemeFontColorProps = {
  highlight: '#3A6FFE',
  primary: '#282c35',
  secondary: '#282c35',
  color: '#160B0B',
  inner: '#FFFFFF',
  disabled: '#999999',
};

const darkFontsColors: ThemeFontColorProps = {
  highlight: '#386BF8',
  primary: '#282c35',
  secondary: '#282c35',
  color: '#160B0B',
  inner: '#FFFFFF',
  disabled: '#999999',
};

const fonts: ThemeFontsProps = {
  h1: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: '36px',
  },
  h2: {
    fontSize: '2.6rem',
    fontWeight: 700,
    lineHeight: '32px',
  },
  h3: {
    fontSize: '2.2rem',
    fontWeight: 700,
    lineHeight: '28px',
  },
  h4: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: '24px',
  },
  h5: {
    fontSize: '1.4rem',
    fontWeight: 700,
    lineHeight: '20px',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '16px',
  },
  p: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '12px',
  },
};

export {
  FontProps,
  ThemeFontsProps,
  ThemeFontColorProps,
  lightFontsColors,
  darkFontsColors,
  fonts,
};
