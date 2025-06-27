const accountId=1444556 // constant declare krna 
let account_Email="sk383848@gmail.com"//var declare krne k var or let(block socpe ke andr hi accessible h)
var account_password="12345"// ye block scope pr work nii krti h khin bhi change ho jatah
accountCity="Jaipur"

// accountId=2//not allowed

account_Email="sk@gmail.com"
account_password="21212121"
accountCity="bangluru"// aisa bhi var declare ho skta h but dont use

let accountState;// by default change ho skti h to isko declare krke chhod skte h

console.log(accountId);
console.table([accountId,account_Email,account_password,accountCity,accountState])
/*

prefr not to use 
because of issue in block scope and funtional scope
*/