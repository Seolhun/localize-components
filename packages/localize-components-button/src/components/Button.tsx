import React, { FunctionComponent, ReactNode } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  Size,
  LocalizeThemes,
  LocalizeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import {
  getThemeHoverStyle,
  getThemeColorStyle,
  getValidThemeObject,
} from '@seolhun/localize-components-styled-utils';

export interface ButtonProps extends LocalizeStyledProps {
  // isRequired
  /**
   * Set this to change Button rendering children node
   * @default null
   */
  children: ReactNode;

  // isNotRequired
  /**
   * Set this to change Button disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Set this to change Button font-size
   * @default 12
   */
  fontSize?: number;
  /**
   * Set this to change Button onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Button onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change Button onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Button onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change Button onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
}

const StyledButton = styled.button<ButtonProps, ILocalizeTheme>(
  ({
    fontSize = 12,
    size = Size.MEDIUM,
    theme,
    ...props
  }) => {
    const validTheme = getValidThemeObject(props, theme);
    const getStyleBySize = () => {
      switch (size) {
        case Size.LARGE:
          return '15px 30px';
        case Size.MEDIUM:
          return '10px 25px';
        default:
          return '5px 20px';
      }
    };

    return {
      display: 'inline-block',
      borderRadius: '6px',
      border: '1px solid transparent',
      backgroundColor: validTheme.mainColor,
      height: 'auto',
      padding: getStyleBySize(),

      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s',
      userSelect: 'none',

      color: getThemeColorStyle(validTheme.mainColor),
      fontSize: `${fontSize}px`,
      fontWeight: 500,
      textDecoration: 'none',
      textAlign: 'center',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

      '&:hover': {
        backgroundColor: getThemeHoverStyle(validTheme.mainColor),
      },

      '&:disabled': {
        backgroundColor: LocalizeThemes.light_grey,
        color: LocalizeThemes.white,
        cursor: 'not-allowed',
      },
    };
  }
);

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  css = {},
  ...props
}) => (
  <StyledButton
    {...props}
    className={classnames('__Localize__Button', className)}
    type='button'
    css={css}
  >
    {children}
  </StyledButton>
);

export default Button;
