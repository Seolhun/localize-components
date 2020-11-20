import React from 'react';
import { lighten } from 'polished';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
  LocalizeSize,
  getLocalizeSizeBy,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Button';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type ExtentionProps = LocalizeProps & ButtonProps;

export interface LocalizeButtonProps extends ExtentionProps {
  /**
   * Set this to change font Color
   * @default conversion10
   */
  fontColor?: ExtentionProps['fontColor'];

  /**
   * Set this to change backgroundColor
   * @default primary
   */
  bgColor?: ExtentionProps['bgColor'];

  /**
   * Set this to change borderColor
   * @default undefined
   */
  bdColor?: ExtentionProps['bdColor'];

  /**
   * Set this to change font color
   * @default sm
   */
  size?: LocalizeSize;

  /**
   * Set this to change border radius
   * @default 4px
   */
  borderRadius?: string;
}

const StyledLocalizeButton = styled.button<LocalizeButtonProps, LocalizeThemeProps>(
  ({
    theme,
    size,
    fontColor = 'conversion10',
    bgColor = 'primary',
    bdColor,
    borderRadius = '4px',
  }) => {
    const color = theme.colors[fontColor];
    const backgroundColor = theme.colors[bgColor];
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      color,
      backgroundColor,
      padding: getLocalizeSizeBy(size),
      border: `1px solid ${borderColor}`,
      borderRadius,

      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: lighten(0.1, backgroundColor),
        borderColor: lighten(0.1, borderColor),
      },
      '&:disabled': {
        backgroundColor: theme.colors.neutral4,
        borderColor: theme.colors.neutral5,
        color: theme.colors.neutral8,
        cursor: 'not-allowed',
      },
    };
  },
);

const LocalizeButton = React.forwardRef<HTMLButtonElement, LocalizeButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <StyledLocalizeButton
        {...props}
        ref={ref}
        className={classnames(DEFAULT_CLASSNAME, className)}
      >
        {children}
      </StyledLocalizeButton>
    );
  },
);

export { LocalizeButton };
export default LocalizeButton;
