const _ = require('lodash');

let a = [7, 2, 3, 0];

let min = a.indexOf(_.min(a));
let max = a.indexOf(_.max(a));

[a[min], a[max]] = [a[max], a[min]];

console.log(a);