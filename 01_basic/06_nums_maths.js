const score = 400
const balance = new Number(100)
console.log(balance);
console.log(score)

console.log(balance.toString().length)

console.log(balance.toFixed(1))

const otheNumber = 123.8966

// console.log(otheNumber.toPrecision(4 ));
console.log(otheNumber.toFixed(3));
// precision me jitni value hogi us number pe roundoff krdega ye

const rupees = 1000000
console.log(rupees.toLocaleString('en-IN'))
// comas lgadega like ye bnadega 10,00,000

// **********************MATHS****************************************
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.min(4,3,5,6));
console.log(Math.random());
// math .random lies always between 0-1
console.log(Math.floor(Math.random()*10));
const min = 1;
const max = 6;

console.log(Math.floor(Math.random()*(max-min+1))+min);

