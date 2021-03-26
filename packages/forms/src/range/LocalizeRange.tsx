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
    max = 100,
    value = 0,
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

      [`.${CLASSNAME}__HandlerBar`]: {
        width: '100%',
        height: `${localizeScale / 2}rem`,
        backgroundColor: neutralColor,
        borderRadius: '4px',

        '&:after': {
          width: `${value / max}%`,
          height: `${localizeScale / 2}rem`,
          backgroundColor: primaryColor,
          borderRadius: '4px',
        },
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
      },

      // Hover
      '&:hover': {
        [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + .${CLASSNAME}__Handler`]: {
          borderColor: primaryColor,
        },
      },

      // Active
      [`${HidingInput}:not(:disabled):active + .${CLASSNAME}__Handler`]: {
        backgroundColor: theme.colors.inversed1,
        borderColor: primaryColor,
      },

      // Readonly - Disabled
      [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
      },

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
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

const LocalizeRangeHandlerBar = styled.div<{}, LocalizeThemeProps>(() => {
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
      min = 0,
      max = 100,
      ...props
    },
    ref,
  ) => {
    const { value, defaultValue, onChange } = props;
    const initValue = value || defaultValue || 0;
    const [curerntValue, setCurrentValue] = React.useState(initValue);

    const handleCurrentValue = React.useCallback((value: any) => {
      setCurrentValue(value);
    }, []);

    React.useEffect(() => {
      handleCurrentValue(initValue);
    }, [initValue]);

    const onChangeInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e);
        }
      },
      [onChange],
    );

    return (
      <LocalizeRangeWrapper
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        scale={scale}
        rounded={rounded}
        min={min}
        max={max}
        value={curerntValue}
      >
        <HidingInput
          {...props}
          ref={ref}
          type="range"
          min={min}
          max={max}
          value={curerntValue}
          onChange={onChangeInput}
        />
        <LocalizeRangeHandlerBar className={`${CLASSNAME}__HandlerBar`}>
          <LocalizeHandler className={`${CLASSNAME}__Handler`} />
        </LocalizeRangeHandlerBar>
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
