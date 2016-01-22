/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCitation } from '../actions/actions.js'

import ResultListToolbar from './ResultListToolbar';
import CitationListToolbar from './CitationListToolbar';
import ResultList from '../components/ResultList';


const ConnectedList = connect((state) => ({
  items: state.uncited,
  rangeStart: state.rangeStart,
  rangeEnd: state.rangeEnd
}), (dispatch) => ({
  cite: (item) => dispatch(addCitation(item))
}))(ResultList);
const ConnectedResultsToolbar = connect((state) => ({
  totalCount: state.uncited.length,
  rangeStart: state.rangeStart,
  rangeEnd: state.rangeEnd
}))(ResultListToolbar);
const ConnectedCitationListToolbar = connect((state) => ({
  citations: state.citations
}))(CitationListToolbar);

export default class ResultListPage extends Component {
  render() {
    let toolbar;
    let mode = this.props.params.mode;
    if (mode === 'citation-list') {
      toolbar = <ConnectedCitationListToolbar />;
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
