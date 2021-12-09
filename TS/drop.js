import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';

const { Option } = Select;


function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}


var options = []; // initialise an empty array
var temp = '';

do {
  temp = prompt("Enter a number. Press cancel or leave empty to finish.");
  if (temp === "" || temp === null) {
      break;
  } else {
      options.push(temp);  // the array will dynamically grow
  }
} while (1);



var select = document.getElementById("selectNumber");


ReactDOM.render(
  <Select
    showSearch
    placeholder="Select an option"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    for(let i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("options");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
  </Select>,
  document.getElementById('container'),
);

