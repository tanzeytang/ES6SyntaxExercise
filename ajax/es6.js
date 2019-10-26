//the new things in es6.
class User {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  sayHello() {
    console.log(this.name + ": " + user.says);
  }
}

User.says = "Hello"; //静态attribute, won't be created for an object in constructor

const user = new User("john", "john@gmail.com", 1234);
console.log(user.says); //undefined, before reste the jingtai attribute
console.log(User.says); //Hello

user.sayHello(); //undefined before reset the static property ....

const jane = new User("jane doe", "jane@gamil.com", 1234);
jane.sayHello(); //undefined before reset static property....

User.says = "hello world"; //static property
user.sayHello(); // undefined before reset the static property，但是一旦我们重新设置了静态属性的值，所有的undefined都将改变
jane.sayHello(); //undefined dito.
//however the static attributes is a new sytax for es7, some browser might
//won't support it in es6.
let ob12 = Object.assign({}, user); //assign all user element to the blank object, and
let o4 = { a: 1, b: 1, c: 1 };
let o5 = { b: 2, c: 2 };
let o6 = { c: 3 };
const obj456 = Object.assign(o4, o5, o6);
console.log(obj456); // {a:1,b:2,c:3}, the o5 will reassign the value of the same attribut in 04,....
// JSON.parse() is for transform the json format data to an object
// JSON.stringfy(object) is for translate the object into json file data.

//the import and export component is in javascript es6:

//for example: in user-module.js file
//export const userSays = "hello";
//export function sayHello(name){
// console.log(name);
//}
//export const user = {
//name:"john",
// id:1234,
//email:"john@gmail.com"
//}
// export default class User {
//   constructor(name, email, id) {
//     this.name = name;
//     this.email = email;
//     this.id = id;
//   }
//   sayHello() {
//     console.log(this.name + ": " + user.says);
//   }
// }
// in another index.js， we can import the variable or function or class in this file,
// and use these exported element in the index.js
//index.js
//import Defaultuser from './user-module';
//import * as userModule from './user-module';
// console.log(userModule.userSays);
//userModule.sayHello(userModule.user.name);
//const john = new Defaultuser('John doe',"1@gmail.com",1234);
//john.sayHello();

//deconstruction:
//const a = 1;
//const b = a;
//const {key:newName} = user;//we get the related key and assign another name as newName from the user

// arrow function ()=>{}
// arrow function can bind this to the caller
const users = {
  name: "John Doe",
  id: 1234,
  email: "johndoe@gmail.com",
  likes: ["swimming", "hiking", "reading"],
  looks: { eyecolor: "black", haircolor: "brown" }
};
users.printId = () => {
  console.log(this.id); //wont be 1234, because, the arrow function, this
  //refer to the current declare environment, in this one, is global, refter
  //to the window object.
  // for example, if you move it into the users{user.printId=()}=>....  then
  //this is refer to the users.
};
users.printId();

// es6 async calculation
//the async calculation doesn't like the sync calculation,
// in the sync excution, the first senctence will be excuted earlier than the next command
//however, in async, the second log will be excuted first, and after 1s, the first command will be excuted.

setTimeout(() => console.log("hello world"), 1000);
console.log(1 + 1);

setTimeout(() => console.log("hello world1"), Math.random() * 1000);
setTimeout(() => console.log("hello world2"), Math.random() * 1000);

//异步运算，通常可以用jquery等框架来处理，但是开放promise规范后，用于处理异步执行时，就不用
//依赖其他框架了：
//promise很重要，promise是异步执行的规范，es6也采用promise规范
//promise对象接受两个函数，第一个是resolve，第二个是reject，
// const promise = new Promise((resolve,reject)=>{
//if(true){ resolve(good);} reject("not well")
//});
//成功时，call resolve（value）并回传一个值
//失败是call reject("not well")并回传相应的值
//Promise 有三种状态： pending， settled&&fullfilled, settle&&rejected

//promise 错误处理： promise.catch((error)=>{console.log(error);});
//和这样的写法同等： promise.then(undefined,(error)=>{console.log(error);});
//当我们需要同时处理返回解果和错误的时候，我们像下面这样写：
//promise
//.then((result)=>{consle.log("promise sucess," + result);})因为这句话只传了一个参数，如果这句话执行失败，那么会
//继续生存下一个promise，接着执行.catch()函数
//.catch((error)=>{console.log(error);});
