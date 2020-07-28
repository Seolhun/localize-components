import React from 'react';
import styled from '@emotion/styled';
import { WidthProperty } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export type InputItemDirection = 'left' | 'right';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface BaseInputProps extends InputProps {
  ref?: any;

  error?: string;

  width?: WidthProperty<string>;

  itemNode?: React.ReactNode;

  /**
   * @default right
   */
  itemDirection?: InputItemDirection;

  /**
   * @default 40px
   */
  itemWidth?: WidthProperty<string>;
}

const BaseInput = styled.input<BaseInputProps, LocalizeThemeProps>(
  ({ theme, error, width, itemNode, itemDirection, itemWidth }) => {
    const fonts = theme.fonts.font1;
    const hasItem = !!itemNode;
    return {
      ...fonts,
      width,
      boxSizing: 'border-box',
      borderRadius: '5px',
      border: `1px solid ${error ? theme.colors.error : theme.colors.neutral6}`,
      padding: '10px 12px',
      paddingRight: hasItem && itemDirection === 'right' ? itemWidth : '12px',
      paddingLeft: hasItem && itemDirection === 'left' ? itemWidth : '12px',
      outline: 0,
      color: theme.colors.neutral6,
      backgroundColor: theme.colors.neutral1,

      '&::placeholder': {
        color: theme.colors.neutral6,
      },
      '&:focus, &:active': {
        borderColor: `${error ? theme.colors.error : theme.colors.primary}`,
      },
      '&:disabled': {
        backgroundColor: theme.colors.neutral4,
        borderColor: theme.colors.neutral4,
        color: theme.colors.neutral3,
        cursor: 'not-allowed',
      },
      '&:read-only': {
        backgroundColor: theme.colors.neutral4,
        borderColor: theme.colors.neutral4,
        cursor: 'auto',
      },
    };
  },
);

export { BaseInput };
export default BaseInput;
