/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCitation } from '../actions/actions.js'

import ResultListToolbar from './ResultListToolbar';
import CitationListToolbar from './CitationListToolbar';
import ResultList from '../components/ResultList';


const ConnectedCitationList = connect((state) => ({
  items: state.citations
}))(ResultList);
const ConnectedResultList = connect((state) => ({
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
    let mode = this.props.params.mode,
      layout;
    if (mode === 'citation-list') {
      layout = [
        <ConnectedCitationListToolbar />,
        <ConnectedCitationList />,
        <ConnectedResultList editing={mode === 'citation-list'}/>
      ];
    }
    else {
      layout = [
        <ConnectedResultsToolbar />,
        <ConnectedResultList />
      ];
    }
    return (
      <div>
        {layout}
      </div>
    );
  }
}
