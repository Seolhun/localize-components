import { PropertiesFallback } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const LocalizeCellStyle = (theme: LocalizeThemeProps): any => {
  return {
    color: theme.colors['conversion10'],
    padding: '0 10px',

    borderRight: `1px solid ${theme.colors.neutral3}`,
    borderBottom: `1px solid ${theme.colors.neutral3}`,

    '&:first-of-type': {
      borderLeft: `1px solid ${theme.colors.neutral3}`,
    },
  } as PropertiesFallback<HTMLTableCellElement>;
};

export { LocalizeCellStyle };
export default LocalizeCellStyle;
