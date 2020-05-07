let a = [];
let n = 10000;
let m = 0;
let k = 0;

while (k < n){
	let flag = 0;
	m++;
	for(let i = 2; i <= m**0.5; i++){
		if(m%i === 0){
			flag = 1;
			break;
		}
	}
	if(flag === 0){
		a.push(m);
		k++;
	}	
}

console.log(a);
