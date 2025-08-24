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
// const JsUser2={
//     address: "address"
// }
// const js2=Object.assign({},JsUser,JsUser2)
// console.log(js2)

// const {["my name"]:myname} =JsUser
// console.log(myname)
Object.freeze(JsUser)
JsUser["my name"]="not known"
JsUser.greeting();
