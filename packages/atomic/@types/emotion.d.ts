import '@emotion/react';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

declare module '@emotion/react' {
  export interface Theme extends LocalizeThemeProps {}
}
