import * as React from 'react';

import Tr from './Tr';
import Th from './Th';
import Td from './Td';

import './Table.scss';

export interface TableSchema {
  id: string | number;
  key: string;
  header: {
    label: string;
    value?: any;
    cell?: () => {};
    onThClick?: () => {};
    onHovered?: () => {};
  };
  body: {
    value?: any;
    cell?: () => {};
    onHovered?: () => {};
  };
}

export interface TableProps {
  items: any[];
  schema: TableSchema[];

  showScroll?: boolean;
  className?: string;
  children?: React.ReactNode;
  onRowClick?: () => {};
  onHovered?: () => {};
}

interface TableStates {}

class Table extends React.Component<TableProps, TableStates> {
  public static defaultProps: Partial<TableProps> = {
    showScroll: false,
    className: '',
    children: null,
  };

  renderHeader() {
    return this.props.schema.map((schem) => {
      return <Th key={schem.id}>{schem.header.cell}</Th>;
    });
  }

  renderBody() {
    return this.props.items.map((item, idx) => {
      return (
        <Tr key={idx}>
          {this.props.schema.map((schem) => {
            return <Td key={schem.id}>{item[schem.key]}</Td>;
          })}
        </Tr>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={this.props.showScroll ? 'scroll-table' : 'paging-table'}
        >
          <table className="table table-hover">
            <thead>
              <Tr>{this.renderHeader()}</Tr>
            </thead>
            <tbody>{this.renderBody()}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
