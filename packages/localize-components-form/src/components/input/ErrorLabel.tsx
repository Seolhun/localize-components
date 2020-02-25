import React from 'react';

import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

export interface ErrorLabelProps {}

const StyledErrorSpan = styled.span<{}, ILocalizeTheme>(({ theme }) => {
  const fonts = theme.localized.fonts.body400;
  return {
    ...fonts,
    display: 'flex',
    alignItems: 'center',
    color: theme.localized.colors.error,
    marginTop: '12px',
  };
});

export const ErrorLabel: React.FC<ErrorLabelProps> = ({ children }) => (
  <StyledErrorSpan>{children}</StyledErrorSpan>
);
