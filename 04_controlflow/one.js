//IF
const isUserLoggedin = true;
const temperature=41
if (isUserLoggedin) {
    // console.log("executed");
}

// if (temperature>50){
// if (temperature===41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

//<, >, <=,>=,==,===,!==
// const score=200
// if(score>100) {
//     let power="fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

const balance=1000
// if(balance>550) console.log('test'),
// console.log("test2");

if(balance<500){
    console.log("less than 500"); 
}
else if(balance<750){
    console.log("less than 750");   
}
else if(balance<900){
    console.log("less than 900");
    
}
else{
    console.log("less than 1200");
    
}

const UserLoggedin=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInEmail=true

if(UserLoggedin && debitCard ){
    console.log("Allow to buy course"); 
}
if(loggedInFromGoogle || loggedInEmail){
    console.log("logged in"); 
}

//SWITCH CASE
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("febuary");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     default:
//         console.log("default set");
//         break;
// }
// IMP:AGR BREAK NA LAGAYA TO JHA CONDITION BNTI TRUE HUI vha k neeche se sare execute ho jayenge , except default

// const month="mar"
// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("febuary");
//         break;
//     case "mar":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;
//     default:
//         console.log("default set");
//         break;
// }

// const userEmail="satyam@gmail.com"//true
// const userEmail="";//false: empty string
// const userEmail=[];//true: empty array
// if(userEmail){
//     console.log("Got user email");  
// }
// else{
//     console.log("Do not have");
// }

//FALSY VALUES
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// "0",'false',"false", " ",[],{},function(){}

//empty array ko check krna
// if (userEmail.length===0) {
//     console.log("array is empty");
// }

//empty object ko check krn

const emptyObj={}
//Object.keys(emptyObj)=arr of obj
if (Object.keys(emptyObj).length===0) {
    // console.log("object is empty");
}

//IMP : false==0,false=="",0=="" =>>> true

//Nullish Coalescing Operator (??) : null , undefined
let val1;
// val1=5 ?? 10
// console.log(val1);//5
// val1=null ?? 10
// console.log(val1);//10// null k case me safety check krta h

// val1=undefined ?? 10
// console.log(val1);//10

val1=undefined ?? 19 ?? 16
console.log(val1);//19 first value jo bhi milegi


//TERNIARY OPERATOR
 //condition ? true:false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

 