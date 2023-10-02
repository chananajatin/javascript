function addTwoNumbers(number1 , number2)
{
     console.log(number1+number2);
}
addTwoNumbers(3,4);

function login_details(username = 'sam ')
{
      if(!username)
      {
        console.log("no user");
        return 
      }

      return `${username} just logged in`

}
console.log(login_details())

function calculateCartPrice(...num1)
{
    return num1;
}
// ... in function is called rest operator to pass multiple value to function
console.log(calculateCartPrice(200,400,500));  // ye console array dega

const user = 
{
    username : "jatin",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
handleObject(user)

const myNewArray = [200,400,100,600]

function returnSecondValue(anyArray)
{
     return anyArray[1]
}

console.log(returnSecondValue(myNewArray));