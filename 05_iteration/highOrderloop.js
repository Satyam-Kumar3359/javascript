//higher order looop , most time use, =>forEach in case of array

const coding=["js","ruby","java","python"]

// coding.forEach( function name() {
//    function body
// })// bc ye callbkfun h to fun name nii leta h 

// forEach calls the callbackfn function one time for each element in the array.

// coding.forEach( function (val) {
//     console.log(val);//return all value
    
// })

// arrow funtion ; functionName=()=>{}
coding.forEach( (item) => {
    // console.log(item);
})    

//funtion ko as a parameter bhi de skte h 
// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( ()=> {})
//callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

coding.forEach( (item,index,arr)=> {
    // console.log(item,index,arr);
    
})

const mycodig=[
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    },
    
]
// this is very common operation that jo database se value aati h vo array k format me aati h 
// and ek value ,ek object hi hota h
// ab arr ke andr se jo object h usme se value access krna ho too
mycodig.forEach( (item)=> {
    console.log(item.langFileName);  
})

// exapmle: database se ek arr aaya usme mobile inform hoti h , and isko inject kr dete h webpages me 
// and ek ek mobile infor hr alg alg card ke from me store kr 

/*
Summary for interview:

- Demonstrates use of higher-order functions, specifically Array.prototype.forEach, to iterate over arrays in JavaScript.
- Shows different ways to use forEach: with anonymous functions, arrow functions, and named functions as callbacks.
- Explains that forEach provides access to the current item, index, and the entire array in its callback.
- Illustrates iterating over an array of objects (e.g., simulating database records) and accessing object properties within the loop.
- Highlights that forEach is commonly used for side effects like logging or rendering data, not for returning new arrays.
*/