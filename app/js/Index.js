import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.js';
import all from './../../data/AllData.json';
import './../styles/App.scss';

ReactDOM.render(<Form data={ all.form }/>, document.getElementById('Form'));

// First approach for simulate the Async Load of the JSON
// 
// let index = 0;
// 
// setInterval(() => {
//     index++;
//     let data = all.form.slice(0, index);
//     ReactDOM.render(<Form data={ data }/>, document.getElementById('Form'));    
// }, 200);
