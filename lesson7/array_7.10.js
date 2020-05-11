let a = [];
let n = 10;
let m = 0;
let k = 0;

while (k < n){
  let flag = true;
  m++;
  for(let i = 2; i <= m**0.5; i++){
    if(m%i === 0){
      flag = false;
      break;
    }
  }
  if(flag === true){
    a.push(m);
    k++;
  } 
}

console.log(a);

