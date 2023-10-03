const userEmail = "jatin.ai"

if(userEmail)
{
     console.log("got user email");
}
// falsy value
/*  false , 0 ,-0, BigInt 0n , NULL , undefined , NaN */
//  truthy value
//  "0" , 'false' , " " , [] , {} , function(){}


// to check object is empty or not
const emptyObj  = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("khali object");
}
const string = ''
if(string)
{
    console.log("true");
}

// Nullish coalescing operator (??) : null undefined
// safety check of null value

let val1;
 val1 = 5 ?? 10 //return 5
 val1 = null ?? 10 // return 10
 val1 =  undefined ?? 10 // return 10

// ternary operator
// condition ? true : false 

let icecreamPrice = 99
icecreamPrice == 100 ? console.log("yes") : console.log("false");
