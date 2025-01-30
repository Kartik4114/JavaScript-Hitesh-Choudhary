const name="hitesh" // It is declared as name
const repoCount=50

console.log(`Hello my name is ${name}`)
console.log(`My repoCount is ${repoCount}`)

const s1=new String("Kartik") // It is declared as object
console.log(typeof(name))
console.log(typeof(s1))

// Some string function

console.log(s1.length);
console.log(s1.toUpperCase());
console.log(s1.charAt(2));
console.log(s1.indexOf('t'));

// In substring it don't take care of negative value 
// if we put negative value it treat it as 0
// Unlike slice it starts taking from last in -ve.
const newS1=s1.substring(0,4);
console.log(newS1);

const newS2=s1.slice(-5,-1);
console.log(newS2);

// Trim function
const newStringOne="  Kartik Mittal  "
console.log(newStringOne.trim());

// Replace function
const url="https://kartik.com";
console.log(url.replace('kartik','kartikMittal'));


// Include function
console.log(url.includes('mittal'))

// splitting function
let s="kar-t-ik-mitt";
var arr= s.split('-');

console.log(arr);