import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Jumbotron';

interface LocalizeJumbotronProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LocalizeProps {
  /**
   * Set this to change Jumbotron description
   * @default ''
   */
  description?: string;

  /**
   * Set this to change Jumbotron title
   * @default ''
   */
  title?: string;
}

const StyledJumbotronWrapper = styled.div<LocalizeProps, LocalizeThemeProps>(
  ({ theme, bgColor, fontColor }) => {
    return {
      backgroundColor: bgColor ? theme.colors[bgColor] : theme.colors.primary01,
      color: fontColor ? theme.fontColors[fontColor] : theme.colors.uiColor08,
      height: 'auto',
      width: '100%',
      padding: '1rem 2rem',
      borderRadius: '5px',
    };
  },
);

const StyledJumbotronContainer = styled.div<LocalizeJumbotronProps>({
  height: '100%',
  width: '100%',
});

const LocalizeJumbotron: React.FC<LocalizeJumbotronProps> = ({
  children,
  className,
  description,
  title,
  ...props
}) => {
  return (
    <StyledJumbotronWrapper
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
    >
      <StyledJumbotronContainer className={`${DEFAULT_CLASSNAME}__Container`}>
        {title && <h1>{title}</h1>}
        {description && <h5>{description}</h5>}
        {children && children}
      </StyledJumbotronContainer>
    </StyledJumbotronWrapper>
  );
};

export { LocalizeJumbotron, LocalizeJumbotronProps };

export default LocalizeJumbotron;
