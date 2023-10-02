const tinder = {}

tinder.id = "123";
tinder.name = "sammy";
tinder.isLoggedin = false;

// console.log(tinder);

const regularUser = {
    email:"jatin.com",
    fullname: {
        userfullname:{
            firstname: "jatin",
            lastname: "chanana"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
/*ab agr fullname nested na hota to upr full name ke baad ? mark lgadenge isse pta chl jayga 
ki nested hai ya nhi
isko optional chaining bolte hai */

const obj1 =   {1:"A" , 2:"B"}
const obj2 =   {3:"D" , 4:"E"}

const obj3 = Object.assign({},obj1,obj2)
// {} ye braces upar islie di hai because it is target  and rest are source
console.log(obj3);

const obj4 = {...obj1 , ...obj2}
console.log(obj4);

// database se array of object me aata hai values

const user = [
    {
        id : 1,
        email: "jatin"
    },
    {
        id:2,
        email:"jatn.com" 
    }
]
user[1].email

console.log(Object.keys(tinder));
// returns array of key
console.log(Object.values(tinder));
// returns array of values
console.log(Object.entries(tinder));
// return array of key value pairs

console.log(tinder.hasOwnProperty('isLoggedin'));
// returns true false