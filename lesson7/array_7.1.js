let a = [5, 2, -1, 9];
let min = 0;
let max = 0;

for(let i = 0; i < a.length; i++){
	if(a[i] < a[min]){
		min = i;
	}
	if(a[i] > a[max]){
		max = i;
	}
}

console.log("min = " + a[min]);
console.log("max = " + a[max]);
