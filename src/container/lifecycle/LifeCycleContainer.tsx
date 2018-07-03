import * as React from 'react';

interface LifeCycleContainerStates {
  update: boolean;
}

class LifeCycleContainer extends React.Component<{}, LifeCycleContainerStates> {
  priorities: any[];

  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
    this.priorities = [];
    this.priorities.push('constructor');
  }

  componentDidMount() {
    this.priorities.push('componentDidMount');
  }

  componentWillMount() {
    this.priorities.push('componentWillMount');
  }

  componentWillUnmount() {
    this.priorities.push('componentWillUnmount');
  }

  shouldComponentUpdate() {
    this.priorities.push('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    this.priorities.push('componentDidMount');
  }

  componentWillReceiveProps() {
    this.priorities.push('componentWillReceiveProps');
  }

  componentDidCatch() {
    this.priorities.push('componentWillReceiveProps');
  }

  componentWillUpdate() {
    this.priorities.push('componentWillReceiveProps');
  }

  handleUpdate = () => {
    this.setState({
      update: true,
    });
  }

  renderList() {
    if (this.priorities.length < 1) {
      return <div>Not found data</div>;
    }

    return (
      <ol>
        {
          this.priorities.map((priority) => {
            return (
              <li key={priority}>
                {priority}
              </li>
            );
          })
        }
      </ol>
    );
  }

  render() {
    return (
      <section>
        <h2>LifeCycleContainer</h2>
        <div className='row'>
          <div className='col-sm-12'>
            <button className='btn btn-primary' onClick={this.handleUpdate}>Update</button>
            {this.state.update}
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            {this.renderList()}
          </div>
        </div>
      </section>
    );
  }
}

export default LifeCycleContainer;
