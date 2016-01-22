/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ResultItem from './ResultItem';


export default class ResultList extends Component {
  constructor(props) {
    super(props);
    let { items, rangeStart, rangeEnd } = this.props;
    this.state = {
      items: items.slice(rangeStart - 1, rangeEnd)
    };
  }
  componentWillReceiveProps(nextProps) {
    let { editing, items, rangeStart, rangeEnd } = this.props;
    if (editing !== nextProps.editing ||
      items !== nextProps.items ||
      rangeStart !== nextProps.rangeStart ||
      rangeEnd !== nextProps.rangeEnd) {

      this.setState({items: items.slice(rangeStart - 1, rangeEnd)})
    }
  }
  removeItemAt(index) {
    let items = this.state.items;
    return () => {
      this.setState({
        items: [
          ...items.slice(0, index),
          ...items.slice(index+1)
        ]
      });
    }
  }
  render() {
    const children = this.state.items.map((item, index) => {
      let markup;
      if (this.props.editing) {
        markup = (
          <div>
            <button onClick={this.removeItemAt(index)}>Hide</button>
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
