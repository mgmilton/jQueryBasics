 var listItems = $('li');

 // filter the selection to only items with a class of 'special'

 var specialItems = listItems.filter('.special');

 // filter the selection to only items without a class of 'special'
 // .not() is not the the opposite of .is(), .is() returns a boolean and .not() returns a new jQuery object
 var notSpecial = listItems.not('.special');

 // filter the selection to only items that contain a span
 var hasSpans = listItems.has('span');


//get the first list item on the page
var listItem = $( 'li' ).first(); //also: .last()

//get the siblings of the list item
var siblings = listItem.siblings();

//get the next sibling of the list item
var nextSibling = listItem.next(); //also: .prev()

//get the list item's parent
var list = listItem.parent();

// get the list items that are immediate children of the list
var listItems = list.children();

// get All list items in the list, including nested ones
var allListItems = list.find('li');

// find all ancestors of the list item that have a class of "module"
var modules = listItem.parents('.module');

// find the closest ancestor of the list item that has a class of "module"
var module = listItem.closest('.module');

// ADDING TO AN EXISTING SELECTION BY USING .add()

var list = $('#my-unordered-list');

// do some stuff with the list, and then, ...

var listAndListItems = list.add(`#my-unordered-list li`);

// RETURNING TO YOUR ORIGINAL SELECTION
// Consider the case when you select an unordered list, make some changes to its list items, and then want to work with the unordered list again. You can use the jQuery .end() method to get back to your original selection.

$('#my-unordered-list')
  .find('li')

  // now we're working with the list items
  .addClass('special')

.end()

// now we're back to working with the list
.addClass('super-special');


// the above solution refactored:

var list = $(' #my-unordered-list ');
var listItems = list.find('li');

listItems.addClass('special');
list.addClass('super-special');


// To add your original selection back to your current slection, use the addBack() method

$( 'li.special' )
  .siblings()

  //now we're working with the siblings of the original selection
  .removeClass('important')

  .addBack()

  //now we're wokring with the original li's AND their siblings

  .addClass( 'urgent' );

var specialListItems = $('li.special');
var otherListItems = specialListItems.sibings();


otherListItems.removeClass( 'important');
specialListItems.add( otherListItems).addClass('urgent');


// MANIPULATION

$( 'li' ).addClass(' hidden ');
$( 'li' ).eq(1).removeClass('hidden');

// toggleClass allows for adding and removing a class repeaatedly

$( 'li' ).eq(1).toggleClass('hidden');

// Changing the style of a DOM element with jQuery

var list = $( '#my-unordered-list' );
var width = Math.floor(list.width() * 0.1);

list.find('li').each(function( index, elem) {
  var padding = width * index;
  $( elem ).css('padding-left', padding + 'px');
});

// to change multiple properties at once you can pass an object to the .css() method. any property name that includes a hyphen requires quotations

$( 'li' ).eq(1).css({
  'font-size': '20px',
  'padding-left': '20px'
});

// Changing form values

$( 'input[type="text"]').val('new value');

// for select elements, you can set the chosen option:

$( 'select' ).val('2');

// for checkbox input elements, you'll need to set the checked property on the element using the .prop() method

$( 'input[type="checkbox"]' ).prop('checked', 'checked');

// The .attr() method allows for changing of attributes of elements

$( 'a' ).attr( 'title', 'Click me!' );

// passing a function to attr

$( 'a' ).attr( 'href', function(index, value){
  return value + '?special=true';
});


// GETTING Information From ElEMENTS

var input = $('input[type="text"]');
input.val( 'new value' );
input.val();

var listItemColor = $( 'li' ).css('color');


// Placing elements in the document
var listItem = $('#my-unordered-list li').first();
listItem.appendTo('#my-unordered-list');

var listItem = $('#my-unordered-list li').first();
$(' #my-unordered-list' ).append(listItem);

// to insert an element after the last element utilize insertAfter()
var listItems = $('#my-unordered-list li');
listItems.first().insertAfter(listItems.last() );

// could also insert the list item after the last item by calling .after() on the last list item

var listItems = $('#my-unordered-list li');
listItems.last().after(listItems.first() );

//Copying Elements
var clones = $('li').clone();

clones.html(function( index, oldHtml) {
  return oldHTML + '!!!';
});

$( '#my-unordered-list' ).append( clones );

//Removing Elements

$('#my-unordered-list li').click(function() {
  alert($( this ).text() );
});

var removedListItem = $('#my-unordered-list li').first().remove();

removedListItem.appendTo('#my-unordered-list');
removedListItem.trigger('click'); // no alert!


$( '#my-unordered-list li' ).click(function() {
  alert( $( this ).text() );
});

var replacedListItem = $('#my-unordered-list li').first()
  .replaceWith('<li>new!</li>');

replacedListItem.appendTo('#my-unordered-list');

replacedListItem.trigger('click');
