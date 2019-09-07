import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  LocalizeThemes,
  LocalizeThemesType,
  LocalizeTheme,
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
   * @default LocalizeTheme.primaryColor = royal_blue
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

const StyledChip = styled.button<ChipProps>(
  ({
    mainColor = LocalizeTheme.primaryColor,
    subColor = LocalizeTheme.secondaryColor,
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
        backgroundColor: LocalizeThemes.light_grey,
        color: LocalizeThemes.white,
        cursor: 'not-allowed',
      },
    };
  }
);

const Chip: FunctionComponent<ChipProps> = ({
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
