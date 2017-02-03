// Challenge One: Minimum

function min (num1, num2) {
	if (num1 > num2) {
    return num1;
    }
  else {
  return num2;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));

// Challenge 2: Recursion

function isEven(number){

	if (number === 0){
    	return true;
    }
  	else if (number === 1){
    	return false;
    }
  	else if (number < 0) {
    	return isEven(- number);
    }
  	else {
    	return isEven(number - 2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
// → -10

//Challenge 3: Bean Counting

function countBs(string){
  var numB = 0;
	for (var i = 0; i < string.length; i++){
    		if(string[i] === "B"){
        	numB += 1;
        }
    }
  return numB;
}

function countChar(string){
  var numB = 0;
	for (var i = 0; i < string.length; i++){
    		if(string[i] == "k" || string[i] == "K"){
        	numB += 1;
        }
    }
  return numB;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
