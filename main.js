"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "welcome back";
console.log(message);
// Assigning Data Types in Typescript //
var isBeginner = true;
var total = 0;
var name = "Vishwas";
// Template String which can span multiple lines //
var sentence = "my name is ".concat(name, "\ni am a beginner in typescript");
console.log(sentence);
// two more variable type //
var n = null;
var u = undefined;
// Arrays ///
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list2);
var names = [];
names.push("tom");
console.log(names);
var theName = ["tom"];
theName.push("john");
console.log(theName);
var readOnly = ["no push needed"];
console.log(readOnly);
// use Tuple for Arrays with mixed Type //
var person1 = ["chris", 22];
console.log(person1);
var theTuple;
theTuple = [2, true, "i was not pushed"];
console.log(theTuple);
var pushTuple;
pushTuple = [2, true, "something will be pushed"];
pushTuple.push(4, true, "i am pushed");
console.log(pushTuple);
var ourTuple;
ourTuple = [20, false, "push not allowed"];
console.log(ourTuple);
// object types //
var car = {
    type: "toyota",
    model: "corolla",
    year: 2005
};
console.log(car);
// type inference or typescript guessing //
var motor = { type: "toyota" };
motor.type = "ford";
console.log(motor);
// We also have the enum type //
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
;
console.log(colors.green);
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
// string enum //
var wall;
(function (wall) {
    wall["top"] = "red";
    wall["middle"] = "green";
    wall["bottom"] = "white";
})(wall || (wall = {}));
;
console.log(wall.middle);
// We also have the Any type //
var randomValue = 10;
randomValue = true;
randomValue = "vishwas";
// let myVariables : any = 10;
// console.log(myVariables.name);
// myVariables();
// myVariables.toUpperCase();
var theTypes = 10;
function checkTypes(theTypes) {
    console.log(theTypes.anyThings.toUpperCase());
}
var a = {
    anyThings: "string or number"
};
checkTypes(a);
////////////
function hasVariable(object) {
    console.log(object.theType);
}
;
var nowType = {
    theType: "can be string or number"
};
hasVariable(nowType);
var d = 10;
console.log(d);
// We have the Unknown Type //
var myVariable = 10;
function hasName(obj) {
    console.log("".concat(obj.name));
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var tryName = {
    name: 800
};
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
function add(num1, num2) {
    if (num2)
        console.log(num1 + num2);
    else
        return num1;
}
add(5, 10);
add(5);
//interfaces in typescript //
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
;
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
;
function yourName(personnel) {
    console.log("".concat(personnel.firstName, " ").concat(personnel.lastName));
}
;
var s = {
    firstName: "Batman",
    lastName: "Superman"
};
yourName(s);
;
var rectangle = {
    width: 20,
    height: 10
};
console.log(rectangle);
;
;
var anyColor = {
    firstColor: "red",
    secondColor: "green",
    thirdColor: "blue"
};
console.log(anyColor);
// union type//
function myCode(code) {
    console.log("the status of my code is ".concat(code, "."));
}
;
myCode(405);
myCode("406");
// classes in typescript//
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    ;
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    ;
    return Employee;
}());
;
var emp1 = new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();
// class-based inheritance //
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    ;
    manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    ;
    return manager;
}(Employee));
;
var m1 = new manager("Batman");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
;
var pointPart = {};
pointPart.x = 10;
console.log(pointPart);
var carr = {
    make: "toyota",
    model: "camry",
    mileage: 2000
};
console.log(carr);
// record utility type //
var ageGap = {
    "age": 25,
    "whatgap": 8
};
console.log(ageGap);
var omitted = {
    name: "Bob"
};
console.log(omitted);
var picked = {
    name: "Bobed"
};
console.log(picked);
var value = true;
console.log(typeof value);
