import React, { Component } from 'react';

export default class Field extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="field">
        <div className="field-number"> { this.props.id } </div>
        <p className="field-question"> { this.props.question } </p>
        <p className="field-description"> { this.props.description } </p>
        <input className="field-answer" type="text" defaultValue={ this.props.input } />
        <button> { this.props.next } </button>
      </li>
    );
  }

}
