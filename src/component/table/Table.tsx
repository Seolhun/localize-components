import * as React from 'react';

import Td from './Td';
import Th from './Th';
import Tr from './Tr';

import './Table.scss';

export interface TableSchema {
  id: string | number;
  header: {
    cell: string | ((props?) => any);
    onThClick?: () => {};
    onHovered?: () => {};
  };
  body: {
    cell: string | ((props?) => any);
    onTdClick?: () => {};
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
            if (typeof schem.body.cell === 'function') {
              return <Td key={schem.id}>{schem.body.cell(this.props)}</Td>;
            }
            return <Td key={schem.id}>{item[schem.body.cell]}</Td>;
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
