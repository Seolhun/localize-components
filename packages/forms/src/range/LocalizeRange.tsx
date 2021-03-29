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
    const { primaryColor, neutralColor, fontColor } = localizedColor;
    const localizeScale = getLocalizeScaleBy(scale);

    const track: any = {
      content: ' ',
      width: 0,
      height: 0,
    };
    const thumb: any = {
      appearance: 'none',
      height: `${localizeScale}rem`,
      width: `${localizeScale}rem`,
      marginTop: `-${localizeScale / 2}rem`,
      background: fontColor,
      border: `1px solid ${neutralColor}`, //$thumb-border,
      borderRadius: rounded ? '50%' : '6px',
      cursor: 'grab',

      '&:active': {
        cursor: 'grabbing'
      },
    };

    return {
      position: 'relative',
      outline: 'none',
      userSelect: 'none',

      [`.${CLASSNAME}__Tracker`]: {
        position: 'absolute',
        right: 0,
        left: 0,
        width: '100%',
        height: '8px',
        background: neutralColor,
        borderRadius: '6px',

        '&::after': {
          content: '""',
          position: 'absolute',
          right: 0,
          left: 0,
          width: '5%',
          height: '8px',
          background: primaryColor,
          borderRadius: '6px 0 0 6px',
        }
      },

      input: {
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
    alignItems: 'center'
  };
});

const LocalizeRangeInput = styled.input<{}, LocalizeThemeProps>(() => {
  return {
    appearance: 'none',
    width: '100%',
    outline: 'none',
    cursor: 'pointer',
    zIndex: 2,
  };
});

const LocalizeRangeTracker = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    position: 'absolute',
    right: 0,
    left: 0,
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
          <LocalizeRangeTracker className={`${CLASSNAME}__Tracker`} />
        </LocalizeRangeContainer>
        <LocalizeRangeLabelWrapper className={`${CLASSNAME}__Label`}>
          <LocalizeRangeLabel className={`${CLASSNAME}__Label__Min`}>{min}</LocalizeRangeLabel>
          <LocalizeRangeLabel className={`${CLASSNAME}__Label__Max`}>{max}</LocalizeRangeLabel>
        </LocalizeRangeLabelWrapper>
      </LocalizeRangeWrapper>
    );
  },
);

export { LocalizeRange };
export default LocalizeRange;
