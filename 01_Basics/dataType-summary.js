 
//  Primitive

//  7 types : String , number, boolean, null , undefined, symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

// const bigNumber = 35467889902n




// Reference (non-primitives) 

// types : Array, Objects, Functions

const heros = ["krish", "jaadu", "shaktiman"];
let myObj = {
    name: "Abhimanyu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    

}
console.log(typeof bigNumber);


//+++++++++++++++++++++++++++++++++

//Stack (Primitive) : whenever the stack memory is used you'll get the copy of declared value not the actual value 
// Heap (Non-Primitive) : you'll get the reference of declared value(if u change anything in the reference , the original value will change)

// 

let myNickname = "Abhi"

let myFullname = myNickname
myFullname = "Abhimanyu"

console.log(myFullname);
console.log(myNickname);

let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}
let user2 = user1

user2.email = "Abhi@gmail.com"

console.log(user1.email);
console.log(user2.email);




