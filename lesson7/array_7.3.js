let a = [-2, 10, 5, 1, 2, 6];
let sum = 0;

for(let i = 0; i < a.length; i++){
  if (a[i] > 0 && (i+1)%2 !== 0){
    sum += a[i];
  }
}

console.log("sum = " + sum);
