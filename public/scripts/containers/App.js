/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateText } from '../actions/actions';

// #className comes from dom attributes
// #text comes from redux, allowing you to see the data
// #onClick comes from redux, allowing you to setup actions
const App = (props) => (
  <div className={props.className}>
    {props.text}
    <br/>
    <button onClick={props.onClick}>Update Text</button>
  </div>
)

function mapStateToProps (state) {
  return {
    text: state.text
  };
}
function mapDispatchToProps (dispatch) {
  return {
    onClick: () => {
      dispatch(updateText('Hello, World!'))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
