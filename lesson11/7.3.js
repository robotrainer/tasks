const _ = require('lodash');

let a = [-2, 10, 5, 1, 2, 6];

console.log('sum = ' + _.sum(_.filter(a, (x, i) => i % 2 === 0 && x > 0)));

