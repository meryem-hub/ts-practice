//basic types

let id= 5
 
let company: string ="Traversy Media"
let isPublished:boolean = true
let x:any = "Hello"

let ids: number[]=[1,2,3]
let arr: any[]=[1,true,"hello"]

//Tuple
let person : [number,string,boolean]=[1,'brad',true]
//Tuple Array
let employee:[number,string][]
employee=[
    [1,'bard'],
    [2,'jhon'],
    [3,'jill'],
]

//uninon
let pid: string | number
pid ='22'

//enum  
enum Direction1{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)
type User ={
    id:number
    name:string
}
const user:User ={
    id:1,
    name:'jhon'
}

//Type Assertion
let cid: any =1
// let customerID= <number>cid
let customerId = cid as number


//fuctions
function addNum (x: number , y :number):number{
    return x+y
}
function log(message: string | number):void{
    console.log(message)
}

interface UserInterface  {
    id:number;
    name:string;
    age?:number;
}

const user1:UserInterface ={
    id:1,
    name:'john',


}
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x:number,y:number):number => x+y
const sub: MathFunc = (x:number,y:number):number => x-y

interface PersonInterface {
    readonly id:number
    name:string
}
//classs

class Person {
 id:number
    name:string
    constructor(id: number,name:string){
        this.id=id
        this.name=name
    }
    register (){
        return `${this.name} is registerd`
    }

}
const brad = new Person(1,"Bard Traversy")
const mike =new Person(2,'Mike Jordan')

console.log(brad.register())

class Employee extends Person {
    position : string

    constructor (id:number,name:string ,position:string ){
        super(id,name)
    this.position = position
}}
const emp = new Employee(3,'shawn','developer' )
//generics
function getArray<T> (items: T[] ):T[]{
    return new Array().concat(items)

}
let numArray = getArray<number>([1,2,3,4])
let strArray=getArray<string>(['brad','john','jill'])
numArray.push(1)
