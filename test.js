/*
const mysym=Symbol("key1")
const JsUser={
    name: "Anuj",
    age: 21,
    "my name" :"Anuj saini",
    email: "anujsaini121314@gmail.com",
    [mysym] :"mykey1",
    greeting : function(){
        console.log(`welcome ${this["my name"]}`)
    }
}

const chai =function(){
    console.log("hellow world")
}
const arrow_function = ()=>{
    console.log("hellow world in arrow")
}
chai();
arrow_function();


//destructuring the objcet
const {name:username}=JsUser
console.log(username);



//iife 
(function chai(){
    console.log("hello world")
})();


*/

// loops
// for, do, while
/*
let arr=['flash','batman','superman']
for(let i=0;i<3;i++){
    console.log(arr[i])
    }
    
    let var1=0;
    while(var1<3){
        console.log(arr[var1])
        var1++
        }
        var1=0
        do{
            console.log(arr[var1])
            var1++
            }while(var1<3)
            */
           
           
let arr=['flash','batman','superman']
// for (const num of arr) {
//     console.log(`each value of arr : ${num}`)
// }

let greeting="World!"
// for (const num of greeting) {
//     console.log(`each value of greeting : ${num}`)
// }


// //map 
const map1 = new  Map();
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);

// console.log(map1)
// for (const [key,value] of map1) {
//     console.log(`key of map1 : ${key}`)
//     console.log(`value of map1 : ${value}`)
// }
const myObject =new Object()
myObject.js="javasript"
myObject.cpp="c++"
myObject.rb="rubby"
myObject.swift="swift by apple"

// console.log(myObject)
// for (const key in myObject) {
//     console.log(`${key} :- ${ myObject[key]}`)
// }


 const array=["js","rubby","cpp","java"]
//  array.forEach((item,index,arr) => {console.log(item,index,arr)})

const mycoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

// mycoding.forEach((item)=>{
//     console.log(item.languageName,item.languageFileName)
// })


//loops end here
