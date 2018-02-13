import * as _ from 'lodash';

class Singleton {
  private static instance: Singleton;

  private constructor() {
    Singleton.instance = this;
  }

  static get getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return this.instance;
  }

  static lazyFunction = _.debounce((fn: (query?: string) => void) => {
    fn.call(fn);
  }, 1000, { maxWait: 1000 });
}

export default Singleton;
