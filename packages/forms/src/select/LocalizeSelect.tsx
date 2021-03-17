import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { animated, useTransition } from 'react-spring';
import { lighten } from 'polished';

import { LocalizeButton } from '@seolhun/localize-components-atomic';
import {
  getLocalizeIntentColor,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';
import { LocalizeMediaQueries } from '@seolhun/localize-components-grid';
import { LocalizeIcon } from '@seolhun/localize-components-icon';

import { LocalizeFormWrapper } from '../wrapper';
import { LocalizeRadio, LocalizeRadioGroup } from '../radio';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Input';
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
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

type ExtentionProps = InputProps & LocalizeLocalProps;
export interface LocalizeSelectProps extends ExtentionProps {
  /**
   * @description 선택할 수 있는 아이템 리스트
   */
  items: LocalizeSelectItemProps[];

  /**
   * @description 현재 선택된 아이템
   */
  item?: LocalizeSelectItemProps;

  title?: string;

  /**
   * @description 현재 선택된 아이템 선택 완료 이벤트
   */
  onSubmitSelect?: (selectedItem: LocalizeSelectItemProps) => void;

  /**
   * @description Submit Button Label
   * @default Completed
   */
  submitLabel?: React.ReactNode;

  /**
   * @default 'No Data'
   */
  noData?: React.ReactNode;

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

export interface LocalizeSelectItemProps {
  key: string;

  label?: string;

  value?: string;
}

const LocalizeSelectContainer = styled.div<{}, LocalizeThemeProps>({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const LocalizeSelectInputWrapper = styled.div<LocalizeLocalProps, LocalizeThemeProps>(
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
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '40px',
      color: fontColor,
      padding: '10px 32px 10px 12px',
      outline: 'none',

      backgroundColor: primaryColor,
      border: `1px solid ${error ? theme.colors.error : theme.colors.neutral5}`,
      // WARNING: Not support IE
      caretColor: theme.colors.primary,

      '&:focus': {
        border: `1px solid ${error ? theme.colors.error : neutralColor}`,
      },
      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        borderColor: lighten(0.1, neutralColor),
      },
      '&:read-only, &:disabled': {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
        color: theme.colors.neutral8,
      },
      '&::placeholder': {
        color: theme.colors.neutral8,
      },
    };
  },
);

const LocalizeSelectPlaceholder = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    color: theme.colors.inversed9,
  };
});

const LocalizeSelectArrowIconContainer = styled.span<{}, LocalizeThemeProps>(() => {
  return {
    position: 'absolute',
    right: '20px',
  };
});

const LocalizeSelectBackground = styled(animated.div)<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: theme.colors.neutral10,
  };
});

const LocalizeSelectDropdownWrapper = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'relative',
    maxHeight: '440px',
    height: '100%',
    width: '400px',
    padding: '32px 0 0',
    backgroundColor: theme.colors.inversed9,

    [LocalizeMediaQueries.MD]: {
      position: 'fixed',
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    [LocalizeMediaQueries.SM]: {
      position: 'fixed',
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    [LocalizeMediaQueries.XS]: {
      position: 'fixed',
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  };
});

const LocalizeSelectDropdownContainer = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    width: '100%',
    // 20(label) + description(20) + 144(submit) + 8(border)
    height: 'calc(100% - 192px)',
    padding: '0 24px',
    overflowY: 'auto',
  };
});

const LocalizeSelectDropdownTitle = styled.p<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    ...theme.fonts.h3,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 24px',
    marginBottom: '24px',
    color: theme.colors.inversed9,

    [LocalizeMediaQueries.MD]: {
      justifyContent: 'flex-start',
    },
    [LocalizeMediaQueries.SM]: {
      justifyContent: 'flex-start',
    },
    [LocalizeMediaQueries.XS]: {
      justifyContent: 'flex-start',
    },
  };
});

const LocalizeSelectDropdownSubmitWrapper = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: '44px 24px',
    backgroundColor: theme.colors.inversed9,
  };
});

const LocalizeCloseIconWrapper = styled.span<{}, LocalizeThemeProps>(() => {
  return {
    position: 'absolute',
    top: '36px',
    left: '36px',

    [LocalizeMediaQueries.MD]: {
      display: 'none',
    },
    [LocalizeMediaQueries.SM]: {
      display: 'none',
    },
    [LocalizeMediaQueries.XS]: {
      display: 'none',
    },
  };
});

/**
 * @TODO transition에 따른 isOpen 값에 의해 해당 돔이 렌덜이되지 않아, ref의 값이 react-hooks-form에 전달되지 않음.
 */
const LocalizeSelect = React.forwardRef<HTMLInputElement, LocalizeSelectProps>(
  (
    {
      children,
      className,
      label,
      help,
      error,
      items,
      item,
      title,
      onSubmitSelect,
      submitLabel = 'Completed',
      noData = 'No Data',
      ...props
    },
    ref,
  ) => {
    const { name } = props;
    const backgroundRef = React.useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState<LocalizeSelectItemProps | undefined>(item);
    const [selectedItem, setSelectedItem] = React.useState<LocalizeSelectItemProps | undefined>();

    const transitions = useTransition(isOpen, null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      // @ts-ignore
      config: (i, state) => (state === 'leave' ? { duration: 100 } : { duration: 150 }),
    });

    React.useEffect(() => {
      document.addEventListener('keydown', onKeyDownDocument);
      return () => {
        document.removeEventListener('keydown', onKeyDownDocument);
      };
    }, [isOpen]);

    React.useEffect(() => {
      return () => {
        setSelectedItem(currentItem);
      };
    }, [isOpen, currentItem]);

    const handleCurrentItem = (targetItem: LocalizeSelectItemProps) => {
      setSelectedItem(targetItem);
      setCurrentItem(targetItem);
    };

    const handleSelectedItem = (targetItem: LocalizeSelectItemProps) => {
      setSelectedItem(targetItem);
    };

    const toggleSelector = React.useCallback(() => {
      setOpen(!isOpen);
    }, [isOpen]);

    const getItemLabel = React.useCallback((item?: LocalizeSelectItemProps) => {
      return item?.label || item?.key;
    }, []);

    const getItemValue = React.useCallback((item?: LocalizeSelectItemProps) => {
      return item?.value || item?.key;
    }, []);

    const onKeyDownDocument = (event: KeyboardEvent) => {
      const { key } = event;
      if (isOpen) {
        if (key === 'Escape') {
          toggleSelector();
        }
      }
    };

    const onClickBackgroundAway = (event: React.MouseEvent) => {
      if (backgroundRef?.current && backgroundRef.current === event.target) {
        toggleSelector();
      }
    };

    const onClickSelectedItem = (targetItem: LocalizeSelectItemProps) => () => {
      handleSelectedItem(targetItem);
    };

    const onSubmitSelectedItem = () => {
      if (selectedItem) {
        handleCurrentItem(selectedItem);
        if (onSubmitSelect) {
          onSubmitSelect(selectedItem);
        }
      }
      toggleSelector();
    };

    return (
      <LocalizeFormWrapper
        className={classnames(CLASSNAME, className)}
        label={label}
        help={help}
        error={error}
      >
        <LocalizeSelectContainer>
          <LocalizeSelectInputWrapper onClick={toggleSelector}>
            {currentItem?.key ? (
              <div>{getItemLabel(currentItem)}</div>
            ) : (
              <LocalizeSelectPlaceholder>{props.placeholder}</LocalizeSelectPlaceholder>
            )}
            <LocalizeSelectArrowIconContainer>
              <LocalizeIcon icon={['fas', 'chevron-down']} iconSize="12px" />
            </LocalizeSelectArrowIconContainer>
          </LocalizeSelectInputWrapper>
          {/* Displayed SelectInput Part - End */}

          {/* Dropdown Part - Start */}
          {transitions.map(
            ({ item, key, props: style }: any) =>
              item && (
                <LocalizeSelectBackground
                  key={key}
                  ref={backgroundRef}
                  onClick={onClickBackgroundAway}
                  style={style}
                >
                  <LocalizeSelectDropdownWrapper>
                    {title && <LocalizeSelectDropdownTitle>{title}</LocalizeSelectDropdownTitle>}
                    <LocalizeCloseIconWrapper>
                      <LocalizeIcon
                        icon={['fal', 'times']}
                        onClick={toggleSelector}
                        iconSize="22px"
                      />
                    </LocalizeCloseIconWrapper>
                    <LocalizeSelectDropdownContainer>
                      <LocalizeRadioGroup name={name} flexDirection="column">
                        {items.length > 0 ? (
                          items.map((item) => {
                            const itemValue = getItemValue(item);
                            return (
                              <LocalizeRadio
                                {...props}
                                key={item.key}
                                ref={ref}
                                value={itemValue}
                                checked={getItemValue(selectedItem) === itemValue}
                                onChange={onClickSelectedItem(item)}
                              >
                                {getItemLabel(item)}
                              </LocalizeRadio>
                            );
                          })
                        ) : (
                          <div>{noData}</div>
                        )}
                      </LocalizeRadioGroup>
                      <LocalizeSelectDropdownSubmitWrapper>
                        <LocalizeButton size="lg" onClick={onSubmitSelectedItem}>
                          {submitLabel}
                        </LocalizeButton>
                      </LocalizeSelectDropdownSubmitWrapper>
                    </LocalizeSelectDropdownContainer>
                  </LocalizeSelectDropdownWrapper>
                </LocalizeSelectBackground>
              ),
          )}
        </LocalizeSelectContainer>
      </LocalizeFormWrapper>
    );
  },
);

export { LocalizeSelect };
export default LocalizeSelect;
