//Dates
let myDates=new Date()
// console.log(myDates);//2025-07-02T12:58:51.400Z ye km smgh me aa rha h
// console.log(myDates);//2025-07-02T12:58:51.400Z ye km smgh me aa rha h
// console.log(myDates.toString());//Wed Jul 02 2025 13:02:20 GMT+0000 (Coordinated Universal Time) ye thoda sa shii

// console.log(myDates.toDateString());//Wed Jul 02 2025
// console.log(myDates.toTimeString());//17:25:32 GMT+0000 (Coordinated Universal Time)

// console.log(myDates.toISOString());//2025-07-02T13:09:31.804Z
// console.log(myDates.toJSON());//2025-07-02T13:09:31.804Z

// console.log(myDates.toLocaleString());//7/2/2025, 1:09:31 PM
// console.log(myDates.toLocaleDateString());//7/2/2025
// console.log(myDates.toLocaleTimeString());//5:25:32 PM

// IMP
console.log(typeof myDates);//object

// let myCreatedDate=new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString());//1/23/2023, 12:00:00 AM


// let myCreatedDate=new Date(2025,6,2,5,2);//month satrt with 0 for jan
// console.log(myCreatedDate.toDateString());//Wed Jul 02 2025
// console.log(myCreatedDate.toLocaleString());//7/2/2025, 5:02:00 AM

// YYYY mm dd
// let myCreatedDate=new Date("2025-07-02");//month satrt with 1 for jan
// console.log(myCreatedDate.toDateString());//Wed Jul 02 2025
// console.log(myCreatedDate.toLocaleString());//7/2/2025, 12:00:00 AM

//dd mm yyyy

let myCreatedDate=new Date("02-07-2025");//month satrt with 1 for jan
// console.log(myCreatedDate.toDateString());//Fri Feb 07 2025
// console.log(myCreatedDate.toLocaleString());//2/7/2025, 12:00:00 AM


//// time stamp :whwn u design quizes to know who give fasted 
let myTimeStamp=Date.now()
// console.log(myTimeStamp);//1751478563782 millisecond
// console.log(myCreatedDate.getTime());//1738886400000 milisec mebc it is an object
//sec me convert krna vvvimp
// console.log(Date.now());// ans in milisec 1751479368344
// console.log(Math.floor(Date.now()/1000));// ans in sec 1751479455



let newDate=new Date();
// console.log(newDate)//2025-07-02T18:07:20.761Z
// console.log(newDate.getDate())//2
// console.log(newDate.getDay())//3
// console.log(newDate.getMonth())//6 strt form 0->jan
// console.log(newDate.getMonth()+1)//for exact month
// console.log(newDate.getTime())// in milisec
// console.log(newDate.getFullYear())// 2025
// console.log(newDate.getMinutes())// 10,11



newDate.toLocaleString('default',{
    //ctrl+space :show all property
    weekday:"long",
    // timeZone:''
})
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));//Wednesday


