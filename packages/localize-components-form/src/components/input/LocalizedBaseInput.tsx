import React from 'react';

import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

export interface LocalizedBaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  width?: string | number;
}

export const LocalizedBaseInput = styled.input<
  LocalizedBaseInputProps,
  ILocalizeTheme
>(({ theme, width, error }) => {
  const fonts = theme.localized.fonts.body500;
  return {
    ...fonts,
    width,
    boxSizing: 'border-box',
    borderRadius: '5px',
    // backgroundColor: theme.localized.color,
    border: `1px solid ${
      error ? theme.localized.colors.error : theme.localized.colors.uiColor03
    }`,
    padding: '10px 12px',
    outline: 0,
    color: theme.localized.colors.uiColor08,
    ['&:focus, &:active']: {
      border: `1px solid ${
        error ? theme.localized.colors.error : theme.localized.colors.primary01
      }`,
    },
  };
});
