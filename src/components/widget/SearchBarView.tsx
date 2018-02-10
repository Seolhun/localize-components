import * as React from 'react';

export interface SearchBarViewProps extends React.Props<SearchBarView> {
  search_word: string;
}

export interface SearchBarViewState {
  search_word: string;
}

class SearchBarView extends React.Component<SearchBarViewProps, SearchBarViewState> {
  constructor(props: SearchBarViewProps) {
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
