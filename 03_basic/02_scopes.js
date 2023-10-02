if(true)
{
    let a = 10
   const b = 20
   var c = 30 
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
     const username = "jatin"
     function two()
     {
        const website = "youtube"
        console.log(username);
     }

    //  console.log(website);
     two()
}
// andr ka function bhar ke function ko acces kr skta hai but
// bhar wala andr wale function ke variables ko access ni kr Sakta
one()

if (true)
{
   const username = "jatin"
   if(username === "jatin")
   {
      const website = " youtube.com "
      console.log(username + website);
   }
}
// **************************interesting************************************
console.log(addone(5)); //hoisting concept
function addone(num)
{
    return num+1
}


// console.log(addTwo);
const addTwo = function(num)
{
   return num+2;
}

// addTwo(5)