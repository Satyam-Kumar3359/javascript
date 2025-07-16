const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
//use forin loop
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in myObj) {
//   console.log(key);// give all keys  
}

for(const key in myObj){
    // console.log(`${key} shortcut is for ${myObj[key]}`); // key and value print krega
}

// now is forin working in case of arr
const progg=["js","rb","py","java"]
// for (const key in progg) {
//     console.log(key);   // 0 1 2 3 index/keys return krta h
// }

for (const key in progg) {
    // console.log(progg[key]);   // value return krta h
}

// kya MAP ke liye FORIN lga skte h
const map=new Map()
map.set('IN',"INDIA")
map.set('IN',"INDIA")// no duplicate 
map.set('Fr',"France")
map.set('USA',"United State of Kingdom")
for (const key in map) {
    // console.log(key);// map iterable nii h
}