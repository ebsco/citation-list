/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ResultItem from './ResultItem';


const ResultList = (props) => {
  const items = [1,2,3].map((item) => (
                  <ResultItem />
                ));
  return (
    <ul className={props.className}>
      {items}
    </ul>
  );
}

export default ResultList;
