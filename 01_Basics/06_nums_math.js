const score = 400;
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.8961

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++  Maths  ++++++++++++++

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(3.6));

console.log(Math.ceil(4.1));
console.log(Math.floor(3.9));

console.log(Math.min(2,1,8,5,3));
console.log(Math.max(2,1,8,5,3));
console.log(Math.random(2,1,8,5,3)); // it returns the value from 0 to 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)













