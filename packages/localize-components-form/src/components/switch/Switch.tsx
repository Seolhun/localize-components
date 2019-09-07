import React, { FC, useCallback, ChangeEvent } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';

import {
  LocalizeStyledProps,
  LocalizeTheme,
  LocalizeThemesType,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Switch';
const SWITCH_CIRCLE = 25;
const SWITCH_CONTAINER_WIDTH = (SWITCH_CIRCLE * 2) + 2;
const SWITCH_CONTAINER_HEIGHT = SWITCH_CIRCLE + 2;

export interface SwitchProps {
  /**
   * Set this to change Switch checked
   */
  checked: boolean;
  /**
   * Set this to change Switch htmlFor
   */
  htmlFor: string;
  /**
   * Set this to change Switch className
   * @default undefined
   */
  className?: string;
  /**
   * Set this to change Switch groupName
   * @default ''
   */
  groupName?: string;
  /**
   * Set this to change Switch labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change Switch onChange
   * @default () => null
   */
  onChange?: (checked: boolean) => void;
  /**
   * Set this to change Switch onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;
  /**
   * Set this to change Switch onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
  /**
   * Set this to change Switch useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change Switch css
   * @default {}
   */
  css?: {};
  /**
   * Set this to change Switch mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change Switch subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;
  /**
   * Set this to change Switch valueKey
   * @default 'value'
   */
  valueKey?: string;
}

const StyledSwitchLabel = styled.label({
  userSelect: 'none',
  position: 'relative',
  display: 'inline-block',
  width: `${SWITCH_CONTAINER_WIDTH}px`,
  height: `${SWITCH_CONTAINER_HEIGHT}px`,

  [`input:checked + .${DEFAULT_CLASSNAME}__Slider:before`]: {
    transform: `translateX(${SWITCH_CIRCLE}px)`,
  },
})

const StyledSwitchInput = styled.input({
  opacity: 0,
  width: 0,
  height: 0,
})

const StyledSlider = styled.span<LocalizeStyledProps, ILocalizeTheme>(({
  mainColor,
  subColor,
  theme,
}) => {
  const validTheme = getThemeObject({ mainColor, subColor }, theme);

  return {
    backgroundColor: validTheme.mainColor,
    borderRadius: '35px',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: '-1px',
    bottom: 0,
    left: 0,
    transition: '0.4s',

    ['&:before']: {
      content: '""',
      backgroundColor: validTheme.subColor,
      borderRadius: '50%',
      position: 'absolute',
      left: '1px',
      top: '1px',
      height: `${SWITCH_CIRCLE}px`,
      width: `${SWITCH_CIRCLE}px`,
      transition: '0.4s',
    },
  }
})

export const Switch: FC<SwitchProps> = ({
  checked,
  htmlFor,
  //
  className,
  groupName = '',
  mainColor = LocalizeTheme.primaryColor,
  subColor = LocalizeTheme.secondaryColor,
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  css = {},
}) => {
  const handleChecked = useCallback((event: ChangeEvent) => {
    onChange(checked)
    event.stopPropagation();
  }, [checked])

  return (
    <StyledSwitchLabel
      key={htmlFor}
      htmlFor={htmlFor}
      className={classnames(`${DEFAULT_CLASSNAME}__Label`, className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <StyledSwitchInput
        id={htmlFor}
        checked={checked}
        className={classnames(`${DEFAULT_CLASSNAME}__Input`, className)}
        type='checkbox'
        onChange={handleChecked}
        value={htmlFor}
        name={groupName}
      />
      <StyledSlider
        className={classnames(`${DEFAULT_CLASSNAME}__Slider`, className)}
        mainColor={mainColor}
        subColor={subColor}
        css={css}
      />
    </StyledSwitchLabel>
  );
};

export default Switch;
