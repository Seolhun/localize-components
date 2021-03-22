import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeProps,
  LocalizeThemeProps,
  getLocalizeIntentColor,
  LocalizeScale,
  LocalizeIntentThemeType,
  getLocalizeHeightScaleBy,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Input';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExtentionProps = InputProps & LocalizeProps;

export interface LocalizeInputProps extends ExtentionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: LocalizeScale;

  /**
   * Set this to change intent color
   * @default primary
   */
  intent?: LocalizeIntentThemeType;

  /**
   * Set this to change rounded border-radius
   */
  rounded?: boolean;
}

const LocalizeInputWrapper = styled.div<LocalizeInputProps, LocalizeThemeProps>(
  ({
    theme,
    scale = 'md',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'inversed9',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, fontColor, inversedFontColor } = localizedColor;
    const localizeScale = getLocalizeHeightScaleBy(scale);

    return {
      color: fontColor,
      backgroundColor: neutralColor,
      border: `1px solid ${inversedFontColor}`,
      borderRadius: rounded ? '6px' : '0',
      padding: '0 10px',
      outline: 'none',
      // WARNING: Not support IE
      caretColor: theme.colors.primary,
      // for Safari boxShadow
      boxShadow: 'none !important',
      WebkitAppearance: 'none',

      [`.${CLASSNAME}__Container`]: {
        width: '100%',
        height: `${localizeScale}rem`,
      },

      [`.${CLASSNAME}::placeholder`]: {
        color: neutralColor,
      },

      // Hover
      [`&:hover`]: {
        borderColor: primaryColor,
      },

      // Focus
      [`&:focus-within`]: {
        borderColor: primaryColor,
      },

      // Active
      [`.${CLASSNAME}:not(:disabled):active`]: {
        borderColor: primaryColor,
      },

      // Readonly - Disabled
      [`.${CLASSNAME}:read-only, ${CLASSNAME}:disabled`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
      },
    };
  },
);

const LocalizeInputContainer = styled.div(() => {
  return {};
});

const StyledInput = styled.input<InputProps, LocalizeThemeProps>(({ theme }) => {
  return {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
    border: 0,
    outline: 'none',
    // WARNING: Not support IE
    caretColor: theme.colors.primary,
    // for Safari boxShadow
    boxShadow: 'none !important',
    WebkitAppearance: 'none',
  };
});

const LocalizeInput = React.forwardRef<HTMLInputElement, LocalizeInputProps>(
  ({ className, scale = 'md', intent = 'primary', rounded, ...props }, ref) => {
    return (
      <LocalizeInputWrapper
        {...props}
        className={`${CLASSNAME}__Wrapper`}
        intent={intent}
        scale={scale}
        rounded={rounded}
      >
        <LocalizeInputContainer className={`${CLASSNAME}__Container`}>
          <StyledInput {...props} ref={ref} className={classnames(CLASSNAME, className)} />
        </LocalizeInputContainer>
      </LocalizeInputWrapper>
    );
  },
);

export { LocalizeInput };
export default LocalizeInput;
