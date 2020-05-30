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

const fonts: ThemeFontsProps = {
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
};

export { FontProps, ThemeFontsProps, fonts };
