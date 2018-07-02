import React from 'react';

export interface FunctionalComponentProps {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

const FunctionalComponent: React.SFC<FunctionalComponentProps> = (props) => {
  return (
    <section>
      <h2>FunctionalComponent</h2>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='btn-group' role='group' aria-label='Basic example'>
            <button type='button' className='btn btn-secondary btn-success' onClick={props.increaseCounter}>Increment</button>
            <button type='button' className='btn btn-secondary btn-warning' onClick={props.decreaseCounter}>Decrement</button>
          </div>
        </div>
        <div className='col-sm-12'>
            {
              `counter : ${props.counter}`
            }
          </div>
      </div>
    </section>
  );
};

export interface WarpperFunctionalContainerStates {
  counter: number;
}

class WarpperFunctionalContainer extends React.Component<{}, WarpperFunctionalContainerStates> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <section>
        <FunctionalComponent
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.decreaseCounter}
          counter={this.state.counter}
        />
      </section>
    );
  }
}

export default WarpperFunctionalContainer;
