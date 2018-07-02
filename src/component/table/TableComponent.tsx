import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './TableComponent.css';

interface PaginationComponentProps {
  items: any[];
  schema: any[];

  showScroll: boolean;
  className: string;
  children: ReactNode;
}

interface PaginationComponentStates {}

TableComponent.propTypes = {

}

TableComponent.defaultProps = {
  showScroll: false,
  className: '',
  children: null,
}


class TableComponent extends Component {
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
