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
const ConnectedResultsToolbar = connect((state) => ({
  totalCount: state.dummyData.length,
  rangeStart: state.rangeStart,
  rangeEnd: state.rangeEnd
}))(ResultListToolbar);

export default class ResultListPage extends Component {
  render() {
    let toolbar;
    let mode = this.props.params.mode;
    if (mode === 'citation-list') {
      toolbar = <CitationListToolbar />;
    }
    else {
      toolbar = <ConnectedResultsToolbar />;
    }
    return (
      <div>
        {toolbar}
        <ConnectedList editing={mode === 'citation-list'}/>
      </div>
    );
  }
}
