import { PropertiesFallback, Property } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellHorizontalAlignType, LocalizeCellVerticalAlignType } from '../LocalizeTableTypes';

export interface LocalizeCellProps {
  /**
   * Set this to change cell width
   */
  width?: Property.Width;

  /**
   * Set this to change cell height
   */
  height?: number;

  /**
   * Set this to change cell vertical align
   */
  verticalAlign?: LocalizeCellVerticalAlignType;

  /**
   * Set this to change cell horizontal align
   */
  horizontalAlign?: LocalizeCellHorizontalAlignType;

  /**
   * Set this to change cell freezing
   */
  freezing?: boolean;
}

const LocalizeCellStyle = (theme: LocalizeThemeProps): any => {
  return {
    color: theme.colors['conversion10'],
    padding: '0 10px',
  } as PropertiesFallback<HTMLTableCellElement>;
};

export { LocalizeCellStyle };
export default LocalizeCellStyle;
