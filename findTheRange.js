// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let min = array[0];
let max = array[0];

for (i = 0; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i];
    }   else if (max < array[i])
            max = array[i];
}

console.log(min, max)