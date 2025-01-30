let score1 ="33abc";
let score2 =null;
let score3 =undefined;

let valueInNumber1=Number(score1);
let valueInNumber2=Number(score2);
let valueInNumber3=Number(score3);

console.log(typeof(valueInNumber));

console.log(valueInNumber1); // It will give not a number (NaN)
console.log(valueInNumber2); // It will give not a number 0
console.log(valueInNumber3); // It will give not a number (NaN)


let number=33

let str=String(number);
console.log(typeof(str));

/* ********** OPERATION **************/

console.log("1"+2);
console.log(2+"1");
console.log(2+2+"1");
console.log("1"+2+2);

// *****  DATATYPES *********

// PRIMITIVE 
// 7 types : String ,Number,Boolean,null,undefined,symbol,bigInt

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId); // it will give false answer

// REFERENCE (Non-Pimitive)