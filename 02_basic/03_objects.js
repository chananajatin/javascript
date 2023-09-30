const mysym = Symbol("key2")
const myObj = {
    name: "jatin",
    age : 20,
    email: "jatin.com",
    [mysym] : "key1"
}
console.log(typeof myObj[mysym]);

Object.freeze(myObj)
// cant overwrite values

console.log(myObj);