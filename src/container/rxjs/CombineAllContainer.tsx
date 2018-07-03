import * as React from 'react';

import { interval } from 'rxjs';
import { combineAll, map, take } from 'rxjs/operators';

interface CombineAllContainerStates {
  result: any[];
}

class CombineAllContainer extends React.Component<{}, CombineAllContainerStates> {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
    const source = interval(1000).pipe(take(2));
    const example = source.pipe(map((val) => interval(1000).pipe(map((i) => `Result (${val}): ${i}`), take(5))));
    const combined = example.pipe(combineAll());
    const subscribe = combined.subscribe((val) => this.setState({ result: [ ...this.state.result, val ]}));
    console.log(subscribe);
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h2>CombineAllContainer</h2>
          <div className='row'>
            <div className='col-sm-12'>
              {
                this.state.result.map((result, idx) => {
                  return <div key={idx}>
                    {result}
                  </div>;
                })
              }
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CombineAllContainer;
