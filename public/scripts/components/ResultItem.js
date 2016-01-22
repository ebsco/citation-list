/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';


const ResultItem = (props) => (
  <li>
    <h3>
      {props.data.title}
    </h3>
    <div>
      <img src={props.data.img} />
    </div>
    <p>{props.data.author}</p>
    <p>{props.data.description}</p>
  </li>
)

export default ResultItem;
