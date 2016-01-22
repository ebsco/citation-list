/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import { Link } from 'react-router';

const printToNewTab = (data, format) => () => {
  const output = data.reduce((obj, record) => (obj + [record.author, '. <em>', record.title, '</em>'].join('') + '<br />'), '');
  const d = window.open().document;
  d.write(['<h1>',format,'</h1>',output].join(''));
  d.close();
};

const CitationListToolbar = (props) => {

  const data = props.citations;

  return (
    <div>
      <Link to="/">Return to Result List</Link>
      <button onClick={printToNewTab(data, 'AMA')}>
        AMA
      </button>
      <button onClick={printToNewTab(data, 'MLA')}>
        MLA
      </button>
    </div>
  );
}

export default CitationListToolbar;
