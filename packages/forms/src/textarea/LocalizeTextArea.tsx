import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import {
  getLocalizeIntentColor,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeFormWrapper } from '../wrapper';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Textarea';
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
interface LocalizeLocalProps extends LocalizeProps, LocalizeFormStateProps {
  /**
   * Set this to change font color
   * @default md
   */
  size?: LocalizeSize;

  /**
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

type ExtentionProps = TextAreaProps & LocalizeLocalProps;

export interface LocalizeTextAreaProps extends ExtentionProps {}

const LocalizeTextAreaContainer = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };
});

const StyledTextArea = styled.textarea<LocalizeTextAreaProps, LocalizeThemeProps>(
  ({
    theme,
    error,
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'transparent',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, fontColor } = localizedColor;

    return {
      width: '100%',
      height: '100%',
      backgroundColor: primaryColor,
      border: `1px solid ${neutralColor}`,
      color: fontColor,
      boxSizing: 'border-box',
      padding: '10px 12px',
      outline: 'none',
      resize: 'both',
      overflow: 'auto',

      // WARNING: IE Didn't support
      caretColor: theme.colors.info,
      // for Safari boxShadow
      boxShadow: 'none !important',
      WebkitAppearance: 'none',

      '&::placeholder': {
        color: theme.colors.neutral8,
      },
      '&:focus': {
        border: `1px solid ${error ? theme.colors.error : theme.colors.info}`,
      },
      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        borderColor: lighten(0.1, neutralColor),
      },
      '&:disabled': {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
        color: theme.colors.neutral8,
      },
    };
  },
);

const LocalizeTextAreaOptionContainer = styled.span<{}, LocalizeThemeProps>(() => {
  return {
    position: 'absolute',
    right: '16px',
    bottom: '16px',
    display: 'flex',
    alignItems: 'center',

    '& > *': {
      marginRight: '8px',
    },
  };
});

const LocalizeTextArea = React.forwardRef<HTMLTextAreaElement, LocalizeTextAreaProps>(
  ({ className, label, help, error, ...props }, ref) => {
    const { onChange, maxLength } = props;
    const initialValue = props.defaultValue || props.value;
    const [currentValue, setCurrentValue] = React.useState<any>(initialValue);

    React.useEffect(() => {
      setCurrentValue(initialValue);
    }, [initialValue]);

    const handleCurrentValue = React.useCallback(
      (value: string) => {
        setCurrentValue(value);
      },
      [currentValue],
    );

    const onChangeCurrentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      if (maxLength) {
        const isOverCount = value.length > maxLength;
        if (isOverCount) {
          setCurrentValue(value.slice(0, maxLength));
          return;
        }
      }
      handleCurrentValue(value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <LocalizeFormWrapper
        className={classnames(CLASSNAME, className)}
        label={label}
        help={help}
        error={error}
      >
        <LocalizeTextAreaContainer>
          <StyledTextArea {...props} ref={ref} onChange={onChangeCurrentValue} error={error} />
          <LocalizeTextAreaOptionContainer>
            {maxLength && <span>{`${currentValue?.length || 0}/${maxLength}`}</span>}
          </LocalizeTextAreaOptionContainer>
        </LocalizeTextAreaContainer>
      </LocalizeFormWrapper>
    );
  },
);

export { LocalizeTextArea };
export default LocalizeTextArea;
