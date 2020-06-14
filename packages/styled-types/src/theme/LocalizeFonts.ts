type localizeFontType = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

interface LocalizeFontsProps {
  h1: localizeFontType;
  h2: localizeFontType;
  h3: localizeFontType;
  h4: localizeFontType;
  h5: localizeFontType;
  h6: localizeFontType;
  p: localizeFontType;
  big: localizeFontType;
  normal: localizeFontType;
  small: localizeFontType;
}

const localizeFonts: LocalizeFontsProps = {
  h1: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: '3rem',
  },
  h2: {
    fontSize: '2.6rem',
    fontWeight: 700,
    lineHeight: '2.6rem',
  },
  h3: {
    fontSize: '2.2rem',
    fontWeight: 700,
    lineHeight: '2.2rem',
  },
  h4: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: '1.8rem',
  },
  h5: {
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: '1.4rem',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1rem',
  },
  p: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  big: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: '1.4rem',
  },
  normal: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  small: {
    fontSize: '0.8rem',
    fontWeight: 300,
    lineHeight: '0,8rem',
  },
};

export { LocalizeFontsProps, localizeFonts };
