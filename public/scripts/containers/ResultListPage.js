/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultListToolbar from './ResultListToolbar';
import CitationListToolbar from './CitationListToolbar';
import ResultList from '../components/ResultList';


const ConnectedList = connect((state) => ({
  items: state.dummyData,
  rangeStart: state.rangeStart,
  rangeEnd: state.rangeEnd
}))(ResultList);

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
        <ConnectedList />
      </div>
    );
  }
}
