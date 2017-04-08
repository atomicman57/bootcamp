function getPrimes(n){
	if (typeof(n) == "number"){
		if (n < 2){
          return [];
        } else
var numbers = [], primes = [], maxNumber = n;

for(var i = 2;i<=maxNumber;i++){
 numbers.push(i);   
}

while(numbers.length){
    primes.push(numbers.shift());
    numbers = numbers.filter(
        function(i){return i%primes[primes.length-1]!=0}
    );
}
return primes
}
}
