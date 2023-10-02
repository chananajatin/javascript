const course = {
     coursename: "js in hind",
     price: "999",
     courseInstrucotr: "hitesh"

}
// console.log(course.courseInstrucotr)
const {courseInstrucotr : instructor} = course
// in above line of code we have destructured the code of
// course instructor from objecgt course to instructor
// console.log(courseInstrucotr); after destructuring only destructured value can be used
// {} this is used for object destructuring

console.log(instructor);

// phle api ki value xml structure me aati thi but ab json me aati  hai 
 

// what is json 
// niche jo btaya hai vo json hai 
// api
{
//        "name" : "jatin",
//        "coursename" : "js in hindi",
//        "price" : "free"
// }

// api array of object me bhi mil skta hai