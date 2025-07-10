//For
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");       
//     }
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value : ${i}`);
    
//    for (let j = 0; j < 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`); 
//    }
    
// }

// let myArr=["flash","batman","superman"]
// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
    
// }

//break and continue
// for (let i = 0; i <= 20; i++) {
//     if(i==5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);

// }


for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);

}