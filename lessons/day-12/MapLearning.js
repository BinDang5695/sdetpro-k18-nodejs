// CREATE
const emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'], 
    ['115', 'Hospital Dept'], 
    ['116', 'Others'], 
    ['117', '...'],
]);

// READ
console.log(emergencyList.get('117'));
const is117Existing = emergencyList.has('117');
console.log(`Is 117 existing: ${is117Existing}`);

// Loop over all keys and get values
const allKeys = emergencyList.keys();
for (const key of allKeys){
    console.log(`${key}: ${emergencyList.get(key)}`);
}

for (const value of emergencyList.values()){
    console.log(`Value: ${value}`);
}

// UPDATE/ADD
emergencyList.set('117, "Something else...')
console.log(emergencyList);

// DELETE
console.log(`The size before: ${emergencyList.size}`);
console.log(emergencyList);
emergencyList.delete('117');
console.log(`The size after: ${emergencyList.size}`);
console.log(emergencyList);

for (const [teo,ti] of emergencyList){
    console.log(`${teo}: ${ti}`);
}

// const someObj = {
//     myArray: [

//     ]
// }

// console.log(Object.entries(someObj));
// const {bestStudentName, avgScore} = findBestStudent([teo,ti,tun])



