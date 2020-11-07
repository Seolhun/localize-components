import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';
import { EmoteSelectorToggler } from '@/containers';
import { StreamerEmoteModel } from '@/models';

import { GOCFormUIProps } from '../LocalizeFormStateProps';
import GOCFormLabel from '../LocalizeFormLabel';
import GOCFormDescription from '../LocalizeFormDescription';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface GOCTextAreaProps extends TextAreaProps, GOCFormUIProps {
  visibleEmoji?: boolean;

  onClickEmote?: (emote: StreamerEmoteModel) => void;
}

const GOCTextAreaWrapper = styled.div({
  width: '100%',
});

const GOCTextAreaContainer = styled.div<GOCFormUIProps, GOCThemeProps>(({ theme }) => {
  return {
    ...theme.fonts.body1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };
});

const StyledTextArea = styled.textarea<GOCTextAreaProps, GOCThemeProps>(({ theme, error }) => {
  return {
    ...theme.fonts.subtitle1,
    color: theme.colors['black-65'],
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '10px 12px',
    outline: 'none',
    backgroundColor: error ? theme.colors['error-bg'] : theme.colors.neutral1,
    border: `1px solid ${error ? theme.colors.error : theme.colors.neutral5}`,
    resize: 'both',
    overflow: 'auto',

    // WARNING: IE Didn't support
    caretColor: theme.colors.info,
    // for Safari boxShadow
    boxShadow: 'none !important',
    WebkitAppearance: 'none',

    '&:focus': {
      border: `1px solid ${error ? theme.colors.error : theme.colors.info}`,
    },

    '&:disabled': {
      backgroundColor: theme.colors.neutral2,
      border: `1px solid ${theme.colors.neutral3}`,
      color: theme.colors['black-25'],
    },

    '&::placeholder': {
      color: theme.colors['black-25'],
    },
  };
});

const GOCTextAreaOptionContainer = styled.span<{}, GOCThemeProps>(({ theme }) => {
  return {
    ...theme.fonts[18],
    position: 'absolute',
    right: '16px',
    bottom: '16px',
    display: 'flex',
    alignItems: 'center',
    color: theme.colors['black-45'],

    '& > *': {
      marginRight: '8px',
    },
  };
});

const GOCTextArea = React.forwardRef<HTMLTextAreaElement, GOCTextAreaProps>(
  ({ label, help, error, visibleEmoji, ...props }, ref) => {
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

    const onClickEmote = (emote: StreamerEmoteModel) => {
      handleCurrentValue(currentValue + ` ${emote.code}`);
    };

    return (
      <GOCTextAreaWrapper>
        {label && <GOCFormLabel>{label}</GOCFormLabel>}
        <GOCTextAreaContainer>
          <StyledTextArea {...props} ref={ref} onChange={onChangeCurrentValue} error={error} />
          <GOCTextAreaOptionContainer>
            {visibleEmoji && <EmoteSelectorToggler onClickEmote={onClickEmote} />}
            {maxLength && <span>{`${currentValue?.length || 0}/${maxLength}`}</span>}
          </GOCTextAreaOptionContainer>
        </GOCTextAreaContainer>
        {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
      </GOCTextAreaWrapper>
    );
  },
);

export { GOCTextArea };
export default GOCTextArea;
