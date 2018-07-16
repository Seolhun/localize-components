import * as React from 'react';

import { Table, TableSchema } from '@/component/table';
import BusController from '../../api/BusController';
import schema from './schema';

interface TableScrollViewStates {
  items: TableSchema[];
}

class TableScrollView extends React.Component<{}, TableScrollViewStates> {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    BusController.selectList(1, 1000, 20170301).then((response) => {
      this.setState({
        items: response.data.CardBusStatisticsServiceNew.row,
      });
    });
  }

  render() {
    return (
      <section>
        <div>
          <Table
            items={this.state.items}
            schema={schema}
            showScroll={true}
          />
        </div>
      </section>
    );
  }
}

export default TableScrollView;
