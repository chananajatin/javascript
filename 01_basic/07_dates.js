let myDate = new Date()
// date is an object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
 
// let myCreatedDate = new Date(2023 , 0 ,23)
// console.log(myCreatedDate.toDateString());

// let timeStamp = Date.now()

// console.log(timeStamp);

let newDate = new Date()

newDate.toLocaleString('default' , {
    weekday: "long",
})
console.log(newDate.toLocaleDateString())