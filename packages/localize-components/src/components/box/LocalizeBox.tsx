import React from 'react';

import styled from '@emotion/styled';

import {
  LocalizeThemeProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

import classnames from 'classnames';

const DEFAULT_CLASSNAME = '__Localize__Box';

export interface LocalizeBoxProps
  extends LocalizeBaseStyledProps,
    React.HTMLAttributes<HTMLDivElement> {}

const StyledBoxWrapper = styled.div<LocalizeBoxProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      backgroundColor: theme.colors.primaryBackground01,
      color: theme.colors.uiColor08,
      height: 'auto',
      width: '100%',
      borderRadius: '5px',
    };
  },
);

const StyledBoxContainer = styled.div<LocalizeBoxProps>({
  width: '100%',
  height: '100%',
});

export const LocalizeBox: React.FC<LocalizeBoxProps> = ({
  children,
  className,
  css = {},
  ...props
}) => {
  return (
    <StyledBoxWrapper
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
    >
      <StyledBoxContainer className={`${DEFAULT_CLASSNAME}__Container`}>
        {children}
      </StyledBoxContainer>
    </StyledBoxWrapper>
  );
};

export default LocalizeBox;
