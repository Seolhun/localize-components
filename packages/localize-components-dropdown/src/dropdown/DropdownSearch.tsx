import React, { FC } from 'react';

import { DropdownItemOption } from './core/DropdownItem';

export interface DropdownSearchProps {
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
   * @description Changed search input
   */
  onChange: (...args: any[]) => void;
  /**
   * @description Changed dropdown options
   */
  onChnageItem: (...args: any[]) => void;
}

export const DropdownSearch: FC<DropdownSearchProps> = () => {
  return (<div></div>)
}

export default DropdownSearch;
