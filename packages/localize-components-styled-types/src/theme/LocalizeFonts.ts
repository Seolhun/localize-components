export interface FontProps {
  fontSize: any;
  fontWeight: any;
  lineHeight: any;
}

export interface ThemeFontsProps {
  h1: FontProps;
  h2: FontProps;
  h3: FontProps;
  h4: FontProps;
  h5: FontProps;
  h6: FontProps;
  p: FontProps;
}

export interface ThemeFontColorProps {
  highlightColor: string;
  primaryColor: string;
  secondaryColor: string;
}

export const lightFontsColors: ThemeFontColorProps = {
  highlightColor: '#3A6FFE',
  primaryColor: '#282c35',
  secondaryColor: '#282c35',
};

export const darkFontsColors: ThemeFontColorProps = {
  highlightColor: '#386BF8',
  primaryColor: '#282c35',
  secondaryColor: '#282c35',
};

export const fonts: ThemeFontsProps = {
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
