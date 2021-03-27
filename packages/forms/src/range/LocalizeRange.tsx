import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
// import { transparentize } from 'polished';

import {
  LocalizeProps,
  LocalizeThemeProps,
  LocalizeIntentThemeType,
  LocalizeScale,
  getLocalizeScaleBy,
} from '@seolhun/localize-components-styled-types';

import { getLocalizeIntentColor } from './getLocalizeIntentColor';

const CLASSNAME = '__Localize__Range';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExtentionProps = LocalizeProps & InputProps;

export interface LocalizeRangeProps extends ExtentionProps {
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

  /**
   * Set this to change label node
   */
  renderLabel?: (value: any) => React.ReactNode;

  /**
   * Set this to change handler node
   */
  handler?: React.ReactNode;

  /**
   * Set this to change vertical | horizontal
   */
  vertical?: boolean;
}

const LocalizeRangeWrapper = styled.div<LocalizeRangeProps, LocalizeThemeProps>(
  ({
    theme,
    scale = 'md',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'transparent',
      fontColor: 'inversed1',
      inversedFontColor: 'inversed10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, inversedFontColor } = localizedColor;
    const localizeScale = getLocalizeScaleBy(scale);

    const track: any = {
      content: ' ',
      background: 'transparent',
      borderRadius: '6px',
      pointerEvents: 'none',
    };
    const thumb: any = {
      height: `${localizeScale}rem`,
      width: `${localizeScale}rem`,
      background: inversedFontColor,
      border: `1px solid ${neutralColor}`, //$thumb-border,
      borderRadius: rounded ? '50%' : '6px',
    };

    return {
      position: 'relative',
      appearance: 'none',
      outline: 'none',
      userSelect: 'none',
      cursor: 'pointer',

      '&:after': {
        content: ' ',
        position: 'absolute',
        top: 0,
        width: 0,
        background: primaryColor,
        height: '8px',
        left: '1px',
        zIndex: 1,
      },
      'input': {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        '&:focus': {
          boxShadow: 'none',
          outline: 'none',
        },
        /**
         * @name Track
         */
        '&::-webkit-slider-runnable-track': track,
        '&::-ms-track': track,
        '&::-moz-range-track': track,
        /**
          * @name Thumb
          */
        '&::-webkit-slider-thumb': thumb,
        '&::-ms-thumb': thumb,
        '&::-moz-range-thumb': thumb,
      },
    };
  },
);

const LocalizeRangeContainer = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

const LocalizeRangeInput = styled.input<{}, LocalizeThemeProps>(() => {
  return {
    appearance: 'none',
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  };
});

const LocalizeRangeLabelWrapper = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '8px',
  };
});

const LocalizeRangeLabel = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'inline-block',
  };
});

const LocalizeRange = React.forwardRef<HTMLInputElement, LocalizeRangeProps>(
  (
    {
      children,
      className,
      scale = 'md',
      intent = 'primary',
      rounded,
      renderLabel,
      handler,
      vertical,
      ...props
    },
    ref,
  ) => {
    const { min, max } = props;
    return (
      <LocalizeRangeWrapper
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        scale={scale}
        rounded={rounded}
      >
        <LocalizeRangeContainer>
          <LocalizeRangeInput {...props} ref={ref} type="range" />
          <LocalizeRangeLabelWrapper className={`${CLASSNAME}__Label`}>
            <LocalizeRangeLabel className={`${CLASSNAME}__Label__Min`}>{min}</LocalizeRangeLabel>
            <LocalizeRangeLabel className={`${CLASSNAME}__Label__Max`}>{max}</LocalizeRangeLabel>
          </LocalizeRangeLabelWrapper>
        </LocalizeRangeContainer>
      </LocalizeRangeWrapper>
    );
  },
);

export { LocalizeRange };
export default LocalizeRange;
