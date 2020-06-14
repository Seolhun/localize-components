import React from 'react';

import styled from '@emotion/styled';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export interface ErrorLabelProps {}

const StyledErrorSpan = styled.span<{}, LocalizeThemeProps>(({ theme }) => {
  const fonts = theme.fonts.h5;
  return {
    ...fonts,
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.error,
    marginTop: '12px',
  };
});

export const ErrorLabel: React.FC<ErrorLabelProps> = ({ children }) => (
  <StyledErrorSpan>{children}</StyledErrorSpan>
);
