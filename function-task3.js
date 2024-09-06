// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// ---


function make_avg(array) {
    let avg;
    let sum = 0;
    let size = array.length;
    console.log(size);


    for (let i of array) {

        sum = sum + i;

    }
    avg = sum / size;
    return avg;



}

let averageOfArray = make_avg([3, 4, 5, 6]);
console.log(averageOfArray);

let bigArray = make_avg([4, 4, 4, 4, 4, 4, 4]);
console.log(bigArray);
