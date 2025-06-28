//data kaise store hote h memory me and  kaise access hote h uske based pr two types k hote h 

// 1 primitive data type => ye call by value hote h means original data ka reference nii dete h , uski copy dte h ,change made in copy not in original data

//  7 category   
//string, number,boolean,null,undefined,symbol,BigInt

const my_name="satyam"
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let mystate;
console.log(typeof my_name);//'string'
console.log(typeof outsideTemp);//object
console.log(typeof score);//number
console.log(typeof isLoggedIn);//boolean
console.log(typeof mystate);//undefined

const id=Symbol('123')
const another_id=Symbol('123')
// same value h symbol ke andr but dono ka return type value unique h 
console.log(id==another_id)// dono ki value same nii hogi

const bigNumber=2354444841544254n
console.log(typeof bigNumber);//bigint
console.log(typeof id);//symbol

//null means not empty not zero it means jaise temperature server se laa rhe h to aur agr temp nii de rha h to vo null hota h 

//undefined: var declared , memory space occupied , but kya value aani h abhi vo nii define
//value ko unique banane ke liye
// bigInt : scientific value ko store krne k liye


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
//  and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.

// 2 Reference type or non primitive

//array, objects, funtion

const heros=["shaktiman","doga"];//arr

let my_obj={
    name:"satyam",
    age:22
}

let my_Funtion=function(){
    console.log("Hello World");   
}
console.log(typeof my_Funtion);//function ,isko function object bhi khte h
console.log(typeof my_obj);//object
console.log(typeof heros);//object


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object
*/