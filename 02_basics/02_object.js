// object ko declare krne ke 2 ways h: literals ki trh , constructor ki trh
// 1. Object literal
const person1 = {
    name: "Alice",
    age: 25
};

// 2. Object constructor
const person2 = new Object();
person2.name = "Bob";
person2.age = 30;           

// singleton object
// jb hm constructor ki help se object declare krenge to singleton object  bnega
// singleton object ka mtlb h ki us object ka sirf ek hi instance h
//singleton means only one instance of the object exists

// Object.create // Object.create() method se hum ek naya object create krte h jo kisi existing object se inherit krta h
// yhi constructor ki trh h  

// object literals

// symbol declaration
const mySym  = Symbol("key1"); // symbol ek unique identifier h jo object ke properties ko uniquely identify krta h
// task: ek symbol lo usko object me as a key use/add kro aur usko print krke dikha do


const JsUser = {
    name: "Alice",
    "full name": "Alice Johnson", 
    // mySym:"mykey1", // symbol ko string ki trh treat kiya ja rha h

    // actual syntax for using symbol as a key
    [mySym]: "mykey1", // symbol ko as a key use kiya gya h jo upper declare h
    // now actual symbol ko refer kr rhe h 

    age: 25,
    location: "India",
    email:"sk38238@gmail.com",
    isLoggedIn: true,
    lastLoginDays:["monday", "tuesday", "wednesday"]
};

// object ko access krne ke liye dot notation ya bracket notation ka use krte h
// console.log(JsUser.name); // dot notation
// console.log(JsUser[email]); // ye error dega qki email ko string ki trh treat kiya ja rha 

// console.log(JsUser["email"]); // bracket notation
// console.log(JsUser["age"]); // bracket notation

// console.log(JsUser.full name);// error dega qki full name me space h
//isiliye isko access krne ke liye bracket notation ka use krenge
// console.log(JsUser["full name"]); // bracket notation

// console.log(JsUser.mySym); // symbol ko string ki trh treat kiya ja rha h// mykey1
// console.log(typeof JsUser.mySym); // string

// console.log(JsUser[mySym]); // mykey1
// console.log(typeof JsUser[mySym]);// string
// value and type to same h but symbl ko as key declare krne ka syntax alag h

// object me symbol ko as key use krne ka syntax h [mySym] : "mykey1"

// value ko change krne ke liye
JsUser.email = "new_email.com"; // email ki value change kr di  
// console.log(JsUser.email); // new_email.com

// if u want that no can change the vlaue of object then use Object.freeze
// Object.freeze(JsUser); // isse object ki properties ko change nahi kiya ja sakta

JsUser.email = "chatgpt.com"; // ye error dega qki object ko freeze kr diya gya h
// console.log(JsUser.email); // new_email.com

// console.log(JsUser); // object ko print krne par freeze hone ke baad bhi purana value hi dikhega    
// {
//   name: 'Alice',
//   'full name': 'Alice Johnson',
//   age: 25,
//   location: 'India',
//   email: 'new_email.com',
//   isLoggedIn: true,
//   lastLoginDays: [ 'monday', 'tuesday', 'wednesday' ],
//   [Symbol(key1)]: 'mykey1' yha ye bta rha h ki mySym ek symbol key h
// }


// object k andr funtion bhi add kr skte h

JsUser.greeting=function(){
    console.log("Hello JS User");
    
}
// console.log(JsUser.greeting);// [Function (anonymous)] means funtion execute nii huaa uska reference aaya h
// console.log(JsUser.greeting());//Hello JS User + ek extraexectuion ; undefined
// // ek undefined is vjh se aa rha h qki ek extra execution hota h

// JsUser.greetingTwo=function(){
//     console.log(`Hello JS User, ${this.name}`);// string interpolation
    
// }
// console.log(JsUser.greeting());//Hello JS User
// console.log(JsUser.greetingTwo());//Hello JS User, Alice


//imp :jb bhi value access kro most of the time use dot notation
// but there is some case where bracket notation only be used
/*
Summary & Important Points:

- Objects in JavaScript can be created using object literals or constructors.
- Object literals are the most common and concise way to define objects.
- Using the Object constructor or Object.create can also create objects, with Object.create allowing inheritance.
- Symbols provide unique keys for object properties, preventing property name collisions.
- To use a Symbol as an object key, use the [symbol] syntax in the object literal.
- Object properties can be accessed via dot notation (obj.prop) or bracket notation (obj["prop"]). Bracket notation is necessary for keys with spaces or symbols.
- Object.freeze() makes an object immutable, preventing further changes to its properties.
- Functions (methods) can be added as properties to objects, and can use 'this' to refer to the object itself.
- Always prefer dot notation for property access unless the key is dynamic, contains spaces, or is a Symbol.
*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser= new Object()// singleton object
const tinderUser={}
console.log(tinderUser);//{}
// Add some properties to tinderUser to simulate an authorized user autofill
tinderUser.id = "user_123";
tinderUser.name = "John Doe";
// tinderUser.email = "john.doe@example.com";
tinderUser.isAuthorized = true;

// console.log(tinderUser);//{ id: 'user_123', name: 'John Doe', isAuthorized: true }

// object inside object

const regularUser = {
    email: "sk243@gmail.com",
    userfullname: {
        firstname: "satyam",
        lastname: "kumar"
    }
};

// Accessing nested object properties
// console.log(regularUser.userfullname.firstname); // "satyam"
// console.log(regularUser["userfullname"]["lastname"]); // "kumar"

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// iske andr same problem h jaise arr inside arr,obje inside obje

// syntax : Object.assign(Target,source)
// const obj3=Object.assign(obj1,obj2);
// yha par actually me sari value inside obj1 store ho rhi h

const obj3=Object.assign({},obj1,obj2);
//{} this is our target , inside which obj1 and obj2 ... store 

//spread operator use krke
const obj4 = { ...obj1, ...obj2 };// 
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// one of the most usable syntax , when value comes from database/backend
// database se jb value aati h tb array of object aati h
const users=[
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    }
]

users[1].email
// console.log(tinderUser);//{ id: 'user_123', name: 'John Doe', isAuthorized: true }

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isAuthorized' ]
// console.log(Object.values(tinderUser));//[ 'user_123', 'John Doe', true ]
// console.log(Object.entries(tinderUser));//
// [
//   [ 'id', 'user_123' ],
//   [ 'name', 'John Doe' ],
//   [ 'isAuthorized', true ]
// ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//false
// console.log(tinderUser.hasOwnProperty('isAthorized'));true

/*
Interview Summary & Important Points:

1. Object Creation:
    - Objects can be created using object literals (`const obj = {}`) or constructors (`const obj = new Object()`).
    - Object literals are concise and commonly used.
    - Constructor-created objects (using `new Object()`) are singleton by default.

2. Symbols as Object Keys:
    - Symbols provide unique property keys, preventing name collisions.
    - Use `[mySym]: value` syntax to add a Symbol as a key in an object.
    - Access Symbol-keyed properties with `obj[mySym]`.

3. Property Access:
    - Dot notation (`obj.prop`) is preferred for most cases.
    - Bracket notation (`obj["prop"]`) is required for keys with spaces, special characters, or Symbols.

4. Object.freeze():
    - `Object.freeze(obj)` makes an object immutable (properties can't be changed or added).

5. Methods in Objects:
    - Functions can be added as properties (methods).
    - Use `this` inside methods to refer to the object itself.

6. Nested Objects:
    - Objects can contain other objects as properties.
    - Access nested properties using chained dot or bracket notation.

7. Object Merging:
    - Use `Object.assign(target, ...sources)` or the spread operator (`{...obj1, ...obj2}`) to merge objects.

8. Arrays of Objects:
    - Common pattern for representing collections (e.g., users from a database).
    - Access individual objects with array indexing (`arr[0].prop`).

9. Object Utility Methods:
    - `Object.keys(obj)`: Returns array of property names.
    - `Object.values(obj)`: Returns array of property values.
    - `Object.entries(obj)`: Returns array of `[key, value]` pairs.
    - `obj.hasOwnProperty(key)`: Checks if the object has a property as its own (not inherited).

These points cover object creation, manipulation, and best practices—frequently asked in JavaScript interviews.
*/


//======================== object de-structurnig and JSON API ==================

const course={
    coursename:"javascript",
    price:"999",
    courseInstructor:"Satyam"
}

// console.log(course.courseInstructor)//satyam

// agr man lo 3 bar print krvana to upper vali ko 3 bar likhna pdega to avoid this use
// const {courseInstructor} =course
// console.log(courseInstructor);

//de-structuring

const {courseInstructor : instructor} =course
// console.log(instructor);

//REACT
// const navbar=({company}) =>{//desturing

// }
// navbar(company="hitesh")

//phle backend se value aati thi in xml format, abhi mostly json str me aati h , ab backend se aayi value ko kaise likhna h yhi API h

//JSON :API
//yha key and value dono string format me hoti h

// {
//     "name":"satyam",
//     "coursename":"javascript",
//     "price":"free"
// }

//arr:API
// [
//     {},
//     {},
//     {}
// ]

/*
Summary & Important Points:

1. Object Creation:
    - Objects can be created using object literals (`{}`) or constructors (`new Object()`).
    - Object literals are concise and commonly used.
    - Constructor-created objects are singleton by default.

2. Symbols as Object Keys:
    - Symbols provide unique property keys, preventing name collisions.
    - Use `[symbol]: value` syntax to add a Symbol as a key in an object.
    - Access Symbol-keyed properties with `obj[symbol]`.

3. Property Access:
    - Dot notation (`obj.prop`) is preferred for most cases.
    - Bracket notation (`obj["prop"]`) is required for keys with spaces, special characters, or Symbols.

4. Object.freeze():
    - `Object.freeze(obj)` makes an object immutable (properties can't be changed or added).

5. Methods in Objects:
    - Functions can be added as properties (methods).
    - Use `this` inside methods to refer to the object itself.

6. Nested Objects:
    - Objects can contain other objects as properties.
    - Access nested properties using chained dot or bracket notation.

7. Object Merging:
    - Use `Object.assign(target, ...sources)` or the spread operator (`{...obj1, ...obj2}`) to merge objects.

8. Arrays of Objects:
    - Common pattern for representing collections (e.g., users from a database).
    - Access individual objects with array indexing (`arr[0].prop`).

9. Object Utility Methods:
    - `Object.keys(obj)`: Returns array of property names.
    - `Object.values(obj)`: Returns array of property values.
    - `Object.entries(obj)`: Returns array of `[key, value]` pairs.
    - `obj.hasOwnProperty(key)`: Checks if the object has a property as its own (not inherited).

10. Object Destructuring:
     - Allows extracting properties into variables for cleaner code.
     - Example: `const { prop } = obj;` or `const { prop: alias } = obj;`

11. JSON and APIs:
     - JSON is a common data format for APIs, using string keys and values.
     - Arrays of objects are often used to represent collections in API responses.

These points cover object creation, manipulation, and best practices—frequently asked in JavaScript interviews.
*/

