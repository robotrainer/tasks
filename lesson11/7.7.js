const _ = require('lodash');

let a = [7, 2, 3, 0];

[a[a.indexOf(_.min(a))], a[a.indexOf(_.max(a))]] = [a[a.indexOf(_.max(a))], a[a.indexOf(_.min(a))]];

console.log(a);