/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultListPage from './ResultListPage';


const App = (props) => (
  <div className={props.className}>
    <ResultListPage params={props.params} />
  </div>
)

export default App;
