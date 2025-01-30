// Stack (Used for Primitive) 
// Heap for Reference (Non-Primitive)

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="kartik@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)