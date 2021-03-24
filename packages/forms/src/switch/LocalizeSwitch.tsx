import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeIntentColor,
  getLocalizeScaleBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeScale,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeFormWrapper } from '../wrapper';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Switch';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExcludedInputProps = Omit<InputProps, 'size'>;
interface LocalizeLocalProps extends LocalizeProps, LocalizeFormStateProps {
  /**
   * Set this to change font color
   * @default md
   */
  scale?: LocalizeScale;

  /**
   * Set this to change intent color
   * @default primary
   */
  intent?: LocalizeIntentThemeType;
}

type ExtentionProps = ExcludedInputProps & LocalizeLocalProps;
export interface LocalizeSwitchProps extends ExtentionProps {}

const LocalizeSwitchContainer = styled.div<LocalizeSwitchProps, LocalizeThemeProps>(
  ({
    theme,
    scale = 'md',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'neutral3',
      fontColor: 'inversed1',
      inversedFontColor: 'inversed10',
    },
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, fontColor } = localizedColor;
    const localizeScale = getLocalizeScaleBy(scale);

    return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: `calc(${localizeScale * 2}rem + 2px)`,
      height: `calc(${localizeScale}rem + 2px)`,
      color: fontColor,
      cursor: 'pointer',
      userSelect: 'none',

      [`.${CLASSNAME}__Slider`]: {
        backgroundColor: theme.colors.inversed1,
      },
      [`.${CLASSNAME}__Slider:before`]: {
        content: '""',
        position: 'absolute',
        left: '1px',
        top: '1px',
        height: `${localizeScale}rem`,
        width: `${localizeScale}rem`,
        backgroundColor: neutralColor,
        borderRadius: '50%',
        transition: 'all 0.4s',
      },
      [`input:checked + .${CLASSNAME}__Slider:before`]: {
        backgroundColor: primaryColor,
        boxShadow: `0 0 1px 2px ${neutralColor}`,
        transform: `translateX(${scale}rem)`,
      },
    };
  },
);

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
    cursor: 'pointer',
    transition: 'all 0.4s',
  };
});

/**
 * TODO: Change theme key and values
 */
const LocalizeSwitch = React.forwardRef<HTMLInputElement, LocalizeSwitchProps>(
  ({ className, label, help, error, scale = 'md', intent = 'primary', ...props }, ref) => {
    return (
      <LocalizeFormWrapper
        className={classnames(CLASSNAME, className)}
        label={label}
        help={help}
        error={error}
      >
        <LocalizeSwitchContainer
          ref={ref}
          className={`${CLASSNAME}__Container`}
          intent={intent}
          scale={scale}
        >
          <HidingInput {...props} ref={ref} type="checkbox" />
          <StyledSlider className={`${CLASSNAME}__Slider`} />
        </LocalizeSwitchContainer>
      </LocalizeFormWrapper>
    );
  },
);

export { LocalizeSwitch };
export default LocalizeSwitch;
