import React, { Component } from 'react';
// import styles from './App.css';
import Field from './Field.js';

export default class Form extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let Typeform = this.props.data.map((field) => {
      return (
        <Field
          key = { field.id }
          question = { field.question }
          description = { field.description }
          answer = { field.answer }
          next = { field.next }
        />
      );  
    });

    return (
      <div>
        { Typeform }
      </div>
    )
  }

}
