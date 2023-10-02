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
