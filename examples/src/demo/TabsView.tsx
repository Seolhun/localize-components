import React from 'react';

import { Tabs } from '@seolhun/localize-components';

const TABS = {
  GRAPH: 'graph',
  TABLE: 'table',
};

interface HrViewState {
  currentTab: string;
}

class HrView extends React.Component<{}, HrViewState> {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: TABS.GRAPH,
    };
  }

  handleClickChangeTab = (currentTab) => {
    this.setState({
      currentTab,
    });
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Tabs</h1>
          </div>
        </div>
        <Tabs
          currentTab={this.state.currentTab}
          color="danger"
          tabs={[
            {
              label: 'Graph',
              key: TABS.TABLE,
              render: <div>GRAPH</div>,
            },
            {
              label: 'Table',
              key: TABS.GRAPH,
              render: <div>TABLE</div>,
            },
          ]}
          onClickTab={this.handleClickChangeTab}
        />
      </section>
    );
  }
}

export default HrView;
