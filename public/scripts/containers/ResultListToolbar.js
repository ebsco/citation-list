/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import { Link } from 'react-router';

const ResultListToolbar = ({rangeStart, rangeEnd, totalCount}) => (
  <div>
    <h2>
      Search results: {rangeStart} - {rangeEnd} of {totalCount}
    </h2>
    <Link to="/citation-list">Get Citations</Link>
  </div>
)

export default ResultListToolbar;
