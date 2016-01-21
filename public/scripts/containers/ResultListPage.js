/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ResultListToolbar from './ResultListToolbar';
import CitationListToolbar from './CitationListToolbar';
import ResultList from '../components/ResultList';


export default class ResultListPage extends Component {
  render() {
    let toolbar;
    if (this.props.params.mode === 'citation-list') {
      toolbar = <CitationListToolbar />;
    }
    else {
      toolbar = <ResultListToolbar />;
    }
    return (
      <div className={this.props.className}>
        {toolbar}
        <ResultList />
      </div>
    );
  }
}
