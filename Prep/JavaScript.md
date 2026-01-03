### Prep
---
## 1. Difference between var, let and const :

| Feature                  | `var`                              | `let`                                      | `const`                                      |
|--------------------------|------------------------------------|--------------------------------------------|----------------------------------------------|
| **Scope**                | Function or global scope           | Block scope `{}`                            | Block scope `{}`                              |
| **Re-declaration**       | Allowed (in same scope)            | Not allowed (in same scope)                | Not allowed (in same scope)                   |
| **Re-assignment**        | Allowed                            | Allowed                                    | Not allowed (but object properties can be mutated) |
| **Hoisting**             | Hoisted + initialized as `undefined` | Hoisted but **not initialized** (Temporal Dead Zone) | Hoisted but **not initialized** (Temporal Dead Zone) |
| **Initialization required at declaration** | No                               | No                                         | Yes (must be initialized)                    |
| **Use in strict mode**   | Allowed                            | Allowed                                    | Allowed                                      |
| **Recommended in modern JS** | Avoid (legacy)                   | Use for variables that change              | Use for variables that don't change          |

### Key Notes:
- **Temporal Dead Zone (TDZ)**: For `let` and `const`, accessing the variable before its declaration throws a `ReferenceError`.
- **Const objects/arrays**: The reference is constant, but contents can be modified:

```js
const arr = [1, 2, 3];
arr.push(4); // Allowed
arr = [1, 2]; // TypeError

const obj = { a: 1 };
obj.b = 2;    // Allowed
obj = {};     // TypeError
```
---

## 2. Scope (Global, Functional and Block) :

| Scope Type       | Description                                                                 | Declared With          | Variables Affected                  |                                                         |
|------------------|-----------------------------------------------------------------------------|------------------------|-------------------------------------|-------------------------------------------------------------------------|
| **Global Scope** | Variables declared outside any function or block. Accessible everywhere in the code (unless shadowed). | `var`, `let`, `const` (outside functions/blocks)<br>or implicit globals (no declaration) | All, but avoid implicit globals |
| **Function Scope**| Variables declared inside a function. Accessible only within that function (and its inner functions via closure). | `var`, `let`, `const` inside functions | `var` is function-scoped<br>`let`/`const` are block-scoped even inside functions |
| **Block Scope**  | Variables declared inside a `{}` block (e.g., `if`, `for`, `while`, or plain `{}`). Accessible only within that block. | `let`, `const`<br>`var` ignores blocks | Only `let` and `const`<br>`var` leaks to function/global scope |

#### Visual Example (Block Scope vs var)

```js
if (true) {
  var x = "var - leaks";
  let y = "let - stays in block";
  const z = "const - stays in block";
}

console.log(x); // "var - leaks" → accessible
console.log(y); // ReferenceError
console.log(z); // ReferenceError
```
---

## 3. Scope Chaining :
- Scope chaining in JavaScript refers to the mechanism by which the JavaScript engine resolves variable references by searching through a chain of scopes, starting from the current (local) scope and moving outward to parent scopes, up to the global scope. This is based on lexical scoping, meaning the scope chain is determined by where functions are defined in the code (not where they're called).
- When you access a variable:

1. JavaScript first looks in the current function's scope.
2. If not found, it "chains" upward to the enclosing function's scope.
3. This continues until the global scope is reached.
4. If still not found, it throws a ReferenceError.

```js
let globalVar = "I'm global";  // Global scope

function outer() {
  let outerVar = "I'm outer";  // Outer function scope
  function inner() {
    let innerVar = "I'm inner";  // Inner function scope
    console.log(innerVar);     // Found in inner scope: "I'm inner"
    console.log(outerVar);     // Not in inner, chains to outer: "I'm outer"
    console.log(globalVar);    // Chains further to global: "I'm global"
  }
  inner();
}
outer();
```
---

## 4. Primitive vs Non-Primitive data-types:
- Data types are divided into two main categories based on how they are stored and manipulated in the memory.
#### 1. Primitive Types (Value Types) :
- These are immutable (cannot be changed) and stored by value. When you assign a primitive to a variable or pass it to a function, a copy of the value is made.
- string, number, bigint, boolean, undefined, symbol, null.
- Immutable (Can't change value but could be reassigned).
- Passed/stored by value (copy is made).

#### 2. Non-Primitive Types (Reference Types) :
- The only non-primitive type is Object (which includes arrays, functions, dates, etc.). These are mutable and stored by reference.
- Objects{}, Arrays[], Functions, Dates, RegExp, Map, Set, etc.
- Mutable (Can change properties/values without reassigning the variable).
- Passed/Stored by reference. (Points to the same memory location).
---

## 5. Temporal Dead Zone (TDZ) :
- Applies exclusively to variables declared using let and const.
- The Temporal Dead Zone (TDZ) in JavaScript is the period between entering a scope and reaching the declaration line of variables defined with let and const. During this time, the variables are uninitialized and inaccessible; attempting to access them results in a ReferenceError. 
- How to avoid TDZ Errors :
Declare variables first, Use Linters, understand scoping.

```js
function exampleFunction() {
  // TDZ starts for 'myLet' at the beginning of the function scope
  console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
  let myLet = "Hello, world!"; // End of TDZ for 'myLet' when initialization is reached
  console.log(myLet); // Output: "Hello, world!" (now accessible)
}
exampleFunction();
```
```js
function exampleVarFunction() {
  console.log(myVar); // Output: undefined (no error, due to hoisting and default initialization)
  var myVar = "Hello, world!";
  console.log(myVar); // Output: "Hello, world!"
}
exampleVarFunction();
```
---

## 6. Hoisting :
- Behavior where declarations for functions, variables, classes, and imports are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed.
- The declarations are not physically moved in the code, but rather JS engine allocated memory for them ahead of time.
1. **var variables** : These are hoisted to the top of their function or global scope and are automatically initialized with a value of undefined.
```js
console.log(myVar); // Output: undefined
var myVar = "A hoisted variable";

// Code interpreted by the engine
var myVar;
console.log(myVar); // undefined
myVar = "A hoisted variable";
```
2. **let and const variables and class declarations** : These are also hoisted, but they are not initialized with a *default value*. Attempting to access them before the line of declaration results in a *ReferenceError*. This period, from the beginning of the scope until the declaration is processed, is known as the *Temporal Dead Zone (TDZ)*.
```js
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "A hoisted let";

console.log(MyClass); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {}
```
---
## 7.  Prototypes, Prototypes Objects and Prototypes Chaining :
#### Prototype :
- Prototypes are the fundamental mechanism for **inheritance**, allowing objects to share properties and methods.
- A prototype is an internal, hidden property (formally referred to as **[[Prototype]]**) present on every *JavaScript object* that links to another object. This linked object acts as a template, providing a way for objects to inherit behavior. This is the core of JavaScript's *prototypal inheritance model*, which differs from class-based inheritance in other languages. 
```js
// A constructor function
function Animal(name) {
  this.name = name;
} 
// Add a method to the Animal prototype
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};
// Create an instance
const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.
```
#### Prototype Objects :
- A prototype object is a standard JavaScript object itself. When you try to access a property or method on an object, JavaScript first looks for it in the object's own properties. If it's not found there, it looks in the associated prototype object. 

#### Prototype Chaining :
- The prototype chain is the mechanism through which JavaScript implements inheritance across multiple levels. Each prototype object can also have its own prototype, creating a chain of potential ancestors. 
The process of property lookup via the prototype chain works as follows:
1. **Initial Object Check** : JavaScript first checks if the property or method exists on the object itself.
2. **Traversing the Chain** : If not found, it moves up the chain to the object's immediate prototype.
3. **Continuation** : This process repeats, checking the prototype's prototype, and so on.
4. **Chain End** : The chain continues until the property is found, or it reaches null, at which point undefined is returned. 
- The top of the prototype chain is typically Object.prototype, which has null as its own prototype, effectively ending the chain. This mechanism allows objects to inherit properties not just from their immediate prototype, but from all objects higher up in the chain. 
```js
let coffee = {
    color : "dark",
    drink : function() {
        console.log("git git git");
    }
}
// We create a new object we can access it by inheriting the props of another Object.
let latte = Object.create(coffee);
console.log(latte);
latte.taste = "bitter";
latte.drink();
```
---

## 8. Functions :
- A function is a block of reusable code designed to perform a specific task. It encapsulates a set of instructions that can be executed on demand, rather than running immediately when the script loads.
```js
// Function Declaration
function func() {
    console.log("Am a function");
    console.log("Am a function");
}
func();
```
```js
// Function Expression
let func = function () {
    console.log("Am a function Expression");
    console.log("Am a function Expression");
}
func();
```
```js
// Arrow Function
let func = () => {
    console.log("Am an arrow function");
    console.log("Am an arrow function");
}
func();
```
```js
// Parameters and arguements
function func(animal) {                 // parameter
    console.log(`Dance ${animal}`);
}
func("Monkey");                         // arguement
```
```js
// Default : Arguements are not passed but parameters are given
function add(v1 = 0, v2 = 0) {
    console.log(v1, v2);
}
add();

// REST : So that we can include every arguement
function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// NOTE : When we use ... in parameters place then it is REST.
// If we use it wrt arrays and objects then it is spread operator.
```
```js
Return Values and Early returns :
// - Return is always done inside a function.
function bcd() {
    return 123;
}
let val = bcd();
console.log(val);

// FIRST-CLASS FUNCTIONS(assign to variables, pass as arguements, return from other functions)
// - First-class functions :  functions can be treated as value
function xyz(val) {
    val();
}
xyz(function () {
    console.log("Hola");
});
```
---

## 9. Pure vs Impure Functions :
Deterministic vs Non-deterministic Functions.
- Deterministic: Given the same input arguments, it will always return the exact same output. Its result does not depend on any external state or hidden information that could change over time.
- Non-deterministic: It may return different outputs for the same input arguments, 
because its result depends on external state or factors that can change.

---
## 10. Closures :
- A closure is created when an inner function is defined within another function (the parent) and the inner function "remembers" and accesses the local variables from its parent function, even after the parent function has finished executing.
- (A function which returns another function and that function uses a varibale from the parent).
```js
function parentFunction(outerVariable) {
  // innerFunction accesses outerVariable, which is in parentFunction's scope
  function innerFunction(innerVariable) {
    console.log('Outer variable: ' + outerVariable);
    console.log('Inner variable: ' + innerVariable);
  }
  // The parent function returns the inner function
  return innerFunction;
}

// create a new instance of the closure by calling parentFunction
const newClosure = parentFunction('outside');

// The parentFunction has already finished executing, but newClosure still has access
// to the 'outside' value of outerVariable from its preserved scope
newClosure('inside');

// The output would be:
// Outer variable: outside
// Inner variable: inside
```
1. A function which returns another function: The parentFunction returns innerFunction.
2. That function uses a variable from the parent: The innerFunction uses the outerVariable declared in parentFunction. 
---

## 11. Higher Order Functions (HOF) :
- A function that either accepts one or more functions as arguments (often called callback functions) or returns a new function as its result (or both) is a higher-order function.
- **Abstraction and Reusability** : They abstract common operations, allowing you to reuse the logic with different behaviors (the callback functions).
- **Encapsulation of Logic** : They can be used to manage state, create closures, and handle setup/teardown logic
- Accept one or more functions as arguments (callback functions).
- Return a function as their result.
- HOF is a function which returns a function or accepts a function.
```js
function abcde() {

}
abcde(function () {

})
// OR
function abcde() {
    return function () {

    }
}
abcde()(); // second bracket is to run the second function inside
```
---
## 12. Lexical scoping (static scoping) :
- Dictates how variables and functions are accessible based on their **Physical Location** within the source code at the time of definition, not at the time of execution.
- Lexical scoping is a fundamental concept in JavaScript where the accessibility of variables is determined by their **physical location** within the source code at author time, not at runtime.
1. **Static Scoping** : Lexical scoping is also known as static scoping because the scope of a variable is "set in stone" when the code is written and compiled/parsed, before it is executed.
2. **Scope Chain** : When a variable is accessed, the JavaScript engine first checks the current (local) scope. If the variable isn't found, it looks up in the immediate outer (parent) scope, and continues this process up the hierarchy until it reaches the global scope. This upward search is called the scope chain.
3. **One-Way Access** : Inner functions can access variables from their outer (parent) scopes, but outer scopes cannot access variables defined inside inner (child) functions.
4. **Closures** : Lexical scoping is the foundation of closures, one of JavaScript's most powerful features. A closure is a function that remembers and accesses its lexical scope even when it is executed outside of that scope. 
```js
function lex() {
    let a = 10;
    function cal() {
        let b = 20;
        function lexi() {
            let c = 30;
        }
    }
}
```
---
## 13. IIFE(Immediately Invoked Function Expression) : Iffy
- function that is defined and executed immediately after its creation.
- This pattern is primarily used to create a private scope for variables, preventing them from polluting the global scope and avoiding naming conflicts.
```js
(function () {

})();
```
---

## 14. Pass by References and Pass by Value :
#### **Pass by Value**, meaning that when a variable is passed to a function, a copy of the value is created.
- Changes made to the parameter within the function do not affect the original variable outside the function's scope.
- The key difference lies in the type of value being passes : 
1. Primitive types are passed as copy of the actual data.
2. Non-Primitive types (objects) are passed as a copy of the object in memory.

#### **Pass by Reference (objects)**,the value of the variable itself is a reference (an address) to the object's location in memory.
- When this variable is passed to a function, a copy of this reference is created and given to the function's parameter. Both original variable and the function parameter point to the same object in memory.
---

## 15. Currying :
- Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nested functions, each taking a single argument at a time.
- Allows us to partially apply arguments to a function.
- Instead of calling a function like **f(a, b, c)**, a curried version is called as **f(a)(b)(c)**.
```js
// Non-curried function - 
const add = (a, b, c) => {
  return a + b + c;
};
add(1, 2, 3); // returns 6

// Curried version using arrow function -
const curriedAdd = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
curriedAdd(1)(2)(3); // returns 6
```
---

## 16. Infinite Currying Problem :
- *Infinite Currying* : A functional programming technique used to create a function that can accept an indefinite number of arguments through chained function calls.
- Standard currying transforms a function that takes multiple arguments into a sequence of nested functions, each taking a single, predefined argument. 
- *Infinite Currying* - Extends this idea so the function keeps returning another function, accumulating arguments until it is explicitly told to stop.
1. Accumulating Arguments : Using closures to maintain a running total or list of arguments across the function calls.
2. Termination : Determining when to stop returning functions and return the final computed value.
```js
function sum(a) {
  let currentSum = a;

  function nextSum(b) {
    if (b) {
      currentSum += b;
      return nextSum; // Returns the function again for chaining
    } else {
      return currentSum; // Returns the final sum if no argument is provided
    }
  }

  // The valueOf method is called when JavaScript attempts to coerce the function 
  // into a primitive value (e.g., during a comparison or when printed with a unary plus).
  nextSum.valueOf = function() {
    return currentSum;
  };

  return nextSum;
}
```
---

## 17. Memoization :
- Memoization is an optimization technique in JS that speeds up applications by storing (caching) the results of expensive function calls and returning the cached result when the same inputs occur again.
- This prevents redundant computations, improving performance at the cost of increased memory usage.
- How memoization works :
1. A cache is created (usually a JavaScript Object or Map) to store previously computed results.
2. When the function is called, it first checks the cache to see if the result for the given arguments already exists.
3. If the result is cached, the function returns the stored value immediately, skipping the expensive computation.
4. If the result is not in the cache, the function performs the necessary calculation, stores the new result in the cache, and then returns the value.
- Example : A common use case for memoization is optimizing recursive functions, such as the Fibonacci sequence calculation, which involves many redundant sub-problems. 
Without memoization, calculating fibonacci(50) would involve recalculating smaller Fibonacci numbers (fibonacci(49), fibonacci(48), etc.) multiple times, leading to an exponential time complexity.
```js
function fibonacci(n, cache = {}) {
  if (n in cache) {
    return cache[n]; // Return cached result
  }
  if (n <= 1) {
    return n;
  }

  // Compute and store the result in the cache before returning
  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  return cache[n];
}
```
---

## 18. REST parameter :
- Rest parameters allow a function to accept an indefinite number of arguments as a single array. 
- They are denoted by three dots (...) followed by a parameter name in the function definition. 
- If we have many arguements then we will have to declare that many parameters, instead Use **REST** so that we can include every arguement.
```js
// Normally we do 
function abcd(a, b, c, d){
    console.log(a, b, c, d);
}
abcd(a, b, c, d);
// We can do this for fewer arguments ... If there are more then we can use REST parameters.

function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```
- NOTE : When we use ... in parameters place then it is REST.
- If we use it wrt arrays and objects then it is spread operator.
---

## 19. Spread Operators :
- **Spread Operator ( ... )** expands an iterable (like an array or a string) or an object's properties into individual elements or key-value pairs. It is a powerful feature for writing clean and concise code, primarily used for **copying**, **merging**, and **passing data** flexibly.
```js
// Copying Arrays and Objects :
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // [1, 2, 3]

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // { a: 1, b: 2 }

// Merging or Combining Data :
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2]; // [1, 2, 3, 4]

// Merging Objects :
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

// Adding Elements or Properties :
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

const user = { name: 'Alice', age: 30 };
const updatedUser = { ...user, city: 'New York' }; // { name: 'Alice', age: 30, city: 'New York' }
```
---

## 20. Ways to create Objects :
-  There are several ways to create objects, each suitable for different use cases. The most common and modern approaches are : 
#### 1. Object Literals :
Simple and common way to createa single object is with object literal syntax which uses curly braces {} to define key-value pairs.
```js
const user = {
  firstName = "Akhil",
  lastName = "Shetty",
  age = 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// console.log(user.firstName);    // Output : Akhil
// console.log(user.fullName());   // Output : Akhil Shetty
```
#### 2. Using Classes :
Classes, introduced in ECMAScript 2015(ES6), provide a cleaner and more structured way to create objects, especially when we want to create multiple objects of same type and handle inheritance.
```js
class User {
  constructor(firstName, lastname, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  showUsers() {
    const users = `First Name :${this.firstName}, Last Name :${this.lastName}, age :${this.age}`;
    console.log(users);
  }
}

const allUsers = new User("Akhil", "Shetty", 22);
allUsers.showUsers();
```
#### 3. Using Constructor Functions :
Constructor functions were the standard way to create reusable object "blueprints". They are regular JS functions used with new keyword.
```js
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return "Hello, my name is " + this.name;
  };
}
const akhil = new User("Akhil", 22);
console.log(akhil.name);  // Output: Akhil
```
#### 4. Using object.create() :
The object.create() method creates a new object using an existing object as the prototype of the newly created object. This allows for explicit prototypal inheritance.
```js
const animalProto = {
  type: "Invertebrate",
  displayType() {
    console.log(this.type);
  }
};

const animal = Object.create(animalProto);
animal.displayType(); // Output: Invertebrate

const fish = Object.create(animalProto);
fish.type = "Fish";
fish.displayType(); // Output: Fish
```
#### 5. Using Factory Functions :
Factory functions are simply functions that return s new object, without needing the new keyword. They are flexible alternative that can encapsulate object creation logic.
```js
function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  };
}
const user1 = createUser("Akhil", 22);
console.log(user1.greet());   // Output: Hello, name is Akhil
```
---

## 21. Generator Functions :
- A special type of function that can pause their execution and resume later, allowing them to return multiple values sequentially, or produce values on demand. 
- They are a powerful feature for creating custom iterators and managing asynchronous operations.
1. *function* syntax* : Generator functions are defined using an asterisk (*) after the function keyword (e.g., function* myGenerator() {}).
2. *yield keyword* : The yield keyword pauses the generator function's execution and returns a value to the caller. The function's state is preserved at this point.
3. *Generator Object* : When a generator function is called, it does not execute immediately. Instead, it returns a special generator object that conforms to both the iterable and iterator protocols.
4. *.next() method* : This method is called on the generator object to resume execution. It runs the code until the next yield (or return) statement is encountered. It returns an object with two properties: value (the yielded value) and done (a boolean indicating if the generator has finished).
```js
function* simpleGenerator() {
  yield 'First value';
  yield 'Second value';
  return 'Done'; // A return statement ends the generator
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 'First value', done: false }
console.log(gen.next()); // { value: 'Second value', done: false }
console.log(gen.next()); // { value: 'Done', done: true }
console.log(gen.next()); // { value: undefined, done: true } (after completion)
```
---

## 22. JS single threaded language :
- JavaScript is fundamentally a single-threaded language in its core execution model. This means it has a single call stack and can execute only one operation at a time on its main thread.
#### Core concept : Single Threaded Execution :
- The single-threaded nature was a deliberate design choice, primarily to simplify programming for web browsers, especially when manipulating the **Document Object Model(DOM)**. A multi-threaded approach to DOM manipulation would introduce complexities like **race conditions** and **synchronization issues**, leading to unpredictable behavior and bugs.
- In a single-threaded environment, tasks are processed sequentially. If a synchronous task takes a long time(e.g., a heavy computation or I/O operation without the proper handling), it "blocks" the main thread, making the entire application or web page unresponsive.
#### Achieving Concurrency : The event loop and Asynchronous APIs :
- Despite being single-threaded, JS handles concurrency and non-blocking operations very efficiently, giving the illusion of multi-threading. This is achieved through its runtime environment(Browser or Node) which provides mechanisms like the **event loop** and **Web APIs**.
- **Web APIs/Node APIs** : Time-consuming operations (like network requests, file I/O, or timers using setTimeout) are delegated to the runtime's background APIs, which run outside the main JavaScript thread.
- **Callback Queue**: Once a background operation is completed, its associated callback function is placed into a queue.
- **Event Loop** : This continuous process monitors the call stack. If the call stack is empty (meaning all synchronous code has finished executing), the event loop pushes the first callback from the queue onto the call stack to be executed.
#### Web Workers :
- For truly CPU-intensive tasks that would otherwise block the main thread, modern env provide **Web Workers** (in browsers) or **Worker Threads** (in Node.js). These run in seperate, isolated threads and communicate with the main thread via message passing, which avoids the memory-sharing complexities of traditional multi-threading. The ability to use workers is a feature of the runtime env(like the browser or node.js), not the core JS Language spesification itself.
---

## 23. Callbacks :
- A callback in JS is a function passed as an argument to another function, which is then executed at a later time by the receiving function. This allows for the handling of events and asynchronous operations without blocking the main program thread.
- Functions are considered **first-class citizens**, meaning they can be treated like any other value (assigned to variables, passed as arguments, etc). This makes callbacks possible.
1. **Passing the functions** : A function is passed to a "higher-order function" as as argument.
2. **Execution Timing** : The higher-order function contains logic that decides when to execute the callback, which could be immediately (synchronous) or at a later point(asynchronous).
#### Use cases :
Callbacks are fundamental to JavaScript and are widely used in various scenarios: 
- *Asynchronous operations* : Such as fetching data from an API, reading files, or using setTimeout.
- *Event handling* : Used extensively with event listeners (e.g., addEventListener) to run code when a user interacts with a page (like a button click).
- *Array methods* : Built-in array methods like .map(), .filter(), .forEach(), and .sort() use callbacks to apply custom logic to each element. 
```js
// Synchronous Example :
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // The callback is executed immediately
}
function sayGoodbye() {
  console.log("Goodbye!");
}
greet('Alice', sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!
// --------------------------------------------------------------
// Asynchronous Example :
function delayedMessage(callback) {
  setTimeout(() => {
    console.log("This message appears after 2 seconds.");
    callback(); // The callback is executed later, after the delay
  }, 2000);
}
function done() {
  console.log("Callback executed after delay.");
}
delayedMessage(done);
// Output after ~2 seconds:
// This message appears after 2 seconds.
// Callback executed after delay.
```
---

## 24. Event Loops :
- The event loop is a fundamental mechanism that enables JS to handle asynchronous operations and events in a non-blocking way, despite being a single-threaded language. It continuously monitors the program's components to orchestrate code execution efficiently and ensures the application remains responsive.
#### Key Components :
- The event loop works in tandem with several components of the JS runtime env.(browser or node).
- *Call Stack* : A LIFO (Last-In, First-Out) data structure that tracks and executes synchronous function calls. When a function completes, it's popped off the stack.
- *Web APIs (or Host Environment APIs)* : Provided by the browser or Node.js, these handle asynchronous tasks in the background, outside the main JavaScript thread. Examples include setTimeout(), network requests (fetch, XMLHttpRequest), and DOM events (click).
*Task Queues* :
- *Microtask Queue* : Holds higher-priority tasks, such as promise callbacks (.then(), .catch(), .finally()) and queueMicrotask() calls.
- *Macrotask Queue (Callback/Task Queue)* : Holds lower-priority tasks like timer callbacks (setTimeout(), setInterval()) and most I/O and UI events.
- *Event Loop* : The mechanism that continuously checks if the call stack is empty. If it is, the event loop moves completed tasks from the queues to the call stack for execution.
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Microtask");
});

console.log("End");
/*
Start
End
Promise Microtask
Timeout Callback
*/
```
---

## 25. 