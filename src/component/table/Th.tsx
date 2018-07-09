import * as React from 'react';

import './Th.scss';

export interface ThProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
}

class Th extends React.PureComponent<ThProps> {
  public static defaultProps: Partial<ThProps> = {
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

export default Th;
