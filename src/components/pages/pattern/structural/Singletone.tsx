import * as _ from 'lodash';

class Singleton {
  private static instance: Singleton;

  constructor() {
    Singleton.instance = this;
  }

  static get getInstance() {
    return this.instance;
  }

  static lazyFunction = _.debounce((fn: (query?: string) => void) => {
    fn.call(fn);
  }, 1000, { maxWait: 1000 });
}

export default Singleton;
