import React, { Component } from 'react';

class SearchBarView extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { search_word: this.props.search_word };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.search_word}
          onChange={(event) => this.setState({ search_word: event.target.value })}
        />
        Value of the input : {this.state.search_word}
      </div>
    );
  }
}

export default SearchBarView;
