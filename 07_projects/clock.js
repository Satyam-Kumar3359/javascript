// const clock=document.querySelector("#clock");
const clock=document.getElementById('clock');
// let date = new Date();
// console.log(date.toLocaleTimeString());
//but we want it run in interval
setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000);