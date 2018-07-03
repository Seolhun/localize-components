import * as React from 'react';

import './TableComponent.css';

export interface TableComponentProps {
  items: any[];
  schema: any[];

  showScroll?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface TableComponentStates {}

class TableComponent extends React.Component<TableComponentProps, TableComponentStates> {
  public static defaultProps: Partial<TableComponentProps> = {
    showScroll: false,
    className: '',
    children: null,
  };

  renderHeader() {
    return this.props.schema.map((schem) => {
      return <th key={schem.id}>
        {schem.name}
      </th>;
    });
  }

  renderBody() {
    return this.props.items.map((item, idx) => {
      return <tr key={idx}>
        {
          this.props.schema.map((schem) => {
            return <td key={schem.id}>
              {item[schem.key]}
            </td>;
          })
        }
      </tr>;
    });
  }

  render() {
    return (
      <section>
        <div className={this.props.showScroll ? 'scroll-table' : 'paging-table'}>
          <table className='table table-hover'>
            <thead>
              <tr>
                {
                  this.renderHeader()
                }
              </tr>
            </thead>
            <tbody>
              {
                this.renderBody()
              }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default TableComponent;
