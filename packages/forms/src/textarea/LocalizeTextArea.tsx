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

const CLASSNAME = '__Localize__Textarea';
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type ExtentionProps = LocalizeProps & TextAreaProps;

export interface LocalizeTextAreaProps extends ExtentionProps {
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

interface LocalizeTextAreaWrapperProps extends LocalizeProps {
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

const LocalizeTextAreaWrapper = styled.div<LocalizeTextAreaWrapperProps, LocalizeThemeProps>(
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

const LocalizeTextAreaContainer = styled.div(() => {
  return {};
});

const StyledTextArea = styled.textarea<LocalizeTextAreaProps, LocalizeThemeProps>(({ theme }) => {
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

const LocalizeTextArea = React.forwardRef<HTMLTextAreaElement, LocalizeTextAreaProps>(
  ({ className, scale = 'md', intent = 'primary', rounded, localize, ...props }, ref) => {
    return (
      <LocalizeTextAreaWrapper
        className={`${CLASSNAME}__Wrapper`}
        scale={scale}
        intent={intent}
        localize={localize}
        rounded={rounded}
      >
        <LocalizeTextAreaContainer className={`${CLASSNAME}__Container`}>
          <StyledTextArea {...props} ref={ref} className={classnames(CLASSNAME, className)} />
        </LocalizeTextAreaContainer>
      </LocalizeTextAreaWrapper>
    );
  },
);

export { LocalizeTextArea };
export default LocalizeTextArea;
