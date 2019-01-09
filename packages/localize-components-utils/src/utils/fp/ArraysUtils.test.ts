/**
 * @author [Seolhun](https://github.com/Seolhun)
 * @email [shun10114@gamil.com]
 */

 import {
  removeDuplication,
  removeDuplicationByKey,
} from './ArraysUtils';

 describe('ArraysUtils Test', () => {
  test('removeDuplication', () => {
    const arr = [{
      name: 'Seolhun',
      age: 30,
    }, {
      name: 'Kevin',
      age: 25,
    }, {
      name: 'Pogba',
      age: 24,
    }, {
      name: 'Shaw',
      age: 23,
    }];
    const targetArr = [{
      name: 'Seolhun',
      age: 30,
    }, {
      name: 'Shaw',
      age: 23,
    }];
    expect(removeDuplication(arr, targetArr)).toEqual([
      {
        name: 'Kevin',
        age: 25,
      }, {
        name: 'Pogba',
        age: 24,
      },
    ]);
  });

  test('removeDuplicationByKey - name', () => {
    const arr = [{
      name: 'Seolhun',
      age: 30,
    }, {
      name: 'Kevin',
      age: 25,
    }, {
      name: 'Pogba',
      age: 24,
    }, {
      name: 'Shaw',
      age: 23,
    }];
    const targetArr = [{
      name: 'Seolhun',
      age: 25,
    }, {
      name: 'Shaw',
      age: 24,
    }];
    expect(removeDuplicationByKey(arr, targetArr, 'name')).toEqual([
      {
        name: 'Kevin',
        age: 25,
      }, {
        name: 'Pogba',
        age: 24,
      },
    ]);
  });

  test('removeDuplicationByKey - age', () => {
    const arr = [{
      name: 'Seolhun',
      age: 30,
    }, {
      name: 'Kevin',
      age: 25,
    }, {
      name: 'Pogba',
      age: 24,
    }, {
      name: 'Shaw',
      age: 23,
    }];
    const targetArr = [{
      name: 'Sony',
      age: 25,
    }, {
      name: 'Lukaku',
      age: 24,
    }];
    expect(removeDuplicationByKey(arr, targetArr, 'age')).toEqual([
      {
        name: 'Seolhun',
        age: 30,
      }, {
        name: 'Shaw',
        age: 23,
      },
    ]);
  });
});
