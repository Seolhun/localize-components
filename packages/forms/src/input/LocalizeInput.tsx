import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';
import { LocalizeIcon, LocalizeIconProps } from '@seolhun/localize-components-icon';

import { LocalizeFormWrapper } from '../wrapper';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Input';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = InputProps & LocalizeProps & LocalizeFormStateProps;

export interface LocalizeInputProps extends Props {
  /**
   * To change icon by font-awesome
   */
  icon?: LocalizeIconProps['icon'];

  /**
   * To change icon color
   */
  iconColor?: LocalizeIconProps['color'];
}

const LocalizeInputContainer = styled.div<LocalizeFormStateProps, LocalizeThemeProps>(() => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    [`${LocalizeIcon}`]: {
      position: 'absolute',
      top: '14px',
      right: '10px',
    },
  };
});

const StyledInput = styled.input<LocalizeInputProps, LocalizeThemeProps>(
  ({
    theme,
    fontColor = 'conversion10',
    bgColor = 'conversion1',
    bdColor = 'primary',
    error,
    visibleIcon,
  }) => {
    const color = theme.colors[fontColor];
    const backgroundColor = theme.colors[bgColor];
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      color,
      width: '100%',
      height: '100%',
      ...(visibleIcon
        ? {
            padding: '10px 32px 10px 12px',
          }
        : {
            padding: '10px 12px',
          }),
      backgroundColor,
      border: `1px solid ${error ? theme.colors.error : theme.colors.neutral5}`,
      borderRadius: '2px',
      outline: 'none',
      // WARNING: Not support IE
      caretColor: theme.colors.primary,
      // for Safari boxShadow
      boxShadow: 'none !important',
      WebkitAppearance: 'none',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        borderColor,
      },
      '&:focus': {
        border: `1px solid ${error ? theme.colors.error : lighten(0.1, borderColor)}`,
      },
      '&:disabled': {
        backgroundColor: theme.colors.neutral4,
        borderColor: theme.colors.neutral5,
        color: theme.colors.neutral8,
      },
      '&::placeholder': {
        color: theme.colors.neutral5,
      },
    };
  },
);

const LocalizeInput = React.forwardRef<HTMLInputElement, LocalizeInputProps>(
  ({ className, label, help, error, visibleIcon = true, icon, iconColor, ...props }, ref) => {
    const isSelectable = !props.disabled && !props.readOnly;

    return (
      <LocalizeFormWrapper
        className={classnames(CLASSNAME, className)}
        label={label}
        help={help}
        error={error}
      >
        <LocalizeInputContainer>
          <StyledInput
            {...props}
            ref={ref}
            error={error}
            visibleIcon={visibleIcon}
            autoComplete="false"
          />
          {isSelectable && icon && <LocalizeIcon iconSize="16px" icon={icon} color={iconColor} />}
        </LocalizeInputContainer>
      </LocalizeFormWrapper>
    );
  },
);

export { LocalizeInput };
export default LocalizeInput;
