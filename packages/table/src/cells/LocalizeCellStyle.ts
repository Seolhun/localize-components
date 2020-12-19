import { PropertiesFallback } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const LocalizeCellStyle = (theme: LocalizeThemeProps): any => {
  return {
    color: theme.colors['conversion10'],
    padding: '0 10px',
  } as PropertiesFallback<HTMLTableCellElement>;
};

export { LocalizeCellStyle };
export default LocalizeCellStyle;
