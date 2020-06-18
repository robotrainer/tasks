const _ = require('lodash');

let a = [-2, 10, -5, -1, 2, 6];

console.log('count = ' + _.filter(a, x => x > 0).length);