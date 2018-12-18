import React, { SFC } from 'react';

import classnames from 'classnames';

import { Themes, ThemeType } from '@seolhun/localize-components-types';

export interface CheckBoxProps {
  /**
   * Set this to change CheckBox label
   * @default '{}'
   */
  item: CheckBoxItemProps;
  // isNotRequired
  /**
   * Set this to change CheckBox checked
   * @default false
   */
  checked?: boolean;
  /**
   * Set this to change CheckBox className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change CheckBox groupName
   * @default ''
   */
  groupName?: string;
  /**
   * Set this to change CheckBox labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change CheckBox onChange
   * @default () => null
   */
  onChange?: (item: CheckBoxItemProps) => void;
  /**
   * Set this to change CheckBox onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;
  /**
   * Set this to change CheckBox onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
  /**
   * Set this to change CheckBox useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change CheckBox stype
   * @default {}
   */
  style?: {};
  /**
   * Set this to change CheckBox ours theme
   * @default 'main'
   */
  theme?: ThemeType;
  /**
   * Set this to change CheckBox valueKey
   * @default 'value'
   */
  valueKey?: string;
}

export interface CheckBoxItemProps {
  label: string;
  value: string;
}

const CheckBox: SFC<CheckBoxProps> = ({
  item,
  // IsNotRequired
  checked = false,
  className = '',
  groupName = '',
  labelKey = 'label',
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  useValueKey = false,
  style = {},
  theme = Themes.PRIMARY,
  valueKey = 'value',
}) => {
  const usedKey = useValueKey
    ? valueKey
    : labelKey;

  return (
    <label
      key={item[usedKey]}
      htmlFor={item[usedKey]}
      className={classnames(
        className,
        '__Localize CheckBox',
      )}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      {item[usedKey]}
      <input
        id={item[usedKey]}
        type='checkbox'
        checked={checked}
        onChange={() => onChange({
          label: item[labelKey],
          value: item[valueKey],
        })}
        name={groupName}
      />
      <span
        className={`CheckMark CheckMark-${theme}`}
        style={{
          ...style,
        }}
      />
    </label>
  );
};

export default CheckBox;
