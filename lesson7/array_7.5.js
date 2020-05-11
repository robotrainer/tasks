let a = [-2, 10, -5, -1, 2, 6];
let b = [];

for(let i = 0; i < a.length; i++){
  if (a[i] > 0){
    b.push(a[i]);
  }
}

console.log(b);