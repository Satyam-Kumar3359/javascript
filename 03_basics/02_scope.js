// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

// if(true){
//     let a=10
//     const b=20
//     var c=30 
//     // c=30 create same problem like var
// }
// // console.log(a);
// // console.log(b);
// console.log(c);//30 that is problem qki isko scope ke bhr nii aana tha

let a=300
// if(true){
//     let a=10//block scope
//     const b=20
//     console.log("INNER",a);//10
    
// }
// console.log(a);//300


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

//++++++++++++++++++++++++++++++++++++++ scope level and mini hosting++++++++++++++++++++++++++

// function one() {
//     const username = "satyam"
//     function two(){
//         const website="youtube"
//         console.log(username);
        
//     }
//     console.log(website);//outside the scope // error neeche vala execute hi na hoga 
//     two()
// }
// one()
function one() {
    const username = "satyam"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    
    two()
}
// one()

// if(true){
//     const username="satyam"
//     if(username=="satyam"){
//         const website="youtube"
//         console.log(username + website);
        
//     }
//     console.log(website);// error out of scope access kr rhe h
    
// }
// console.log(username);//error out of scope var access
if(true){
    const username="satyam"
    if(username=="satyam"){
        const website="youtube"
        // console.log(username + website);//satyamyoutube
        
    }
    // console.log(website);// error out of scope access kr rhe h
    
}
// console.log(username);//error out of scope var access


// +++++++++++++++ interesting ++++++++++++++++
//hoisting

// function addone(num){
//     return num+1
// }
// addone(5)

// const addtwo=function(num){
//     return num+2
// }
// addtwo(5)



//we can write addone like this
// addone(5)
console.log(addone(5))//6
function addone(num){
    return num+1
}



//but cant write addtwo like this,it all dpeneds on function declaration
// addtwo(5)
// console.log(addtwo(5));

const addtwo=function(num){
    return num+2
}
// // ReferenceError: Cannot access 'addtwo' before initialization