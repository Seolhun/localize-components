import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import {
  LocalizeThemeProps,
  LocalizeStyleProps,
  LocalizeSize,
} from '@seolhun/localize-components-styled-types';
import { getSizePaddingStyles } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Button';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

interface LocalizeButtonProps extends LocalizeStyleProps, ButtonProps {
  /**
   * Set this to change LocalizeButton size
   * @default md
   */
  size?: LocalizeSize;
}

const StyledLocalizeButton = styled.button<
  LocalizeButtonProps,
  LocalizeThemeProps
>(({ theme, primaryColor, fontColor, fontKey = 'normal', size = 'md' }) => {
  const fonts = theme.fonts[fontKey];
  const mainColor = theme.colors[primaryColor || 'primary01'];
  const color = theme.colors[fontColor || 'white'];
  return {
    ...fonts,
    display: 'inline-block',
    padding: getSizePaddingStyles(size),
    backgroundColor: mainColor,
    border: `1px solid transparent`,
    borderRadius: '6px',

    color,
    textDecoration: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s',
    userSelect: 'none',

    '&:hover': {
      border: `1px solid ${mainColor}`,
      backgroundColor: lighten(0.05, mainColor),
    },

    '&:disabled': {
      backgroundColor: theme.colors.disabled,
      color: theme.colors.disabled,
      cursor: 'not-allowed',
    },
  };
});

const LocalizeButton: React.FC<LocalizeButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <StyledLocalizeButton
    {...props}
    type="button"
    className={classnames(DEFAULT_CLASSNAME, className)}
  >
    {children}
  </StyledLocalizeButton>
);

export { LocalizeButton, LocalizeButtonProps };
export default LocalizeButton;
