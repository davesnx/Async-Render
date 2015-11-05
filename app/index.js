import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.js';

import { form } from './../FirstData50.json';
import all from './../AllData.json';

let index = 0;

ReactDOM.render(<Form data={ all.form }/>, document.getElementById('Form'));

// setInterval(() => {
//     index++;
//     let data = all.form.slice(0, index);
//     ReactDOM.render(<Form data={ data }/>, document.getElementById('Form'));    
// }, 200);
