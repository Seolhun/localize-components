import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeStyleProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeCheckBoxGroupAlignType } from './LocalizeCheckBoxGroup';
import { LocalizeFormOptionProps } from '../types';

const DEFAULT_CLASSNAME = '__Localize__CheckBox';
type InputProps = React.HTMLAttributes<HTMLInputElement>;
type LocalizeInputFormProps = LocalizeFormOptionProps & InputProps;

interface LocalizeCheckBoxProps
  extends LocalizeStyleProps,
    LocalizeInputFormProps {
  /**
   * Set this to change CheckBox name
   * @default undefined
   */
  name?: string;

  /**
   * Set this to change CheckBox groupAlign
   * @default 'horizontal'
   */
  groupAlign?: LocalizeCheckBoxGroupAlignType;
}

interface LocalizeWrapperProps {
  /**
   * Set this to change CheckBox groupAlign
   * @default 'horizontal'
   */
  groupAlign?: LocalizeCheckBoxGroupAlignType;
}

const LocalizeWrapper = styled.div<LocalizeWrapperProps>(
  ({ groupAlign = 'horizontal' }) => {
    return {
      position: 'relative',
      display: getDisplayByAlign(groupAlign),
      width: getWidthByAlign(groupAlign),

      '& + &': {
        marginLeft: '12px',
      },
    };
  },
);

const LocalizeContainer = styled.div({
  outline: 0,
  backfaceVisibility: 'hidden',
  verticalAlign: 'baseline',
  minWidth: '1.25rem',
});

const getDisplayByAlign = (groupAlign: LocalizeCheckBoxGroupAlignType) => {
  if (groupAlign === 'vertical') {
    return 'flex';
  }
  return 'inline-flex';
};
const getWidthByAlign = (groupAlign: LocalizeCheckBoxGroupAlignType) => {
  if (groupAlign === 'vertical') {
    return '100%';
  }
  return 'auto';
};

const LocalizeLabel = styled.label<
  LocalizeStyleProps & LocalizeFormOptionProps,
  LocalizeThemeProps
>(({ theme, fontColor, fontKey = 'normal', disabled, error }) => {
  const fonts = theme.fonts[fontKey];
  const color = theme.colors[fontColor || 'uiColor08'];

  return {
    ...fonts,
    position: 'relative',
    paddingLeft: '2rem',
    color,
    outline: 0,
    transition: 'background-color 0.3s, border-color 0.3s',
    cursor: 'pointer',
    userSelect: 'none',

    ...(error && {
      backgroundColor: theme.colors.error,
      color: theme.colors.error,
    }),
    ...(disabled && {
      backgroundColor: theme.colors.disabled,
      color: theme.colors.disabled,
      cursor: 'not-allowed',
    }),
  };
});

const LocalizeHiddenCheckbox = styled.input<
  LocalizeCheckBoxProps,
  LocalizeThemeProps
>({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '1.25rem',
  height: '1.25rem',
  outline: 0,
  opacity: 0,
  cursor: 'pointer',
  zIndex: -1,
});

const LocalizeCheckMarkerContainer = styled.div<
  LocalizeStyleProps & LocalizeFormOptionProps,
  LocalizeThemeProps
>(({ theme, disabled, error, checked }) => {
  return {
    position: 'absolute',
    width: '1.25rem',
    height: '1.25rem',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.primary01}`,
    borderRadius: '5px',
    transition: 'background-color 0.3s, border-color 0.3s',

    ...(checked && {
      backgroundColor: theme.colors.primary01,
      border: `1px solid ${theme.colors.primary01}`,
    }),
    ...(error && {
      backgroundColor: theme.colors.error,
      border: `1px solid ${theme.colors.error}`,
    }),
    ...(disabled && {
      backgroundColor: theme.colors.disabled,
      color: theme.colors.disabled,
      cursor: 'not-allowed',
    }),
  };
});

const LocalizeCheckMarkerIcon = styled.svg<
  LocalizeFormOptionProps,
  LocalizeThemeProps
>(({ theme, checked }) => ({
  transition: 'opacity 0.3s',
  opacity: checked ? 1 : 0,
  fill: 'none',
  stroke: theme.colors.white,
  strokeWidth: '4px',
}));

const LocalizeCheckBoxContainer = styled.span<{}, LocalizeThemeProps>(
  ({ theme }) => ({
    color: theme.colors.uiColor07,
  }),
);

const LocalizeCheckBox: React.FC<LocalizeCheckBoxProps> = ({
  children,
  primaryColor,
  fontColor,
  fontKey,
  className,
  required,
  readOnly,
  disabled,
  checked,
  error,
  groupAlign,
  name,
  ...props
}) => (
  <LocalizeWrapper
    className={classnames(`${DEFAULT_CLASSNAME}__Wrapper`, className)}
    groupAlign={groupAlign}
  >
    <LocalizeContainer className={`${DEFAULT_CLASSNAME}__Container`}>
      <LocalizeLabel
        primaryColor={primaryColor}
        fontColor={fontColor}
        fontKey={fontKey}
        className={classnames({
          [`${DEFAULT_CLASSNAME}__Label`]: true,
          [`${DEFAULT_CLASSNAME}__Label__Checked`]: checked,
        })}
        htmlFor={name}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        checked={checked}
        error={error}
      >
        <LocalizeHiddenCheckbox
          {...props}
          primaryColor={primaryColor}
          fontColor={fontColor}
          fontKey={fontKey}
          className={DEFAULT_CLASSNAME}
          type="checkbox"
          id={name}
          name={name}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          checked={checked}
        />
        <LocalizeCheckMarkerContainer
          primaryColor={primaryColor}
          fontColor={fontColor}
          fontKey={fontKey}
          className={`${DEFAULT_CLASSNAME}__CheckMarker`}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          checked={checked}
          error={error}
        >
          <LocalizeCheckMarkerIcon checked={checked} viewBox="0 0 24 24">
            <polyline points="20 5 10 16 5 12" />
          </LocalizeCheckMarkerIcon>
        </LocalizeCheckMarkerContainer>
        <LocalizeCheckBoxContainer>{children}</LocalizeCheckBoxContainer>
      </LocalizeLabel>
    </LocalizeContainer>
  </LocalizeWrapper>
);

export { LocalizeCheckBoxProps, LocalizeCheckBox };
export default LocalizeCheckBox;
