/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultListToolbar from './ResultListToolbar';
import ResultList from '../components/ResultList';


const ConnectedList = connect((state) => ({
  items: state.dummyData,
  rangeStart: state.rangeStart,
  rangeEnd: state.rangeEnd
}))(ResultList);

const ResultListPage = (props) => (
  <div className={props.className}>
    <ResultListToolbar />
    <ConnectedList />
  </div>
)

export default ResultListPage;
