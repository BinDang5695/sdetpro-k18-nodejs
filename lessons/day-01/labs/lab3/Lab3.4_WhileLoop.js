// Method 1
let array01 = [1, 12, 16, 28, 34];
let array02 = [1, 13, 16, 27, 99];
let merged = [...array01, ...array02];
let mergedSorted = [...merged].sort();
console.log(`Merged & Sorted: ${mergedSorted}`);

// Method 2
let fooArray = [1,12,16,28,34];
let barArray = [1,13,16,27,99];
let fooPosition = 0;
let barPosition = 0;
let fooLength = fooArray.length;
let barLength = barArray.length;
let mergedArray = [];

while (fooPosition < fooLength && barPosition < barLength){
    const fooValue = fooArray[fooPosition];
    const barValue = barArray[fooPosition];

    if (fooValue <= barValue){
        mergedArray.push(fooValue);
        fooPosition++;
    } else {
        mergedArray.push(barValue);
        barPosition++;
    }
}

while (fooPosition < fooLength){
    mergedArray.push(fooArray[fooPosition]);
    fooPosition++;
}

while (barPosition < barLength){
    mergedArray.push(barArray[barPosition]);
    barPosition++;
}
console.log("Merged: ", mergedArray);
