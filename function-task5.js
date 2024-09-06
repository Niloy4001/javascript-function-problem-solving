


/////////////////////////////////
// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even(number) {
    if (number === 0) {
        return 'It is not even or odd'
    }
   
    else if (number % 2 === 0) {
        return 'Even';
    }
    else if (number % 2 === 1 ) {
        return 'Odd';
    }
    
}

let evenOdd = odd_even(9);
console.log(evenOdd);
