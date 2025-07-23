// generste andom color
let randomColor=function(){
  let hex="0123456789ABCDEF"
  let color="#";

  for (let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
};

// this work only when we click on start button but we want that after one sec it will change its color automatically so we use setinterval
// let startChangingColor=function(){
//   document.body.style.backgroundColor=randomColor();
// }

// let startChangingColor=function(){

//   let changeBgColor=function(){
//     document.body.style.backgroundColor=randomColor();
//   }
//   let IntervalId=setInterval(changeBgColor,1000)
  
// }

//here intervalid ko global banana tbhi scope ke bhr access kr payenge
// let IntervalId;
// let startChangingColor=function(){

//   let changeBgColor=function(){
//     document.body.style.backgroundColor=randomColor();
//   }
//    IntervalId=setInterval(changeBgColor,1000)
  
// }

// let stopChangingColor=function(){
//   clearInterval(IntervalId)// reference dena pdega 
// }

// now for cleaner code 
let IntervalId;
let startChangingColor=function(){

  let changeBgColor=function(){
    document.body.style.backgroundColor=randomColor();
  }
  //  IntervalId=setInterval(changeBgColor,1000)
  if(IntervalId==null){
    IntervalId=setInterval(changeBgColor,1000)
  }
  
}

let stopChangingColor=function(){
  clearInterval(IntervalId)// reference dena pdega 
  //jb intervalid use nii ho rha h to usko flush kr diya for memory free and space optimization
  IntervalId=null
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)