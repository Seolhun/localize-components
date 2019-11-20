import React, { FC, ReactNode } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  ILocalizeTheme,
  LocalizeThemes,
  LocalizeThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getThemeColorStyle,
  getThemeHoverStyle,
  getValidThemeObject,
} from '@seolhun/localize-components-styled-utils';

export interface ChipProps {
  children: ReactNode | string;
  // isNotRequired
  /**
   * Set this to change Chip className
   * @default undefined
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
   * @default LocalizeTheme.primaryColor = royalblue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change Chip subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;
  /**
   * Set this to change Chip css
   * @default {}
   */
  css?: {};
}

const StyledChip = styled.button<ChipProps, ILocalizeTheme>(
  ({
    mainColor,
    subColor,
    theme,
  }) => {
    const validTheme = getValidThemeObject({ mainColor, subColor }, theme);
    return {
      borderRadius: '6px',
      border: `1px solid ${validTheme.subColor}`,
      backgroundColor: validTheme.mainColor,
      color: getThemeColorStyle(validTheme.mainColor),
      cursor: 'pointer',
      height: 'auto',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s',
      verticalAlign: 'middle',

      '&:not(:disabled):not(.disabled)': {
        cursor: 'pointer',
      },

      '&:hover': {
        backgroundColor: getThemeHoverStyle(validTheme.mainColor),
        borderColor: getThemeHoverStyle(validTheme.subColor),
      },

      '&:disabled': {
        backgroundColor: LocalizeThemes.lightgrey,
        color: LocalizeThemes.white,
        cursor: 'not-allowed',
      },
    };
  }
);

export const Chip: FC<ChipProps> = ({
  children,
  className = '',
  css = {},
  ...props
}) => {
  return (
    <StyledChip
      className={classnames('__Localize__', className)}
      css={css}
      {...props}
    >
      {children}
    </StyledChip>
  );
};

export default Chip;
