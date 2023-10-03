const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
// for in loop for object
for (const key in myObject) {
   console.log(`${key} is ${myObject[key]}`);
}

// for in loop gives index of array  IMPORTANT  