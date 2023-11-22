//! https://javascript.info/while-for

/*
loops:
(1) while
(2) do ... while
(3) for (begin; condition; step) body
(4) inline variable declaration
(5) skipping parts (omit begin)
(6) break / continue
(7) labels for break / continue

Example:
for (let i = 0; i < 10; i++) {
    if (i === 0) continue;

    if (!(i % 2)) {
        alert(i);
    }
}

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '');
        if (!input) break outer;
    }
}
alert('Done!');
*/


//! https://javascript.info/switch

/*
switch:
(1) 'switch' can be replaced with multiple 'if' checks
(2) syntax:
    switch(check) {
        case 'value1': // if (check === 'value1')
            ...
            [break]
        default:
            ...
            [break]
    }
(3) should be break to avoid sequential execution
(4) grouping of 'case' if need to run same code for these cases
(5) need to emphasize that equality check is always strict -->
    --> values must be the type to match
(6)

Example w/o breaks:
let a = 2 + 2;
switch (a) {
    case 4:
        alert('4');
    case 5:
        alert('5');
    default:
        alert('DEFAULT');
}
*/


//! https://javascript.info/comparison

/*
(1) comparison operators are from maths: >, <, >=, <=
(2) equality comparison operators: ==, != and 'strict' ===, !==
(3) comparison operators return boolean value
(4) comparison result can be assigned to a variable
(5) when comparing values of diff types JS converts values to numbers
(6) '1' becomes 1; '0' becomes 0
(7) strict equality operator checks the equality without type conversion
(8) null === undefined // false; null == undefined // true
(9) null == 0 // false, but: null >= 0 // true
(10) for math comparisons null becomes 0, undefined becomes NaN
(11) comparison with NaN always returns false
(12) strings are compared letter-by-letter in the 'dictionary' order
(13) don't use math comparisons with variables which may become null/undefined
(14) checking for null/undefined separately is a good idea

Example:
let a = 0;
alert( Boolean(a) ); // false

let b = '0';
alert( Boolean(b) ); // true

alert(a == b); // true
*/


//! https://javascript.info/logical-operators

/*
(1) logical operators in JS: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)
(2) || (Or) finds the first truthy value
(3) || (OR) gets the first truthy value from a list of operands
(4) if result is true || (OR) stops and returns the original value of operand
(5) short-circuit evaluation: false || false || false || alert('will be printed')
(6) && (AND) returns true if both operands are truthy and false otherwise
(7) && (AND) finds the first falsy value
(8) precedence of && (AND) is higher than || (OR)
(9) sometimes && (AND) is used as a shorter way to write 'if'
(10) ! (NOT) returns the inverse value;
(11) double NOT !! is used for converting a value to boolean type
(12) ?? (Nullish Coalescing) returns the first argument if it's not null/undefined
(13) if first argument is null/undefined operator returns second argument
(14) let user; alert(user ?? 'Anonymous user') // Anonymous user (user var is undefined)
(15) can use a sequence of ??: alert(firstName ?? lastName ?? 'Anonymous')
(16) difference: || returns the first TRUTHY, ?? returns the first DEFINED value
(17) ?? lets us use default value when it is really unknown/not set

Example:
a && b || c && d // is essentially the same as: (a && b) || (c && d)

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
*/


//! https://javascript.info/alert-prompt-confirm

/*
(1) functions to interact with the user
(2) 'alert' shows a message and waits for the user to press 'OK'
(3) mini-window with the message is called a modal window
(4) 'modal' means that the visitor cannot interact with the rest of the page
(5) function 'prompt' takes two args: title, default (optional initial value)
(6) the square brakes in syntax [ ... ] denote that parameter is optional
(7) 'confirm' shows a modal window with a question and two buttons: ok and cancel
(8) the result is true if press ok and false otherwise
(9) methods are modal: they pause script execution
(10) limitations: default by browser screen positioning, can't modify it

Example:
let result = prompt(title, [default]);

let isBoss = confirm('Are you the boss?');
alert( isBoss ); // true if ok is pressed
*/


//! https://javascript.info/strict-mode

/*
(1) For a long time, JS evolved w/o compatibility issues
(2) New features were added, but old functionality didn't change
(3) Benefit was in never braking code, but mistakes were stuck forever
(4) ES5 appeared in 2009 and modified existing features
(5) To avoid compatibility problems modifications are off by default
(6) 'use strict' placed at the top of file lets work it in modern way
(7) 'classes' and 'modules' enables 'use strict' automatically

Example:
function() {
    'use strict'
    ...
}
*/


//! https://javascript.info/function-basics

/*
(1) used to perform a similar action in many places of the script
(2) functions are the main 'building blocks' of the program
(3) allow the code to be called many times without repetition
(4) function declaration: function name(parameter1, parameter2, ...) { // body }
(5) variable declared inside a function is only visible inside that function
(6) the function has full access to the outer variable and can modify it
(7) if a same-named var is declared inside the func then it SHADOWS the outer one
(8) var declared outside a function are called global
(9) good practice to minimize usage of global variables
(10) modern code has few or NO global variables
(11) when value is passed as a function parameter, it's also called an argument
(12) we declare functions listing their parameters, then call them passing args
(13) function may change args, but it is not seen outside
(14) function always gets a copy of the value
(15) if function called but arg is not provided, then it becomes undefined
(16) can specify default value for a parameter in the function declaration, using =
(17) default value jumps in if the parameter exists, but strictly equals undefined
(18) a function can return a value back into the calling code as the result
(19) when the execution reaches return directive the function stops
(20) function with empty return or w/o it returns undefined
(21) conventional naming: 'get' return value, 'check' check and return boolean

Example:
function showMessage(from, text) {
    text = text || 'no text given';
    ...
}

function sum(a, b) {
    return a + b;
}
*/


//! https://javascript.info/arrow-functions-basics

/*
(1) concise syntax: let func = (arg1, arg2, ...) => expression
(2) () => expression; is the same as () => { return ... }
(3) if we have one arg, then parentheses can be omitted
(4) if there are no arguments, parentheses are empty, but they must be present

Example:
let func = (...args) => {
    body
}

*/


//! https://javascript.info/arrow-functions

/*
(1) arrow functions have no 'this'
(2) can use it to iterate inside an object method
(3) .bind(this) creates a 'bound version' of the function
(4) arrow functions have no 'arguments' variable
(5) can't be called with 'new'
(6) arrow functions also don't nave 'super' (see https://javascript.info/class-inheritance)

Example:
let group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],

    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
}

*/


//! https://javascript.info/function-expressions

/*
(1) syntax: let sayHu = function() { alert('Hello'); }
(2) in JS a function is a value, so we can work with it like with value
(3) we can copy a function to another variable
(4) function expressions have a semicolon at the end
(5) function declarations do not have a semicolon at the end
(6) expressions often use as callback functions
(7) function declaration declared as a separate statement in the code
(8) function expression created inside an expression or other syntax construct
(9) function expression is created when the execution reaches it
(10) function expression is usable only from the moment of execution reaches it
(11) function declaration can be called earlier than it is defined
(12) function declaration is visible in the whole script, no matter where it is
(13) due to internal algorithms: when JS prepares to run the script -->
--> it first looks for global function declarations and creates the functions -->
--> it called 'initialization stage'
(14) function expressions are created when the execution reaches them
(15) function declaration has block scope, don't work outside it
(16) function declaration does not suit for conditional declaration

Example:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    'Do you agree?',
    function() { alert('You agreed.'); },
    function() { alert('You canceled the execution.'); }
);

sayHi('John') // Hello, John

function sayHi(name) {
    alert(`Hello, ${name}`);
}
*/


//! https://javascript.info/object-methods

/*
(1) function that is a property of an object is called its method
(2) when we write code using objects to represent entities, that's called OOP
(3) keyword this behaves unlike most other programming languages
(4) it can be used in any function, even if it's not a method of an object
(5) there is no syntax error: function sayHi() { alert(this.name); }
(6) calling without an object: this === undefined in strict mode
(7) in non-strict mode this will be the global object (window)
(8) arrow functions don't have their own this
(9) if we reference this from such a function, it's taken from outer function
(10) the value of this is defined at run-time
(11) function is called in the 'method' syntax --> the value of this is object

Example:
let user = {
    firstName: 'Ilya',
    sayHi() {
        let say = () => {
            alert(this.firstName);
        }
        say()
    }
};

user.sayHi();
*/


//! https://javascript.info/bind

/*
(1) passing object methods as callbacks, there's a problem of 'losing' this
(2) method setTimeout sets this = window and this becomes undefined
(3) solution #1 is to use a wrapper function: setTimeout(() => user.sayHi(), 1000)
(4) it works, cus it receives 'user' from outer lexical environment
(5) solution #2: functions provide a built-in method bind that allows to fix this
(6) basic bind syntax: let boundFunc = func.bind(context);
(7) calling boundFunc is like func with fixed this
(8) we can bind not only this, but also arguments --> rarely done, but can be handy
(9) binding arguments is called partial function application

Example:
let user = { firstName: 'John' };

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

function mul(a, b) { return a * b; }

let double = mul.bind(null, 2);

double(3); // = mul(2, 3) = 6
*/


//! https://javascript.info/call-apply-decorators

/*
(1) for instance, function 'slow(x)' is CPU-heavy, but for 'x' always returns the same result
(2) if the function is called often, we may want to cache the results to avoid time spending
(3) transparent caching: we can create a wrapper function to add caching to 'slow' function
(4) caching decorator mentioned above is not suited to work with object methods
(5) built-in method func.call(context, ...args) that allows to call a function explicitly setting this
(6) func(1, 2, 3) = func.call(obj, 1, 2, 3) --> same calls but func.call sets this to obj
(7) func.apply(this, arguments) takes array-like object of arguments
(8) generic call forwarding is usually done with apply: -->
--> let wrapper = function() { return original.apply(this, arguments); };

Example:
function sayHi() {
    alert(this.name);
}

let user = { name: 'John' };
let admin = { name: 'Admin' };

// use call to pass different objects as 'this'
sayHi.call( user ) // John
sayHi.call( admin ) // Admin

function slow(x) {
    //there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

alert(slow(1));
alert('Again: ' + slow(1));

alert(slow(2));
alert('Again: ' + slow(2));
*/


//! https://javascript.info/global-object

/*
(1) global object provides variables and functions that are available anywhere
(2) by default, those that are built into the language or the environment
(3) in a browser it is named window, for node.js it is global
(4) globalThis was added to the language, as a standardized name for a global obj
(5) props of the global obj can be accessed directly: alert() same window.alert()
(6) functions/variables declared with var become the prop of the global object
(7) there should be as few global variables as possible
(8) if there is none support of some global obj in browser, we can create 'polyfills'
(9) if (!window.Promise) { window.Promise = ... // custom implementation }

Example:
var gVar = 5;
alert(window.gVar) // 5 (became a property of the global obj)
*/


//! https://javascript.info/object

/*
(1) There are 8 data types in JS: 7 primitives and object
(2) Objects are used to store keyed collections of data and more complex entities
(3) obj created with figure brackets { key (property name): value }
(4) let user = new Object(); // object constructor syntax
(5) let user = {}; // object literal syntax
(6) property values are accessible using the dot notation
(7) to remove property we can use the delete operator
(8) can use multiword property names, but then they must be quoted
(9) for multiword or any properties must use square bracket notation
(10) square brackets provide a way to obtain the prop name as the result of any expression
(11) computed props: when use square brackets in an obj literal, when creating an obj
(12) property value shorthand: instead of name:name can write just name
(13) for instance, a number 0 becomes a string '0' when used as a property key
(14) __proto__ cannot be set to a non-object value: obj.__proto__ // [object Object]
(15) property existence test, in operator: 'key' in object // returns boolean
(16) regular existence test is comparison with undefined
(17) 'for...in' loop: for (let key in object) {} // executes body for each key
(18) objects are associative arrays with several special features
(19) in this chapter covered plain object, but there are other: Array, Date, Error etc.

Examples:
let user = { name: 'John', age: 35, 'likes birds': true };
let key = 'likes dogs';

user.isAdmin = true;
user[key] = true;

alert(user.key) // undefined --> dot notation cannot be used
delete user.age;
alert('age' in user); // false

let fruit = prompt('Which fruit to buy?', 'apple');
let bag = {
    [fruit]: 5
};

alert( bag.apple ); // 5 if fruit = 'apple'

let obj = { 0: 'test' };

alert( obj[0] ); // test
alert( obj['0'] ); // test
*/