/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import './ResultItem.css';

const ResultItem = (props) => (
  <li className="result-item">
    <h3 className="result-item__title">
      {props.data.title}
    </h3>
    <div className="result-item__subheading">By {props.data.author}</div>
    <p className="result-item__description">{props.data.description}</p>
  </li>
)

export default ResultItem;
