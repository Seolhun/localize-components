import React, { FC, useCallback, ChangeEvent, useMemo } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  ILocalizeTheme,
  LocalizeBaseStyledProps,
  LocalizeStyledProps,
} from '@seolhun/localize-components-styled-types';
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';

import { RadioGroupAlignType } from './RadioGroup';

const DEFAULT_CLASSNAME = '__Localize__Radio';
const RADIO_CHECKED_CIRCLE = 8;
const RADIO_CHECKMARK_WIDTH = 16;

export interface RadioProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Radio label
   */
  item: RadioItemProps;
  /**
   * Set this to change Radio checkedItem
   */
  checkedItem: RadioItemProps;
  // IsNotRequirement
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
  align?: RadioGroupAlignType;
}

export interface RadioItemProps {
  [key: string]: any;
}

interface SizeProps {
  /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: RadioGroupAlignType;
}

interface RadioCheckBoxProps extends LocalizeStyledProps {
  isChecked: boolean;
}

const StyledRadioLabel = styled.label<SizeProps, ILocalizeTheme>(({
  align,
}) => {
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
  };
});

const StyledRadioInput = styled.input({
  position: 'absolute',
  height: 0,
  width: 0,
  opacity: 0,
  cursor: 'pointer',
});

const StyledCheckBox = styled.span<RadioCheckBoxProps, ILocalizeTheme>(({
  isChecked,
  theme,
  ...props
}) => {
  const validTheme = getValidThemeObject(props, theme);

  const checkedStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${validTheme.mainColor}`,
  }

  return {
    display: 'inline-flex',
    height: `${RADIO_CHECKMARK_WIDTH}px`,
    width: `${RADIO_CHECKMARK_WIDTH}px`,

    backgroundColor: validTheme.subColor,
    borderRadius: '50%',
    border: `1px solid ${validTheme.subColor}`,
    transition: 'border-color 0.35s, background-color 0.35s',

    [`.${DEFAULT_CLASSNAME}:hover ~ &`]: {
      border: `1px solid ${validTheme.mainColor}`,
    },
    ...(isChecked && checkedStyle),
  };
});

const StyledCheckMark = styled.span<RadioCheckBoxProps, ILocalizeTheme>(({
  isChecked,
  theme,
  ...props
}) => {
  const validTheme = getValidThemeObject(props, theme);

  return {
    position: 'absolute',
    content: '""',
    display: isChecked ? 'block' : 'none',
    background: validTheme.mainColor,
    border: `1px solid ${validTheme.mainColor}`,
    height: `${RADIO_CHECKED_CIRCLE}px`,
    width: `${RADIO_CHECKED_CIRCLE}px`,
    borderRadius: '50%',
  }
})

const StyledRadioText = styled.span({
  paddingLeft: '7px',
});

export const Radio: FC<RadioProps> = ({
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
  mainColor,
  subColor,
  css = {},
}) => {
  const usedKey = useLabelKey ? labelKey : valueKey;
  const isChecked = useMemo(() => {
    return checkedItem[usedKey] === item[usedKey];
  }, [usedKey, checkedItem, item]);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
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
  }, [labelKey, valueKey, usedKey, item])

  return (
    <StyledRadioLabel
      htmlFor={item[usedKey]}
      className={classnames(`${DEFAULT_CLASSNAME}__Label`, className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      align={align}
    >
      <StyledRadioInput
        type='radio'
        id={item[usedKey]}
        checked={isChecked}
        className={DEFAULT_CLASSNAME}
        value={item[usedKey]}
        name={groupName || item[usedKey]}
        onChange={handleOnChange}
      />
      <StyledCheckBox
        className={`${DEFAULT_CLASSNAME}__CheckBox`}
        mainColor={mainColor}
        subColor={subColor}
        isChecked={isChecked}
        css={css}
      >
        <StyledCheckMark
          className={`${DEFAULT_CLASSNAME}__CheckMark`}
          isChecked={isChecked}
          mainColor={mainColor}
          subColor={subColor}
        />
      </StyledCheckBox>
      <StyledRadioText className={`${DEFAULT_CLASSNAME}__Text`}>
        {item[labelKey]}
      </StyledRadioText>
    </StyledRadioLabel>
  );
};

export default Radio;
