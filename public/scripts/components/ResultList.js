/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ResultItem from './ResultItem';


const ResultList = (props) => {
  const items = props.items.slice(props.rangeStart - 1, props.rangeEnd),
    totalCount = props.items.length,
    children = items.map((item, index) => (
      <ResultItem data={item} index={index + props.rangeStart} />
    ));
  return (
    <div>
      <h2>
        Search results: {props.rangeStart} - {props.rangeEnd} of {totalCount}
      </h2>
      <ul className={props.className}>
        {children}
      </ul>
    </div>
  );
}

export default ResultList;
