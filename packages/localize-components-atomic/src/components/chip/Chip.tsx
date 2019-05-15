import React, { ReactNode, SFC } from 'react';

import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

import classnames from 'classnames';

import {
  Themes,
  ThemesType,
  ThemeConfig,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getValidTheme,
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
   * Set this to change Chip ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Chip ours subColor
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
}) => {
  const styledColorByMain = () => {
    if (getIsLightenTheme(mainColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  };

  const styledHoverStyle = (color) => {
    if (getIsLightenTheme(color)) {
      return darken(0.1, getValidTheme(color));
    }
    return lighten(0.1, getValidTheme(color));
  }

  return {
    borderRadius: '6px',
    border: `1px solid ${getValidTheme(subColor)}`,
    backgroundColor: getValidTheme(mainColor),
    color: styledColorByMain(),
    cursor: 'pointer',
    height: 'auto',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s',
    verticalAlign: 'middle',

    '&:not(:disabled):not(.disabled)': {
      cursor: 'pointer',
    },

    '&:hover': {
      backgroundColor: styledHoverStyle(mainColor),
      borderColor: styledHoverStyle(subColor),
    },

    '&:disabled': {
      backgroundColor: Themes.light_gray,
      color: Themes.white,
      cursor: 'not-allowed',
    }
  }
})

const Chip: SFC<ChipProps> = ({
  children,
  // IsNotRequired
  className = null,
  mainColor = ThemeConfig.MAIN_THEME,
  subColor = ThemeConfig.MAIN_THEME,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  style = {},
}) => {
  return (
    <StyledChip
      className={classnames(
        '__Localize__',
        className,
      )}
      mainColor={mainColor}
      subColor={subColor}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      style={style}
    >
      {children}
    </StyledChip>
  );
};

export default Chip;
