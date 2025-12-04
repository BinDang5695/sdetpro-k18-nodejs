
let teo = {
    name: "Teo",
    age: 18,
    // nested object
    bankAccount:{
        checking:{
            accountNumber: '1234567891'
        },
        saving: {
            accountNumber: '9876543211'
        }
    }
}

// Trying to clone data from object
// let tun = teo;
// tun.name = "Tun";
// tun.age = 17;
// tun.bankAccount.checking.accountNumber = '1234567891';
// tun.bankAccount.saving.accountNumber = '9876543211';

// Shallow copy
let tun = {...teo};
tun.name = "Tun";

// Shallow copy - handle nested objects
let ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.bankAccount.saving.accountNumber = '9876543211';
console.log(teo);
console.log(ti);
console.log(tun);



