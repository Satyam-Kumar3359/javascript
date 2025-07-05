// current context ko refer krne k liye this keyword use kte h

// const user={
//     username:"satyam",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
        
//     }

// }
// user.welcomeMessage()


// now we are changing the context
// const user={
//     username:"satyam",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }
// // user.welcomeMessage()//satyam, welcome to website
// // //change the context
// // user.username="Hitesh sir"
// // user.welcomeMessage()//Hitesh sir, welcome to website


//+++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
const user={
    username:"satyam",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()//satyam, welcome to website
//change the context
user.username="Hitesh sir"
user.welcomeMessage()//Hitesh sir, welcome to website
*/
/*output
satyam, welcome to website
//current context first timr
{
  username: 'satyam',// 
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Hitesh sir, welcome to website
//after changing the current context
{
  username: 'Hitesh sir',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
//++++++++++++++++++++++++++++++++++++++++++
// const user={
//     username:"satyam",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);
        
//     }
// }
//  console.log(this);// IMP:=>now current context is empty:  {} bc we are inside node environment
 // jb node envirnment k andr h to this refer kr rha h empty obj { }ko, bc global ke andr koi bhi context nii h

 // vhi jb browser ke andr dekhte h this ko to this show : WINDOW  not {} because 
 // BROWSER KE ANDR JO GLOBAL OBJECT H VO "WINDOW " OBJECT H

 // PHLE javascipt ko execute krne k engine sirf ek jgh browser k andr hi paya jata tha , abhi uss engine seaprte kr diya gya like name NODE,DINO ,BUN, to abhi engine standalone h
 // BROWSER KE ANDR JO GLOBAL OBJECT H VO "WINDOW " OBJECT H



//================================================================================= 

// function chai(){
//     console.log(this);
// }
// chai()

// "this" sirf object ke andr kam krta h function ke andr aake hm this ka use nii kr skte h
// function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined
// }
// chai()

// const chai=function (){
//     let username="hitesh"
//     console.log(this.username);//undefined
// }
// chai()

//+++++++++++++++++++++++ more way to declare function: arrow functon ++++++++++++++++++++

const chai= () =>{
    let username="hitesh"
    console.log(this);//{}
}
// chai()

//++++++++++++++++++++++++ ARROW FUNTION +++++++++++++++++++++++++

//basic arrow funtion
// const addtwo=(num1,num2)=>{
//     return num1+num2 // curlly bracket {} to return ka use hota h
// }
// console.log(addtwo(3,5));//8

// IMPLICIT RETURN ARROW FUNT
// const addtwo=(num1,num2)=> num1+num2 // { } nii to no return
// console.log(addtwo(3,5));//8

// const addtwo=(num1,num2)=> (num1+num2)
// console.log(addtwo(3,5));//8


// object ko return krna 

// const addtwo=(num1,num2)=> {username:"hitesh"}
// console.log(addtwo(3,5));// undeifned bc aise obj ko return nii kr skte h

// obj ko return krne k parenthesis me wrap kroo
const addtwo=(num1,num2)=> ({username:"hitesh"})
console.log(addtwo())//{ username: 'hitesh' }


// Summary and Important Points:

// 1. The `this` keyword refers to the current context. In objects, `this` refers to the object itself.
// 2. In Node.js, the global context for `this` is an empty object `{}`. In browsers, it's the `window` object.
// 3. `this` does not work as expected inside regular functions; it is `undefined` or refers to the global object.
// 4. Arrow functions do not have their own `this`. They inherit `this` from their lexical scope.
// 5. Arrow functions can have implicit returns (no curly braces needed for single expressions).
// 6. To return an object from an arrow function, wrap the object in parentheses: `()=>({key: value})`.
// 7. Changing object properties updates the context for methods using `this`.
// 8. Use regular functions for object methods if you need to access `this`.

// These are key concepts for interviews and practical JavaScript development.