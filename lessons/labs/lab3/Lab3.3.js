// Method 1
let input = [12,34,1,16,28];
let sortNumberAscending = [...input].sort(function(a,b){
    return a - b;
});
let sortNumberDescending = [...input].sort(function(a,b){
    return b - a;
})
console.log(`Sort Array Ascending: ${sortNumberAscending}`);
console.log(`Sort Array Descending: ${sortNumberDescending}`);

// Method 2
let array = [12,34,1,16,28];
let unsortedPosition = array.length - 1;

while (unsortedPosition > 0){
    for (let innerIndex = 0; innerIndex < unsortedPosition; innerIndex++){
        let currentValue = array[innerIndex];
        let rightPositionValue = array[innerIndex + 1];
        if (currentValue > rightPositionValue){
            // Swap
            // swap(array, innerIndex)
            let temp = currentValue;
            array[innerIndex] = array[innerIndex + 1];
            array[innerIndex + 1] = temp;
        }
    }
    unsortedPosition--;
}

console.log(`Array after sorted: ${array}`);

function swap(array, index){
    let currentValue = array[index];
    let temp = currentValue;
    array[index] = array[index + 1];
    array[index + 1] = temp;
}