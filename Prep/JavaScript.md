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

## 25. Callback and Microtask queue :
### Callback queue (Macrotasks) :
- The callback queue (also known as the task queue or macrotask queue) is a data structure in the JavaScript runtime environment that holds callback functions from completed asynchronous operations, such as setTimeout(), setInterval(), and DOM events, waiting to be executed. It operates on a First-In, First-Out (FIFO) basis. 
##### - How the Callback Queue Works
- The callback queue is part of a larger system called the event loop that allows JavaScript, a single-threaded language, to handle asynchronous operations without blocking the main execution thread.

### Microtask queue :
- The microtask queue in JavaScript is a high-priority queue, managed by the event loop, that holds tasks which need to be executed immediately after the currently running synchronous code finishes but before the next macrotask (regular task) or rendering update occurs. It operates on a first-in, first-out (FIFO) basis.

### Macrotasks vs Microtasks :
- In JavaScript's event loop, the primary distinction between the **microtask queue** (also known as the job queue) and the **callback queue** (or macrotask/task queue) is their priority and the types of tasks they handle. Microtasks have a higher priority and are processed entirely before the event loop moves on to the next task in the callback queue. 

| Feature                  | `Microtask Queue`                              | `Macrotask Queue`                                      |                                   |
|--------------------------|------------------------------------|--------------------------------------------|----------------------------------------------|
| **Priority**                | Higher           | Lower                            |                              |
| **Contents**                | Callbacks from Promises (.then(), .catch(), .finally()), async/await functions, and MutationObserver           | Callbacks from timers (setTimeout(), setInterval()), I/O operations, and user events (e.g., clicks)                            |                              |
| **Processing**       | All microtasks are processed sequentially until the queue is empty, after the current synchronous code finishes and before the next macrotask begins            | The event loop processes one task from this queue per iteration, after the microtask queue has been entirely cleared                |                 |
---

## 26. Promises :
- Promise is an **object** representing the **eventual outcome** (completion or failure) of an asynchronous operation. It serves as a placeholder for a value that is not yet available, enabling cleaner and more manageable asynchronous code compared to traditional callbacks.
#### - Promise States :
- A promise can be in one of three internal states: 
1. *Pending* : The initial state; the operation is still in progress.
2. *Fulfilled* : The operation completed successfully, and the promise has a resulting value.
3. *Rejected* : The operation failed, and the promise has a reason (error) for the failure. 
Once a promise is fulfilled or rejected, it is considered settled, and its state cannot change again.

#### - Consuming Promises (Handling Outcomes) :
You interact with the eventual result of a promise using specific methods attached to the promise object: 
- *.then(onFulfilled, onRejected)* : This method appends handlers to the promise. The first function runs if the promise is fulfilled, and the second (optional) function runs if it is rejected. The .then() method itself returns a new promise, which makes chaining possible.
- *.catch(onRejected)* : This is specifically for handling rejection cases and is essentially a then(null, onRejected). It provides a cleaner way to handle errors at the end of a chain.
- *.finally(onFinally)* : This handler runs regardless of whether the promise was fulfilled or rejected, making it useful for cleanup operations (e.g., hiding a loading spinner). 

#### - Creating Promises :
- You typically consume promises returned by modern Web APIs (like the fetch() API). However, you can create a new promise manually using the Promise constructor to wrap older callback-based APIs or custom asynchronous logic:
```js
const myFirstPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., an API call)
  setTimeout(() => {
    const success = true; // In a real scenario, this would be determined by the operation's outcome
    if (success) {
      resolve("Success!"); // Call resolve() if the operation is successful
    } else {
      reject(new Error("Operation failed")); // Call reject() if an error occurs
    }
  }, 250);
});

myFirstPromise
  .then((successMessage) => {
    console.log(`Yay! ${successMessage}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
```
#### - Advanced Promise Methods :
The Promise object has several static methods for handling groups of promises: 
- *Promise.all(iterable)* : Waits for all promises in an iterable to be fulfilled. If any promise is rejected, Promise.all immediately rejects.
- *Promise.allSettled(iterable)* : Waits for all promises to be settled (fulfilled or rejected) and returns an array of their outcomes.
- *Promise.any(iterable)* : Fulfills as soon as one of the promises in the iterable fulfills. It rejects only if all promises are rejected.
- *Promise.race(iterable)* : Settles (fulfills or rejects) as soon as the first promise in the iterable settles.

| Method              | Behavior                                                                 | Result if successful                                                                 | Result if a promise fails                                                                 | Primary Use Case                                                                                   |
|---------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Promise.all()     | Waits for **all** promises to fulfill                                    | An array of all fulfilled values, in the same order                                  | Immediately rejects with the first promise's reason (fastest failure)                    | When **all** operations must succeed to proceed (e.g., loading all critical resources)            |
| Promise.any()    | Resolves as soon as **any** promise fulfills                             | The value of the **first** fulfilled promise                                         | Rejects only if **all** promises reject, with an AggregateError                        | When you need at least one success and have multiple fallbacks (e.g., fetching from multiple CDNs) |
| Promise.allSettled() | Waits for **all** promises to settle (fulfill **or** reject)         | An array of objects describing each outcome:<br>`{status: "fulfilled", value: ...}`<br>`{status: "rejected", reason: ...}` | **Always resolves** — never rejects                                                       | When you need the result of every operation, regardless of success or failure (e.g., partial UI updates, logging) |
| Promise.race()    | Settles as soon as the **first** promise settles (fulfills **or** rejects) | The value or reason of the **first** settled promise                                 | Rejects or fulfills based on whichever promise finishes first                            | For timeouts or getting the fastest response (e.g., race between network request + timeout)      |              
---

## 27. Async and Await :
- *async and await* are modern keywords used to handle *asynchronous operations* (like fetching data from an API or reading files) in a way that makes the code look and behave more like synchronous (sequential) code. They are essentially *"syntactic sugar"* built on top of Promises.
#### - Concept :
- **async function** : The async keyword is placed before a function declaration (or expression/arrow function) to declare it as asynchronous.
- An *async* function always implicitly returns a Promise. Any value returned from the async function is automatically wrapped in a resolved promise.
- It allows the use of the *await* keyword within its body.
- **await keyword** :  The await keyword can only be used inside an async function (or at the top level of a JavaScript module).
- It pauses the execution of the async function it is in until the Promise it is waiting for settles (either resolves or rejects).
- When the promise resolves, await returns the resolved value, allowing it to be assigned to a variable in a synchronous-looking manner.
- Crucially, it does not block the entire JavaScript program's main thread; the rest of the application can continue running other tasks in the event loop.
```js
function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
fetchData();
//----------------------------------------------------
async function fetchDataAsync() {
  try {
    const response = await fetch('https://api.example.com/data'); // Wait for the fetch call to settle
    const data = await response.json(); // Wait for the response to be parsed as JSON
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error); // Use standard try/catch for error handling
  }
}
fetchDataAsync();
```
---

## 28. Event Propagation :
- Event Propagation describes how an event travels through the **Document Object Model (DOM)** when it is triggered on an element. This comprises of three phases : **Capturing**, **Targeting** and **Bubbling**.
#### - The Three Phases of Event Propagation :
- When a user interacts with a nested element (e.g., a button inside a div), the event doesn't just happen at that single element; it follows a complete path through the DOM tree. 
1. **Capturing Phase** : The event starts at the root of the DOM (the window object) and travels downward through the ancestor elements to the target element. Event listeners can be set to execute during this "trickling" phase by passing true as the third argument to the addEventListener() method.
2. **Target Phase** : The event reaches the actual element where the event occurred (the target element). Any event listeners attached to the target element itself are executed in this phase.
3. **Bubbling Phase** : After the target phase, the event travels back up the DOM tree, from the target element to the root. This is the default behavior for most events, and event listeners are typically executed during this phase (when the third argument of addEventListener() is false or omitted). 
#### - Controlling Event Propagation :
- You can manage the flow of events using methods on the event object that is passed to the event handler function. 
- **event.stopPropagation()** : This method stops the event from proceeding to the next phase (*e.g., stops bubbling up to parent elements or trickling down further*). Other handlers on the current element will still run.
- **event.stopImmediatePropagation()** : This method not only prevents the event from propagating further up or down the DOM tree, but also stops any other event handlers attached to the same element from being executed.
- **event.preventDefault()** : This method prevents the default behavior associated with the event (*e.g., stops a form from submitting or a link from navigating*), but it does not stop the event from propagating through the DOM. 
---

## 29. Event Bubbling :
- Event bubbling is a JavaScript mechanism where an event triggered on a specific element (the target) also fires on all of its ancestor elements, up the Document Object Model (DOM) tree to the root. This process is the default behavior for most events in modern browsers.
```html
<!-- HTML -->
<div id="parent">
  <button id="child">Click me!</button>
</div>
```
```js
// JS
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent clicked');
});

child.addEventListener('click', () => {
  console.log('Child clicked');
});
```
#### - Controlling Bubbling :
- *event.stopPropagation()* : This method, called within an event handler, prevents the event from propagating further up the DOM tree. In the example above, calling event.stopPropagation() inside the child's click handler would prevent the parent's handler from running.
- *event.stopImmediatePropagation()* : This method stops the event from bubbling up the DOM and also prevents any other listeners on the same current element from being called. 
---

## 30. Event Capturing :
- Event capturing is the first phase of the DOM event propagation mechanism where an event is triggered on the outermost ancestor elements first and then flows down the hierarchy to the target element. It is rarely used and is disabled by default.
---

## 31. Event Delegation :
- A common pattern that leverages event bubbling is event delegation. Instead of attaching an event listener to every single child element, you can attach a single listener to a common parent element. The parent listener can then use the event.target property to identify which child element was the actual source of the event and handle it accordingly. This is more efficient for performance and managing dynamic lists of elements.
1. **Target Phase** : The event first reaches the actual element where it occurred.
2. **Bubbling Phase** : The event then propagates upward through all its parent elements in the DOM tree until it reaches the root (document or window). 
- Event delegation capitalizes on this bubbling. A listener on the parent element "catches" events that originated from its descendants as they bubble up. Inside the listener, the event.target property is used to identify the specific child element that was initially clicked. 
---

## 32. Type Coersion vs Conversion :
### Type Coersion :
- The automatic or implicit conversion of values from one data type to another during an operation. This behavior, due to JS being a weakly typed language, allows flexibility but can lead to unexpected results if the rules aren't understood.
- Type coercion can be categorized into two main types:
1. **Implicit Coercion** : JavaScript automatically converts data types behind the scenes to complete an operation. For example, adding a number to a string results in string concatenation, as the number is coerced into a string.
2. **Explicit Coercion (Type Casting)** : The developer intentionally converts the value's type using built-in functions like Number(), String(), or Boolean().

### Type Conversion :
- Type conversion in JavaScript is the process of changing a value's data type, which happens either explicitly (manually by the developer) or implicitly (automatically by the JavaScript engine, also known as type coercion). 
1. Explicit Type Conversion :
Explicit conversion gives the developer control over the process using built-in functions.

| Feature                  | `Type Conversion (Explicit)`                              | `Type Coercion (Implicit)`                                      |                                   |
|--------------------------|------------------------------------|--------------------------------------------|----------------------------------------------|
| **Control**                | Done manually by the developer.           | Done automatically by the JavaScript engine                            |                              |
| **Methods**                | Uses built-in functions like Number(), String(), or Boolean()           | Occurs during operations involving different data types, such as arithmetic or loose equality comparisons (==)                            |                              |
| **Predictability**       | Highly predictable as you define exactly how the conversion happens.            | Can lead to unexpected results if you are not familiar with JavaScript's specific coercion rules.                |                 |
---

## 33. Throttling and Debouncing :
#### Debouncing -
- Debouncing in JavaScript is a programming technique that limits how often a function can be executed. 
- It ensures that a function is only called after a specified amount of time has passed since the last time it was triggered, effectively waiting for a period of inactivity.
##### How it Works :
- The core concept is to use setTimeout() and clearTimeout() to manage a timer. 
- An event (like a keystroke) triggers the debounced function.
- Any existing timer is cleared using clearTimeout(), canceling the previously scheduled execution.
- A new timer is set using setTimeout(), scheduling the function to run after a specified delay (e.g., 500ms).
- If another event occurs before the delay expires, the timer is reset again.
- The function only executes if the delay period elapses without any new events. 

#### Throttling :
- Throttling in JavaScript is a technique used to limit how often a function can be executed within a specific period of time, regardless of how many times the event that triggers it occurs. It ensures that the function runs at a maximum, controlled rate. 
##### How It Works :
- When a throttled function is first called, it executes immediately (or after a very short initial delay, depending on implementation). For a specified "cooldown" or "wait" period after that initial call, any subsequent calls to the function are ignored. Once the time interval has passed, the function is available to run again. 
- Think of it like a security guard at a concert: even if many people rush the gate, the guard only lets one person through every five seconds. 
##### Common Use Cases :
- Throttling is essential for optimizing performance with high-frequency events that can fire dozens or hundreds of times per second, preventing the browser from becoming overwhelmed and the UI from becoming laggy. 
- Scroll events : Limiting logic for infinite scrolling or lazy loading images to run only at set intervals while the user scrolls.
- Window resize events : Recalculating element positions or redrawing the UI at a consistent rate as the window size changes.
- Mouse movement tracking : Efficiently tracking mouse position for performance-sensitive tasks like drag-and-drop or drawing tools.
- API rate limiting : Preventing excessive API requests to a server by limiting how often a button click can trigger a network call.
```js
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

function throttle(func, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            func(...args);
        }
    }
}
document.querySelector("input").addEventListener("input", throttle(function () {
    console.log("Throttling");
}, 2000));

document.querySelector("input").addEventListener("input", debounce(function () {
    console.log("Debouncing");
}, 1500));
```
---

## 34. How JS parses and compiles the code step by step :
- The JavaScript engine processes code through a series of steps involving parsing, compilation, and execution. This ensures the human-readable source code is ultimately converted into efficient machine code that the computer's processor can understand and run.
#### Step-by-Step Process
##### 1. Parsing (Syntax Analysis) :
- **Lexical Analysis (Tokenization)** : The engine first reads the raw code character by character and breaks it down into small, meaningful pieces called tokens (e.g., const, sum, =, 5, +, 7, ; are all tokens).
- **Syntax Analysis (AST Generation)** : The engine then uses these tokens to build a tree-like structure called an Abstract Syntax Tree (AST). This tree represents the grammatical and hierarchical structure of the code. During this stage, the parser also performs early error checking to ensure the code follows JavaScript's syntax rules. If any syntax errors are found (e.g., a missing bracket), the process stops, and an error is thrown.
##### 2. Compilation :
- **Bytecode Generation** : The AST is used to generate bytecode, which is a lower-level, machine-independent representation of the code. Modern JavaScript engines, like V8's Ignition interpreter, quickly produce and execute this bytecode to start running the code immediately.
- **Just-In-Time (JIT) Optimization** : JavaScript engines use JIT compilation, which combines interpretation and compilation. As the bytecode runs, a profiler monitors the code, identifying "hot code" (functions or blocks that are executed frequently).
- **Machine Code Generation** : An optimizing compiler (like V8's TurboFan) takes the hot code and compiles it into highly optimized native machine code, which runs much faster than the initial bytecode.
- **Deoptimization** : If assumptions made during optimization turn out to be false at runtime (e.g., a variable type changes unexpectedly), the engine deoptimizes the code and reverts to the slower bytecode version to ensure correct execution.
##### 3. Execution :
- **Execution Context Creation** : The code finally runs within an execution context, which is the environment where JavaScript code operates. This involves creating a memory heap to store variables and objects, and using a call stack to manage the order of function calls.
- **Running the Code** : The engine steps through the bytecode (or optimized machine code) in the call stack, performs the operations, and manages memory using garbage collection. 
---

## 35. If a microtask has a function which continuously puts its return function in a microtask queue infinitely, how to handle this :
- In JavaScript, if a microtask's function continuously queues itself onto the microtask queue, it creates an infinite loop that can starve the main thread of execution. This is a common pattern for causing the browser to become unresponsive. 
- Here's how this behavior is handled and what you can do about it:
#### - How JavaScript Handles This :
JavaScript's event loop prioritizes microtasks (like Promises, queueMicrotask(), and MutationObserver callbacks) which all execute before the next macrotask (like setTimeout, setInterval, or user interface rendering) can run. 
- **Starvation** : When an infinite microtask loop occurs, the browser is stuck in a cycle of processing microtasks and never reaches the macrotask queue. This prevents UI updates, user input processing, and other scheduled tasks from happening.
- **Browser Crash/Unresponsiveness** : Modern browsers are built to detect such infinite loops or excessive computation. If a script runs for too long without yielding to the main event loop, the browser may:
1. Display a warning asking the user if they want to stop the script.
2. Freeze the specific tab to protect the overall browser and operating system.
3. Force close the tab if it becomes completely unresponsive. 
#### How to Handle (i.e., Fix) This Situation in Your Code :
- The core issue is that the function is not yielding control back to the main event loop. You need to break up the continuous process into smaller, manageable chunks that allow the browser time to breathe between executions. 
- You can achieve this using macrotasks:
1. **Use setTimeout or setInterval** : Move the repetitive code into a setTimeout with a delay of 0 (or a small number like 10ms). This places the next execution of the function in the macrotask queue, which runs after the current batch of microtasks has finished and after the browser has had a chance to render UI updates and process user input.Incorrect *(Infinite Microtask Loop)* :
```js
function microtaskLoop() {
    console.log('Still in microtasks!');
    queueMicrotask(microtaskLoop); // Adds another microtask immediately
}
// Starts the infinite loop:
// microtaskLoop();

// Correct (Yields to Event Loop):
function macrotaskLoop() {
    // Do some work here...
    console.log('Running a chunk of work...');

    // Schedule the next chunk as a macrotask
    setTimeout(macrotaskLoop, 0); 
}
// Starts the balanced loop:
// macrotaskLoop();
```
2. **Use requestAnimationFrame for UI work** : If the repetitive process involves animations or visual updates, use *requestAnimationFrame* instead of *setTimeout(..., 0)*. This is optimized for smooth visual performance and schedules the callback before the next repaint.
```js
function animateLoop() {
    // Update elements, etc.
    console.log('Animating...');

    requestAnimationFrame(animateLoop);
}
// animateLoop();
```
---

## 36. First class functions :
- In JavaScript, a first-class function is simply a function that is treated like any other variable or value. This means functions are "first-class citizens" and can be used in all the same ways as data types like numbers, strings, or objects, without any restrictions. 
Specifically, this capability allows you to perform the following operations with functions:
- **Assign to a variable** : You can store a function as a value in a variable, object property, or array element.
```js
const sayHello = function() {
  console.log("Hello!");
};
sayHello(); // Invoke it using the variable
```
- **Pass as an argument** : A function can be passed as an argument (often called a callback function) to other functions. This ability enables the use of higher-order functions like map(), filter(), and reduce() in JavaScript.
```js
function logMessage(messageFunction) {
  console.log(messageFunction());
}
logMessage(sayHello); // Pass sayHello as an argument
```
- **Return from another function** : A function can generate and return a new function as a result. This concept is crucial for creating closures and function factories.
```js
function createGreeter(name) {
  return function() {
    console.log(`Hello, ${name}!`);
  };
}
const greetJohn = createGreeter("John");
greetJohn(); // Calls the returned function
```
---

## 37. Call, Apply and Bind Usage :
- In JavaScript, call(), apply(), and bind() are methods used to explicitly set the value of the this keyword inside a function. The key distinctions lie in how they handle function execution and argument passing.

| Method                   | Execution Timing                              | Argument Passing                                      |                                   |
|--------------------------|------------------------------------|--------------------------------------------|----------------------------------------------|
| **call()**                | Immediately invokes the function.           | Accepts arguments individually, separated by commas.                            |                              |
| **apply()**                | Immediately invokes the function.	           | Accepts arguments as a single array (or array-like object).                            |                              |
| **bind()**       | Does not execute the function immediately; it returns a new function that can be invoked later.            | Accepts arguments individually (similar to call()), which are pre-set when the new function is created.               |                 |
#### 1. call() :
- *Purpose* : Runs a function right away and lets you specify the this value as the first argument, followed by subsequent arguments one by one.
- *Use Case* : Useful for function borrowing, where one object can use a method belonging to another object.
```js
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};
const person1 = {
  firstName: "Akhil",
  lastName: "Shetty"
};
// The function is called immediately, with person1 as 'this'
console.log(person.fullName.call(person1, "Mangalore", "DK")); 
// Output: AKhil Shetty, Mangalore, DK
```

#### 2. apply() :
- *Purpose* : Nearly identical to call(), but all arguments after the this value are passed in as an array.
- *Use Case* : Excellent when you have an array of data and want to pass its elements as individual arguments to a function, such as finding the maximum value in an array using Math.max.apply(null, array). The ES6 spread operator (...) often provides a more modern alternative to this specific use case.
```js
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};
const person2 = {
  firstName: "Akhil",
  lastName: "Shetty"
};
const args = ["Mangalore", "DK"];
// The function is called immediately, with person2 as 'this' and the array as arguments
console.log(person.fullName.apply(person2, args));
// Output: Akhil Shetty, Mangalore, dK
```

#### 3. bind()
- *Purpose* : Creates a new, permanently bound function that you can execute later. The original function remains unchanged.
- *Use Case* : Primarily used for scenarios like event handlers or callbacks, where a function needs to be passed but executed later in a specific this context. Arrow functions can often serve a similar purpose in modern JavaScript.
```js
const user = {
  name: "Akhil",
  greet: function() {
    console.log(`Hello, I'm ${this.name}!`);
  }
};
// Creates a new function with 'user' as the permanent 'this' value
const boundGreet = user.greet.bind(user); 

// Call the new function later; it remembers the correct 'this'
setTimeout(boundGreet, 1000); 
// Output after 1 second: Hello, I'm Akhil!
```
---

## 38. <u>Maplimit</u> :
- Maplimit is not a built-in function but a common pattern or utility function used to manage the concurrency of asynchronous operations (like API calls) when processing an array of items.
#### - Purpose of maplimit :
- The standard *Array.prototype.map()* method is synchronous and will start processing all items in an array at once. If the mapping function performs an asynchronous task, like fetching data over a network, this can lead to issues such as :
- *Rate limiting* by the API service.
- *Network timeouts* or memory issues due to too many simultaneous connections. 
- A mapLimit function addresses this by ensuring that a maximum number of async operations run simultaneously, specified by a limit parameter.
- Usage : While you can implement mapLimit yourself (often a good coding exercise), it is commonly available in utility libraries such as async.js or modern-async.
```js
import { mapLimit } from 'modern-async'; // Or your custom implementation

// A function that returns a promise and takes some time
const asyncTask = async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    return item * 2;
};

const data = [1, 2, 3, 4, 5, 6];
const concurrencyLimit = 2; // Only 2 tasks run at a time

// Use mapLimit to process data with the concurrency limit
mapLimit(data, concurrencyLimit, asyncTask)
    .then(results => console.log(results)) // Results: [2, 4, 6, 8, 10, 12]
    .catch(err => console.error(err));
```
---

## 39. Variable Shadowing :
- Variable shadowing in JavaScript occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, causing the inner variable to hide or override the outer one within that inner scope.
#### How It Works
- When a variable with the same name is declared in a nested scope (e.g., inside a function or block), it shadows the outer variable. 
- Inside the inner scope, any reference to that variable name will access the inner variable, not the outer one. 
- The outer variable remains accessible outside the inner scope.
```js
let x = 10; // Outer variable
function example() {
  let x = 20; // Inner variable shadows the outer 'x'
  console.log(x); // Outputs: 20
}
example();
console.log(x); // Outputs: 10 (outer 'x' is unaffected)   
```
### Scope Types and Shadowing :
- var: Function-scoped. Can shadow outer variables within a function, but due to hoisting, can lead to unexpected behavior. 
- let and const: Block-scoped. Can shadow outer variables within blocks (e.g., if, for, while), and are more predictable.
```js
let x = 10;
if (true) {
  let x = 20; // Shadows outer 'x' in this block
  console.log(x); // 20
}
console.log(x); // 10 (outer 'x' is still accessible)   
```
### Illegal Shadowing :
- Illegal shadowing occurs when you try to use var to declare a variable in a block that already has a let or const variable with the same name. 
- Since var is hoisted to the global scope, this creates a SyntaxError.
```js
let a = 200;
{
  var a = 10; // SyntaxError: Cannot access 'a' before initialization
}
```
---

## 40. Static in JS Class :
- Static in JavaScript classes refers to properties or methods that belong to the class itself, not to any instance created from the class. 
- Static methods are defined using the static keyword and can be called directly on the class, not on instances. 
- Example: *MyClass.staticMethod()*
- They are often used for utility functions, such as creating or cloning objects, or performing operations that don’t require instance-specific data. 
- Static properties are also declared with static and are shared across all instances.They are useful for storing caches, fixed configurations, or class-level data that shouldn’t be duplicated per instance. 
- **Inheritance** : Static methods and properties are inherited by subclasses, and can be accessed via the subclass name or super keyword. 
- **Access** : Static members cannot be accessed via this in non-static methods. Use *ClassName.staticMethod()* or *this.constructor.staticMethod()*.
this inside a static method refers to the class constructor, not an instance. 
- Static initialization blocks (introduced in 2023) allow complex initialization logic during class evaluation, including use of try...catch, access to private fields, and execution in order with static field initializers.
```js
// Syntax :
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}

class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}
console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."
```
---

## 41. Undefined, not-defined and null :
- **Undefined** means a variable has been declared but not assigned a value.  It is the default value for declared variables that lack an initial value. *For example*:
```js
let name;
console.log(name); // undefined
// It is a primitive type in JavaScript and is automatically assigned by the language.
```
- **Not defined** refers to a variable that has never been declared using var, let, or const.  Accessing such a variable throws a *ReferenceError*:
```js
console.log(age); // ReferenceError: age is not defined 
// Even though typeof undeclaredVar returns "undefined", the variable itself is not defined in the scope.  
```
- **Null** is an explicitly assigned value meaning "no value" or "empty".  It is a primitive value used to indicate intentional absence of a value. Unlike undefined, null is assigned manually:
```js
let user = null;
console.log(user); // null
// Despite being a primitive, typeof null returns "object" — a historical quirk in JavaScript.
```
#### *Key Differences* :
- *Undefined* : Variable declared but no value assigned. 
- *Not defined* : Variable not declared at all — causes ReferenceError. 
- *Null* : Explicitly assigned to represent "no value".
#### *Equality Behavior* :
- null == undefined → true (loose equality)
- null === undefined → false (strict equality)
- null is falsy, but not equal to other falsy values like 0 or "".
---

## 42. Callback Hell (Pyramid of Doom) :
- "*Callback hell*," also known as the "*pyramid of doom*," is a term used to describe deeply nested and *hard-to-read* JavaScript code that results from using multiple dependent callbacks to handle asynchronous operations. 
#### - What is Callback Hell ?
- In JavaScript, a callback function is a function passed as an argument to another function, which is then executed when an asynchronous operation (like fetching data from a server or reading a file) is complete. 
- "Callback hell" occurs when you have a sequence of asynchronous operations where each subsequent operation depends on the result of the previous one. This forces you to nest callbacks inside other callbacks, leading to a code structure that looks like a pyramid on its side: 
```js
getUser(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      renderDashboard(user, posts, comments, () => {
        // More nesting...
      });
    });
  });
});
// This structure becomes unmanageable as the complexity grows, making the code difficult to read, debug, and maintain. 
```
#### - Problems Caused by Callback Hell :
- *Poor Readability* : The increasing indentation makes the code flow hard to follow.
- *Difficult Debugging* : Tracing errors through deeply nested functions is challenging.
- *Complicated Error Handling* : Errors often need to be handled at each level of the "pyramid," rather than in a centralized manner.
- *Maintainability Issues* : Modifying or adding new features to this structure is time-consuming and error-prone.
#### - Solutions to Callback Hell :
- Modern JavaScript provides several powerful features to avoid callback hell and manage asynchronous operations in a cleaner, more linear way: 
- **Promises** : Introduced in ES6, Promises provide a better structure for handling asynchronous operations through method chaining using *.then()* for success and *.catch()* for error handling. This flattens the code structure into a linear flow.
```js
getUser(userId)
.then(user => getPosts(user.id))
.then(posts => getComments(posts[0].id))
.then(commenmts => renderDashboard(user, posts, comments))
.catch(error => console.error("Error", error));
```
- **Async/Await** : Introduced in ES2017, async/await is "syntactic sugar" on top of Promises that allows you to write asynchronous code that looks and behaves like synchronous code. This is currently the most popular way to handle asynchronous tasks.
```js
async function renderUserDashboard(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    renderDashboard(user, posts, comments);
  } catch (error) {
    console.error("Error", error);
  }
}
```
- **Modularization and Named Functions** : Breaking code into smaller, reusable, named functions can also help to reduce nesting levels and improve organization.
---
## 43. this :
- In JavaScript, the *this keyword* refers to the *object* that is executing the *current function*. The key concept to grasp is that its value is determined dynamically at runtime based on how a function is invoked, not where it is defined (with the exception of arrow functions). 
- Here is how this behaves in different contexts:
1. **Global Context** :
- When this is used alone, outside of any function or object, it refers to the global object. 
- In a web browser, the global object is window.
- In Node.js, it is global.
- In ES modules, this is undefined at the top level.
```js
//In a browser's global scope
console.log(this === window); // true\
```
2. **Object Methods** :
- When a function is called as a method of an object (using dot notation), this refers to the object that owns the method.
```js
const person = {
  name: "Spongebob",
  sayHello: function() {
    console.log(`Hi! I am ${this.name}`); // this refers to the 'person' object
  }
};

person.sayHello(); // Output: Hi! I am Spongebob
```
3. **Regular Function Invocations** :
- When a function is called as a standalone function (not as a method of an object), this typically defaults to the global object (in non-strict mode). In strict mode ('use strict';), this is undefined.
```js
function display() {
  console.log(this);
}

// In non-strict mode (browser):
showThis(); // Output: Window (global object)

// In strict mode:
'use strict';
function showThisStrict() {
  console.log(this);
}
showThisStrict(); // Output: undefined
```
4. **Constructor Calls** :
- When a function is invoked using the new keyword, it acts as a constructor. In this case, this refers to the newly created object instance.
```js
function Car(brand) {
  this.brand = brand; // this refers to the new object being created
}

const myCar = new Car("Apple");
console.log(myCar.brand); // Output: Apple
```
5. **Explicit Binding (Call, Apply, Bind)** :
- You can explicitly set the value of this for a function using the *call(), apply(), or bind()* methods. 
- call() and apply() invoke the function immediately with the specified this value.
- bind() returns a new function with this permanently bound to a specific object, which can be executed later.
```js
const person1 = { name: "Pedro" };
const person2 = { name: "Jimena" };

function sayName(greeting) {
  console.log(greeting + this.name);
}

sayName.call(person1, "Hello, "); // Output: Hello, Pedro (this is person1)
sayName.apply(person2, ["Hi, "]); // Output: Hi, Jimena (this is person2)

const boundSayName = sayName.bind(person1);
boundSayName("Hey, "); // Output: Hey, Pedro (this is permanently person1)
```
6. **Arrow Functions** :
- Arrow functions do not have their own this binding. Instead, they inherit this from the surrounding (lexical) scope at the time they are defined, which makes them very useful for callbacks and preserving context.
```js
const obj = {
  name: "Object context",
  regularFunction: function() {
    console.log("Regular:", this.name);
    const arrowFunction = () => {
      console.log("Arrow:", this.name); // Inherits 'this' from 'regularFunction' scope
    };
    arrowFunction();
  }
};

obj.regularFunction();
// Output:
// Regular: Object context
// Arrow: Object context
```

## 44. Async vs defer :
- The async and defer attributes are used in HTML *script* tags to load external JavaScript files without blocking the browser's HTML parsing, but they differ in when the scripts are executed and their execution order.

| Feature                   | async Attribute                              | defer Attribute                              |                                   |
|--------------------------|------------------------------------|--------------------------------------------|----------------------------------------------|
| **Download**                | Asynchronously (in parallel with HTML parsing).           | Asynchronously (in parallel with HTML parsing)                            |                              |
| **Execution Timing**                | Executes as soon as it's downloaded, potentially blocking HTML parsing if it finishes before the DOM is ready.         | Executes only after the HTML has been fully parsed, but before the DOMContentLoaded event fires.                          |                              |
| **Execution Order**       | Not guaranteed to execute in the order they appear in the HTML. Execution is "load-first".            | Guaranteed to execute in the order they appear in the HTML document.               |
| **DOM Access**       | May run before the DOM is ready, potentially causing errors if it tries to access page elements.            | Always runs after the DOM is ready, making it safe for DOM manipulation.               |
| **Best Use Case**       | Independent scripts with no dependencies (e.g., analytics, ads).            | Scripts that depend on the DOM or other scripts (e.g., initialization code, UI libraries).               |                 |
#### When to Use Which :
- Use async for scripts that are self-contained and don't rely on the order of other scripts or the full availability of the DOM. Examples include third-party tracking or ad scripts.
- Use defer for most of your own application's JavaScript. It ensures that all necessary HTML is parsed and that scripts run in the correct order, without blocking the initial rendering of the page content.
---

## 45. Execution Context :
- An *Execution Context (EC)* is the abstract environment created by the JavaScript engine where code is evaluated and executed. Everything in JavaScript happens inside an execution context, and it is a fundamental concept for understanding how the language manages variables, functions, and the this keyword. 
- The JavaScript engine uses a call stack to manage all the execution contexts in a **Last-In-First-Out (LIFO)** order. 
##### Types of Execution Contexts : There are primarily two types of execution contexts:
#### 1. Global Execution Context (GEC) : 
- This is the default context created when the JavaScript engine first loads a script file. It represents the global scope, and any code not inside a function is executed here. There is only one GEC for an entire program.
- In a web browser, the global object is the window object.
- In Node.js, the global object is global.
#### 2. Function Execution Context (FEC): 
- A new FEC is created every time a function is called or invoked. Each function gets its own unique context, which includes its local variables, arguments, and scope. When the function finishes executing, its context is removed (popped off) from the call stack, and control returns to the previous context. 
- A third type, the Eval Function Execution Context, is created when code is executed inside the eval() function, but it's rarely used and generally not recommended in modern JavaScript. 
#### Phases of Execution Context Creation :
- Each execution context (GEC or FEC) is created and processed in two distinct phases: 
1. **Creation Phase (Memory Allocation Phase)** : The JavaScript engine scans the code and allocates memory for variables and functions before the code is actually executed.
- *var* declarations are stored in memory and initialized with the value undefined.
- *let* and *const* declarations are also allocated memory but remain uninitialized (entering the Temporal Dead Zone).
- Function declarations are stored in memory with their full function body.
- The this value and the scope chain (a reference to the outer environment's variables) are also determined during this phase.
2. **Execution Phase (Code Execution Phase)** : In this phase, the engine executes the code line by line.
- Variables are assigned their actual values, overwriting the initial undefined placeholders.
- Functions are executed when called, which in turn creates new Function Execution Contexts and pushes them onto the call stack. 
#### The Call Stack :
- The Call Stack (or Execution Stack) is a data structure used to manage the order of execution contexts. 
- The GEC is pushed onto the bottom of the stack when the program starts.
- Each time a function is called, a new FEC is created and pushed onto the top of the stack.
- The context on top of the stack is always the one currently being executed.
- When a function finishes, its FEC is popped off the stack, and control returns to the context below it.

#### Each context is created in two phases:
1. **Memory Creation Phase (Creation Phase / Hoisting Phase)** :
JS sets up:
this binding
Creation of variable environment
Setup of scope chain
- Hoisting happens here:
- Function declarations are fully hoisted.
- var variables are hoisted with default value undefined.
- let and const are hoisted but not initialized → temporal dead zone (TDZ).
```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;
```
2. **Execution Phase** :
- Code runs line by line.
- Variables assigned actual values.
- Functions executed, new contexts created.
- Each function call → new Function Execution Context.
---

## 46. CallStack :
- The call stack in JavaScript is a data structure used by the JavaScript engine to manage and track function calls during program execution. It operates on the Last-In, First-Out (LIFO) principle, much like a stack of plates. 
#### How the Call Stack Works :
- **Single-threaded** : JavaScript has a single call stack, meaning it can only execute one function at a time.
- Push: When a function is invoked (called), the JavaScript engine creates a new execution context for that function and pushes it onto the top of the call stack.
- **Execution** : The engine executes the function currently at the top of the stack.
- **Nested Calls** : If the function at the top calls another function, the new, nested function is immediately pushed onto the top of the stack and executed first.
- **Pop** : When a function finishes its execution (either by returning a value or reaching the end of its code block), its execution context is popped (removed) from the top of the stack, and control returns to the function below it.
- **Empty** : This process continues until the entire program finishes and the call stack is empty. 
##### Example : Consider the following JavaScript code :
```js
function first() {
  console.log('Hello from firstFunction');
}

function second() {
  first();
  console.log('The end from secondFunction');
}
second();
```
- Here is how the call stack manages this :
1. The second() function is called, and its execution context is pushed onto the stack.
2. Inside second(), first() is called. first()'s execution context is pushed onto the stack (now on top of second()).
3. first() executes its console.log statement and returns, so it is popped off the stack.
4. Control returns to second(), which executes its console.log statement and returns.
5. second() is popped off the stack, and the program finishes. 
##### Stack Overflow Error :
- A "stack overflow" error occurs when the call stack runs out of memory due to too many function calls pushed onto it without being popped off. This is commonly caused by infinite or excessively deep recursion (a function repeatedly calling itself without a base case or exit point).
---

## 47. Garbage Collection :
- JavaScript uses automatic garbage collection to manage memory, freeing developers from *manual allocation and deallocation* like in languages such as C. The process automatically identifies and reclaims memory occupied by objects that are no longer "reachable" or in use by the program. 
#### How Garbage Collection Works :
- Modern JavaScript engines, such as V8 (used in Chrome and Node.js), primarily use the **mark-and-sweep** algorithm and its optimizations to manage memory. 
1. **Mark Phase** : The garbage collector starts from "roots"—global variables, currently executing functions, and other system references—and recursively traverses all objects reachable from these roots. It marks all reachable objects as "alive" or in use.
2. **Sweep Phase** : The collector then scans the entire memory (heap) and reclaims the memory used by any objects that were not marked as reachable. 
- A key advantage of mark-and-sweep is that it can correctly handle circular references (where two objects reference each other), unlike the older, less common reference-counting algorithm, which would fail to collect them, causing memory leaks. 

#### Optimizations (Generational GC) :
- To improve performance, modern engines implement optimizations, such as generational garbage collection. 
1. **Young Generation** : Most objects in JavaScript are short-lived. New objects are allocated here and are checked frequently by a fast process called *scavenge*.
2. **Old Generation** : Objects that survive multiple collections in the young generation are moved to the old generation, where they are scanned less often by a more thorough mark-and-sweep process. 
#### Best Practices to Avoid Memory Leaks :
- While automatic, certain coding practices can inadvertently prevent the garbage collector from reclaiming memory, leading to memory leaks. 
1. **Avoid Accidental Globals** : Variables assigned without let, const, or var in non-strict mode become global, staying in memory for the entire application lifecycle.
2. **Clean up Event Listeners** : Always remove event listeners using removeEventListener() when they are no longer needed, especially if the associated DOM element might be removed.
3. **Manage Timers** : Clear intervals and timeouts using clearInterval() and clearTimeout() when they are finished.
4. **Use WeakMap and WeakSet for Caching** : These data structures hold weak references to objects, allowing the garbage collector to remove the associated objects and their data if nothing else is strongly referencing them.
5. **Dereference Large Objects** : Setting a variable that holds a reference to a large object to null can explicitly signal that the object is no longer needed, making it eligible for the next GC run.
---

## 48. Equality (===) :
- The **===** in JavaScript is the **strict equality operator**. It compares two values for equality, considering both the value and the type without performing any type conversion (type coercion). 
#### How Strict Equality (===) Works :
- The === operator returns true only if the operands are of the same type and have the same value. Otherwise, it returns false. 
Examples:
- 5 === 5 returns true (same value and same type: Number).
- '5' === 5 returns false (same value, but different types: String vs. Number).
- true === 1 returns false (different types: Boolean vs. Number).
- null === undefined returns false (different types).
- {} === {} returns false because objects are compared by reference, and these are two distinct objects in memory.
- NaN === NaN returns false (a special case where NaN is not strictly equal to anything, including itself). 
#### Comparison with Loose Equality (==) :
- JavaScript also has the loose equality operator (==). The key difference is that == performs type coercion, meaning it attempts to convert the values to a common type before comparison. 
- == (Loose Equality) 	=== (Strict Equality)
- Performs type coercion (automatic type conversion).	No type coercion.
- '5' == 5 returns true	'5' === 5 returns false
- 0 == false returns true	0 === false returns false
- null == undefined returns true	null === undefined returns false
---

## 49. Strict Mode :
- JavaScript's **strict mode** is an opt-in feature that enforces a more restricted and robust set of rules for writing code. Introduced in ECMAScript 5 (ES5), it helps developers avoid common mistakes, makes code safer, and improves performance by changing some silent errors into explicit errors and prohibiting certain error-prone syntax. 
#### How to Enable Strict Mode :
- You can apply strict mode to an entire script or an individual function. 
1. **For an entire script** : Add the exact statement "use strict"; (or 'use strict';) as the very first statement in your file, before any other statements or comments.
2. **For a function** : Place "use strict"; as the first statement within the function's body. 
##### Note that JavaScript modules and class bodies are automatically in strict mode by default, so the directive isn't necessary in those contexts. 
- Key Changes and Benefits - Strict mode modifies both syntax and runtime behavior, primarily to catch errors that would otherwise fail silently or lead to unpredictable behavior.

| Feature                   | Sloppy Mode Behavior (Default)                              | Strict Mode Behavior                              |                                   |
|--------------------------|------------------------------------|--------------------------------------------|----------------------------------------------|
| **Undeclared Variables**                | Accidentally creates a global variable (e.g., x = 10;).           | Throws a ReferenceError.                            |                              |
| **this in Functions**                | this defaults to the global object (window in browsers).         | this is undefined when a function is called without an explicit context, preventing accidental global object modification.                          |                              |
| **Silent Failures**       | Silently ignores attempts to assign to read-only properties, get-only properties, or non-extensible objects.            | Throws a TypeError in such cases, making bugs easier to find.               |
| **Duplicate Parameters**       | Allows functions with duplicate parameter names, ignoring all but the last one.            | Throws a SyntaxError.               |
| **with statement**       | The with statement is allowed.           | The with statement is a SyntaxError due to its unpredictable performance and behavior.               |
| **eval()**       | Variables declared inside eval() affect the surrounding scope.          | Variables declared inside eval() are scoped only to the eval() environment.               |
| **Octal Literals**       | Allows legacy octal syntax (e.g., 010).          | Throws a SyntaxError for legacy octal syntax, which is often confusing for developers.               |                 |
---

## 50. Race Condition :
- A *race condition* in JavaScript is a programming error that occurs when the outcome of the code depends on the unpredictable timing or sequence of asynchronous *operations accessing and modifying shared data*.
- Though JavaScript is single-threaded, its event-driven, non-blocking nature makes it susceptible to these issues in the context of concurrency. 
#### How Race Conditions Occur in JavaScript :
- In traditional *multi-threaded languages*, race conditions happen when multiple threads access the same resource simultaneously. In JavaScript, since only one piece of code runs at a time on the main thread (managed by the event loop), it is an **issue of concurrency, not parallelism**. 
- The problem arises when an asynchronous operation (like a fetch() request, setTimeout, or user event) initiates a task, and then another operation modifies shared data before the first task's callback has had a chance to run and complete its work with the original data. 
A classic example is incrementing a shared counter:
```js
let count = 0;

async function incrementCounter() {
  const currentValue = count; // Read the current value
  await delay(100); // An async operation where other tasks can run
  count = currentValue + 1; // Write the new value based on the old one
}

// If we run this 'concurrently':
await Promise.all([incrementCounter(), incrementCounter(), incrementCounter()]);
console.log(count); // Might output 1, instead of the expected 3
```
- In the example above, multiple incrementCounter calls might all read count as 0 before any of them has a chance to write back the incremented value. They "race" to update the final value, and the last one to finish wins, leading to an incorrect result.
#### Common Scenarios :
- Race conditions are common in real-world scenarios such as: 
- **Autocomplete Search** : When a user types quickly, multiple network requests are fired. An earlier, slower request's response might arrive and overwrite the results of a later, faster request, showing outdated suggestions.
- **State Updates in UI Frameworks (e.g., React)** : Multiple asynchronous state updates can interfere with each other, leading to an inconsistent or flickering UI.
- **Lazy Loading Resources** : Multiple components might check if a shared resource is loaded and, finding it isn't, all try to fetch it, leading to redundant requests or corrupted state.

#### Strategies to Prevent Race Conditions :
- Several techniques can be used to manage and prevent race conditions:
1. **Cancel Outdated Requests** : Use the AbortController API to cancel any pending network requests when a new one is initiated. This is highly effective for scenarios like autocomplete search.
2. **Use Flags (isMounted)** : In frameworks where components can unmount before a request completes, use a flag to ensure state updates only occur if the component is still active.
3. **Debouncing and Throttling** : For user input events (like typing or scrolling), these techniques limit how often a function can be executed, reducing the number of concurrent operations.
4. **Mutexes (Mutual Exclusions)** : For critical sections of code that access shared resources, you can implement an async mutex to ensure only one operation can proceed at a time.
5. **State Management Libraries** : Libraries like React Query or SWR provide built-in solutions for data fetching and caching, often handling race conditions automatically.
6. **Atomic Operations/Transactions** : For shared data stores (like databases), use transactional operations to ensure data is updated consistently as a single, indivisible unit. 
---

## 51. Lexical env :
- A Lexical Environment is a core JavaScript mechanism (a theoretical concept used in the language specification) that defines the scope and accessibility of variables and functions based on their physical location in the source code.
- It is created automatically whenever a function, block {} (for let and const declarations), or the script as a whole starts executing. 
#### Key Components :
- Every lexical environment consists of two parts: 
1. **Environment Record** : An internal storage area (like an object) that stores all local variable, function, and parameter declarations within that specific scope. It maps the identifier (variable name) to its actual value.
2. **Outer Environment Reference** : A link or pointer to the parent (outer) lexical environment, which is where the current code is physically written. The global environment has an outer reference of null. 
#### How it Works (Scope Chain) :
- The "*lexical*" nature means that the scope is determined by where you write the code, not where the functions are called. 
- When JavaScript attempts to access a variable, it first looks in the current environment's Environment Record.
- If the variable is not found locally, it follows the Outer Environment Reference to the parent environment and searches there.
- This process continues, moving up the chain of nested lexical environments (known as the scope chain), until the variable is found in the global scope or a ReferenceError is thrown. 
#### Relation to Closures :
- Lexical environments are fundamental to how closures work in JavaScript.
- All functions in JavaScript remember the lexical environment in which they were created via an internal [[Environment]] property. This allows inner functions to access variables from their outer (parent) scopes even after the outer function has finished executing and its execution context is gone from the call stack.
---

## 52. Map, Reduce, Filter, Each and Find :
- In JavaScript, **map(), filter(), reduce(), forEach(), and find()** are powerful built-in array methods used for iterating and manipulating data in a declarative way. 
- Here is a breakdown of each method:
1. **map()** : Creates a new array by applying a function to every element in the original array. The new array will always have the same length as the original.
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); 
// doubled: [2, 4, 6, 8]
```
2. **filter()** : Creates a new array containing only elements that satisfy a specific condition (a function that returns true or false). If no elements meet the condition, it returns an empty array.
```js
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers: [2, 4]
```
3. **reduce()** : Executes a "reducer" callback function on each element of the array, resulting in a *single output value* (which can be a number, string, object, etc.). The result of each callback iteration is passed as an accumulator to the next iteration.
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
// sum: 10 (0 + 1 + 2 + 3 + 4)
```
4. **forEach()** : Executes a provided function once for each array element. Unlike map(), filter(), or reduce(), it does not return a value (it returns undefined) and is primarily used for performing side effects, such as modifying an external variable or logging to the console.
```js
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(fruit => console.log(`I like ${fruit}`));
// Logs "I like apple", "I like orange", "I like cherry" to the console.
```
5. **find()** : Returns the value of the *first element in the array* that satisfies the provided testing function. Otherwise, it returns undefined. It stops iterating as soon as it finds a match, unlike filter(), which checks all elements.
```js
const array = [1, 5, 3, 4, 5];
const found = array.find(element => element > 4); 
// found: 5 (returns the first element that satisfies the condition)
```
---

## 53. Event Emitter :
- In JavaScript, an Event Emitter is a mechanism that allows you to use the publisher/subscriber pattern, where objects can emit named events that trigger registered callback functions (listeners). This pattern is fundamental to asynchronous, event-driven programming, especially in Node.js. 
#### Core Concepts :
The Event Emitter pattern operates through two primary actions: 
- **Emitting events** : An object announces that something has happened by "emitting" a named event using the emit() method.
- **Listening to events** : Other parts of the application can "subscribe" or "listen" for specific named events using the on() (or addListener()) method and run a predefined function (callback) when the event occurs. 
#### Usage in Node.js :
- Node.js has a built-in events module that provides the EventEmitter class, which is a core component of its architecture. 
- How to Create and Use an EventEmitter
- You can create an instance of the EventEmitter class or create a class that extends it to inherit its functionality. 
```js
const EventEmitter = require('events');

// Create a new EventEmitter instance
const myEmitter = new EventEmitter();

// 1. Register an event listener using 'on'
myEmitter.on('ticketBuy', (email, price) => {
    console.log(`Sending email to ${email} for ticket priced at $${price}`);
});

// 2. Emit the event using 'emit'
myEmitter.emit('ticketBuy', 'test@example.com', 20);
// Output: Sending email to test@example.com for ticket priced at $20
```
#### Key Methods and Features :
The EventEmitter class provides several methods for managing events and listeners: 
- on(event, listener): Adds a listener function to the end of the listeners array for a named event. addListener() is an alias.
- once(event, listener): Adds a one-time listener for an event. This listener is removed after it is triggered the first time.
- emit(event, [...args]): Synchronously calls all listeners registered for the named event, in the order they were registered, passing any supplied arguments.
- removeListener(event, listener): Removes a specific listener from the event's listener array. off() is an alias.
- removeAllListeners([event]): Removes all listeners for a specific event name, or all events if no name is specified.
- listenerCount(event): Returns the number of listeners subscribed to a specific event. 

#### Error Handling :
- It is considered best practice to always have a listener for the special error event. If an error event is emitted and no listener is registered, Node.js will throw the error and crash the program. 
```js
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
});

myEmitter.emit('error', new Error('Something went wrong!'));
// Output: An error occurred: Something went wrong!
```
#### Event Emitters in the Browser :
- While the built-in EventEmitter class is a Node.js core module, the DOM in web browsers uses a similar, but separate, mechanism with addEventListener() for handling user interactions like clicks and key presses. The fundamental concept of event-driven architecture is consistent across both environments. You can also implement your own custom Event Emitter class in plain JavaScript for use in browser applications.
---

## 54. setInterval Polyfill :
- A setInterval polyfill can be created using a recursive *setTimeout* implementation to mimic repeated execution at a specified delay. The core idea is to schedule the next execution of the callback function only after the current one has finished.
- *setInterval Polyfill Implementation* :
This implementation uses closures to manage unique interval IDs and to clear the intervals when needed.
```js
function createSetInterval() {
  let timerId = 0;
  // A map to store active interval IDs and their corresponding timeout IDs
  const timersMap = {}; 

  function mySetInterval(callback, delay, ...args) {
    timerId++; // Increment ID for each new interval
    const currentId = timerId;

    function repeat() {
      // Use setTimeout to schedule the next run
      timersMap[currentId] = setTimeout(() => {
        if (timersMap[currentId]) { // Check if the interval is still active
          callback.apply(this, args); // Execute the callback with the provided arguments
          repeat(); // Schedule the next execution
        }
      }, delay);
    }

    repeat(); // Initial call
    return currentId; // Return the unique ID to the user for clearing
  }

  function myClearInterval(id) {
    clearTimeout(timersMap[id]); // Clear the scheduled timeout
    delete timersMap[id]; // Remove the ID from the map
  }

  // Expose the custom functions
  return { mySetInterval, myClearInterval };
}

// Example usage:
const { mySetInterval, myClearInterval } = createSetInterval();

let count = 0;
const intervalId = mySetInterval(() => {
  console.log("Hello every 1 second! Count:", count++);
  if (count === 5) {
    myClearInterval(intervalId); // Stop the interval after 5 runs
    console.log("Interval cleared");
  }
}, 1000);
```
#### Key Differences from Native setInterval :
Using recursive setTimeout offers more control over the timing compared to the native setInterval: 
- **Flexible Delay** : In a recursive setTimeout approach, the next iteration is scheduled after the previous callback has completed execution. This prevents issues where long-running or asynchronous tasks might cause subsequent intervals to stack up or run faster than intended, which can happen with the native setInterval.
- **Guaranteed Interval** : The delay between the end of one execution and the start of the next one is always at least the specified delay time. In contrast, setInterval schedules the function to run every delay milliseconds from the start of the previous call, regardless of how long it took to execute. 
- For most scenarios, especially those involving asynchronous operations, the nested setTimeout approach is the recommended alternative.
---

## 55. Parallel limit function :
- In JavaScript, the concept of a "parallel limit function" typically refers to **limiting the number of concurrently executing asynchronous tasks (concurrency limit)**, as *true multi-threading parallelism* is only possible using *Web Workers in browsers or child processes/worker threads* in Node.js. 
For managing concurrent asynchronous operations, the most common approach involves using third-party libraries or implementing a custom solution using Promises. 
#### Third-Party Libraries :
Several robust libraries offer a parallelLimit or similar function to manage concurrency easily: 
- *async library* : This widely-used library provides a parallelLimit function, which takes an array of functions, a limit, and an optional callback.
- *p-limit* : A popular, lightweight package for limiting the number of concurrent promises running at a time. It offers a clean, promise-based API.
- *parallel-limiter* : Another package that provides a ParallelLimiter class for scheduling and awaiting tasks with a defined concurrency limit. 
#### Custom Implementation using Promises :
- If you prefer a vanilla JavaScript solution without external dependencies, you can implement a promise pool or queue manager. The core idea is to maintain a queue and process the next task as soon as a current one completes, ensuring the number of simultaneous active tasks never exceeds the specified limit. 
- Here is a basic implementation strategy for a parallelLimit function that handles an array of async tasks (functions that return promises):
```js 
/**
 * Runs an array of asynchronous tasks in parallel with a limited concurrency.
 * @param {Array<Function>} tasks - An array of functions that return Promises.
 * @param {number} limit - The maximum number of tasks to run concurrently.
 * @returns {Promise<Array<any>>} A Promise that resolves with an array of all results.
 */
function parallelLimit(tasks, limit) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedTasks = 0;
        let runningTasks = 0;
        let index = 0;

        function runNextTask() {
            if (index < tasks.length && runningTasks < limit) {
                runningTasks++;
                const currentTaskIndex = index;
                const task = tasks[index++];
                
                task()
                    .then(result => {
                        results[currentTaskIndex] = result;
                        runningTasks--;
                        completedTasks++;

                        if (completedTasks === tasks.length) {
                            resolve(results);
                        } else {
                            runNextTask();
                        }
                    })
                    .catch(error => {
                        // Immediately reject if any single task fails
                        reject(error);
                    });
                
                // Recursively call to fill up the concurrency limit
                runNextTask(); 
            }
        }

        // Start initial tasks up to the limit
        for (let i = 0; i < Math.min(limit, tasks.length); i++) {
            runNextTask();
        }
    });
}

// Example Usage:
const asyncTask = (id, duration) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Task ${id} completed in ${duration}ms`);
            resolve(`Result of ${id}`);
        }, duration);
    });
};

const tasksList = [
    () => asyncTask('A', 2000),
    () => asyncTask('B', 4000),
    () => asyncTask('C', 1000),
    () => asyncTask('D', 3000),
    () => asyncTask('E', 500)
];

parallelLimit(tasksList, 2)
    .then(results => console.log('All tasks finished:', results))
    .catch(error => console.error('An error occurred:', error));

// This implementation starts the allowed number of tasks immediately and queues the rest, running the next available task as soon as one slot opens up. 
```
---

## 56. Deep vs Shallow Copy :
- The main difference between a shallow copy and a deep copy in JavaScript is how they handle nested objects or arrays: a **shallow copy shares references** to nested data with the original, while a **deep copy creates a completely independent clone**, recursively duplicating all levels.
#### 1. Shallow Copy :
- A shallow copy creates a new object or array but only copies the top-level properties. Any nested objects or arrays still refer to the same memory location as the original. 
#### **Behavior** : Changes made to a nested structure in the copied version will also affect the original object.
#### **Use Cases** : Working with "flat" data structures that contain only primitive values (strings, numbers, booleans, etc.).
- When performance is critical, as it is a faster operation than deep copying.
#### Common Methods :
- Spread syntax (...)
- Object.assign()
- Array.prototype.slice()
- Array.prototype.concat()

#### 2. Deep Copy :
- A deep copy creates an entirely new object or array, recursively copying all nested structures. This results in a fully independent clone where no references are shared with the original. 
#### **Behavior** : Modifications to the deep copy do not affect the original object or array.
#### **Use Cases** : Working with complex, deeply nested data where immutability is required (e.g., in state management like Redux or React apps).
- When you need to ensure that the original data remains unchanged, regardless of operations on the copy.
#### **Common Methods** :
- **structuredClone()** : The modern, built-in standard for a true deep copy that handles various data types and circular references (though it won't work on functions).
- **JSON.parse(JSON.stringify())** : A common, simple "*hack*" that works for objects with serializable values, but fails on functions, undefined, Date objects, and circular references.
- Libraries like Lodash provide robust functions such as _.cloneDeep() for complex scenarios, including handling functions and circular references.
---

## 57. Flatten Deeply Nested Copy :
- To flatten deeply nested data structures in JavaScript while ensuring a new copy is created (avoiding modification of the original), you can use built-in methods for arrays and a custom recursive function for objects. 
#### For Arrays :
- The most modern and efficient solution for arrays is the [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) method, using Infinity as the depth argument to flatten all levels.
```js
const nestedArray = [1, [2, 3], [4, [5, 6, [7, 8]]]];
// Using flat(Infinity) to create a new, deeply flattened array
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(nestedArray); 
// Output (original array remains unchanged): [1, [2, 3], [4, [5, 6, [7, 8]]]]
```
#### For Objects :
- For deeply nested objects, a custom recursive function is typically required. The function below ensures a deep copy by utilizing the spread syntax within the recursion or Object.assign, effectively creating new objects at each level.
```js
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  },
  h: 5
};

function flattenObjectDeepCopy(obj, parentKey = '', result = {}) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      // Check if the value is an object and not null (typeof null === 'object')
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively call the function to flatten the nested object
        // The spread syntax here ensures a deep copy of the result object at each step
        flattenObjectDeepCopy(value, newKey, result);
      } else {
        // Assign the value to the result object
        result[newKey] = value;
      }
    }
  }
  // Return a new object that is a shallow copy of the 'result'
  // This helps ensure the caller receives a new object, not just a reference to the internal accumulator
  return { ...result };
}

const flatObject = flattenObjectDeepCopy(nestedObject);

console.log(flatObject);
/* 
Output:
{
  'a': 1,
  'b.c': 2,
  'b.d.e': 3,
  'b.d.f.g': 4,
  'h': 5
}
*/

console.log(nestedObject);
// Output (original object remains unchanged): { a: 1, b: { c: 2, d: { e: 3, f: [Object] } }, h: 5 }
```
- Using [lodash.flattendeep](https://lodash.com) or [lodash.flatmapdeep](https://lodash.com)
For those using the Lodash library, methods like _.flattenDeep() for arrays or custom recursive functions with _.flatMapDeep() provide concise alternatives. Lodash handles the copying internally, returning a new flattened data structure.
---