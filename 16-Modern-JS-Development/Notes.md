# **MODERN JAVASCRIPT DEVELOPMENT**

## **An overview of Modern JavaScript Development**

Today, We divide our projects into multiple modules and these modules can share data between them and make our code more organized and maintainable. Now, one great thing about modules is that we can also include 3rd-party modules into our own code and there are thousands of open source modules, which we also call packages that developers share on the NPM repository and we can then use these packages for free in our own code.

For example, the popular React framework, jQuery or even librarys. All these packages are available through NPM and this stands for Node Package Manager because it was originally developed together with Node.js for Node.js.

```
MODULE

MODULE              ==========> BUILDING ==========> TRANSPILING  ==========> JAVASCRIPT BUNDLE
                                                     POLYFILLING
3RD PARTY
PACKAGE
__________          _________________________________________________________
DEVELOPMENT                                 BUILD PROCESS                       PRODUCTION


                                          WEBPACK  OR PARCEL

  NODE PACKAGE MANAGER

NPM = - 3rd party modules
      - Development tools
      - Both repository and
      Software

NODE
```

## **AN OVERVIEW OF MODULES**

**Module =**

1. Is a reusable piece of code that encapsulates implementation details of a certain part of our project.
2. Usually a standalone file, but it doesn't have to be.
3. Also have imports and exports

```
 Dependency<-------------------------import{rand} from './math.js';
                                     const diceP1 = rand(1,6,2);
                                     const diceP2 = rand(1,6,2);
                                     const scores = {diceP1, diceP2};
                                     export {scores};-----------------------------> Public Api
```

**WHY MODULES?**

**COMPOSE SOFTWARE =**
Modules are small building blocks that we put together to build complex applications.

**ISOLATE COMPONENTS =**
Modules can be developed in isolation without thinking about the entire codebase.

**ABSTRACT CODE =**
Implement low-level code in modules and import these abstractions into other modules.

**ORGANIZED CODE =**
Modules naturally lead to a more organized codebase.

**REUSE CODE =**
Modules allow us to easily reuse the same code, even across multiple projects.

### **NATIVE JAVASCRIPT (ES6) MODULES**

**ES6 MODULES OR SCRIPT**
**MODULES =** Modules stored in files, exactly one module per file.

1. All top level variables are scooped to the module, basically variables are private to the module by default and the only way an outside module can access a value that's inside of a module is by exporting that value.
2. Modules are always executed in strict mode while scripts on the other hand are executed in sloppy mode by default.
3. Also the this keyword is always undefined at the top level while in scripts it points at the window object.
4. You can use Imports and exports and they can only happen at the top level. All imports are hoisted
5. HTML Linking `<script type = "module">`.
6. File downloading = Asynchronous

**SCRIPTS =**

1. All top level variables are always global and this can lead to problems like global namespace pollution where multiple scripts try to declare variables with the same name and then collide. So private variables are the solution to this problem.
2. `<script>`
3. File downloading = Blocking synchronous way. Unless we use the async or differ attributes on the script tag.

### **HOW ES6 MODULES ARE IMPORTED**

```
import { rand } from './math.js';
import { showDice } from './dom.js';
const dice = rand(1,6,2);
showDice(dice);

index.js

```

**IMPORTING MODULES BEFORE EXECUTION**

1. Modules are imported sunchronously.
2. Possible thanks to top-level ('static') imports, which make imports known before execution.
3. This makes bundling and dead code elimination possible.

When a piece of code is executed the first step is to parse that code and parsing basically means to just read the code but without executing it and this is the moment in which imports are hoisted. In fact, the whole process of importing modules happens before the code in the main module is actually executed. In this example the index.js module imports the dom and math modules in a synchronous way, that means is that only after all imported modules have been downloaded and executed the main index.js module will finally be executed as well. This is possible because of top level imports and exports and that's because if we only export and import values outside of any code that needs to be executed then the engine can know all the imports and exports during the parsing phase. So while the code is still being read before being executed. If we were allowed to import a module inside of a function, then that function would first have to be executed before the import code happened. In that case modules could not be imported in a synchronous way, the importing module would have to be executed first.

After the Parsing process, the modules are actually downloaded from the server and downloading happens in an asynchronous way. It is only the importing operation itself that happens synchronously. After the module arrives, it's also parsed and the module exports are linked to the imports in index.js. This connection is actually a life connection, exported values are not copied to imports, Instead, the import is basically just a reference to the export value. When the value changes in the exporting module then the same value also changes in the import module.

Next up, the code in the imported modules is executed and with this the process of importing modules in finally finished.

### **REVIEW: MODERN AND CLEAN CODE:**

**READABLE CODE**

1. Write code so that others can understand it.
2. Write code so that you can understan it in 1 year.
3. Avoid too "clever" and overcomplicated solutions.
4. Use descriptive variable names: what they contain.
5. Use descriptive function names: what they do.

**GENERAL**

1. Use DRY principle (refactor your code).
2. Don't pollute global namespace, encapsulate istead.
3. Don't use var.
4. Use strong type checks (=== and !==).

**FUNCTIONS**

1. Generally, functions should do only one thing.
2. Don't use more than 3 functions parameters.
3. Use default parameters whenever possible.
4. Generally, return same data type as received.
5. Use arrow functions when they make code more readable.

**OOP**

1. Use ES6 classes.
2. Encapsulate data and don't mutate it from outside the class.
3. Implement method chaining.
4. Do not use arrow functions as methods (in regular objects).

**AVOID NESTED CODE**

1. Use early return (guard clauses).
2. Use ternary (conditional) or logical operators instead of if.
3. Use multiple if instead of if/else-if.
4. Avoid for loops, use array methods instead.
5. Avoid callback-based asynchronous APIs.

**ASYNCHRONOUS CODE**

1. Consume promises with async/await for best readability.
2. Whenever possible, run promises in parallel(Promise.all).
3. Handle errors and promise rejections.

### **IMPERATIVE VS DECLARATIVE CODE**

**TWO FUNDAMENTALLY DIFFERENT WAYS OF WRITING CODE (PARADIGMS)**

```
                IMPERATIVE                                  DECLARATIVE

     - Programmer explains "How to do            - Programmer tells "WHAT do do"
      things".
                                                 - We simply describe the way the computer should
     - We explain the computer every               achieve the result.
      single step it has to follow to
      achieve a result.                          - The HOW (step by step intructions) gets abstracted
                                                   away.
     - EXAMPLE: Step by step recipe of             EXAMPLE : Description of a cake.
      a cake.


      const arr = [2,4,6,8];                               const arr = [2,4,6,8];
      const doubled = [];                                  const doubled = arr.map(n => n * 2);
      for(let i = 0; i < arr.length; i++)
        doubled[i] = arr[i] * 2;
```

### **FUNCTIONAL PROGRAMMING**

1. Declarative programming paradigm.
2. Based on the idea of writing software by combining many pure functions, avoiding side effects and
   mutating data.
3. Side effect: Modification(mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc).
4. Pure function: Function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs.
5. Immutability : State(data) is never modified! Instead, state is copied and the copy is mutated and returned.

### **FUNCTIONAL PROGRAMMING TECHNIQUES**

1. Try to avoid data mutattions.
2. Use built-in methods that don't produce side effects.
3. Do data transformations with methods such as .map(), .filter() and .reduce().
4. Try to avoid side effects in functions: this is of course not always possible!.

### **DECLARATIVE SYNTAX**

1. Use array and object destructuring.
2. Use the spread operator (...).
3. Use the ternary (conditional) operator.
4. Use template literals.
