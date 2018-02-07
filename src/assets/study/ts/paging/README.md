## Github Issue Paging

```typescript
import * as _ from 'lodash';

function pagination(c: number, t: number, limit: number) {
  const current: number = c;
  const total_page: number = t;
  const range = _.range(1, total_page + 1);
  const criteria_number: number = Math.floor(limit / 2); // 7 = 3, 10 = 5, 9 / 4

  const range_with_dots = [] as any[];

  const left: number = current - criteria_number < 1 ? 1 : current - criteria_number;
  const right: number = current + criteria_number > total_page ? total_page : current + criteria_number;

  let condition: any = null;
  for (const i of range) {
    if (i >= left && i <= right || (i === 1 || i === 2) || (i === total_page || i === total_page - 1)) {
      if (i - condition !== 1) {
        range_with_dots.push('....');
      }
      range_with_dots.push(i);
      condition = i;
    }
  }

  return range_with_dots;
}
```