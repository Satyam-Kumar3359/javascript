//Javascript excecution context

// jb bhi kisi code ka execution  hota h : sbse phle => GLOBAL EXECUTION CONTEXT bnta jo ki ek var "this" ke andr refer/rkh kr diya jata h
//browser k andr "this" ki object window object hota h
//ye sb kux thread ke andr execute hota h

//2. funtional execution context hota h
// one more is : evol execution context


//how things execute inside javascript
// ye two phases k andr run hota h 
// 1.MEMORY CREATION PHASE/CREATION PHASE : memory allocation
//2.EXECUTION PHASE

//code file
/*
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
 */

//EXECUTION
// step1: global exection hota h and isko this k andr allocate kr dete h
/* 
step2: memory creation phase :sare var ko mem allocate like
val1=undefined
val2=undefined
addnum=definition
result1->undefined
result2=undefined*/

// step3: exection phase
//       val1<-10
//       val2<-5
//       addnum->function h to alg se ek apna exection context banata h inside which
//        sbse phle => [NEW VARIABLE ENVIRONMENT + EXECUTION THREAD bnta] h=>new execution context
//        jitni bar ye funtion execute hota h utni time ye do cheeze hoti h

//        new exection context ke  andr phir se do cheeze hogi 1. memory phase
//                                                             2.exection phase

//        inside mem phase: val1->undefined, val2->undefined, total->undefined
//        exectionphase :num1->10,num2->5,total->15 and main important thing ye 
//        total->15 return ho jata h global execution context me

       // AB JO NEW EXECUTION CONTEXT H YE ITNA SB HONE K BAAD DELETE BHI HO JATA H 
      // AND LINE NO 40 KE PASS AB RESULT1=15 AA JAYEGA , EXECUTION PHASE ME

       // AB SAME KAAMlet result2=addNum(10,2) iske liye hoga
       // NEW EXECUTION CONTEXT BNEGA JISKE AND=> NEW VARIABLE ENVIROMNET+EXECTION THREAD PHIR YHA PR 2 PHASE EXECUTE HOGE
    //    MEMORY PHASE AND EXECUTION PHASE => PHIR TOTAL=12 RETURN HO JAYEGA 'GLOBLE CONTEXT K' 
    // NOW NEW EXECUTION CONTEXT DELTE HO JAYEGA AND EXECTION PHASE K PHASS TOTAL =12 AA JAYEGA


  /*
  JavaScript Execution Context: Summary
An Execution Context is an abstract concept describing the environment within which JavaScript code is evaluated and executed. It contains information about the code that's currently running, including variable scope, the value of this, and references to functions and objects.

Types of Execution Contexts
Global Execution Context (GEC):

Created when the JavaScript engine first runs your code.
There is only one global context per script.
Variables and functions declared in the global scope are accessible everywhere.
Function Execution Context (FEC):

Created whenever a function is invoked.
Each function call gets its own execution context.
Has access to its own variables, parameters, and the outer (parent) context.
Eval Execution Context:

Created by code running inside an eval() function (rarely used and discouraged).


Important Points
Phases of Execution Context:

Creation Phase:
The scope chain is created.
Variables, functions, and arguments are created and hoisted.
The value of this is determined.
Execution Phase:
Code is executed line by line.
Variables are assigned values, and functions are invoked.
Hoisting:

Variable and function declarations are moved to the top of their scope during the creation phase.
Only declarations are hoisted, not initializations.
Scope Chain:

Each execution context has a reference to its outer environment.
Enables lexical scoping, allowing inner functions to access variables from parent scopes.
Call Stack:

JavaScript uses a call stack to manage execution contexts.
The global context is at the bottom; each function call adds a new context to the top.
When a function finishes, its context is popped off the stack.
this Keyword:

The value of this is set during the creation phase of the execution context.
Its value depends on how a function is called (global, object method, constructor, etc.).
  */