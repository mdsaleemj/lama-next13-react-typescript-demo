let variable = "hello"

variable = "hi"

let age = 18

//age ="eighteen"

let ageWithType : number;

//ageWithType = "eighteen"

ageWithType = 18


let testString: string
testString = "hello"

let testBoolean : boolean;

testBoolean = false;

let testStringOrNumber : string | number;

testStringOrNumber = 10
testStringOrNumber = "10"
//testStringOrNumber = [];

//Array

let names = ["john","jane", "tom"];

//names.push(1);
names.push("mike");

let numbers = [1,2,3];
//numbers.push(true);
numbers.push(4);

let testStringArray : string[];

//testStringArray = [1,2,3];
testStringArray=["a", "b", "c"];

let testNumberArray : number[]

//testNumberArray = [true, "hi", 23]
testNumberArray = [12,55,23];

//union types

let testStringOrNumberArray : (string| number)[];
testStringOrNumberArray = [1,"two", 3];

//Objects
let user = {
    username : "john",
    age: 22,
    isAdmin : false
}

user.username = "jane";
//user.age = "eighteen"; // wont work
user.age = 29

//user.isAdmin = "no" //wont work
user.isAdmin = true

let userObj : {
 userName : string
 age : number
 isAdmin : boolean
}

userObj = {
    userName : "john",
    age : 23,
    isAdmin : false
    //phone: "+1234"
}

let userObj2 : {
    username : string
    age : number
    isAdmin : boolean
    phone? : string
}

userObj2= {
    username : "jane",
    age : 43,
    isAdmin : false,
    phone : "+1234"
}

//Any type

let testAny;

testAny =12
testAny = "hello"
testAny = true
testAny = [true]
testAny = {}

let testAnyArray : any[];

testAnyArray = [1, "two", false, []];






//functions
let sayHi = ()=>{
    console.log("Hi Welcome")
}

//sayHi = "hi";
let funcRetrunString = ():string => {
 console.log("hi");
 return "happy dev"
}


let mutiple = (num : number) => {
 return num * 2
}
let mutiple2 = (num : number) : number=> {
 return num * 2
}
let mutiple3 = (num : number) : void=> {
 //do something but dont return
}


let sum = (num1 : number , num2:number , anotherNum? :number)=>{
    return num1 + num2 
}
sum(2,2)


let func = (user : {username:string, age:number, phone?:string})=>{
    console.log(user)
}

//type aliases

type UserType = {
    username :string;
    age : number;
    phone: string
}

let betterFunc = (user:UserType)=>{
    console.log(user.username)
}



type myFunc = (a:number,b:string)=> void

let write: myFunc = (num,str)=>{
    console.log(num+str);
}

type UserType2 = {
    username :string;
    age : number;
    phone?: string;
    theme : "dark" | "light"
}

const userWithTheme : UserType2 = {
    username : "john",
    age : 24,
    theme: "light"
}

//interfaces

interface IUser {
    username :string;
    email:string;
    age : number
}

interface IEmployee extends IUser {
    employeeId: number
}

const emp: IEmployee = {
    username : "tom",
    email : "tom@gmail.com",
    age: 23,
    employeeId : 1
}

const user1 : IUser = {
    username : "tom",
    email : "tom@gmail.com",
    age: 23
}
    
//generics
interface IAuthor {
    id : number,
    username : string
}

interface ICategory {
    id : number,
    title: string
}
interface IPost {
    id : number,
    title : string,
    desc : string
    extra : IAuthor[] | ICategory[]
}


interface IPostBetter<T>{
    id : number,
    title : string,
    desc : string
    extra : T[]
}

const testMe : IPostBetter<string> = {
 id : 1,
 title : "post title",
 desc : "description",
 extra : ["tag1", "tag2"]
}

interface IPostEvenBetter <T extends object> {
    id : number,
    title : string,
    desc : string
    extra : T[]
}

const testMe2 : IPostEvenBetter<IAuthor> = {
    id : 1,
    title : "post title",
    desc : "description",
    extra : [{id: 1 , username : "john"}]
   }

   const testMe3 : IPostEvenBetter<ICategory> = {
    id : 1,
    title : "post title",
    desc : "description",
    extra : [{id: 1 , title : 'cat'}]
   }