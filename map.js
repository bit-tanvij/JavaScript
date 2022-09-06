//Without built-in function
const array = [18, 54 , 48, 90];
const newArray = [];
for(let i = 0; i < array1.length; i++) {
  newArray.push(array1[i] /6);
}
console.log(newArray);// prints [ 3, 9, 8, 15 ]

//with Using a Higher-Order Function (Map)
let array2 = [18, 54 , 48, 90];
array2 = array2.map(i => i / 5);
console.log(array2); // prints [ 3, 9, 8, 15 ]