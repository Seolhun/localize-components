import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeScaleBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeScale,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { getLocalizeIntentColor } from './getLocalizeIntentColor';
import { transparentize } from 'polished';

const CLASSNAME = '__Localize__Switch';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExtentionProps = InputProps & LocalizeProps;

export interface LocalizeSwitchProps extends ExtentionProps {
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

const LocalizeSwitchWrapper = styled.div<LocalizeSwitchProps, LocalizeThemeProps>(
  ({
    theme,
    scale = 'md',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'inversed4',
      fontColor: 'inversed1',
      inversedFontColor: 'inversed10',
    },
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor } = localizedColor;
    const localizeScale = getLocalizeScaleBy(scale);

    return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: `${localizeScale * 2}rem`,
      height: `${localizeScale}rem`,
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'all 0.4s',

      [`.${CLASSNAME}__Slider`]: {
        backgroundColor: neutralColor,
      },
      [`.${CLASSNAME}__Slider:before`]: {
        height: `calc(${localizeScale}rem - 6px)`,
        width: `calc(${localizeScale}rem - 6px)`,
        backgroundColor: theme.colors.neutral1,
        border: `1px solid ${theme.colors.neutral3}`,
      },

      // Checked
      [`input:checked + .${CLASSNAME}__Slider`]: {
        backgroundColor: primaryColor,
      },
      [`input:checked + .${CLASSNAME}__Slider:before`]: {
        backgroundColor: theme.colors.neutral1,
        borderColor: theme.colors.neutral3,
        transform: `translateX(${localizeScale}rem)`,
      },

      // Disabled
      [`input:not(:checked):disabled + .${CLASSNAME}__Slider`]: {
        backgroundColor: transparentize(0.3, neutralColor),
        cursor: 'not-allowed',
      },
      [`input:not(:checked):disabled + .${CLASSNAME}__Slider:before`]: {
        backgroundColor: transparentize(0.3, theme.colors.neutral1),
        borderColor: transparentize(0.3, theme.colors.neutral3),
      },
      // Checked Disable
      [`input:disabled + .${CLASSNAME}__Slider`]: {
        backgroundColor: transparentize(0.4, primaryColor),
        cursor: 'not-allowed',
      },
      [`input:disabled + .${CLASSNAME}__Slider:before`]: {
        backgroundColor: transparentize(0.4, theme.colors.neutral1),
        borderColor: transparentize(0.4, theme.colors.neutral3),
      },
    };
  },
);

const LocalizeSwitchContainer = styled.div(() => {
  return {};
});

const HidingInput = styled.input({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

const StyledSlider = styled.span<LocalizeProps, LocalizeThemeProps>(() => {
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '35px',

    '&:before': {
      content: ' ',
      position: 'absolute',
      left: '2px',
      top: '2px',
      borderRadius: '50%',
    },
  };
});

/**
 * TODO: Change theme key and values
 */
const LocalizeSwitch = React.forwardRef<HTMLInputElement, LocalizeSwitchProps>(
  ({ className, scale = 'md', intent = 'primary', ...props }, ref) => {
    return (
      <LocalizeSwitchWrapper
        {...props}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        scale={scale}
      >
        <LocalizeSwitchContainer className={`${CLASSNAME}__Container`}>
          <HidingInput {...props} ref={ref} type="checkbox" />
          <StyledSlider className={`${CLASSNAME}__Slider`} />
        </LocalizeSwitchContainer>
      </LocalizeSwitchWrapper>
    );
  },
);

export { LocalizeSwitch };
export default LocalizeSwitch;
