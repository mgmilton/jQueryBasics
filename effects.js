// for mobile development use css animations rather than jQuery and JS

$( '.hidden' ).show();

$( '.hidden' ).show(300);

$( '.hidden' ).show( 'slow');


// re-set an existing predifended speed
jQuery.fx.speeds.fast = 50;

// create a new pre-defined speed
jQuery.fx.speeds.turtle = 3000;

// Since we've re-set the 'fast' spped, this will now animate over the
// course of 50 milliseconds

$('.hidden').hide('fast');

// After they are created, we can use custom speeds just as we use the
// built-in sppeds
$( '.other-hidden' ).show('turtle');


$( 'p.old' ).fadeOut( 300, function() {
  $( this ).remove();
});


// if you need a callback to run regardless of whether there are elements in your selection, you can create a function and use it for both cases:

var oldElements = $( 'p.old' );
var thingToAnimate = $( '#nonexistent' );


// This function will be a callback to the 'show' method when there are
// elemnts to show. Otherwise, we will simply call it immediately
var removeOldElements = function() {
  oldElements.remove();
};

if ( thingtoAnimate.length ) {
  // When passed as a callback to "show", the unction will be invoked
  // when the animation is complete
  thingToAnimate.show( 'slow', removeOldElements );
} else {
  removeOldElements();
}


// .animate() takes three arguments :
// 1. object defining the properties to be animated
// 2. the duration of the animation - in milliseconds
// 3. a callback function that will be called when the animation is complete

$('.funtimes').animate({
  left: '+=50', // increase by 50
  opacity: 0.25,
  fontSize: '12px'
},
  300,
  function () {
  // executes when the animation is done
  }
);
