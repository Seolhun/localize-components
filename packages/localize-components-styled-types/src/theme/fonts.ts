export interface Font {
  fontSize: any;
  fontWeight: any;
  lineHeight: any;
}

export interface ThemeFontsProps {
  header700: Font;
  header500: Font;
  subHeader500: Font;
  title700: Font;
  subTitle700: Font;
  title500: Font;
  subTitle500: Font;
  body500: Font;
  body400: Font;
}

export const fonts: ThemeFontsProps = {
  header700: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '36px',
  },
  header500: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '36px',
  },
  subHeader500: {
    fontSize: '21px',
    fontWeight: 500,
    lineHeight: '31px',
  },
  title700: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '27px',
  },
  subTitle700: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  title500: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '27px',
  },
  subTitle500: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  body500: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  body400: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
};
