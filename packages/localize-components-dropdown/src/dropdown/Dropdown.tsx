import React, { FC } from 'react';

import { DropdownItemOption } from './DropdownItem';

export interface DropdownProps {
  option: DropdownItemOption[],
  /**
   * @default 'label'
   */
  usedKey: string;
  /**
   * @default 'value'
   */
  usedValue: string;
  /**
   * @description Changed dropdown options
   */
  onChnageItem: (...args: any[]) => void;
}

export const Dropdown: FC<DropdownProps> = () => {
  return (<div></div>)
}

export default Dropdown;
