import React, { Component } from 'react';
// import styles from './App.css';
import Field from './Field.js';
import List from './List.js';

export default class Form extends Component {

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
          <div>
            <h1>Typeform</h1>
            <div style={{ overflow: 'auto', maxHeight: 600 }}>
              <List
                itemRenderer = { ::this.renderField }
                length = { 1000 }
                type = "simple"
              />
            </div>
          </div>
        );
  }

}
