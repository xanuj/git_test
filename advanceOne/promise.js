/*
const promiseOne=new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task is completed")
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
    
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    // let  
    setTimeout(function(){
        resolve({username: "Anuj", email:"anuj@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    // let  
    setTimeout(function(){
        let error=false; //true
        if(!error)
            resolve({username: "Anuj", email:"anuj@example.com"})
        else
            reject("error")
    },1000)
})
.then((user)=>{
    console.log(user["username"])
    return user["username"]
},
(error) => {throw error[0]})
.then((user)=>{console.log(user); return user}).finally(()=> console.log("in1"))
.then((user)=>console.log(user),(error)=>console.log(error)).finally(()=> console.log("in2"))



*/
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username :"java" ,password: "123"})
        }
        else{
            reject(`Error :JS went wrong`)
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const value = await promiseFive
        console.log(value)
    } catch(error){
        console.log(error)
    }
    
    
}
consumePromiseFive()


async function getAllUsers(){
    try{
        let response=(await fetch("https://api.github.com/users/xanuj"))
        // console.log(response)
        const data=await response.json()
        console.log(typeof data)
        console.log(data)
    }catch(error){
        console.log(error)
    }
    
}
getAllUsers()

// fetch("https://api.github.com/users/xanuj")
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))











