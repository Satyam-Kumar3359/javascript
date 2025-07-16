//for 
//["","",""]str inside arr
//[{}, {}, {}] obj insidr arr

// for (const element of object) {
    
// }

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}


const greetings="Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps : unique values store ,in form of object, and in same order of input

// const map=new Map()
// map.set('IN',"INDIA")
// map.set('Fr',"France")
// map.set('USA',"United State of Kingdom")
// console.log(map);


const map=new Map()
map.set('IN',"INDIA")
map.set('IN',"INDIA")// no duplicate 
map.set('Fr',"France")
map.set('USA',"United State of Kingdom")
// console.log(map);

for (const key of map) {
    // console.log(key);   
}
// [ 'IN', 'INDIA' ]
// [ 'Fr', 'France' ]
// [ 'USA', 'United State of Kingdom' ]

for (const [key, value] of map) {
    // console.log(key,':-',value);   
}
// IN :- INDIA
// Fr :- France
// USA :- United State of Kingdom


// for of loop on object

// const myObj={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
// for (const [key,value] of myObj) {
//     // console.log(key , value);// TypeError: myObj is not iterable
    
// }
const myObj={
    game1:'NFS',
    game2:'Spiderman'
}
for (const [key,value] of myObj) {
    // console.log(key , value);// TypeError: myObj is not iterable
    
}

//object ko iterate krne k different way hote h 