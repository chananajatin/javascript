  const myArr =  new Array(1,2,3,4,5)
  myArr.unshift(9) 
//   adds in front
  console.log(myArr)
  myArr.shift()
  console.log(myArr);
//   removes from front

console.log(myArr.indexOf(2));

const newArr = myArr.join()
// changes array into string
console.log(newArr);

//  slice Array ka part dega jo range hoga exclusive last range
// splice array ka part dega including range but original array change hojayga\
// splice wali range removed from array