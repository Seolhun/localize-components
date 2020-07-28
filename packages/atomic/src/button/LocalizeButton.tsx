import React from 'react';
import { lighten } from 'polished';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
  LocalizeSize,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Button';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

interface LocalizeButtonProps extends LocalizeProps, ButtonProps {
  size?: LocalizeSize;

  borderRadius?: string;
}

const getSizeStyle = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl':
      return '1.2rem 2rem';
    case 'lg':
      return '1.1rem 1.8rem';
    case 'md':
      return '1rem 1.6rem';
    case 'sm':
      return '0.9rem 1.4rem';
    default:
      return '0.8rem 1.2rem';
  }
};

const StyledLocalizeButton = styled.button<
  LocalizeButtonProps,
  LocalizeThemeProps
>(({ theme, size = 'md', borderRadius }) => {
  const fonts = theme.fonts.font1;
  return {
    ...fonts,
    display: 'inline-block',
    height: 'auto',
    padding: getSizeStyle(size),
    backgroundColor: theme.colors.primary,
    border: `1px solid transparent`,
    borderRadius,
    color: theme.colors.neutral1,

    textAlign: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
    userSelect: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: lighten(0.1, theme.colors.primary),
      borderColor: theme.colors.primary,
    },

    '&:disabled': {
      backgroundColor: theme.colors.neutral4,
      color: theme.colors.neutral3,
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
