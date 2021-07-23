import { validate } from 'winmodel-validator-ts';
const fs = require('fs');

let rawdata = fs.readFileSync('./src/sample.model.json');

let model = JSON.parse(rawdata);

console.time('valadate time: ');

validate(model)
  .then((result) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error: ', error);
  })
  .finally(() => {
    console.timeEnd('valadate time: ');
  });
