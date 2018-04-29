var greet = function(person, message) {
  var greeting = 'Hello, ' + person + '!';
  console.log (greeting + ' ' + message);
}

greet( 'Jory', 'Welcome to JavaScript');

greet( 'Rebecca', 'Thanks for joining us');


var person = {
  firstName : 'Javy',
  lastName : 'Baez',
  greet : function(greeting, punctuation) {
    console.log('Hi, ' + this.firstName + punctuation);
  }
};

var sayIt = person.greet;

sayIt.apply( person, ['Hello', '!!1!!1'])


// for loop
var myArray = ['a', 'b', 'c'];
var i;
var len = myArray.length;

for (i = 0; i < len; i = i + 1) {
  console.log('item at index' + i + ' is ' + myArray[i]);
}


//JavaScript Gotchas
console.log('a' + 2);
console.log('4' + 3);
console.log('five' - '4');
console.log(- '1');
console.log(1 + true);
console.log(1 == true);
console.log(1 === true);
