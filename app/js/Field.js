import React, { Component } from 'react';

export default class Field extends Component {

  // static propTypes = {
  //   id: React.propTypes.number,
  //   question:
  //   description:
  //   answer:
  //   next:
  // }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field">
        <div className="field-number">{this.props.id}</div>
        <p className="field-question">{this.props.question}</p>
        <p className="field-description">{this.props.description}</p>
        <input className="field-answer" type="text" placeholder={this.props.input}/>
        <button className="btn">{this.props.next}</button>
      </div>
    );
  }

}
