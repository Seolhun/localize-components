import React, { FC } from 'react';

import { DropdownItemOption } from './DropdownItem';

export interface DropdownItemListProps {
  options: DropdownItemOption[],
  /**
   * @description onChangedItem
   */
  onChange: (...args: any[]) => void;
  /**
   * @default 'label'
   */
  usedKey: string;
  /**
   * @default 'value'
   */
  usedValue: string;
}


export const DropdownItemList: FC<DropdownItemListProps> = () => {
  return (<div></div>)
}

export default DropdownItemList;
