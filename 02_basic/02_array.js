const marvel_heroes = ["spiderman" , "thor"]
const dc_heroes = ["batman" , "flash"]

const all_heroes = marvel_heroes.concat(dc_heroes)
// concat return new Array
// while push modifies same Array

console.log(all_heroes);

const all_new_heroes = [...marvel_heroes , ...dc_heroes]
// spread operator ...
console.log(all_new_heroes);

// array ke andr array ek array me convert krne ke lie .flat use krenge

const unflat_array = [1,2,3 ,[4,5],[6,7]]
const flat_array = unflat_array.flat(Infinity)
// jo infinity parameter hai ye layers hai jha tk flat krna hai
console.log((flat_array));

console.log(Array.isArray("jatin"));
console.log(Array.from("jatin"));
console.log(Array.from({name : "jatin"}))  //interesting gives empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));