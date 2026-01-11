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

## 37. Call, Apply and Bind, Usage :
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
- ghbnjm
---

## 41. Undefined, not-defined and null :
- cvghb