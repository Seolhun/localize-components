import React from 'react';
import styled from '@emotion/styled';
import { animated, useTransition } from 'react-spring';

import { GOCThemeProps } from '@/context';
import { MEDIA_QUERIES } from '@/constants';
import { GOCIcon } from '@/components';
import { GOC_CONFIG } from '@/GOCConfig';

import { GOCFormUIProps } from '../LocalizeFormStateProps';
import { GOCFormDescription } from '../LocalizeFormDescription';
import { GOCFormLabel } from '../LocalizeFormLabel';
import { GOCButton } from '../../button';
import { GOCRadio, GOCRadioGroup } from '../radio';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface GOCSelectItemProps {
  key: string;

  label?: string;

  value?: string;
}

export interface GOCSelectProps extends InputProps, GOCFormUIProps {
  /**
   * @description 선택할 수 있는 아이템 리스트
   */
  items: GOCSelectItemProps[];

  /**
   * @description 현재 선택된 아이템
   */
  item?: GOCSelectItemProps;

  title?: string;

  /**
   * @description 현재 선택된 아이템 선택 완료 이벤트
   */
  onSubmitSelect?: (selectedItem: GOCSelectItemProps) => void;

  /**
   * @description Submit Button Label
   * @default Completed
   */
  submitLabel?: React.ReactNode;

  /**
   * @default 'No Data'
   */
  noData?: React.ReactNode;
}

const GOCSelectWrapper = styled.div<{}, GOCThemeProps>({
  width: '100%',
});

const GOCSelectContainer = styled.div<{}, GOCThemeProps>({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const GOCSelectInputWrapper = styled.div<GOCFormUIProps, GOCThemeProps>(({ theme, error }) => {
  return {
    ...theme.fonts.body1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '44px',
    color: theme.colors['black-65'],
    padding: '10px 32px 10px 12px',
    outline: 'none',

    backgroundColor: error ? theme.colors['error-bg'] : theme.colors.neutral1,
    border: `1px solid ${error ? theme.colors.error : theme.colors.neutral5}`,
    // WARNING: Not support IE
    caretColor: theme.colors.info,

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

const GOCSelectPlaceholder = styled.div<{}, GOCThemeProps>(({ theme }) => {
  return {
    ...theme.fonts[16],
    color: theme.colors['black-65'],
  };
});

const GOCSelectArrowIconContainer = styled.span<{}, GOCThemeProps>(() => {
  return {
    position: 'absolute',
    right: '20px',
  };
});

const GOCSelectBackground = styled(animated.div)<{}, GOCThemeProps>(({ theme }) => {
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
    zIndex: GOC_CONFIG.Z_INDEX.MODAL,
    backgroundColor: theme.colors['black-45'],
  };
});

const GOCSelectDropdownWrapper = styled.div<{}, GOCThemeProps>(({ theme }) => {
  return {
    position: 'relative',
    maxHeight: '440px',
    height: '100%',
    width: '400px',
    padding: '32px 0 0',
    backgroundColor: theme.colors.white,

    [MEDIA_QUERIES.MD]: {
      position: 'fixed',
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    [MEDIA_QUERIES.SM]: {
      position: 'fixed',
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    [MEDIA_QUERIES.XS]: {
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

const GOCSelectDropdownContainer = styled.div<{}, GOCThemeProps>(() => {
  return {
    width: '100%',
    // 20(label) + description(20) + 144(submit) + 8(border)
    height: 'calc(100% - 192px)',
    padding: '0 24px',
    overflowY: 'auto',
  };
});

const GOCSelectDropdownTitle = styled.p<{}, GOCThemeProps>(({ theme }) => {
  return {
    ...theme.fonts.h3,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 24px',
    marginBottom: '24px',
    color: theme.colors['black-65'],

    [MEDIA_QUERIES.MD]: {
      ...theme.fonts['h4-m'],
      justifyContent: 'flex-start',
    },
    [MEDIA_QUERIES.SM]: {
      ...theme.fonts['h4-m'],
      justifyContent: 'flex-start',
    },
    [MEDIA_QUERIES.XS]: {
      ...theme.fonts['h4-m'],
      justifyContent: 'flex-start',
    },
  };
});

const GOCSelectDropdownSubmitWrapper = styled.div<{}, GOCThemeProps>(({ theme }) => {
  return {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: '44px 24px',
    backgroundColor: theme.colors.white,
  };
});

const GOCCloseIconWrapper = styled.span<{}, GOCThemeProps>(() => {
  return {
    position: 'absolute',
    top: '36px',
    left: '36px',

    [MEDIA_QUERIES.MD]: {
      display: 'none',
    },
    [MEDIA_QUERIES.SM]: {
      display: 'none',
    },
    [MEDIA_QUERIES.XS]: {
      display: 'none',
    },
  };
});

/**
 * @TODO transition에 따른 isOpen 값에 의해 해당 돔이 렌덜이되지 않아, ref의 값이 react-hooks-form에 전달되지 않음.
 */
const GOCSelect = React.forwardRef<HTMLInputElement, GOCSelectProps>(
  (
    {
      children,
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
    const [currentItem, setCurrentItem] = React.useState<GOCSelectItemProps | undefined>(item);
    const [selectedItem, setSelectedItem] = React.useState<GOCSelectItemProps | undefined>();

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

    const handleCurrentItem = (targetItem: GOCSelectItemProps) => {
      setSelectedItem(targetItem);
      setCurrentItem(targetItem);
    };

    const handleSelectedItem = (targetItem: GOCSelectItemProps) => {
      setSelectedItem(targetItem);
    };

    const toggleSelector = React.useCallback(() => {
      setOpen(!isOpen);
    }, [isOpen]);

    const getItemLabel = React.useCallback((item?: GOCSelectItemProps) => {
      return item?.label || item?.key;
    }, []);

    const getItemValue = React.useCallback((item?: GOCSelectItemProps) => {
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

    const onClickSelectedItem = (targetItem: GOCSelectItemProps) => () => {
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
      <GOCSelectWrapper>
        <GOCSelectContainer>
          {label && <GOCFormLabel>{label}</GOCFormLabel>}
          {/* Displayed SelectInput Part - Start */}
          <GOCSelectInputWrapper onClick={toggleSelector}>
            {currentItem?.key ? (
              <div>{getItemLabel(currentItem)}</div>
            ) : (
              <GOCSelectPlaceholder>{props.placeholder}</GOCSelectPlaceholder>
            )}
            <GOCSelectArrowIconContainer>
              <GOCIcon icon={['fas', 'chevron-down']} iconSize="12px" color="black-45" />
            </GOCSelectArrowIconContainer>
          </GOCSelectInputWrapper>
          {/* Displayed SelectInput Part - End */}

          {/* Dropdown Part - Start */}
          {transitions.map(
            ({ item, key, props: style }: any) =>
              item && (
                <GOCSelectBackground key={key} ref={backgroundRef} onClick={onClickBackgroundAway} style={style}>
                  <GOCSelectDropdownWrapper>
                    {title && <GOCSelectDropdownTitle>{title}</GOCSelectDropdownTitle>}
                    <GOCCloseIconWrapper>
                      <GOCIcon icon={['fal', 'times']} color="black-45" onClick={toggleSelector} iconSize="22px" />
                    </GOCCloseIconWrapper>
                    <GOCSelectDropdownContainer>
                      <GOCRadioGroup name={name} flexDirection="column">
                        {items.length > 0 ? (
                          items.map((item) => {
                            const itemValue = getItemValue(item);
                            return (
                              <GOCRadio
                                {...props}
                                key={item.key}
                                ref={ref}
                                value={itemValue}
                                checked={getItemValue(selectedItem) === itemValue}
                                onChange={onClickSelectedItem(item)}
                              >
                                {getItemLabel(item)}
                              </GOCRadio>
                            );
                          })
                        ) : (
                          <div>{noData}</div>
                        )}
                      </GOCRadioGroup>
                      <GOCSelectDropdownSubmitWrapper>
                        <GOCButton themeType="secondary" size="lg" onClick={onSubmitSelectedItem} width="100%">
                          {submitLabel}
                        </GOCButton>
                      </GOCSelectDropdownSubmitWrapper>
                    </GOCSelectDropdownContainer>
                  </GOCSelectDropdownWrapper>
                </GOCSelectBackground>
              ),
          )}
          {/* Dropdown Part - End */}
          {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
        </GOCSelectContainer>
      </GOCSelectWrapper>
    );
  },
);

export { GOCSelect };
export default GOCSelect;
