import React from 'react';

import styled from '@emotion/styled';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export interface LocalizeBaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;

  width?: string | number;
}

export const LocalizeBaseInput = styled.input<
  LocalizeBaseInputProps,
  LocalizeThemeProps
>(({ theme, width, error }) => {
  const fonts = theme.fonts.h5;
  return {
    ...fonts,
    width,
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: `1px solid ${error ? theme.colors.error : theme.colors.uiColor03}`,
    padding: '10px 12px',
    outline: 0,
    color: theme.colors.uiColor08,
    ['&:focus, &:active']: {
      border: `1px solid ${
        error ? theme.colors.error : theme.colors.primary01
      }`,
    },
  };
});
