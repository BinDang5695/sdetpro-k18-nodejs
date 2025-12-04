const givenString = "Hello bạn tôi tên Tèo, bạn cũng tên Tèo luôn à?";

// Usage
const groupWordMap = groupWordsUsingMap(givenString);
console.log(groupWordMap);

// Controller
function groupWordsUsingMap(){
    // ['Hello', 'bạn', ...]
    let individualWords = givenString.replace(/,/gi, "").split("");
    let wordMaps = new Map();
    for (const word of individualWords){
        if (wordMaps.has(word)){
            wordMaps.set(word, wordMaps.get(word) + 1);
        } else {
            wordMaps.set(word, 1);
        }
    }
    return wordMaps;
}