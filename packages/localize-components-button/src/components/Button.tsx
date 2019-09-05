import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  Size,
  ThemeConfig,
  Themes,
  StyledProps,
} from '@seolhun/localize-components-styled-types';
import {
  getValidTheme,
  getThemeHoverStyle,
  getThemeColorStyle,
} from '@seolhun/localize-components-styled-utils';

export interface ButtonProps extends StyledProps {
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

const StyledButton = styled.button<ButtonProps>(
  ({
    fontSize = 12,
    mainColor = ThemeConfig.primaryColor,
    size = Size.MEDIUM,
    css = {},
  }) => {
    const styledSize = () => {
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
      backgroundColor: getValidTheme(mainColor),
      height: 'auto',
      padding: styledSize(),

      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s',
      userSelect: 'none',

      color: getThemeColorStyle(mainColor),
      fontSize: `${fontSize}px`,
      fontWeight: 500,
      textDecoration: 'none',
      textAlign: 'center',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

      '&:hover': {
        backgroundColor: getThemeHoverStyle(mainColor),
      },

      '&:disabled': {
        backgroundColor: Themes.light_grey,
        color: Themes.white,
        cursor: 'not-allowed',
      },
      ...css,
    };
  }
);

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => (
  <StyledButton
    className={classnames('__Localize__Button', className)}
    type="button"
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
