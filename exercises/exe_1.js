let x = 0;
let a = [];
let b = [];

for(let i = 17; i < 25; i++){
  x = (i**4 - (500/i - i)**4)*(1000 - 2*i**2);
  if(x > 0 && x%1 === 0){
    a.push(x);
    b.push(i);
    break;
  }
}

console.log(x);
console.log(a);
console.log(b);