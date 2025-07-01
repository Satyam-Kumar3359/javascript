const name="Satyam"
const repoCount=50

// console.log(name + repoCount+ "value");//this is old fashion

//new fashion is using backtik ``
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
// console.log(`Hello my name is ${name.toUppercase} and my repocount is ${repoCount}`);

// second way to declare
const gameName=new String('Satyam kumar')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

//for slicing
const newString=gameName.substring(0,4);//(strting,no of char)
//substring me -ve nii le skte h
console.log(newString);//Saty

// const anotherString=gameName.slice(-5,4);
// console.log(anotherString);//empty
/*
-5 → counts from the end → 13 - 5 = 8 → starts at index 8 ('u').
End index is 4.
BUT: in .slice(), if start > end, the result is an empty string
//  */
// const anotherString=gameName.slice(-8,8);
// console.log(anotherString);//am k

// const anotherString=gameName.slice(8,14);
// console.log(anotherString);//umar

const anotherString=gameName.slice(8,18);
console.log(anotherString);//umar

const newStringOne=" satyam "
//databses me hm space nii store krenge iske liye hm use krte h
console.log(newStringOne);
console.log(newStringOne.trim());// remove unneccessary space
//trimstart trimend

// const url="https://satyam.com/satyam choudary" //browser space nii smghta h vo isko %20 me convert kr deta h
const url="https://satyam.com/satyam%20choudary"
//vaps se remove krna h %20

console.log(url.replace('%20','-'))
console.log(url.includes('satyam'))//true
console.log(url.includes('sat'))//true
console.log(url.includes('sundar'))//false


//string ko array me convert krna 
console.log(gameName.split(' '));//['satyam','kumar']
