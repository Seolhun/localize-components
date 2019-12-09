import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';

import {
  LocalizeThemeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import {
  getValidThemeObject,
  getThemeColorStyle,
} from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

const DEFAULT_CLASSNAME = '__Localize__Jumbotron'

export interface JumbotronProps extends LocalizeThemeStyledProps {
  // isNotRequired
  /**
   * Set this to change Jumbotron rendering children node
   * @default null
   */
  children?: ReactNode;
  /**
   * Set this to change Jumbotron className
   * @default undefined
   */
  className?: string;
  /**
   * Set this to change Jumbotron description
   * @default ''
   */
  description?: string;
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

const StyledJumbotronWrapper = styled.div<JumbotronProps, ILocalizeTheme>(({
  theme,
  ...props
}) => {
    const validTheme = getValidThemeObject(props, theme);
    return {
      backgroundColor: validTheme.mainColor,
      color: getThemeColorStyle(validTheme.mainColor),
      height: 'auto',
      width: '100%',
    };
  }
);

const StyledJumbotronContainer = styled.div<JumbotronProps>({
  height: '100%',
})

export const Jumbotron: FunctionComponent<JumbotronProps> = ({
  children,
  className,
  description,
  title,
  css = {},
  ...props
}) => {
  return (
    <StyledJumbotronWrapper
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
      css={css}
    >
      <StyledJumbotronContainer
        className={`${DEFAULT_CLASSNAME}__Container`}
      >
        {title && <h1>{title}</h1>}
        {description && <h5>{description}</h5>}
        {children && children}
      </StyledJumbotronContainer>
    </StyledJumbotronWrapper>
  );
};

export default Jumbotron;
