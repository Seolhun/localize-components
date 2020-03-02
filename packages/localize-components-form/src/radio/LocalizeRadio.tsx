import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeBaseStyledProps,
  LocalizeStyledProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeRadioGroupAlignType } from './LocalizeRadioGroup';

const DEFAULT_CLASSNAME = '__Localize__Radio';
const RADIO_CHECKED_CIRCLE = 8;
const RADIO_CHECKMARK_WIDTH = 16;

export interface LocalizeRadioProps
  extends React.HTMLAttributes<HTMLInputElement>,
    LocalizeBaseStyledProps {
  /**
   * Set this to change Radio label
   */
  item: RadioItemProps;

  /**
   * Set this to change Radio checkedItem
   */
  checkedItem: RadioItemProps;

  /**
   * Set this to change Radio groupName
   * @default ''
   */
  groupName?: string;

  /**
   * Set this to change Radio labelKey
   * @default 'label'
   */
  labelKey?: string;

  /**
   * Set this to change Radio onClick
   * @default undefined
   */
  onClick?: (item: RadioItemProps, ...agrs: any[]) => void;

  /**
   * Set this to change Radio onChange
   * @default () => null
   */
  onChange?: (item: RadioItemProps, ...agrs: any[]) => void;

  /**
   * Set this to change Radio onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;

  /**
   * Set this to change Radio onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;

  /**
   * Set this to change Radio useLabelKey
   * @default false
   */
  useLabelKey?: boolean;

  /**
   * Set this to change Radio valueKey
   * @default 'value'
   */
  valueKey?: string;

  /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: LocalizeRadioGroupAlignType;
}

export interface RadioItemProps {
  [key: string]: any;
}

interface SizeProps {
  /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: LocalizeRadioGroupAlignType;
}

interface RadioCheckBoxProps extends LocalizeStyledProps {
  isChecked: boolean;
}

const StyledRadioLabel = styled.label<SizeProps, LocalizeThemeProps>(
  ({ align }) => {
    const getDisplayByalign = () => {
      if (align === 'horizontal') {
        return 'inline-flex';
      }
      return 'flex';
    };

    const getWidthByAlign = () => {
      if (align === 'horizontal') {
        return 'auto';
      }
      return '100%';
    };

    return {
      position: 'relative',
      display: getDisplayByalign(),
      alignItems: 'center',
      height: 'auto',
      width: getWidthByAlign(),
      cursor: 'pointer',
      userSelect: 'none',

      '& + &': {
        marginLeft: '1rem',
      },
    };
  },
);

const StyledRadioInput = styled.input({
  position: 'absolute',
  height: 0,
  width: 0,
  opacity: 0,
  cursor: 'pointer',
});

const StyledCheckBox = styled.span<RadioCheckBoxProps, LocalizeThemeProps>(
  ({ theme, isChecked }) => {
    const checkedStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${theme.colors.uiColor07}`,
    };

    return {
      display: 'inline-flex',
      height: `${RADIO_CHECKMARK_WIDTH}px`,
      width: `${RADIO_CHECKMARK_WIDTH}px`,
      backgroundColor: theme.colors.primaryBackground01,
      borderRadius: '50%',
      border: `1px solid ${theme.colors.uiColor07}`,
      transition: 'border-color 0.35s, background-color 0.35s',

      [`.${DEFAULT_CLASSNAME}:hover ~ &`]: {
        border: `1px solid ${theme.colors.uiColor07}`,
      },
      ...(isChecked && checkedStyle),
    };
  },
);

const StyledCheckMark = styled.span<RadioCheckBoxProps, LocalizeThemeProps>(
  ({ isChecked, theme }) => {
    return {
      position: 'absolute',
      content: '""',
      display: isChecked ? 'block' : 'none',
      backgroundColor: theme.colors.primary01,
      border: `1px solid ${theme.colors.uiColor07}`,
      height: `${RADIO_CHECKED_CIRCLE}px`,
      width: `${RADIO_CHECKED_CIRCLE}px`,
      borderRadius: '50%',
    };
  },
);

const StyledRadioText = styled.span({
  paddingLeft: '7px',
});

export const LocalizeRadio: React.FC<LocalizeRadioProps> = ({
  item,
  // IsNotRequired
  checkedItem = {},
  className,
  groupName = '',
  labelKey = 'label',
  valueKey = 'value',
  onClick,
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  useLabelKey = false,
  align = 'horizontal',
  ...props
}) => {
  const usedKey = useLabelKey ? labelKey : valueKey;
  const isChecked = React.useMemo(() => {
    return checkedItem[usedKey] === item[usedKey];
  }, [usedKey, checkedItem, item]);

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      onChange({
        [labelKey]: item[labelKey],
        [valueKey]: item[valueKey],
      });
      if (onClick) {
        onClick({
          [labelKey]: item[labelKey],
          [valueKey]: item[valueKey],
        });
      }
    },
    [labelKey, valueKey, usedKey, item],
  );

  return (
    <StyledRadioLabel
      htmlFor={item[usedKey]}
      className={classnames(`${DEFAULT_CLASSNAME}__Label`, className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      align={align}
    >
      <StyledRadioInput
        {...props}
        type="radio"
        id={item[usedKey]}
        checked={isChecked}
        className={DEFAULT_CLASSNAME}
        value={item[usedKey]}
        name={groupName || item[usedKey]}
        onChange={handleOnChange}
      />
      <StyledCheckBox
        className={`${DEFAULT_CLASSNAME}__CheckBox`}
        isChecked={isChecked}
      >
        <StyledCheckMark
          className={`${DEFAULT_CLASSNAME}__CheckMark`}
          isChecked={isChecked}
        />
      </StyledCheckBox>
      <StyledRadioText className={`${DEFAULT_CLASSNAME}__Text`}>
        {item[labelKey]}
      </StyledRadioText>
    </StyledRadioLabel>
  );
};

export default LocalizeRadio;
