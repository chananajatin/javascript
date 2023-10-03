const name ="jatin"
const repoCount = 4
const newName = new String('jatinchanana')
console.log(repoCount + "jatin")
//  back tick method is known as string intercollison
console.log(`hello my name is ${name}`)

console.log(name.__proto__)
console.log(name.length)
console.log(name.toUpperCase());
console.log(name)
console.log(name.charAt(2))
console.log(name.indexOf('a'));
console.log(name.substring(0,3))
// last value is excluded in substring
const anotherstring = name.slice(-4,3)
console.log(anotherstring)

const newString = "  jatin   "
console.log(newString.trim());
// trim removes white space characters from string 
// trim start and trim end can also be used

const url = "https/jatin%50chanana"
console.log(url.replace('%50','-'))
console.log(url.includes('jatin'))
const name2 = "jatin chanana"
