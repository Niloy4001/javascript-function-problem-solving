

/////////////////////////////////////////////////
// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(params) {
    
    let avg = params.split('');

    let arrayOfZero = [];

    for( let i of avg){
        if (i == 0) {
            arrayOfZero.push(i);
        }
        
    }
    
    return arrayOfZero.length;


    
    
    
}

let countZero = count_zero('10101010101010000001100');

console.log(countZero);
