let a = [1, 4, 10, 10, 4, 2, 10, 0];
let b = [];
let n = 0;

for(let i = 0; i < a.length; i++){
	if (b.includes(a[i]) === false){
		b[n] = a[i];
		console.log(b[n]);
		n++;
	}
}