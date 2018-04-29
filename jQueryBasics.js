var listItems = $('li');

// create a jQuery object from a DOM element
$( document.body.children[0]);

// create a jQuery object from a list of DOM elements;
$( [window, document]);


// make a selection in the context of a DOM element;
var firstBodyChild = document.body.children[0];
$( 'li' , firstBodyChild);

//make a selection within a previous selection
var paragraph = $('p');
$( 'a', paragraph);

// make a selection if an element exists

if ( $( '#nonexistent').length ) {
  // this code will only run if there's a matching element because 0 is falsey in JS
}


// Selecting Single Elements from a selection

var listItems = $( 'li' );
var rawListItem = listItems[0]; //or listItems.get (0)
var html - rawListItem.innerHTML;


// select a single element and use jQuery methods on that element, then use the eq() method
var listItems = $('li');
var secondListItem = listItems.eq(1);
secondListItem.remove();

// Creating new elements

$('<p>'); // creates a new <p> element with no content
$('<p>Hello! <p>'); // creates a new <p> element with content
$('<p class="greet">Hello!</p>'); //creates a new <p> with content and class


$( '<p>', {
  html: 'Hello!';
  'class': 'greet'
});


// Getters, setters, and implicit iteration

$('li').html('New HTML');

$('li').html(function( index, oldHTML) {
  return oldHTML + '!!!'
});

// iterating over DOM elements

$('li').each(function(index, element) {
  // this: the current, raw DOM element
  // index: the current element's index in the selection
  // elem: the current, raw DOM element (same as this)
  $(elem).prepend('<b>' + index + ': </b>');
})


//Chaining

$('li')
  .click(function() {
    $( this ).addClass('clicked');
  })
  .find( 'span')
    .attr('title', 'Hover over me');

// Chaining is possible because every setter method in jQuery reutrns the slecetion on which it was called. Its extraordinarily powerful, and it's a feature that many libraries have adopted. Use carefuly because it reduces readiability and debugging is a nightmare.

var listItems = $( 'li' );
var spans = listItems.find('span');

listItems
  .click(function() {
    $(this).addClass('clicked');
  });

spans.attr('title', 'Hover over me');
