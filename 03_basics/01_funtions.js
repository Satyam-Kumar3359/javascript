//  console.log("H");
//  console.log("i");
//  console.log("t");
//  console.log("s");
//  console.log("H");
 
 //funtion definition
function sayMyname() {
     console.log("H");
    console.log("i");
    console.log("t");
    console.log("s");
    console.log("H");
}
// sayMyname//fun reference
// sayMyname()// fun execution

// funtion for adding two num

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }
// addTwoNumbers(2,"4")//24

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);//7
    
// }
// const result=addTwoNumbers(2,5)
// console.log("result is :",result);// undefined


// function addTwoNumbers(num1,num2){
//     let res= num1+num2;
//     return res;
//     //fun rule that any code after return statement is not execute 
//     console.log("satyam");
    
// }
// const result=addTwoNumbers(2,5)
// console.log("result is :",result);//7

// function addTwoNumbers(num1,num2){
//     let res= num1+num2;
//     console.log("Radha Rani");
    
//     return res;
//     //fun rule that any code after return statement is not execute while upper vala execute ho jayega
//     console.log("satyam");
    
// }
// const result=addTwoNumbers(2,5)
// console.log("result is :",result);//7


// function addTwoNumbers(num1,num2){//parameter
//    return num1+num2
    
// }
// const result=addTwoNumbers(2,5)//argument
// console.log("result is :",result);//7

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// loginUserMessage("satyam")// ye execute hua but kux ans nii de rha h
// console.log(loginUserMessage("satyam"))
// console.log(loginUserMessage())// undefined aayega not null
// const ans=loginUserMessage("Kumar")
// console.log("ans is :",ans);

// function loginUserMessage(username){
//     // if(username===undefined){
//     if(!username){
//         console.log("please enter username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

// agr kux bhi pass nii ho rh ah to default value set kr dooo, agr pass kr di to vo value overwrite ho jayegi
function loginUserMessage(username="sam"){
    // if(username===undefined){
    if(!username){
        console.log("please enter username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())


//============================== second part =====================//

// case shopiing cart me items add hi hote jate h vha pta niihot ah kite argument aayenge
// but price ko add krte jana h

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));//200 first item to aa gya h but other nii
// isko solve krne k liye REST /SPREAD OPERATOR KA USE KRTE H

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));// ab ye arr return krega [ 200, 300, 400 ]

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500,484));//num1=[ 400, 500, 484 ]

// create a obj and pass them into funtion

// const user={
//     username:"satyam",
//     price:199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// handleObject(user)//Username is satyam and price is 199

// const user={
//     username:"satyam",
//     prices:199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// // handleObject(user)//Username is satyam and price is undefined
// // price = undefined so object handling  ke case me type safety check rkni pdti h that jo mai extract kr rhu hu vo object me h ki nii and jo value pass kr rhe h uska dta type object h ki nii

// // direct bhi user pass kr skt eh jaruri nii ki bano
// handleObject({
//     username:"Radhe rani",
//     price:"priceless"
// })//Username is Radhe rani and price is priceless

// like object array bhi pass kr skte h

const myNewArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));//300
console.log(returnSecondValue([200,300,400,500]));//300
