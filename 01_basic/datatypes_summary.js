//  primtive (call by value)
// 7 types : string , Number , Boolean , null , undefined , symbol , big int

//  non primitive (reference type)
// Array , objects , function

const heroes =["dora" , "shaktiman"]
// array is an object

let myObj = {
    name: "jatin",
    age: 22,
}

const myfunction = function(){
    console.log("hello");
}
console.log(typeof myfunction);





/* JavaScript is a dynamically typed language,
 which means that data types of variables are determined by
 the value they hold at runtime and can change throughout 
 the program as we assign different values to them.*/
// console.table(heroes);

// *******************************MEMORY*****************************************

// primtive data type uses stack memory   copy

// non-primitive data type uses heap memory  refrence

let myName = "jatin"
let anotherName = myName
anotherName = 'manu'
console.log(anotherName);
console.log(myName);

let user = 
{
    email: "jatin.com",
    upi: "oop"
}
let userTwo = user

userTwo.email = "js.com"
console.log(user)


// non primitive datatypes me refrence se pass hota hai value

