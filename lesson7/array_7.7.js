let a = [7, 2, 3, 0];
let min = 0;
let max = 0;
let bag;

for(let i = 0; i < a.length; i++){
  if(a[i] < a[min]){
    min = i;
  }
  if(a[i] > a[max]){
    max = i;
  }
}

bag = a[min];
a[min] = a[max];
a[max] = bag;


console.log(a);

