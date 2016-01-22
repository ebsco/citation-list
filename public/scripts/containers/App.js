/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import ResultListPage from './ResultListPage';


const App = (props) => (
  <div>
    <ResultListPage params={props.params} />
  </div>
)

export default App;
