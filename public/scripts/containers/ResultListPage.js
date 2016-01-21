/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ResultListToolbar from './ResultListToolbar';
import ResultList from '../components/ResultList';


const ResultListPage = (props) => (
  <div className={props.className}>
    <ResultListToolbar />
    <ResultList />
  </div>
)

export default ResultListPage;
