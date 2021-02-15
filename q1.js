const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// "Clean the room" function
function cleanTheRoom() {
    // Sort above array numerically (ascending order)
    array.sort((a, b) => a - b);

    // "Group together" the same element with subarrays
    debugger;

    let result = [];
    let subArray;

    for (let i = 0; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
            // clearing for a new subarray
            subArray = [];
            // push newly created subarray into "result" array 
            result.push(subArray);
        }
        // adding the first/matching value for their designated subarray
        subArray.push(array[i]);
    }
    return result;
}

console.log(cleanTheRoom());