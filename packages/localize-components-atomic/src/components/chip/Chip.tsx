import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  Themes,
  ThemesType,
  ThemeConfig,
} from '@seolhun/localize-components-styled-types';
import {
  getValidTheme,
  getThemeHoverStyle,
  getThemeColorStyle,
} from '@seolhun/localize-components-styled-utils';

export interface ChipProps {
  children: ReactNode | string;
  // isNotRequired
  /**
   * Set this to change Chip className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Chip onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Chip onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change Chip onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Chip onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change Chip onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change Chip mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Chip subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Chip style
   * @default {}
   */
  style?: {};
}

const StyledChip = styled.button<ChipProps>(({
  mainColor = ThemeConfig.MAIN_THEME,
  subColor = ThemeConfig.SUB_THEME,
  style = {},
}) => {
  return {
    borderRadius: '6px',
    border: `1px solid ${getValidTheme(subColor)}`,
    backgroundColor: getValidTheme(mainColor),
    color: getThemeColorStyle(mainColor),
    cursor: 'pointer',
    height: 'auto',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s',
    verticalAlign: 'middle',

    '&:not(:disabled):not(.disabled)': {
      cursor: 'pointer',
    },

    '&:hover': {
      backgroundColor: getThemeHoverStyle(mainColor),
      borderColor: getThemeHoverStyle(subColor),
    },

    '&:disabled': {
      backgroundColor: Themes.light_gray,
      color: Themes.white,
      cursor: 'not-allowed',
    },
    ...style,
  }
})

const Chip: FunctionComponent<ChipProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <StyledChip
      className={classnames(
        '__Localize__',
        className,
      )}
      { ...props }
    >
      {children}
    </StyledChip>
  );
};

export default Chip;
