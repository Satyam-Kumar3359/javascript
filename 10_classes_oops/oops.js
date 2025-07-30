function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this // implicilty build h likho chahe nii
    // ab new lga diya h to isko likho chahe nii koi frk nii

    //method bhi likh skt eh
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);       
    }
}

// const userOne=User("satyam",12,true)
// // console.log(userOne);
// const userTwo=User("shivam",10,false)
// console.log(userOne);// value over write ho gyi qki new instance nii create huaa

const userOne=new User("satyam",12,true)// new instance

const userTwo= new User("shivam",10,false)// hr bar new instance
console.log(userOne);
console.log(userTwo);

//note
// 1. jaise hi new keyword likhte h ek "new empty object "create ho jata h,jise instance bolte h
//2. constructor funtion call hota h new keyword ke kran, sare argument pack ho kr hmko mil jayega
// 3. this keyword ke andr sare argument inject ho jate h
//4 hmko function ke andr mil ajte h