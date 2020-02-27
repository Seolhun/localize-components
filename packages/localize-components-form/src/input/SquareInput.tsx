import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { ErrorLabel } from './ErrorLabel';
import { LocalizeBaseInput } from './LocalizeBaseInput';

const DEFAULT_CLASSNAME = '__Localize__SquareInput';

export interface SquareInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;

  className?: string;

  errorMessage?: string;

  label?: React.ReactNode;
}

const SquareInputWrapper = styled.div({
  display: 'flex',
  marginBottom: '24px',
  flexDirection: 'column',
});

export const SquareInputLabel = styled.label<
  { margin?: boolean },
  LocalizeThemeProps
>(({ theme, margin }) => {
  const fonts = theme.fonts.h5;
  return {
    ...fonts,
    marginBottom: '3px',
    marginLeft: margin ? '3px' : '0',
    color: theme.colors.uiColor06,
  };
});

const RelativeWrapper = styled.div({
  position: 'relative',
});

export const SquareInput = React.forwardRef<HTMLInputElement, SquareInputProps>(
  ({ name, errorMessage, label, className, ...props }, ref) => (
    <SquareInputWrapper>
      {label && <SquareInputLabel margin>{label}</SquareInputLabel>}
      <RelativeWrapper>
        <LocalizeBaseInput
          {...props}
          className={classnames(DEFAULT_CLASSNAME, className)}
          ref={ref}
          name={name}
          error={!!errorMessage}
          width="100%"
        />
      </RelativeWrapper>
      {!!errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </SquareInputWrapper>
  ),
);

export default SquareInput;
