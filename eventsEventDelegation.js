$( 'li' ).click(function(event) {
  console.log('clicked', $( this ).text() );
});


// using .on() to bind an event handler to an element
$( 'li' ).on('click', function( event ) {
  console.log( 'clicked', $( this ).text() );
});

// once the event is bounded you can trigger the event like so:
$('li').trigger('click');

// or you can trigger it by calling the shorthand method:
$('li').click();

// to unbind an the event use .off() method
$( 'li' ).off('click');

// NAMESPACED EVENTS - useful for binding some events and unbinding some handlers

$('li').on('click.logging', function () {
  console.log( 'a list item was clicked');
});

$( 'li' ).on( 'click.analytics', function() {
  registerClick();
  doSomethingElse();
});

$( 'li' ).off('click.logging');

// Binding multiple events at once - the ability to bind to multiple events at once.

$('input[type="text"]').on('focus blur', function(){
  console.log( 'The user focused or blurred the input');
});

$(window).on('resize.foo scroll.bar', function(){
  console.log( 'The window ahs been resized or scrolled!' );
});

// Passing named functions as event handlers

var handleClick = function() {
  console.log('something was clicked');
};

$( 'li' ).on( 'click', handleClick );
$( 'h1' ).on( 'click', handleClick );


// Event bubbling

$( '*' ).add( [document, window] ).on('click', function(event){
  event.preventDefault();
  console.log( this );
});

// Event delegation - the process of binding handlers to high-level elements and then detecting which low-level element initited the event.

$( '#my-unordered-list' ).on('click', function(event){
  console.log( event.target); // logs the element that initiated the event
});

$( '#my-unordered-list' ).on('click', 'li', function( event ) {
  console.log( this ); //logs the list item that was clicked
});

$( '<li> a new list item! </li>' ).appendTo('#y-unordered-list');

// Event delegation allows us to bind to parent elements and know that our event handlers will fire as expected even inf the contents of that parent element change.

$('#my-unordered-list').on('click', 'li', function(event) {
  console.log( this ); // logs the list item that was clicked
});

$( '<li>a new list item! </li>').appendTo('#my-unordered-list');
