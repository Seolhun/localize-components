import React, { ReactNode, SFC } from 'react';

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

interface JumbotronProps {
  // isNotRequired
  /**
   * Set this to change Button rendering children node
   * @default null
   */
  children?: ReactNode;
  /**
   * Set this to change Button className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Button description
   * @default ''
   */
  description?: string;
  /**
   * Set this to change Button ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
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
  /**
   * Set this to change Button title
   * @default ''
   */
  title?: string;

  /**
   * Set this to change Button style
   * @default {}
   */
  style?: {};
}

const StyledJumbotron = styled.div<JumbotronProps>(({
  mainColor = ThemeConfig.MAIN_THEME,
}) => {
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
  }
});

const Jumbotron: SFC<JumbotronProps> = ({
  children = null,
  className = '',
  description = null,
  mainColor = ThemeConfig.MAIN_THEME,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  title = null,

  style = {},
}) => {
  return (
    <StyledJumbotron
      className={classnames(
        className,
        '__Localize__',
      )}
      mainColor={mainColor}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      css={style}
    >
      {title && (
        <h1>{title}</h1>
      )}
      {description && (
        <h5>{description}</h5>
      )}
      {children && (
        children
      )}
    </StyledJumbotron>
  );
}
export {
  JumbotronProps,
};

export default Jumbotron;
