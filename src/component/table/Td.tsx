import * as React from 'react';

import './Td.scss';

export interface TdProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
}

class Td extends React.Component<TdProps> {
  public static defaultProps: Partial<TdProps> = {
    className: '',
    style: {},
  };

  render() {
    return (
      <th className={this.props.className} style={this.props.style}>
        {this.props.children}
      </th>
    );
  }
}

export default Td;
