import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeProps,
  LocalizeThemeProps,
  LocalizeScale,
  LocalizeIntentThemeType,
  getLocalizeHeightScaleBy,
  getLocalizeFontScaleBy,
} from '@seolhun/localize-components-styled-types';

import { getLocalizeIntentColor } from './getLocalizeIntentColor';

const CLASSNAME = '__Localize__TextArea';
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type ExtentionProps = TextAreaProps & LocalizeProps;

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

const StyledTextArea = styled.textarea<LocalizeTextAreaProps, LocalizeThemeProps>(
  ({
    theme,
    scale = 'md',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'inversed3',
      fontColor: 'inversed1',
      inversedFontColor: 'inversed10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, fontColor, inversedFontColor } = localizedColor;
    const localizeScale = getLocalizeHeightScaleBy(scale);
    const localizeFontScale = getLocalizeFontScaleBy(scale);

    return {
      height: `${localizeScale}rem`,
      margin: 0,
      padding: '10px',
      fontSize: `${localizeFontScale}rem`,
      lineHeight: `${localizeFontScale}rem`,
      color: inversedFontColor,
      backgroundColor: fontColor,
      borderRadius: rounded ? '6px' : '0',
      border: `1px solid ${neutralColor}`,
      // WARNING: Not support IE
      caretColor: primaryColor,
      // for Safari boxShadow
      boxShadow: 'none',
      WebkitAppearance: 'none',
      outline: 'none',

      [`&::placeholder`]: {
        color: neutralColor,
      },

      // Hover
      [`&:hover`]: {
        borderColor: primaryColor,
      },

      // Focus
      [`&:focus`]: {
        borderColor: primaryColor,
      },

      // Active
      [`&:not(:disabled):active`]: {
        borderColor: primaryColor,
      },

      // Readonly - Disabled
      [`&:read-only, &:disabled`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.disabled,
        color: theme.colors.inversed7,
      },

      [`&:disabled`]: {
        cursor: 'not-allowed',
      },
    };
  },
);

const LocalizeTextArea = React.forwardRef<HTMLTextAreaElement, LocalizeTextAreaProps>(
  ({ className, scale = 'md', intent = 'primary', rounded, ...props }, ref) => {
    return (
      <StyledTextArea
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        scale={scale}
        rounded={rounded}
      />
    );
  },
);

export { LocalizeTextArea };
export default LocalizeTextArea;
