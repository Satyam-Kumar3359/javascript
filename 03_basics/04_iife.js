//IMMEDIATE INVOKED FUNTION EXPRESSSIONS(IIFE)
// why we use iife
// 1.because we don't want to pollute the global scope or funtion ke andr var global socpe se polute ho jate h, to avoid this we use IIFE
// 2.to immediate execute the funtion

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()


// write IIFE
// (function chai(){
//     console.log(`DB CONNECTED`);//DB CONNECTED
// })();// ye immediately invoked to ho gya but isko pta nii h ki context rokna kha h, iss situation me javascript ko end krna pdta h using ";"
   // otherwise it create problem

// ()()//execution call

//writing NAMED IIFE
// (function chai(){

//     console.log(`DB CONNECTED`);//DB CONNECTED
    
// })();// ; isko explicitely lagana pdta h,direct nii lgta h

// (  () => {
//     console.log(`DB CONNECTED TWO`);//DB CONNECTED TWO
    
// })();

// // parameter kaise pass krenge??
// (  (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);//DB CONNECTED TWO satyam
    
// })("satyam");//pass


// IMP: write two IIFE together in a file

(  () => {
    console.log(`DB CONNECTED TWO`);//DB CONNECTED TWO
    
})(); //must Add semicolon here to terminate the IIFE otherwise give error

// parameter kaise pass krenge??
(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);//DB CONNECTED TWO satyam
    
})("satyam")//pass

/*
Summary:

The code demonstrates an Immediately Invoked Function Expression (IIFE) in JavaScript.
An IIFE is a function that runs as soon as it is defined.
The second part shows how to pass parameters to an IIFE.
Key Interview Points:

IIFE Syntax:

Defined using parentheses: (function(){ ... })();
The outer parentheses make the function an expression, and the trailing () invokes it immediately.
Why Use IIFE?

To create a private scope and avoid polluting the global namespace.
Useful for encapsulating variables and logic.
Passing Parameters:

You can pass arguments to an IIFE just like a regular function:
Semicolon Gotcha:

Always add a semicolon before an IIFE if it follows another statement, to avoid syntax errors.
Example:

Interview Tip:
Be ready to explain why and when to use IIFEs, and how they help with variable scope and module patterns in JavaScript.


IIFEs (Immediately Invoked Function Expressions) are functions that run as soon as they are defined.
Example:

Why use IIFEs?
Encapsulation: IIFEs create a private scope for variables, preventing them from polluting the global scope.
Avoiding Conflicts: By keeping variables inside an IIFE, you avoid naming collisions with other scripts.
Initialization: Useful for running setup code once, without leaving setup variables accessible.
When to use IIFEs?
When you want to execute code immediately and keep its variables private.
When you need to create a module-like structure before ES6 modules existed.
When you want to avoid leaking variables into the global scope, especially in browser scripts.
How do IIFEs help with variable scope and module patterns?
Variable Scope: Variables declared inside an IIFE are not accessible outside it. This prevents accidental overwrites and keeps your code cleaner.
Module Pattern: Before ES6, IIFEs were used to simulate modules. You could return an object from an IIFE to expose only what you want:
const myModule = (function() {
  let privateVar = 42;
  return {
    getVar: function() { return privateVar; }
  };
})();
// myModule.getVar() is accessible, privateVar is not
*/