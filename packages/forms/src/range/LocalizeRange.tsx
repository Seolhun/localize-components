import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

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

interface LocalizeRangeWrapperProps extends LocalizeRangeProps {
  /**
   * Set this to change tracker width
   */
  trackerWidth: number;

  /**
   * Set this to change handler width on tracker
   */
  handlerWidth: number;
}

const LocalizeRangeWrapper = styled.div<LocalizeRangeWrapperProps, LocalizeThemeProps>(
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
    trackerWidth,
    handlerWidth,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, inversedFontColor } = localizedColor;
    const localizeScale = getLocalizeScaleBy(scale);

    return {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      color: inversedFontColor,
      outline: 'none',
      cursor: 'pointer',
      userSelect: 'none',

      // Hover
      '&:hover': {
        [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + .${CLASSNAME}__Tracker`]: {
          borderColor: primaryColor,
        },
      },

      // Readonly - Disabled
      [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
      },

      /**
       * @name __Tracker
       */
      [`.${CLASSNAME}__Tracker`]: {
        width: '100%',
        height: `${localizeScale / 2}rem`,
        backgroundColor: neutralColor,
        borderRadius: '4px',

        '&:after': {
          width: `${handlerWidth / trackerWidth}%`,
          height: `${localizeScale / 2}rem`,
          backgroundColor: primaryColor,
          borderRadius: '4px',
        },
      },

      // Active
      [`${HidingInput}:not(:disabled):active + .${CLASSNAME}__Tracker`]: {
        backgroundColor: theme.colors.inversed1,
        borderColor: primaryColor,
      },

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Tracker`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
      },

      /**
       * @name __Handler
       */
      [`.${CLASSNAME}__Handler`]: {
        width: `${localizeScale}rem`,
        height: `${localizeScale}rem`,
        borderRadius: rounded ? '50%' : '6px',
        border: `1px solid ${theme.colors.neutral6}`,
        backgroundColor: theme.colors.inversed1,
        cursor: 'grabbing',
      },

      // Active
      [`${HidingInput}:not(:disabled):active + .${CLASSNAME}__Handler`]: {
        backgroundColor: theme.colors.inversed1,
        borderColor: primaryColor,
      },

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Handler`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
      },
    };
  },
);

const HidingInput = styled.input<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    appearance: 'none',
    width: '100%',
    height: '5px',
    padding: 0,
    margin: 0,
    borderRadius: '2px',
    outline: 'none',

    // Range Handler
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      background: theme.colors.secondary,
      cursor: 'pointer',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      background: theme.colors.secondary,
      cursor: 'pointer',
    },
    '&:focus': {
      '&::-webkit-slider-thumb': {
        backgroundColor: theme.colors.neutral8,
      },
      '&::-moz-range-thumb': {
        backgroundColor: theme.colors.neutral8,
      },
    },
    '&:disabled': {
      backgroundColor: theme.colors.neutral5,
      '&::-webkit-slider-thumb': {
        backgroundColor: theme.colors.neutral5,
      },
      '&::-moz-range-thumb': {
        backgroundColor: theme.colors.neutral5,
      },
    },
  };
});

const LocalizeRangeTracker = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };
});

const LocalizeHandler = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'inline-block',
  };
});

const LocalizeRangeLabelContainer = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    const { value, defaultValue, min, max } = props;
    const initValue = value || defaultValue || 0;

    const memoizedInitValue = React.useMemo<number>(() => {
      const parsedValue = Number(value);
      const parseDefaultdValue = Number(defaultValue);
      const initValue = parsedValue || parseDefaultdValue || 0;
      if (Number.isInteger(initValue)) {
        return initValue;
      }
      return 0;
    }, [initValue]);

    const memoizedMinValue = React.useMemo<number>(() => {
      const parsedMinValue = Number(min);
      if (Number.isInteger(parsedMinValue)) {
        return parsedMinValue;
      }
      return 0;
    }, [min]);

    const memoizedMaxValue = React.useMemo<number>(() => {
      const parsedMaxValue = Number(max);
      if (Number.isInteger(parsedMaxValue)) {
        return parsedMaxValue;
      }
      return 100;
    }, [max]);

    const handlerValue = memoizedInitValue - memoizedMinValue;
    const maxValue = memoizedMaxValue - memoizedMinValue;
    const [trackerWidth, setTrackerWidth] = React.useState<number>(handlerValue / maxValue);
    const [handlerWidth, setHandlerWidth] = React.useState<number>(handlerValue);

    const handleTrackerWidth = React.useCallback((value: number) => {
      setTrackerWidth(value);
    }, []);

    const handleHandlerWidth = React.useCallback((value: number) => {
      setHandlerWidth(value);
    }, []);

    React.useEffect(() => {
      handleTrackerWidth(handlerValue / maxValue);
    }, [handlerValue, maxValue]);

    React.useEffect(() => {
      handleHandlerWidth(handlerValue);
    }, [handlerValue]);

    return (
      <LocalizeRangeWrapper
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        scale={scale}
        rounded={rounded}
        trackerWidth={trackerWidth}
        handlerWidth={handlerWidth}
      >
        <HidingInput {...props} ref={ref} type="range" />
        <LocalizeRangeTracker className={`${CLASSNAME}__Tracker`}>
          <LocalizeHandler className={`${CLASSNAME}__Handler`} />
        </LocalizeRangeTracker>
        <LocalizeRangeLabelContainer className={`${CLASSNAME}__Label`}>
          <LocalizeRangeLabel className={`${CLASSNAME}__Label__Min`}>{min}</LocalizeRangeLabel>
          <LocalizeRangeLabel className={`${CLASSNAME}__Label__Max`}>{max}</LocalizeRangeLabel>
        </LocalizeRangeLabelContainer>
      </LocalizeRangeWrapper>
    );
  },
);

export { LocalizeRange };
export default LocalizeRange;
