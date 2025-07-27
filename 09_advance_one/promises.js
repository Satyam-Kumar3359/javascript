//promise create krna 
// const promiseOne= new Promise(function(resolve,reject){
// // Do an asyc task
// // DB calls , cryptography, network
//     setTimeout(function(){
//        console.log('Async task is complete');
//        //but jb tk resolve call nii krenge tb  tk ye connect hi nii hoga .then se
//        resolve()
        
//     },1000)
// })


// //promise consumption
// //then is direct related to resolve
// promiseOne.then(function(){
//     console.log("promise consumed");   
// })


// //another way to represent promise 
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("Async task 2");
//     resolve()  
//    },2000)

// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"satyam@gmail.com"})
//         //resolve ke andr jo bhi parameter pass krenge vo necche vale ,then ke funtion me mil jata h
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

//error based checking
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=true
        let error=false
        if(!error){
            resolve({username:"satyam",password:"123"})//data send krna most time object { }
// but u pass arr ect    
}
        else{
            reject('ERROR !!!!!!!')
        }
    },1000)
})
//chaining concept
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username  
// }).then((username)=>{
//     console.log((username));
    
// }).catch(function(error){
//     console.log(error);
    
// })
// we can write this like 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username  
})
.then((username)=>{
    console.log((username)); 
})
.catch(function(error){
    console.log(error); 
})
.finally(()=>{
    console.log('The promise is either resolve or rejected ');
    
})

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Satyam Agrahari", password:"1234"})
        }else{
            reject("Error: JS went wrong")
        }
    },1000)
})
//isko same .then().catch() se kr skte h but we follow different approach

//async await means jb tk kaaam hua nii tb tk aage nii jaan a h , problem ye h ki isme hm 
// catch handle nii kr apte h like db connection huaaa nii to aage hi nii badhan h

// async function name(params) { }
// async function consumePromise() {
//    const response= await promiseFive
//    console.log(response);
// }
// consumePromise()
// it give error qki jb tk resolve nii h , and aap ye expect kr rhe h ki jb bhi promise resolve hoga value resopnse ke andr ayegi hi aayei
//but agr resolve ho jayega to koi problem nii hoga means agr error = false ho jayega to koi issue nii hoga 

async function consumePromise() {
    try{
        const response= await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);    
    }
}
// consumepromise ko call krna na bhhoole
consumePromise()


// async function getAllUser() {
//     try {
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
//         //ab actually me yha data noo print hoga qki response ko json formate me krne me time lgata h
//         // and if print response it will ans 
//         // console.log(response)// it give output
        
//         // const data =response.json()// it takes time that why make it await 
//         // console.log(data);
//         const data =await response.json() //now it works
//         console.log(data);
        
//     } catch (error) {
//         console.log("E",error);
        
//     }
    
// }
// getAllUser()

// ab isi ko .then .catch se likha ho to
fetch('https://api.github.com/users/Satyam-kumar3359')//iska respose type promise h
.then((response)=>{
    return response.json()
})
.then((response_data)=>{
    console.log(response_data);
    
})
.catch((error)=>{
    console.log("E:",error);
    
})

//fetch bad me execute tha but yha pr sbse phle fetch ho rha h bad me upper vala code 