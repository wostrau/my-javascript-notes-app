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


//! https://javascript.info/garbage-collection

/*
(1) memory management in JS is performed automatically and invisibly to us
(2) main concept of memory management in JS is reachability
(3) global vars, executing function with local vars and params, nested calls
(4) all these values cannot be deleted and are called roots
(5) there's a background process in JS that is called garbage collector
(6) it monitors all objects and removes those that have become unreachable
(7) interlinked objects: need incoming link / outcoming reference don't matter
(8) unreachable island: possible that the whole island of interlinked objs be removed
(9) the basic garbage collection algorithm is called 'mark-and-sweep'

Example:
let user = { name: 'John' };
let admin = user
user = null; // obj 'John' is still reachable via admin reference
*/


//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

/*
(1) JS is dynamic language with dynamic types
(2) Variables in JS are not directly associated with any particular value type
(3) JS is weekly typed language, which allows implicit type conversion
(4) implicit coercions are very convenient, but can create subtle bugs
(5) for symbols and BigInts JS has intentionally disallowed implicit conversions
(6) primitives define immutable values represented directly at the lowest level of JS
(7) all primitive types, except null, can be tested by the typeof operator
(8) type: Null, typeof return value: 'object', Object wrapper: N/A
(8) type: Undefined, typeof return value: 'undefined', Object wrapper: N/A
(8) type: Boolean, typeof return value: 'boolean', Object wrapper: Boolean
(8) type: Number, typeof return value: 'number', Object wrapper: Number
(8) type: BigInt, typeof return value: 'bigint', Object wrapper: BigInt
(8) type: String, typeof return value: 'string', Object wrapper: String
(8) type: Symbol, typeof return value: 'symbol', Object wrapper: Symbol
(9) symbol is a unique and immutable primitive value and may be used asa key of object
(10) in CS, an object is a value in memory which is possibly referenced by an identifier
(11) in JS, objects are only mutable values
(12) functions are also objects with the additional capability of being callable
(13) in JS, objects can be seen as a collection of properties
(14) object properties are equivalent to key-value pairs
(15) property keys are either string or symbols
(16) property values can be values of any type including other objects
(17) you can set property through Object.defineProperty()
(18) you can read property through Object.getOwnPropertyDescriptor()
(19) indexed collections: arrays and typed arrays
(20) keyed collections: Maps, Sets, WeakSets, WeakMaps
(21) structured data: JSON - JavaScript object notation is a data-interchange format
(22) JavaScript has a standard library of built-in objects

Example:
let user = {}
*/


//! https://javascript.info/types

/*
(1) a value in JavaScript is always of a certain type
(2) we can put any type in a variable
(3) variable can at the moment be a string and then store a number
(4) languages that allow such things are called 'dynamically typed'
(5) the number type represents both integer and floating point numbers
(6) besides regular numbers there're 'special numeric values': (-)Infinity, NaN
(7) Nan represents a calc error, result of an incorrect/undefined math operation
(8) NaN is sticky: any further mathematical operation with NaN returns NaN
(9) const bigInt = 1234567890123456789012345678901234567890n; // 'n' means BigInt
(10) in JS, there are 3 types of quotes: double, single quotes and backticks
(11) there is no a special 'character' type for a single character in JS
(12) the boolean has only two values: true and false
(13) in JS, null is a special value which represents 'nothing', 'empty', 'value unknown'
(14) the meaning of undefined is 'value is not assigned'
(15) same syntax: typeof(x) and typeof x, but the last is much more common
(16) the typeof operator allows us to see which type is stored in a variable

Example:
let age;
alert(age); // undefined
*/


//! https://javascript.info/json

/*
(1) JavaScript Object Notation is a general format to represent values and objects
(2) it's easy to use JSON for data exchange when the uses JS and the server: Ruby/PHP/Java/...
(3) JS provides two methods: JSON.stringify, JSON.parse to convert JSON back into an obj
(4) JSON is data-only language-independent specification
(5) so some JS-specific object properties are skipped by JSON.stringify
(6) namely: function props (methods), symbolic keys/values, props that store undefined
(7) the great thing is that nested objects are supported and converted automatically
(8) the important limitation: there must be no circular references
(9) full syntax: let json = JSON.stringify(value, [ replacer, space ]);
(10) obj may provide built-in method toJSON and JSON.stringify automatically calls it
(11) JSON does not support comments, adding a comment to JSON makes it invalid
(12) we can use reviving function into JSON.parse to deserialize JavaScript object
(13) JSON supports plain objects, arrays, strings, numbers, booleans, and null
(14) methods of JSON support transformer functions for smart reading/writing

Example:
let student = {
    name: 'John',
    age: 35,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!
alert(json); // JSON-encoded object

let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

alert( JSON.stringify(room) ); // 23

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, (key, value) => {
    if (key === 'date') return new Date(value);
    return value;
})

alert( meetup.date.getDate() ); // now works!
*/


//! https://javascript.info/prototype-inheritance

/*
(1) in JS, objects have a special hidden property [[Prototype]]
(2) that is null or references another object
(3) when we read property from object and if it's missing JS takes from prototype
(4) the property [[Prototype]] is internal and hidden, but there are many ways to set it
(5) one the them is to use the special name __proto__
(6) the prototype can create a long chain of inheritance
(7) the references can't go in circle, JS will throw an error if try to assign in a chain
(8) the value of __proto__ can be either an object or null, other ignored
(9) there can be only one [[Prototype]], an object ma not inherit from two others
(10) __proto__ is not the same as the internal [[Prototype]] property
(11) __proto__ is a historical getter/setter for [[Prototype]]
(12) the __proto__ property is a bit outdated, JS suggests that we should use functions
(13) functions that get/set the prototype: Object.getPrototypeOf()/Object.setPrototypeOf()
(14) writing to a property that a setter function is actually the same as calling a function
(15) 'this' is not affected by prototypes at all
(16) no matter where the method is found: in an object or its prototype
(17) in a method call, this is always the object before the dot
(18) when the inheriting objects run the inherited methods, they will modify only their states
(19) for...in loop iterates over inherited properties too
(20) if we want to exclude inherited properties, use method: Object.hasOwnProperty(key)

Examples:
let animal = { eats: true };
let rabbit = { jumps: true };

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
alert( rabbit.eats ); // true

let user = {
    name: 'John',
    surname: 'Smith',
    set fullName(value){
        [this.name, this.surname] = value.split(' ');
    }
    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

let admin = {__proto__: user, isAdmin: true};

admin.fullName = 'Alice Cooper';
alert(admin.fullName); // Cooper
alert(user.fullName); // Smith
*/


//! https://javascript.info/native-prototypes

/*
(1) all built-in constructor functions use 'prototype' property by the core of JS
(2) when new Object() is called or a literal obj {} is created -->
(3) --> the [[Prototype]] of it is set to Object.prototype
(4) when obj.toString() is called the method is taken from Object.prototype
(5) built-in objects: Array, Date, Function etc. also keep methods in prototypes
(6) all of the built-in prototypes have Object.prototype on the top
(7) [1, 2] -[[Prototype]]-> Array.prototype -[[...]]-> Object.prototype -[[...]]-> null
(8) primitives are not objects, but built using constructors String, Number, Boolean
(9) these objects are created invisibly to us and most engines optimize them out
(10) methods of these objects are available as String.prototype etc.
(11) native prototypes can be modified, if we add a method it becomes available to all
(12) String.prototype.show = () => {} --> becomes available to all strings
(13) generally, modifying a native prototype is considered a bad idea
(14) there's one case where modifying is allowed --> that's polyfilling
(15) only undefined and null do not have wrapper objects

Example:
let obj = {};

alert( obj.__proto__ === Object.prototype ); // true

let arr = [1, 2, 3];

alert( arr.__proto__ === Array.prototype ); // true
alert( arr.__proto__.__proto__ === Object.prototype ); // true
alert( arr.__proto__.__proto__.__proto__ ); // null

alert( arr ); // 1, 2, 3 <-- the result of Array.prototype.toString()
*/


//! https://javascript.info/prototype-methods

/*
(1) modern methods to get/set a prototype are:
(2) Object.getPrototypeOf(obj) - returns the [[Prototype]] of obj
(3) Object.setPrototypeOf(obj, proto) - sets the [[Prototype]] of obj to proto
(4) the only ok usage of __proto__, when creating a new obj: {__proto__: ...}
(5) there's a special method: Object.create(proto, [descriptors])
(6) creates an empty object with given proto as [[Prototype]]
(7) __proto__ is not a property of an object, but an accessor property of Object.prototype
(8) if obj.__proto__ is read/set, the corresponding getter/setter is called
(9) getter/setter is called from its prototype, and it gets/sets [[Prototype]]
(10) __proto__ is a way to access [[Prototype]], it is not [[Prototype]] itself
(11) the Object.create provides an easy way to shallow-copy an object with all descriptors:
(12) let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
(13) prototype-less objects can be created with: Object.create(null) or {__proto__: null}

Example:
let animal = { eats: true };
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
*/


//! https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333

/*
(1) type casting или явное преобразование типов Number(value)
(2) неявное преобразование типов происходит автоматически
(3) чаще всего происходит когда применяются операторы к значениям разных типов
(4) 1 == null, 2 / '5', null + new Date()
(5) if (value) { ... } будет приведено к булевому значению
(6) оператор === не приводит к неявному преобразованию
(7) существует 3 типа преобразовния: строковое, булевое, численное
(8) явное приведение значения к строке производится функцией String()
(9) неявное будет вызвано бинарным оператором +, когда один из операндов строка
(10) символы могут быть преобразованы только явным образом
(11) явное преобразование к булевому значению производится функцией Boolean()
(12) неявное преобразование происходит в логическом контексте if (val) { ... }
(13) также происходит в контексте применения логических операторов ||, &&, !
(14) falsy-значения: '', 0, -0, NaN, null, undefined, false
(15) любое другое значение будет преобразовано функцией Boolean() в true
(16) явное преобразование к числу производит функция Number()
(17) неявное преобразование вызывается в большом количестве случаев:
(18) операторы сравнения (>, <, >=, <=) приводят численное преобразование
(19) бинарные операторы (|, &, ^, ~) приводят численное преобразование
(20) арифметические операторы (-, +, *, /, %) приводят численное преобразование
(21) унарный оператор + приводит численное преобразование
(22) оператор нестрого равенства == (включая !=) приводит численное преобразование
(23) null == 0 // false, null == undefined // true

Example:
{}+[]+{}+[1]
==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
==> '0[object Object]1';

[1,2,3] == [1,2,3]
==>  false;

['x'] == 'x'
==> 'x' == 'x'
==>  true
*/


//! https://javascript.info/event-loop

/*
(1) the tasks from a queue, so-called 'macrotask queue' (V8 term)
(2) macrotask queue: script, mousemove, setTimeout etc.
(3) rendering never happens while the engine executes a task
(4) changes to the DOM are painted only after the task is complete
(5) if a task takes too long, the browser cannot do other tasks
(6) microtasks come solely from our code
(7) microtasks are usually created by promises: .then/.catch/.finally execution
(8) there's a special function queueMicrotask(func) -->
(9) that queues func for execution on the microtask queue
(10) after every macrotask, engine executes all tasks from microtask queue
(11) to schedule a new macrotask use zero delayed setTimeout()
(12) there's no ui or network event handling between microtasks: run one by one
(13) for long heavy calcs that shouldn't block the event loop, we can use Web Workers

Example:
let i = 0;
let start = Date.now();

function count() {

    // do a piece of the heavy job
    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        alert('Done in ' + (Date,now() - start) + 'ms')
    } else setTimeout(count);

}

count();
*/


//! https://javascript.info/microtask-queue

/*
(1) promise handlers .then/.catch/.finally are always asynchronous
(2) even when a Promise is immediately resolved, the code on the lines below -->
(3) .then/.catch/.finally will still execute before these handlers
(4) the queue is first-in-first-out: tasks enqueued first are run first
(5) execution of a task is initiated only when nothing else is running
(6) promise.then(handler); // enqueued ... alert('finish') // after it handler runs
(7) promise handlers always go through this internal queue
(8) if you what code to be finished after .then, just put it into the queue with .then
(9) 'unhandled rejection' occurs when a promise error isn't handled at the end of microtask queue
(10) promise handling is always asynchronous, as all promise actions pass through -->
(11) the internal 'promise jobs' queue, also called 'microtask queue' (V8 term)
(12) .then/.catch/.finally handlers are always called the current code is finished

Example:
// if you run this code you see 'code finished' first, and then 'promise done!'
let promise = Promise.resolve();

promise.then(() => alert('promise done!'));

alert('code finished');
*/


//! https://javascript.info/promise-basics

/*
(1) constructor syntax: let promise = new Promise((resolve, reject)=> { // executor });
(2) the function passed to new Promise is called the executor
(3) when new Promise is created, the executor runs automatically
(4) when executor obtains the result, it should call: resolve(value), reject(error)
(5) state: initially 'pending', then changes to 'fulfilled' or 'rejected'
(6) result: initially undefined, then value when resolved or error when rejected
(7) a job done by the executor may have only one result or an error
(8) consuming func can be subscribed using methods .then/.catch
(9) 1st arg of .then function that runs when the promise is resolved and receives the result
(10) 2nd arg of .then is a function that runs when the promise is rejected with error
(11) promise.then( result => alert(result), error => alert(error) );
(12) the call .catch(f) is a complete analog of .then(null, f), it's just a shorthand
(13) just like try() catch(), there is .finally() in promises
(14) the idea of .finally() is to set up a handler for performing cleanup/finalizing
(15) e.g. stopping loading indicators, closing no longer needed connections etc.
(16) in .finally() we don't know whether the promise is successful or not
(17) a .finally() handler shouldn't return anything, if it does returned value is silently ignored
(18) when .finally() throws an error, then execution goes to the nearest error handler
(19) .finally() supposed to be used for generic cleanup procedures

Example:
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});
*/


//! https://javascript.info/promise-chaining

/*
(1) the idea is that the result is passed through the chain of .then handlers
(2) newbie mistake: add many .then to a single promise --> this is not a chaining
(3) error that they don't pass the result to each other (.then)
(4) handler used in .then(handler) may create and return a promise -->
(5) in that case further wait until it settles, and then get its result
(6) in frontend programming promises are often used for network requests
(7) if a .then handler returns a promise, the rest of the chain waits until it settles

Example:
fetch('/article/promise-vhainig/user.json')
    .then(response => response.json())
    .then(user => alert(user.name));

fetch('article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch('https://api.github.com/users/${user.name}'))
    .then(response => response.json())
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);

        setTimeout(() => img.remove(), 3000);
    });
*/


//! https://javascript.info/promise-api

/*
(1) there are 6 static methods in the Promise class
(2) let's say we want many promises to execute in parallel and wait until all of them are ready
(3) that's what Promise.all is for: let promise = Promise.all(iterable);
(4) Promise.all takes an array and returns a new promise
(5) the order of the resulting array members is the same as in its source promises
(6) common trick is to map an array of job data into an array of promises, then wrap with .all()
(7) if any of the promises is rejected, the promise immediately rejects with an error
(8) Promise.all(iterable) allows non-promise, just regular values in iterable
(9) if any of the objects is not a promise, it's passed to the resulting array 'as is'
(10) Promise.allSettled just waits for all promises to settle, regardless of the result
(11) the result has: {status:'fulfilled', value:result} / {status:'rejected', reason:error}
(12) for instance, we want to fetch users, and even if one request fails, we need the rest
(13) Promise.race is similar to .all, but waits only for the first settled promise
(14) Promise.any is similar to race, but waits only for the first fulfilled promise
(15) methods Promise.resolve / Promise.reject are rarely needed in modern code
(16) because async/await syntax makes them somewhat obsolete
(17) Promise.resolve(value) creates a resolved promise with the result value
(18) the method is used for compatibility, when a function is expected to return a promise
(19) Promise.reject(error) creates a rejected promise with error
(20) Same as: let promise = new Promise((resolve, reject) => reject(error));
(21) of all these methods, Promise.all is probably the most common in practice

Example:
//// 1
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(alert); // 1, 2, 3 when promises are ready

//// 2
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests).then(reponses => {
    rerurn responses.forEach(response => {
        alert(`${response.url}: ${response.status}`)
    })
});

//// 3
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(user => alert(user.name)));
*/

//! https://javascript.info/promisify

/*
(1)
(2)
(3)
(4)
(5)
(6)
(7)
(8)
(9)
(10)

Example:

*/