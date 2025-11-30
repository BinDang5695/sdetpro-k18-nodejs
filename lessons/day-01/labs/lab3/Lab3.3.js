
let input = [12,34,1,16,28];
let sortNumberAscending = [...input].sort(function(a,b){
    return a - b;
});
let sortNumberDescending = [...input].sort(function(a,b){
    return b - a;
})
console.log(`Sort Array Ascending: ${sortNumberAscending}`);
console.log(`Sort Array Descending: ${sortNumberDescending}`);