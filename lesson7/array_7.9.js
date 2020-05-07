let a = [1, 5, 6, 7, 8, 0, 1, 2, 1, 1, 7, 10, 11, 0];
let n = 1;
let length = 1;

for(let i = 0; i < a.length; i++){
	if(a[i+1] > a[i]){
		n++;
		if(n > length){
			length = n;
		}
	}
	else{
		n = 1;
	}
}

console.log("Длина = " + length);
