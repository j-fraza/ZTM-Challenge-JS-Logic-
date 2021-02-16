let result = [];

// function that takes an array of numbers and a target number
function answer(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) { // finding two different numbers in the array that,
                result.push(array[i], array[j]); // when added together, give the target number
            }
        }
    }
    console.log(result);
}

answer([1,2,3], 4);