
// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// ---


function number(num1) {
     if (num1 % 2 === 1) {
        let multi = num1 * 2;
        return multi;
     }
     else if ( num1 % 2 === 0){
        let multi2 = num1 / 2;
        return multi2;
     }
     else{
        return 'this is not a valid number';
     }
    
}

let isEvenOrOdd = number(2);
console.log(isEvenOrOdd);
