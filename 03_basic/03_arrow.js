const user = {
    username:"hitesh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
    }
}
// this keyword refere to current context
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// in browser global object is windows for this keyword

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

//  can be written as
const addTwo = (num1 , num2) => (num1+num2) //this is also called implicit return  
console.log(addTwo(3,2));