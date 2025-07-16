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
// console.log(userBook); 


//++++++++++++++++++++++++++++++++++ Map +++++++++++++++++++++++++++++++++++++++++=====

//map automatic return krta h 
const myNums = [1,2,3,4,5,6];
// const newNUM=myNums.map( (num) => (num+10))
// console.log(newNUM);

const newNUM=myNums.map( (num) => {
    return num+10
})
// console.log(newNUM);

// chaining 
// const newNums2 = myNums
//                         .map( (num) => (num *10))
//                         .map( (num) => (num +1 ))
// console.log(newNums2); // [11, 21, 31, 41, 51, 61]


const newNums2 = myNums
                        .map( (num) => (num *10))
                        .map( (num) => (num +1 ))
                        .filter( (num) => num >= 40)
// console.log(newNums2); 
                        

// chaining is a powerful feature of JavaScript that allows you to call multiple methods on an object in a single line of code.
// It is commonly used with array methods like map, filter, and reduce to create more concise and readable code.
// Chaining allows you to perform multiple operations on an array without creating intermediate variables or arrays.
// It can make your code more elegant and easier to understand by reducing the number of lines and improving readability.
// However, it's important to use chaining judiciously, as excessive chaining can make code harder to read and maintain.
// When chaining methods, ensure that each method returns a value that can be used by the next method in the chain.
// Chaining is not limited to array methods; it can also be used with other methods in JavaScript, such as string methods or custom object methods.
// Example of chaining with string methods:
const str = "Hello, World!";
const result = str.toLowerCase().replace("world", "everyone").trim();
// console.log(result); // "hello, everyone!"

// reduce is used to accumulate a single value from an array by applying a function to each element, and it returns that single accumulated value.
// It is commonly used for tasks like summing numbers, concatenating strings, or transforming arrays into a single value.
// The reduce method takes a callback function and an optional initial value as arguments.
// The callback function receives two arguments: the accumulator (the accumulated value) and the current element of the array.
// The reduce method iterates through the array, applying the callback function to each element, and returns the final accumulated value.
// If an initial value is provided, it is used as the starting point for the accumulation; otherwise, the first element of the array is used as the initial accumulator
// value.
// The reduce method is useful when you want to perform a cumulative operation on an array, such as calculating the sum of all elements, finding the maximum or minimum value, or creating a single object
// from an array of objects.
// Example of using reduce to calculate the sum of an array of numbers:
const numbersArray = [1, 2, 3, 4, 5];
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // 15

// const num2=[1,2,3]
// const myTotal=num2.reduce( function (acc,currval){
//     console.log(`acc ${acc} and currval ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal); // 6

// const num2=[1,2,3]
// const myTotal=num2.reduce( (acc,currval) => {
//     console.log(`acc ${acc} and currval ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal); // 6

const num2=[1,2,3]
const myTotal=num2.reduce( (acc,currval) => acc+currval,0)
// console.log(myTotal); // 6


// Example of using reduce to create an object from an array of objects:
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const peopleByName = people.reduce((accumulator, person) => {
    accumulator[person.name] = person.age;
    return accumulator;
}, {});
// console.log(peopleByName); // { Alice: 25, Bob: 30, Charlie: 35 }

// Example of using reduce to find the maximum value in an array:
const numbersArray2 = [5, 10, 2, 8, 3, 7];
const maxNumber = numbersArray2.reduce((max, current) => {
    return current > max ? current : max;
}   , numbersArray2[0]);        
// console.log(maxNumber); // 10

const shoppingCart =[
    { item: "Apple", price: 159, quantity: 3 },
    { item: "Banana", price: 59, quantity: 6 },
    { item: "Orange", price: 289, quantity: 2 }
]
// add all the price of the items in the shopping cart
const totalprice =shoppingCart.reduce( (acc,item) => (acc+item.price),0)
console.log(totalprice); // 507

// add all the price of the items in the shopping cart with quantity        
const totalpriceWithQuantity =shoppingCart.reduce( (acc,item) => (acc+(item.price*item.quantity)),0)    
// console.log(totalpriceWithQuantity); // 1590

// Example of using reduce to count occurrences of elements in an array:
// const fruits = ["  apple", "banana", "orange", "   apple", "banana", "   apple"];
// const fruitCount = fruits.reduce((accumulator, fruit) => {
    
//     const trimmedFruit = fruit.trim().toLowerCase(); // Normalize the fruit name
//     console.log(`Current fruit: ${trimmedFruit}`);
    
//     accumulator[trimmedFruit] = (accumulator[trimmedFruit] || 0) + 1;
//     return accumulator;
// }, {});
// console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }   


// Example of using reduce to flatten an array of arrays:       
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArrays.reduce((accumulator, currentArray) => {
    console.log(`Accumulator: ${accumulator}, Current Array: ${currentArray}`);
    // Concatenate the current array to the accumulator
    return accumulator.concat(currentArray);
}, []);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// Example of using reduce to group objects by a property:
const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "HR" },  
    { name: "David", department: "Engineering" },
    { name: "Eve", department: "Marketing" }
];
const groupedByDepartment = employees.reduce((accumulator, employee) => {
    const { department } = employee;// Destructure the department from the employee object means we can write this in simple term
    if (!accumulator[department]) {
        accumulator[department] = [];
    }
    accumulator[department].push(employee);
    return accumulator;
}   , {});
// console.log(groupedByDepartment);  

// {    
//     HR: [
//         { name: "Alice", department: "HR" },
//         { name: "Charlie", department: "HR" }
//     ],
//     Engineering: [   
//         { name: "Bob", department: "Engineering" },
//         { name: "David", department: "Engineering" }
//     ],
//     Marketing: [
//         { name: "Eve", department: "Marketing" }

//     ]
// }
