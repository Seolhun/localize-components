import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Jumbotron';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeJumbotronProps extends LocalizeProps, DivProps {
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
      backgroundColor: bgColor ? theme.colors[bgColor] : theme.colors.primary,
      color: fontColor ? theme.colors[fontColor] : theme.colors.neutral1,
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
    <StyledJumbotronWrapper {...props} className={classnames(CLASSNAME, className)}>
      <StyledJumbotronContainer className={`${CLASSNAME}__Container`}>
        {title && <h1>{title}</h1>}
        {description && <h5>{description}</h5>}
        {children && children}
      </StyledJumbotronContainer>
    </StyledJumbotronWrapper>
  );
};

export { LocalizeJumbotron };
export default LocalizeJumbotron;
