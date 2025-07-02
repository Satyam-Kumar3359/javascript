const score=100
// console.log(score);//100

// agr explicitly type define krna ho to
const balance=new Number(100)
// console.log(balance);//[Number: 100]

// console.log(balance.toString())
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// for e commerce website ,for prcision value 100.00

// const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3));// it focus on before decimle digit //23.9

// const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3));// it focus on before decimle digit //124

// const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(3));// it focus on before decimle digit //1.12e+3

// const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(4));// it focus on before decimle digit //1124


// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//+++++++++++++++++++++ math ++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3));//4
// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4,5,3,55));//3
// console.log(Math.max(4,5,3,55));//55
// console.log(Math.random());//b/w 0 to 1
// lets us assuming we are generating number for dice btw 1 to 6
console.log((Math.random()*10)+1);//+1 bc number may be 0 .0474 so isko 1 banane k liye
console.log(Math.floor((Math.random()*10))+1);//+1 bc number may be 0 .0474 so isko 1 banane k liye


const min=10
const max=20
// value mughe 10 se 20 ke beech me chahiy
console.log(Math.floor(Math.random()*(max-min+1))+min);


