import * as React from 'react';

import './Tr.scss';

export interface TrProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
}

class Tr extends React.PureComponent<TrProps> {
  public static defaultProps: Partial<TrProps> = {
    className: '',
    style: {},
  };

  render() {
    return (
      <tr className={this.props.className} style={this.props.style}>
        {this.props.children}
      </tr>
    );
  }
}

export default Tr;
