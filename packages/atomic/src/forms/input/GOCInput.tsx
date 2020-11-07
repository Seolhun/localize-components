import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';
import { isNil } from '@/utils';

import { GOCIcon } from '../../icons';
import { GOCFormUIProps } from '../GOCFormUITypes';
import GOCFormLabel from '../GOCFormLabel';
import GOCFormDescription from '../GOCFormDescription';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface GOCInputProps extends InputProps, GOCFormUIProps {}

const GOCInputWrapper = styled.div({
  position: 'relative',
  width: '100%',
});

const GOCInputContainer = styled.div<GOCFormUIProps, GOCThemeProps>(
  ({ theme }) => {
    return {
      ...theme.fonts.body1,
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
  },
);

const StyledInput = styled.input<GOCInputProps, GOCThemeProps>(
  ({ theme, error, visibleIcon }) => {
    return {
      ...theme.fonts.subtitle1,
      color: theme.colors['black-65'],
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
      backgroundColor: error ? theme.colors['error-bg'] : theme.colors.neutral1,
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

const GOCInput = React.forwardRef<HTMLInputElement, GOCInputProps>(
  ({ label, help, error, visibleIcon = true, ...props }, ref) => {
    const initialValue = props.defaultValue || props.value;
    const isSuccess = !error && !isNil(initialValue);
    const isSelectable = !props.disabled && !props.readOnly;

    let icon: any = [];
    let iconColor: keyof GOCThemeProps['colors'] = 'black-45';
    if (error) {
      icon = ['fas', 'exclamation-circle'];
      iconColor = 'error';
    } else if (isSuccess) {
      icon = ['fas', 'check-circle'];
      iconColor = 'success';
    }

    return (
      <GOCInputWrapper>
        {label && <GOCFormLabel>{label}</GOCFormLabel>}
        <GOCInputContainer>
          <StyledInput
            {...props}
            ref={ref}
            error={error}
            visibleIcon={visibleIcon}
            autoComplete="false"
          />
          {isSelectable && visibleIcon && (error || isSuccess) && (
            <GOCIcon
              className="goc-input-state-icon"
              iconSize="16px"
              icon={icon}
              color={iconColor}
            />
          )}
        </GOCInputContainer>
        {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
      </GOCInputWrapper>
    );
  },
);

export { GOCInput };
export default GOCInput;
