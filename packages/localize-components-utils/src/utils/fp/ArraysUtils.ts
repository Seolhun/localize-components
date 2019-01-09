/**
 * @author [Seolhun](https://github.com/Seolhun)
 * @email [shun10114@gamil.com]
 */

import { isEqual } from 'lodash';

function _removeDuplication(
  arr: any[],
  targetArr: any[],
  key?: string,
): any[] {
  if (targetArr.length === 0) {
    return arr;
  }
  return arr.filter((arrItem) => {
    return targetArr.some((targetItem) => {
      // if has Key
      if (key) {
        if (arrItem[key] === targetItem) {
          return false;
        }
        return true;
      }
      // if equal
      if (isEqual(arrItem, targetItem)) {
        return false;
      }
      return true;
    });
  });
}

function removeDuplication(
  arr: any[],
  targetArr: any[],
): any[] {
  return _removeDuplication(arr, targetArr);
}

function removeDuplicationByKey(
  arr: any[],
  targetArr: any[],
  key?: string,
) {
  return _removeDuplication(arr, targetArr, key);
}

export {
  removeDuplication,
  removeDuplicationByKey,
};

export default {
  removeDuplication,
  removeDuplicationByKey,
};
