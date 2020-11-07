import React from 'react';
import styled from '@emotion/styled';

import { isNil } from '@/utils';

import { LocalizeIcon } from '../../icons';
import { LocalizeFormUIProps } from '../LocalizeFormUITypes';
import LocalizeFormLabel from '../LocalizeFormLabel';
import LocalizeFormDescription from '../LocalizeFormDescription';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface LocalizeInputProps extends InputProps, LocalizeFormUIProps {
  icon?: LocalizeIcon;
}

const LocalizeInputWrapper = styled.div({
  position: 'relative',
  width: '100%',
});

const LocalizeInputContainer = styled.div<
  LocalizeFormUIProps,
  LocalizeThemeProps
>(() => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '44px',

    // TODO: Icon Color by Static
    '.goc-input-state-icon': {
      position: 'absolute',
      top: '14px',
      right: '10px',
    },
  };
});

const StyledInput = styled.input<LocalizeInputProps, LocalizeThemeProps>(
  ({ theme, error, visibleIcon }) => {
    return {
      color: theme.colors.neutral1,
      width: '100%',
      height: '100%',
      ...(visibleIcon
        ? {
            padding: '10px 32px 10px 12px',
          }
        : {
            padding: '10px 12px',
          }),
      outline: 'none',
      backgroundColor: error ? theme.colors.error : theme.colors.neutral1,
      border: `1px solid ${error ? theme.colors.error : theme.colors.neutral5}`,
      borderRadius: '2px',

      // WARNING: Not support IE
      caretColor: theme.colors.info,
      // for Safari boxShadow
      boxShadow: 'none !important',
      WebkitAppearance: 'none',

      '&:focus': {
        border: `1px solid ${error ? theme.colors.error : theme.colors.info}`,
      },
      '&:read-only, &:disabled': {
        fontWeight: 400,
        backgroundColor: theme.colors.neutral2,
        border: `1px solid ${theme.colors.neutral3}`,
        color: theme.colors['black-25'],
      },
      '&::placeholder': {
        color: theme.colors['black-25'],
      },
    };
  },
);

const LocalizeInput = React.forwardRef<HTMLInputElement, LocalizeInputProps>(
  ({ label, help, error, visibleIcon = true, ...props }, ref) => {
    const initialValue = props.defaultValue || props.value;
    const isSuccess = !error && !isNil(initialValue);
    const isSelectable = !props.disabled && !props.readOnly;

    return (
      <LocalizeInputWrapper>
        {label && <LocalizeFormLabel>{label}</LocalizeFormLabel>}
        <LocalizeInputContainer>
          <StyledInput
            {...props}
            ref={ref}
            error={error}
            visibleIcon={visibleIcon}
            autoComplete="false"
          />
          {isSelectable && icon && (error || isSuccess) && (
            <LocalizeIcon iconSize="16px" icon={icon} color={iconColor} />
          )}
        </LocalizeInputContainer>
        {help && (
          <LocalizeFormDescription error={error}>
            {help}
          </LocalizeFormDescription>
        )}
      </LocalizeInputWrapper>
    );
  },
);

export { LocalizeInput };
export default LocalizeInput;
