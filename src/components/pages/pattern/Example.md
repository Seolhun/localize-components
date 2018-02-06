# Singleton Pattern
싱글톤 패턴은 가장 단순한 디자인 패턴 중 하나입니다. 이 유형의 디자인 패턴은 오브젝트를 생성하는 가장 좋은 방법 중 하나를 제공하므로이 패턴은 Creational Patterns에 속해 있습니다. 
**이 패턴은 단일 객체 만 생성되도록하면서 객체를 만드는 단일 클래스를 포함합니다. 이 클래스는 클래스 객체를 인스턴스화하지 않고 직접 액세스 할 수있는 유일한 객체에 액세스하는 방법을 제공합니다.**

```typescript
import * as _ from 'lodash';

class Singleton {
  private static instance: Singleton;

  constructor() {
    Singleton.instance = this;
  }

  static get getInstance() {
    this.printInstance();
    return this.instance;
  }

  static printInstance() {
    console.log(this.instance);
  }

  static lazyFunction = _.debounce((fn: (query?: string) => void) => {
    fn.call(fn);
  }, 1000, { maxWait: 1000 });
}

export default Singleton;
```

## 내용
- 동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 `this`를 사용할 수 있다
- 
- 생성자를 사용하면 결국 다른 주소값을 반환한다. 즉, 생성자를 사용하여 값을 비교하면 결코 같을 수 없다.

## Reference
- [Mozila - Static](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static)
	- 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.
- [Mozila - Equality_comparisons_and_sameness](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Does JavaScript use stack or heap for memory allocation or both?](https://hashnode.com/post/does-javascript-use-stack-or-heap-for-memory-allocation-or-both-cj5jl90xl01nh1twuv8ug0bjk)