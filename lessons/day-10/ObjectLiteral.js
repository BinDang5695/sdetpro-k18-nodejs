let teoName = "Teo";
let teoAge = 21;
let teoGender = "M";

// Office stuff -> Box(Office stuff): Pen, notebook, earaser
// Create an object  - literal
let teoInfo = {
    name: "Teo",
    age: 21,
    "my gender": 'M'
}

// Read | Dot notation to get value from a property
console.log(`Teo's name: ${teoInfo.name}`);
console.log(`Teo's gender: ${teoInfo["my gender"]}`);

// Destructure
const {age, name, ["my gender"]: gender} = teoInfo;
console.log(`Teo's name: ${name}`);
console.log(`Teo's gender: ${gender}`);

// UPDATE
teoInfo.age = 22;
console.log(teoInfo);

// DELETE
delete teoInfo["my gender"];
teoInfo.gender = "M";
console.log(teoInfo);

