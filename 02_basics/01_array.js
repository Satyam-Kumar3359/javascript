const myArr=[1,2,3,4]
// console.log(myArr[0]);//1

// IMP

//javascript array copy operationcreate shallow copy 
// shallow copy :of object is a copy whose properties`share same reference
// deep copy: do not share same refere
//arr declaration
const myHero=["shaktiman","nagraj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[1]);

//ARRAY METHOD

// myArr.push(6)
// myArr.push(7)
// myArr.pop();// remove last value

// myArr.unshift(9)// [ 9, 1, 2, 3, 4 ] arr ke 0th index pr value insert krta h and sbko ek posn shift krta h that is very bad
// myArr.shift();//[] 1, 2, 3, 4 ] remove kr diya first posn or 0th index

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(5));//-1
// console.log(myArr.indexOf(4));//3

// const newArr=myArr.join()
// console.log(myArr);//[1 2 3 4]
// console.log(typeof myArr);//object
// console.log(newArr);//1 , 2 , 3 , 4
// console.log(typeof newArr);//string


//slice splice
// console.log("A",myArr);//A [ 1, 2, 3, 4 ]

// const myn1=myArr.slice(1,3)
// console.log(myn1);//[2,3]
// console.log("B",myArr);//B [ 1, 2, 3, 4 ]
// // imp => original array is not manipulate 

// const myn2=myArr.splice(1,3)// ye krne pr index1 to 3 arr se remove ho jayega
// console.log(myn2);//[ 2, 3, 4 ]
// console.log("C",myArr);//C [ 1 ]
// //imp => original array is manipulated



const marvel_hero=["thor","ironman","spiderman"]
const dc_hero=["superman","flaash","batman"]

//push : add data in original arr
// marvel_hero.push(dc_hero)
// console.log(marvel_hero);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flaash', 'batman' ] ]
// // JS me array kisi bhi type ka data le skta as her it take array as a single data
// console.log(marvel_hero[2]);//spiderman
// console.log(marvel_hero[3]);//[ 'superman', 'flaash', 'batman' ]
// console.log(marvel_hero[4]);//undefined
// console.log(marvel_hero[3][1]);//flaash



// one another method is concat: returns new arr
// marvel_hero.concat(dc_hero)// it alter the arr so store it in another variable
// console.log(marvel_hero);//[ 'thor', 'ironman', 'spiderman' ]

// const all_hero=marvel_hero.concat(dc_hero)// it alter the arr so store it in another variable
// console.log(all_hero);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flaash', 'batman' ]

// another easy method to merge two arr like concat(only two arr can be merge)
const all_new_hero=[...marvel_hero,...dc_hero]// iske andr , lga kr more multiple arr ko merge kr skte h
// console.log(all_new_hero);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flaash', 'batman' ]


const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=another_arr.flat(Infinity);// give depth to solve like infinity
// console.log(real_another_arr);//spread kr dega 


// uses in web scraping : when u select data form webpage, it come in different format like nodelist,obj, or string,but we want in form of array
console.log(Array.isArray("Satyam"));//false
//array me convert kr diya
console.log(Array.from("Satyam"));//[ 'S', 'a', 't', 'y', 'a', 'm' ]

//vvvip
console.log(Array.from({name:"Satyam"}));//interesting// []
// here we need to defined that wheter from key or from value , we create array
let score1=100
let score2=200
let score3=300
// multiplr var /arr to convert into arr
console.log(Array.of(score1,score2,score3));//[100,200,300]
