import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';

import {
  LocalizeThemeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import {
  createMediaQueryCondition,
  getValidThemeObject,
  getThemeColorStyle,
} from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

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
  padding: '35px',

  [`@media ${createMediaQueryCondition('XS')}`]: {
    padding: '3px',
  },
  [`@media ${createMediaQueryCondition('SM')}`]: {
    padding: '5px',
  },
  [`@media ${createMediaQueryCondition('MD')}`]: {
    padding: '10px',
  },
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
      className={classnames('__Localize__Jumbotron', className)}
      css={css}
    >
      <StyledJumbotronContainer>
        {title && <h1>{title}</h1>}
        {description && <h5>{description}</h5>}
        {children && children}
      </StyledJumbotronContainer>
    </StyledJumbotronWrapper>
  );
};

export default Jumbotron;
