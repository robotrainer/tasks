let a = [1, 5, 6, 7, 8, 0, 1, 2, 1, 1, 7, 10, 11, 0];
let n = 0;
let length = 1;
let max = 0;

for(let i = 0; i < a.length; i++){
  if(a[i] > max){
    n++;
    max = a[i];
    if(n > length){
      length = n;
    }
  }
  else{
    n = 0;
    max = 0;
  }
}

console.log("Длина = " + length);
