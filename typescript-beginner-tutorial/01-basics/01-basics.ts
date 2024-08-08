// Define a variable format let variableName: type = value;

let myName: string = "Darby";

let myAge: number = 30;

let isUpdated: boolean = true;

console.log(myName);

// any example
// Changes of losing the type safety
let myData: any = "Hello";


// Using the backticks for printing
console.log(`My data is ${myData} + ${myAge}`);

// For loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Array of numbers
let myArray: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Array of strings
let myArrayString: string[] = ["Darby", "John", "Doe"];
for (let i = 0; i < myArrayString.length; i++) {
  console.log(myArrayString[i]);
}

// Simplified for loop
for (let element of myArrayString) {
  console.log(element);
}

// Conditional statements
let myNumber: number = 10;
if (myNumber > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is less than 5");
}

// Growable arrays
let myArrayGrowable: Array<number> = [1, 2, 3, 4, 5];
myArrayGrowable.push(6);
console.log(myArrayGrowable);


// Creating classes
class Person {

  // properties
  name: string;
  age: number;

  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // methods
  printDetails() {
    console.log(`Name is ${this.name} and age is ${this.age}`);
  }

  // getter and setter
  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }

  setAge(age: number) {
    this.age = age;
  }

  setName(name: string) {
    this.name = name;
  }
}

let person = new Person("Darby", 30);

person.printDetails();

person.setName("John");
person.setAge(40);

console.log(person.getName());

console.log(person.getAge());

// Access modifiers
// public, private, protected
// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the class and its subclasses

class Employee {
  private readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printDetails() {
    console.log(`Name is ${this.name} and age is ${this.age}`);
  }
}

let employee = new Employee("Darby", 30);

// Accessors
// getter and setter
// getter: get the value of the property
// setter: set the value of the property

class PersonAccessor {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}

let personAccessor = new PersonAccessor("Darby", 30);

console.log(personAccessor.name);

personAccessor.name = "John";

console.log(personAccessor.name);


// Constructor shorthand
// The constructor can be defined in the class definition
// The properties can be defined in the constructor

class PersonConstructor {
  constructor(private name: string,
              private age: number) {
  }

  printDetails() {
    console.log(`Name is ${this.name} and age is ${this.age}`);
  }

}


let personConstructor = new PersonConstructor("Darby", 30);

personConstructor.printDetails();
