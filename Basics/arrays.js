//1. slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it.
// let arr = [1,2,3,4,5,6];
// console.log(arr);
// // console.log(arr.slice(1,3));
// console.log(arr.splice(1,3));
// console.log(arr); 

//2. Spread Op (...) - 
// let arr1=[1,2,3,4];
// let arr2 = [5,6,7,8];

// let crr = [...arr1, ...arr2];
// console.log(crr);


//2. flat Op (...) - 
// let arr=[1,[2,3],4,[5,6,[7,8]]];
// console.log(arr.flat(Infinity));
// console.log(Array.isArray(arr));

// 3. from() - converts string into array
// console.log(Array.from(45345));


// 4.of() Op -
let a=11;
let b=22;
let c=33;
console.log(Array.of(a,b,c));






