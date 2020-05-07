let a = [1, 2, 3, 4, 5];
let b = [];
let n = 0;

for(let i = a.length - 1; i >= 0; i--){
	b[n] = a[i];
	console.log(b[n]);
	n++;
}
