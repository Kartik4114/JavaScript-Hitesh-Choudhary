let myDate=new Date();
console.log(myDate); // It won't give Indian Standard Time
console.log(myDate.toString());  // It will give IST(Indian)

console.log(typeof(myDate)); // It is object


// When we write in this format then date starts from 0->Jan
let myCreatedDate=new Date(2023,0,23);
let myCreatedDate2=new Date(2023,0,23,5,3);

let myCreatedDate3=new Date("01-14-2023");

let myTimeStamp=Date.now();
console.log(myTimeStamp); // It will give time in ms

// To convert time in sec
console.log(Math.floor(Date.now()/1000));

// Getting any particular thing from date

let newDate=new Date();
console.log(newDate.getDay());

// Customizing date

console.log(newDate.toLocaleString('default',{
    month: "long"
}))
