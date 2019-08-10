/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: Window binding of the this keyword takes place when the this keyword points to the global scope.  Then this points to the window, which
is kind of a fancy way of saying to the entire JS framework that you are working in. Window binding should be avoided is usually a mistake on the part of the programmer.

* 2. Implicit binding: Implicit binding is an implied binding of the this keyword in objects.  The general rule is that when invoked, the 
this keyword is pointing to whatever is left of the dot, or the object parent.

* 3. Explicit binding: Explicit binding is when we use call, apply, or bind to invoke a prototype/method.  The first argument of call, apply or bind is the this keyword,
so we are able to explicitly assign where the this keyword is pointing to when we do this.  You are also able to pass additional arguments to call, apply and bind after 
assigning the this keyword first.  Call needs commas to add additional arguments, whereas apply can pass full arrays without having to comman out each item.  Bind is the
same as call, but it saves the function for later use so it's not called or applied immediately.  It's best to save the bind function under a new variable.

* 4. New binding: New binding is used when a 'NEW' object is created thru a constructor function.  The this keyword knows it is a new "whatever the constructor function is"
and knows to point back to the original constructor and take those parameters and apply the arguments of the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const dontDoThis = function(){
    'use strict';
    console.log(this.name)
};

// Principle 2

// code example for Implicit Binding

const me = {
    name: 'Patrick',
    age: 34,
    location: 'Portland',
    speak: function() {
        return (`I am ${this.name} and I am from ${this.location}!`);
    },
    spouse: {
        name: 'Carina',
        age: 26,
        location: 'Portland',
        speak: function() {
            return (`I am ${this.name} and I am from ${this.location}!`);
        }
    }
};

console.log(me.speak()); //this points to me
console.log(me.spouse.speak()); //this points to spouse


// Principle 3

// code example for New Binding

const Person = function(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
};

Person.prototype.speak = function() {
    return `I am ${this.name} and I am ${this.age} years old and I'm from ${this.location}.`
};

const patrick = new Person({
    name: 'Patrick',
    age: 34,
    location: 'Portland'
});

console.log(patrick.speak());//this points to patrick since it inherits the Person function contstructor prototypes thru the use of the new keyword

// Principle 4

// code example for Explicit Binding

const sayName = function(place1, place2){
    return `I am ${this.name} and I am ${this.age} years old and I'm from ${this.location}.  I have also visited ${place1} and ${place2}`
};

const george = {
    name: 'George',
    age: 21,
    location: 'Maui'
};

const places = ['France', 'Germany'];

console.log(sayName.apply(george, places));
