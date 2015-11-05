import React, { Component } from 'react';
import Field from './Field.js';
import List from './List.js';

export default class Form extends Component {

  static propTypes = {
    data: React.PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  renderField(index) {
    const field = this.props.data[index];
    return (
      <Field
        key = { index }
        { ...field }
      />
    );
  }

  render() {
    return (
          <div className="">
            <h1>Typeform</h1>
            <List
              itemRenderer = {::this.renderField}
              length = {1000}
              type = "simple"
            />
          </div>
        );
  }

}
