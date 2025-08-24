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

// loops
// for, do, while
