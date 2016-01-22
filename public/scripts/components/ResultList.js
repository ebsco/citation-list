/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ResultItem from './ResultItem';


export default class ResultList extends Component {
  render() {
    const children = this.props.items.map((item, index) => {
      let markup;
      if (this.props.editing) {
        markup = (
          <div>
            <button onClick={() => this.props.cite(item)}>Hide</button>
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
      <ul>
        {children}
      </ul>
    );
  }
}
