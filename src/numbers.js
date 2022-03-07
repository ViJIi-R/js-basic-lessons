const age = 100
const money = 1000.50
console.log(typeof age)
console.log(typeof money) // no diff between whole numbers and fraction..all are numbers

console.log('10' - '2')

// Math helper methods:
console.log(Math.round(2.2))
console.log(Math.floor(2.6))
console.log(Math.ceil(2.5))
console.log(Math.random())

const sweets = 20
const kids = 3
const eachKidsGets = Math.floor(sweets / kids)
console.log(eachKidsGets)
const leftsweets = sweets % kids
console.log(leftsweets)

// ---------------
let x = 2 ** 3
console.log(x)
x = Math.pow(2, 3)
console.log(x)
// ---------
console.log(0.1 + 0.2)
// let costOfProduct=100.95;
const cosOfProduct = 10095// in paise

console.log(typeof Infinity)
console.log(typeof -Infinity)
const result = 10 / 'hello'
console.log(typeof NaN)
//-----------------------------
//Check the datatype of a value
let y =100;
let res = Number.isInteger(y);
console.log(Is y a number: ${res});

let z ='abcd';
let soln = Number.isInteger(z);
console.log(Is z a number: ${soln});
soln = (typeof z === 'string');
console.log(Is z a string: ${soln});
let flag = true;
soln = (typeof flag === 'boolean');
console.log(Is flag a boolean: ${soln});
let nos = [1 , 2 , 3 , 4 , 5];
soln = (typeof nos === 'object') ;
console.log(Is nos an object: ${soln});