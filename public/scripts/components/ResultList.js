/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import './ResultList.css';

import ResultItem from './ResultItem';


export default class ResultList extends Component {
  render() {
    const children = this.props.items.map((item, index) => {
      let markup;
      if (this.props.editing) {
        markup = (
          <div>
            <button onClick={() => this.props.cite(item)}>Cite Record</button>
            <ResultItem data={item} />
          </div>
        );
      }
      else {
        markup = <ResultItem data={item} />;
      }

      return markup;
    });
    return (
      <ul className="result-list">
        {children}
      </ul>
    );
  }
}
