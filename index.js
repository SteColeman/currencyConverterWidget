import fetch from 'node-fetch';

const response = await fetch('http://data.fixer.io/api/latest?access_key=0311cb48110274bc5ce834ea3270bb07');
const data = await response.json();

console.log(data);