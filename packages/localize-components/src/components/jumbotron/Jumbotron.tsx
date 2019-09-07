import React, { ReactNode, FunctionComponent } from 'react';

import styled from '@emotion/styled';

import {
  LocalizeTheme,
  LocalizeThemesType,
  LocalizeThemes,
} from '@seolhun/localize-components-styled-types';
import {
  getValidTheme,
  getIsLightenTheme,
  createMediaQueryCondition,
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
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
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
  ({ mainColor = LocalizeTheme.primaryColor, css = {} }) => {
    const getStyledColor = () => {
      if (getIsLightenTheme(mainColor)) {
        return LocalizeThemes.dark_grey;
      }
      return LocalizeThemes.white;
    };

    return {
      backgroundColor: getValidTheme(mainColor),
      color: getStyledColor(),
      height: 'auto',
      width: '100%',
      ...css,
    };
  }
);

const StyledJumbotronContainer = styled.div<JumbotronProps>({
  [`@media ${createMediaQueryCondition('XS')}`]: {
    padding: '3px',
  },
  [`@media ${createMediaQueryCondition('SM')}`]: {
    padding: '5px',
  },
  [`@media ${createMediaQueryCondition('MD')}`]: {
    padding: '10px',
  },
  padding: '35px',
})

export const Jumbotron: FunctionComponent<JumbotronProps> = ({
  children,
  className,
  description,
  title,
  ...props
}) => {
  return (
    <StyledJumbotron
      className={classnames('__Localize__Jumbotron', className)}
      {...props}
    >
      <StyledJumbotronContainer>
        {title && <h1>{title}</h1>}
        {description && <h5>{description}</h5>}
        {children && children}
      </StyledJumbotronContainer>
    </StyledJumbotron>
  );
};

export default Jumbotron;
