# A full stack development

- Pathway to learn the development in angular to develop websites

## What is angular?

- It is a framework for building modern single-page
  applications. [angular](https://angular.dev/overview)

## Difference between a single page and traditional application

### Traditional application

- Each user action results in a full HTML page load

  ![Alt text](docs/images/traditional-application.png)

### Single page application

- A web application that is composed of a single page.
- Based on user action, the application page is updated.
- Normally performs a partial update instead of full page load.

  ![Alt text](docs/images/single-page-application.png)

- Angular supports the single page application development

## Angular History

![Alt text](docs/images/angular-history.png)
![Alt text](docs/images/angular-history-2.png)

## Why the usage of frameworks instead of DIY with JavaScript,

- Hard to maintain and manage the code
- Frameworks provide a structure to the code
- Frameworks provide a set of libraries to build the application
- Frameworks provide a set of tools to build the application
- Frameworks provide a set of best practices to build the application
- Frameworks provide a set of guidelines to build the application
- It helps in the data binding, routing, and other features

## Setup the development environment

- The development environment is set up using the following tools

    - Node.js
    - npm
    - Angular CLI
    - Visual Studio Code

- Install Node.js

    - Download the Node.js from the official website [Node.js](https://nodejs.org/en/)
    - Install the Node.js
    - Verify the installation using the following command

      ```bash
      node -v
      npm -v
      ```
- Final setup
  link: [Setup](https://github.com/darbyluv2code/fullstack-angular-and-springboot/blob/master/install-angular-tools/ms-windows/install-ms-windows.md)

## Whats is TypeScript?

- TypeScript is a superset of JavaScript
    - Language developed by Microsoft in 2012
    - Free and open-source programming language
- TypeScript is a statically typed language
    - Helps in catching errors at compile time
- TypeScript is a strongly typed language
- Add support for classes, interfaces, and modules
- Classes, interfaces, and modules help in organizing the code
- Website link: [TypeScript](https://www.typescriptlang.org/)

## Angular Development

- For the development, we can develop using various languages
    - JavaScript: extremely popular
    - ECMAScript 6: modern version of JavaScript ES6, ES9
    - TypeScript: add optional types to JavaScript
- Relationships:
    - TypeScript is a superset of JavaScript and ECMAScript

      ![Alt text](docs/images/typescript.png)

## Development process for typescript

- File have the .ts extension
- Add it in the 01-basics.ts file

```typescript
console.log("Hello World");
```

- Compile the file using the following command,

```bash
tsc 01-basics.ts

# Provide the flag to avoid the errors
tsc --noEmitOnError 01-basics.ts

# Compiler flag
tsc --target ES5 --noEmitOnError 01-basics.ts

```

- To many compiler configs will be difficult to manage
- Create a tsconfig.json file

```json
{
  "compilerOptions": {
    "target": "ES5",
    "noEmitOnError": true
  }
}
```

- Run the following command to compile the file

```bash

tsc --init # To create the tsconfig.json file in the path

# After that to compile the  project
tsc

```

``

- The above command will generate the 01-basics.js file and the process is called `transpiling`

- Run the file using the following command,

```bash

node 01-basics.js

```

-- The compiler can find the errors at the compile time

## Typescript variables

| Type    | Description                                               |
|---------|-----------------------------------------------------------|
| var     | function-scoped, can be re-declared and updated           |
| let     | block-scoped, cannot be re-declared but can be updated    |
| const   | block-scoped, cannot be re-declared and cannot be updated |
| boolean | true or false                                             |
| number  | integer or floating point number                          |
| string  | sequence of characters                                    |
| any     | any type                                                  |

## Typescript brush up

- The [01-basics.ts](typescript-beginner-tutorial/01-basics/01-basics.ts) consists of the basic
  typescript code for the beginners
- The basics of code organization, [modules](typescript-beginner-tutorial/02-modules/Driver.ts)
- Supports inheritance, [inheritance](typescript-beginner-tutorial/03-inheritance/Driver.ts)
    - The class can inherit the properties and methods from the parent class
    - The class can override the properties and methods from the parent class
    - Subclasses can have their own properties and methods and can add new properties and methods
    - Support abstract classes
    - It only supports single inheritance
    - Can implement multiple interfaces
- Abstract classes, [abstract classes](typescript-beginner-tutorial/04-abstract-classes/Driver.ts)
    - Abstract classes cannot be instantiated
    - Abstract classes can have abstract methods
    - Abstract methods must be implemented in the concrete subclass
- Interfaces, [interfaces](typescript-beginner-tutorial/05-interfaces/Driver.ts)
    - Define an interface with a method contract
    - Classes can implement the interface according to the contract
    - A class can implement multiple interfaces
    - It can also use interfaces to support contracts with properties

  ```typescript
  
  // interface with properties example
  
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
  
  let user = { firstName: "Jane", lastName: "User" };
  ```

## Reference

- Project reference: git clone https://github.com/darbyluv2code/fullstack-angular-and-springboot.git
