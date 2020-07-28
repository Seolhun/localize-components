interface FontProps {
  fontSize: any;
  fontWeight: any;
  lineHeight: any;
}

interface LocalizeThemeFontsProps {
  h1: FontProps;
  h2: FontProps;
  h3: FontProps;
  h4: FontProps;
  h5: FontProps;
  h6: FontProps;
  p: FontProps;
  /**
   * @name Theme
   */
  font1: FontProps;
  font2: FontProps;
  font3: FontProps;
  font4: FontProps;
  font5: FontProps;
  font6: FontProps;
  font7: FontProps;
  font8: FontProps;
  font9: FontProps;
  font10: FontProps;
}

const localizeFonts: LocalizeThemeFontsProps = {
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
  /**
   * @name Theme
   */
  font1: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  font2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
  },
  font3: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  font4: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '28px',
  },
  font5: {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '32px',
  },
  font6: {
    fontSize: '30px',
    fontWeight: 400,
    lineHeight: '38px',
  },
  font7: {
    fontSize: '38px',
    fontWeight: 400,
    lineHeight: '46px',
  },
  font8: {
    fontSize: '46px',
    fontWeight: 400,
    lineHeight: '54px',
  },
  font9: {
    fontSize: '56px',
    fontWeight: 400,
    lineHeight: '64px',
  },
  font10: {
    fontSize: '68px',
    fontWeight: 400,
    lineHeight: '76px',
  },

};

export { FontProps, LocalizeThemeFontsProps, localizeFonts };
