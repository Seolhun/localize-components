import * as React from 'react';

import { timer } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

interface CombineLastestContainerStates {
  result: any[];
}

class CombineLastestContainer extends React.Component<{}, CombineLastestContainerStates> {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };

    const timerOne = timer(1000, 4000);
    const timerTwo = timer(2000, 4000);
    const timerThree = timer(3000, 4000);
    const combined = combineLatest(timerOne, timerTwo, timerThree);
    // const subscribe = combined.subscribe(([timerValOne, timerValTwo, timerValThree]) => {
    //   console.log(`
    //     Timer One Latest: ${timerValOne},
    //     Timer Two Latest: ${timerValTwo},
    //     Timer Three Latest: ${timerValThree}
    //   `);
    // });
    console.log(combined);
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h2>CombineLastestContainer</h2>
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

export default CombineLastestContainer;
