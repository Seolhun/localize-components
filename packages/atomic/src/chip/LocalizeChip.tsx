import React from 'react';

import styled from '@emotion/styled';
import { lighten } from 'polished';
import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeStyleProps,
  LocalizeSize,
} from '@seolhun/localize-components-styled-types';
import { getSizePaddingStyles } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Chip';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
export interface LocalizeChipProps extends LocalizeStyleProps, ButtonProps {
  /**
   * Set this to change LocalizeButton size
   * @default md
   */
  size?: LocalizeSize;
}

const StyledLocalizeChip = styled.button<LocalizeChipProps, LocalizeThemeProps>(
  ({ theme, primaryColor, fontColor, fontKey = 'normal', size = 'md' }) => {
    const fonts = theme.fonts[fontKey];
    const mainColor = theme.colors[primaryColor || 'primary01'];
    const color = theme.colors[fontColor || 'white'];
    return {
      ...fonts,
      height: 'auto',
      padding: getSizePaddingStyles(size),
      color,
      backgroundColor: mainColor,
      border: `1px solid ${mainColor}`,
      borderRadius: '6px',
      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s',
      userSelect: 'none',

      '&:not(:disabled):not(.disabled)': {
        cursor: 'pointer',
      },

      '&:hover': {
        backgroundColor: lighten(0.05, mainColor),
        borderColor: mainColor,
      },

      '&:disabled': {
        backgroundColor: theme.colors.disabled,
        color: theme.colors.disabled,
        cursor: 'not-allowed',
      },
    };
  },
);

export const LocalizeChip: React.FC<LocalizeChipProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <StyledLocalizeChip
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
    >
      {children}
    </StyledLocalizeChip>
  );
};

export default LocalizeChip;
