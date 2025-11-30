
let array01 = [1, 12, 16, 28, 34];
let array02 = [1, 13, 16, 27, 99];
let merged = [...array01, ...array02];
let mergedSorted = [...merged].sort();
console.log(`Merged & Sorted: ${mergedSorted}`);
