// const values=coding.forEach( (item)=> {
//     console.log(`The language is ${item}`);  
// })
// // console.log(values); // undefined, because forEach does not return a value   

//manually return krna pdega value ko
// const values=coding.forEach( (item)=> {
    
//     return item; // this will not work, forEach does not return values
// })
// console.log(values); // undefined, because forEach does not return a value   


// filter : is used to filter out elements from an array based on a condition and returns a new array containing only the elements that satisfy the condition.
// map : is used to transform each element of an array and returns a new array containing the transformed elements.
// reduce : is used to accumulate a single value from an array by applying a function to each element, and it returns that single accumulated value.
// forEach : is used to execute a provided function once for each array element, primarily for side effects, and it does not return a new array
// forEach is primarily used for side effects, such as logging or modifying external variables, rather than returning a new array or value.
// forEach does not return a new array or value, it simply executes the provided function for each element in the array.
// forEach is not chainable, meaning you cannot call another array method directly after it, unlike map, filter, or reduce.

const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];
// const newNum=numbers.filter( (num) => num>4)
// console.log(newNum); // [5, 6, 7, 8, 9, 10]

// filter method is used to create a new array with all elements that pass the test implemented by the provided function.
// It does not modify the original array, and it returns a new array containing only the elements
// that satisfy the condition specified in the callback function.
// The filter method is useful when you want to extract a subset of elements from an array based
// on a specific condition.

// const newNum=numbers.filter( (num) => {
//     num>4//not working, because we need to return a value =>[] empty 
// })
// console.log(newNum); // [] empty array, because we are not returning a value in the callback function

// const newNum=numbers.filter( (num) => {
//     return num>4
// })
// console.log(newNum); // [5, 6, 7, 8, 9, 10]

// but we want to do this by forEach method, so we can do it like this
const newNums=[]
numbers.forEach( (num) => {
    if(num>5){
        newNums.push(num) // we are pushing the value in the newNums array
    }
})
// console.log(newNums); // [6, 7, 8, 9, 10]

// but this is not the correct way to use forEach, because forEach is not meant to return a new array
// forEach is primarily used for side effects, such as logging or modifying external variables, rather than returning a new array or value.

// now we are a exaple of book [{},{}] like this
const books = [
    { title: "Book 1",genre:'Fiction', author: "Author 1", publish: 1981,edition :2004 },
    { title: "Book 2",genre:'Non-Fiction', author: "Author 2", publish: 1985,edition :2000 },
    { title: "Book 3",genre:'Fiction', author: "Author 3", publish: 1990,edition :2010 },
    { title: "Book 4",genre:'Non-Fiction', author: "Author 4", publish: 1995,edition :2015 },
    { title: "Book 5",genre:'Fiction', author: "Author 5", publish: 2000,edition :2020 },
    { title: "Book 6",genre:'Non-Fiction', author: "Author 6", publish: 2005,edition :2021 },
    { title: "Book 7",genre:'Fiction', author: "Author 7", publish: 2010,edition :2022 },
    { title: "Book 8",genre:'Non-Fiction', author: "Author 8", publish: 2015,edition :2023 },
    { title: "Book 9",genre:'Fiction', author: "Author 9", publish: 2020,edition :2024 },
    { title: "Book 10",genre:'Non-Fiction', author: "Author 10", publish: 2025,edition :2025 }

];
// const userBook=books.filter( (bok) => bok.genre === 'Fiction')
// console.log(userBook); 
// let userBook=books.filter( (bok) => bok.genre === 'Fiction')
// userBook=books.filter( (bok) =>{
//     return bok.publish >=2000
// })


let userBook=books.filter( (bok) => bok.genre === 'Fiction')
userBook=books.filter( (bok) =>{
    return bok.publish >=2011 && bok.genre === 'Fiction'  
})
console.log(userBook); 
