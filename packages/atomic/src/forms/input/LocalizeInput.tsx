import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeStyleProps,
} from '@seolhun/localize-components-styled-types';
import { LocalizeFormOptionProps } from '../types';

const DEFAULT_CLASSNAME = '__Localize__Input';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type LocalizeInputFormProps = LocalizeFormOptionProps & InputProps;

export interface LocalizeInputProps
  extends LocalizeStyleProps,
    LocalizeInputFormProps {
  /**
   * Set this to change Input useEnter
   * @default (value) => value,
   */
  renderValue?: (value: any) => string;
}

const StyledInputWrapper = styled.div<LocalizeStyleProps, LocalizeThemeProps>(
  ({ theme, primaryColor, fontColor, fontKey = 'normal' }) => {
    const fonts = theme.fonts[fontKey];
    const color = theme.colors[fontColor || 'uiColor08'];
    const mainColor = theme.colors[primaryColor || 'primary01'];

    return {
      ...fonts,
      display: 'flex',
      verticalAlign: 'middle',
      width: '100%',
      height: '40px',
      backgroundColor: theme.colors.primaryBackground01,
      color,
      border: `2px solid ${theme.colors.uiColor07}`,
      borderRadius: '6px',
      padding: 0,
      transition: 'border-color 0.3s, background-color 0.3s',

      ['&:disabled']: {
        cursor: 'not-allowed',
      },

      ['&:hover, &:focus']: {
        border: `2px solid ${mainColor}`,
      },
    };
  },
);

const StyledDivInput = styled.div<LocalizeInputProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      appearance: 'textfield',
      display: 'block',
      height: 'auto',
      width: '100%',
      margin: 'auto 10px',
      backgroundColor: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'text',
      outline: 'none',
      whiteSpace: 'nowrap',

      ['&:empty:before']: {
        content: 'attr(data-placeholder)',
      },

      ['&:required']: {
        color: `${theme.colors.error}`,
      },

      ['&:disabled']: {
        backgroundColor: `${theme.colors.uiColor07}`,
        border: `1px solid ${theme.colors.uiColor07}`,
        cursor: 'not-allowed !important',
      },
    };
  },
);

const StyledInput = styled.input<LocalizeInputProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      display: 'none',
      height: 'auto',
      width: '100%',
      backgroundColor: 'transparent',
      border: 0,
      padding: 0,
      outline: 'none',
      whiteSpace: 'nowrap',
      cursor: 'text',

      ['&::placeholder']: {
        color: theme.colors.uiColor07,
      },
      ['&:required']: {
        color: `${theme.colors.error}`,
      },
      ['&:disabled']: {
        backgroundColor: `${theme.colors.uiColor07}`,
        border: `1px solid ${theme.colors.uiColor07}`,
        cursor: 'not-allowed',
      },
    };
  },
);

const LocalizeInput = React.forwardRef<HTMLInputElement, LocalizeInputProps>(
  (
    {
      className,
      type = 'text',
      name,
      value,
      placeholder,
      renderValue,
      ...props
    },
    inputRef,
  ) => {
    const handleRenderValue = () => {
      if (renderValue) {
        return {
          __html: renderValue(value),
        };
      }
      return {
        __html: `${value}`,
      };
    };

    return (
      <StyledInputWrapper
        className={classnames(`${DEFAULT_CLASSNAME}__Wrapper`, className)}
      >
        <StyledDivInput
          {...props}
          ref={inputRef}
          className={classnames(DEFAULT_CLASSNAME)}
          type={type}
          data-placeholder={placeholder}
          dangerouslySetInnerHTML={handleRenderValue()}
          contentEditable
        />

        <StyledInput
          {...props}
          ref={inputRef}
          value={value}
          placeholder={placeholder}
        />
      </StyledInputWrapper>
    );
  },
);

export default LocalizeInput;
