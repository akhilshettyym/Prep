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
## 13. IIFE(Immediately Invoked Function Expression) : Iffy
- function that is defined and executed immediately after its creation.
- This pattern is primarily used to create a private scope for variables, preventing them from polluting the global scope and avoiding naming conflicts.
```js
(function () {

})();
```
---
## 14. Currying :

---

Lexical scoping
Functions