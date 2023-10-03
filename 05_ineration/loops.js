// for(let i = 0 ;i <10 ; i++)
// { 
//     console.log(i);
// }
for(let i = 0 ;i <10 ; i++)
{  console.log(`outer loop ${i}`);
    for(let j = 0 ;j <10 ; j++)
{ 
    console.log(`iner loop ${j} with i = ${i}`);
}
}

// for of loop
const arr = [1,2,3,4,5]
 for (const it of arr) {
    console.log(it);
    
 }

// maps

const map = new Map()
map.set('IN',91);
map.set('usa',01)
console.log(map);
for (const [it , value] of map) {  // destructure
    console.log(`${it} -> ${value}`);
}