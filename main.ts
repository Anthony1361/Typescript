export{}

let message = "welcome back";
console.log(message);

// Assigning Data Types in Typescript //
let isBeginner : boolean = true;
let total : number = 0;
let name : string = "Vishwas";

// Template String which can span multiple lines //
let sentence : string = `my name is ${name}
i am a beginner in typescript`;
console.log(sentence);

// two more variable type //
let n : null = null;
let u : undefined = undefined;

// Arrays ///
let list1 : number[] = [1, 2, 3];
let list2 : Array<number> = [1, 2, 3];
console.log(list2);

let names : Array<string> = [];
names.push("tom");
console.log(names);

let theName :  string[] = ["tom"];
theName.push("john");
console.log(theName);

let readOnly : readonly string[] = ["no push needed"];
console.log(readOnly);

// use Tuple for Arrays with mixed Type //
let person1 : [string, number] = ["chris", 22];
console.log(person1);

let theTuple : [number, boolean, string];
theTuple = [2, true, "i was not pushed"];
console.log(theTuple);

let pushTuple : [number, boolean, string];
pushTuple = [2, true, "something will be pushed"];
pushTuple.push(4, true, "i am pushed");
console.log(pushTuple);

let ourTuple : readonly [number, boolean, string];
ourTuple = [20, false, "push not allowed"];
console.log(ourTuple);

// object types //
let car : {type : string, model : string, year : number} = {
  type : "toyota",
  model : "corolla",
  year : 2005
};

console.log(car);

// type inference or typescript guessing //
let motor = {type : "toyota"};
motor.type = "ford";
console.log(motor);

// We also have the enum type //
enum colors {red, green, blue};
console.log(colors.green);

enum color {red = 5, green, blue};
let c : color = color.green;
console.log(c);

enum CardinalDirections {
  North,
  East,
  South,
  West
};

let currentDirection  = CardinalDirections.North;
console.log(currentDirection);

// string enum //
enum wall {
  top = "red",
  middle = "green",
  bottom = "white"
};

console.log(wall.middle);



// We also have the Any type //
let randomValue : any = 10;
randomValue = true;
randomValue = "vishwas";

// let myVariables : any = 10;
// console.log(myVariables.name);
// myVariables();
// myVariables.toUpperCase();

let theTypes : any = 10;

function checkTypes(theTypes) {
   console.log(theTypes.anyThings.toUpperCase());
}

let a = {
  anyThings : "string or number"
}

checkTypes(a);

////////////

function hasVariable(object:any) {
   console.log(object.theType);
};

let nowType = {
  theType : "can be string or number"
};

hasVariable(nowType);



let d = 10;
console.log(d);

// We have the Unknown Type //
let myVariable : unknown = 10;

function hasName(obj : any): obj is {name : string}{
    console.log(`${obj.name}`)
    return !! obj &&
        typeof obj === "object" &&
          "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}

let tryName = {
  name : 800
}

hasName(tryName);


// functions in typescript //
// function add(num1 : number, num2? : number) {
//   if(num2)
//     return num1 + num2;
//   else
//     return num1; 
// }
// add(5, 10);
// add(5)

// function add(num1 : number, num2? : number) {
//   if(num2)
//     console.log(num1 + num2)
//   else
//     return num1; 
// }
// add(5, 10);
// add(5)

// function add(num1 : number, num2 : number) {
//    console.log(num1 + num2)
// }
// add(5, 10);

function add(num1 : number, num2? : number) {
  if(num2)
    console.log(num1 + num2)
  else
    return num1; 
}
add(5, 10);
add(5)


//interfaces in typescript //
function fullName(person : {firstName : string, lastName : string}) {
   console.log(`${person.firstName} ${person.lastName}`);
};

let p = {
  firstName : "Bruce",
  lastName : "Wayne"
};

fullName(p);

//////////////////

interface persons {
   firstName : string,
   lastName : string
};

function yourName(personnel:persons) {
   console.log(`${personnel.firstName} ${personnel.lastName}`)
};

let s = {
  firstName : "Batman",
  lastName : "Superman"
};

yourName(s);

/////////////

interface Rectangle {
  width : number,
  height : number
};

let rectangle : Rectangle = {
  width : 20,
  height : 10
};

console.log(rectangle);

// Extending interfaces //
interface myColors {
  firstColor : string,
  secondColor : string
};

interface addColors extends myColors {
  thirdColor : string
};

let anyColor : addColors = {
  firstColor : "red",
  secondColor : "green",
  thirdColor : "blue"
};

console.log(anyColor);

// union type//
function myCode(code : string | number) {
  console.log(`the status of my code is ${code}.`);
};

myCode(405);
myCode("406");

// classes in typescript//
class Employee {
  employeeName : string;

  constructor(name : string){
    this.employeeName = name;
  };

  greet(){
    console.log(`Good Morning ${this.employeeName}`)
  };
};

let emp1 = new Employee ("Vishwas");
console.log(emp1.employeeName);
emp1.greet();

// class-based inheritance //
class manager extends Employee {

  constructor(managerName : string) {
    super(managerName);
  };

  delegateWork(){
    console.log(`Manager delegating tasks`);
  };
};

let m1 = new manager("Batman");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// Utility types //
// partial utility type //
interface point{
  x : number;
  y : number;
};

let pointPart : Partial <point> = {};

pointPart.x = 10;
console.log(pointPart);

// required utililty type //
interface Car {
  make : string;
  model : string;
  mileage? : Number;
}

let carr : Required <Car> = {
  make : "toyota",
  model : "camry",
  mileage : 2000
};

console.log(carr);

// record utility type //
let ageGap : Record <string, number> = {
  "age" : 25,
  "whatgap" : 8
}

console.log(ageGap);

// omit utility type //
interface omission {
  name : string;
  age : number;
  location? : string;
}

let omitted : Omit <omission, "age" | "location"> = {
   name : "Bob"
};

console.log(omitted);

// pick utility type //
interface picks {
  name : string;
  age : number;
  location? : string;
}

let picked : Pick <picks, "name"> = {
   name : "Bobed"
};

console.log(picked);

// exclude utility type //
type primitive = string | number | boolean;

let value : Exclude <primitive, string> = true;
console.log(typeof value);



