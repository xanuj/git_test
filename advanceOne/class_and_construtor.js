const myClass={
    username:"hitesh",
    loginCount : 8,
    signedIn:true,

    getUserDetail: function(){
        console.log(`got user detail ${this.username}`)
    }

}

// function user(userName,loginCount,isLoggedIn){
//     this.userName=userName
//     this.loginCount=loginCount
//     this.isLoggedIn=isLoggedIn

//     // return this;
// }

// const user1=new user('anuj',1,true)
// const user2=new user('name',3,true);
// console.log(user1)
// console.log(user2)

class User{
    constructor(userName){
        this.userName=userName
    }

    static logMe(){
        console.log(`user ${this.userName} is logged`)
    }
}

const newUser=new User("Anuj")
newUser.logMe()

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`new course is added by ${this.userName}`)
    }
}

const newTecher=new Teacher("Anuj2","anuj@example.com","123")
newTecher.logMe()
newTecher.addCourse()
// newUser.addCourse()
console.log(newTecher instanceof Teacher)