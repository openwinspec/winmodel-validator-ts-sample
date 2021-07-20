import { validate } from 'winmodel-validator-ts';
const fs = require('fs');

let rawdata = fs.readFileSync('./src/sample.model.json');

console.time('valadate time: ');

validate(rawdata)
  .then((result) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error: ', error);
  })
  .finally(() => {
    console.timeEnd('valadate time: ');
  });
