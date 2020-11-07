import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';
import { EmoteSelectorToggler } from '@/containers';
import { StreamerEmoteModel } from '@/models';

import { GOCFormUIProps } from '../LocalizeFormUITypes';
import GOCFormLabel from '../LocalizeFormLabel';
import GOCFormDescription from '../LocalizeFormDescription';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface GOCHTMLTextAreaProps
  extends TextAreaProps,
    GOCAppearanceTextArea {
  visibleEmoji?: boolean;

  bannedKeywords?: string[];

  onChangeText?: (text: string) => void;
}

interface GOCAppearanceTextArea extends GOCFormUIProps {
  /**
   * @default 100%
   */
  minWidth?: string;

  /**
   * @default 200px
   */
  minHeight?: string;
}

const GOCHTMLTextAreaWrapper = styled.div({});

const GOCHTMLTextAreaContainer = styled.div<GOCFormUIProps, GOCThemeProps>(
  ({ theme }) => {
    return {
      ...theme.fonts.body1,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    };
  },
);

const HidingTextArea = styled.textarea<{}, GOCThemeProps>(() => {
  return {
    position: 'absolute',
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    visibility: 'hidden',
  };
});

const StyledAppearanceTextArea = styled.div<
  GOCAppearanceTextArea,
  GOCThemeProps
>(({ theme, error, minHeight, minWidth }) => {
  return {
    ...theme.fonts.subtitle1,
    appearance: 'textfield',
    color: theme.colors['black-65'],
    width: '100%',
    height: '100%',
    minHeight,
    minWidth,
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

    span: {
      color: theme.colors.error,
    },
  };
});

const GOCHTMLTextAreaOptionContainer = styled.span<{}, GOCThemeProps>(
  ({ theme }) => {
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
  },
);

/**
 * TODO
 * 개선이 필요함
 */
const GOCHTMLTextArea = React.forwardRef<any, GOCHTMLTextAreaProps>(
  (
    {
      label,
      help,
      error,
      visibleEmoji,
      minHeight = '200px',
      minWidth = '100%',
      bannedKeywords = [],
      onChangeText,
      ...props
    },
    ref,
  ) => {
    const { maxLength } = props;
    const initialValue = props.defaultValue || props.value || '';
    const [currentValue, setCurrentValue] = React.useState<any>(initialValue);
    const [displayedValue, setDisplayedValue] = React.useState<any>();

    const handleCurrentValue = (value: string) => {
      setCurrentValue(value);
    };

    const validateBannedKeywords = (value: string) => {
      const sortedBannedKeywords = bannedKeywords.sort(
        (a, b) => b.length - a.length,
      );
      const occurrences: { index: number; length: number }[] = [];
      for (const bannedKeyword of sortedBannedKeywords) {
        let lastIndex = -1;
        const isValidLength = lastIndex + bannedKeyword.length < value.length;
        while (
          isValidLength &&
          (lastIndex = value.indexOf(bannedKeyword, lastIndex + 1)) > -1
        ) {
          occurrences.push({
            index: lastIndex,
            length: bannedKeyword.length,
          });
        }
      }

      const sorted = occurrences.sort(
        ({ index: aIndex }, { index: bIndex }) => bIndex - aIndex,
      );
      const chars = value.split('');
      for (const { index, length } of sorted) {
        chars.splice(index + length, 0, '</span>');
        chars.splice(index, 0, '<span>');
      }
      return chars.join('');
    };

    const validateMaxLength = (value: string) => {
      const contentValue = value;
      if (maxLength) {
        const isOverCount = contentValue.length > maxLength;
        if (isOverCount) {
          return contentValue.slice(0, maxLength);
        }
      }
      return contentValue;
    };

    const onInputTextarea = (e: any) => {
      const value = e.target.textContent;
      const validatedValue = validateMaxLength(value);
      if (onChangeText) {
        onChangeText(validatedValue);
      }
      handleCurrentValue(validatedValue);
    };

    const onFocusEditor = () => {
      setDisplayedValue(currentValue);
    };

    const onBlurEditor = () => {
      setDisplayedValue(validateBannedKeywords(currentValue));
    };

    const onClickEmote = (emote: StreamerEmoteModel) => {
      const textWithEmote = currentValue + ` ${emote.code}`;
      handleCurrentValue(textWithEmote);
      setDisplayedValue(validateMaxLength(textWithEmote));
    };

    return (
      <GOCHTMLTextAreaWrapper>
        {label && <GOCFormLabel>{label}</GOCFormLabel>}
        <GOCHTMLTextAreaContainer>
          <HidingTextArea
            {...props}
            ref={ref}
            value={currentValue}
            onChange={onInputTextarea}
          />
          <StyledAppearanceTextArea
            error={error}
            minWidth={minWidth}
            minHeight={minHeight}
            dangerouslySetInnerHTML={{ __html: displayedValue }}
            onInput={onInputTextarea}
            onFocus={onFocusEditor}
            onBlur={onBlurEditor}
            spellCheck={false}
            contentEditable
          />
          <GOCHTMLTextAreaOptionContainer>
            {visibleEmoji && (
              <EmoteSelectorToggler onClickEmote={onClickEmote} />
            )}
            {maxLength && (
              <span>{`${currentValue?.length || 0}/${maxLength}`}</span>
            )}
          </GOCHTMLTextAreaOptionContainer>
        </GOCHTMLTextAreaContainer>
        {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
      </GOCHTMLTextAreaWrapper>
    );
  },
);

export { GOCHTMLTextArea };
export default GOCHTMLTextArea;
