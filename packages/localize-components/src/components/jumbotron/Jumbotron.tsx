import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';

import {
  ThemeConfig,
  ThemesType,
  Themes,
} from '@seolhun/localize-components-styled-types';
import {
  getValidTheme,
  getIsLightenTheme,
} from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

export interface JumbotronProps {
  // isNotRequired
  /**
   * Set this to change Jumbotron rendering children node
   * @default null
   */
  children?: ReactNode;
  /**
   * Set this to change Jumbotron className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Jumbotron description
   * @default ''
   */
  description?: string;
  /**
   * Set this to change Jumbotron mainColor
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Jumbotron onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Jumbotron onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change Jumbotron onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Jumbotron onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change Jumbotron onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change Jumbotron title
   * @default ''
   */
  title?: string;

  /**
   * Set this to change Jumbotron css
   * @default {}
   */
  css?: {};
}

const StyledJumbotron = styled.div<JumbotronProps>(
  ({ mainColor = ThemeConfig.primaryColor }) => {
    const styledColor = () => {
      if (getIsLightenTheme(mainColor)) {
        return Themes.dark_gray;
      }
      return Themes.white;
    };

    return {
      backgroundColor: getValidTheme(mainColor),
      color: styledColor(),
      height: 'auto',
      minHeight: '200px',
      padding: '35px',
      width: '100%',
    };
  }
);

const Jumbotron: FunctionComponent<JumbotronProps> = ({
  children = null,
  className = '',
  description = null,
  title = null,
  css = {},
  ...props
}) => {
  return (
    <StyledJumbotron
      className={classnames('__Localize__', className)}
      css={css}
      {...props}
    >
      {title && <h1>{title}</h1>}
      {description && <h5>{description}</h5>}
      {children && children}
    </StyledJumbotron>
  );
};

export default Jumbotron;
