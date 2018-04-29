// Create the "callback" functions that will be invoked when...


// ... the AJAX request is successful
var updatePage = function( resp ) {
  $('#target').html( resp.people[0].name);
};


// ...the AJAX request fails
var printError = function( req, status, err ) {
  console.log( 'something went wrong', status, err);
};

// Create an object to describe the AJAX request

var ajaxOptions = {
  url: '/data/people.json',
  dataType: 'json',
  success: updatePage,
  error: printError
};

// Initiate teh request!

$.ajax(ajaxOptions);

// Can also pass an objec literal to the .ajax() method

$.ajax({
  url: '/data/people.json',
  dataType: 'json',
  success: function( resp ){
    $('#target').html( resp.people[0].name);
  },
  error: function( req, status, err  ){
    console.log('something went wrong', status, err );
  }
});

// can also pass ajax a URL and optional configuration object
// useful if you wnat to use the defualt configuration for $.ajax()
// or if you want to use the same configuration for several urls

$.ajax('/data/people.json', {
  type: 'GET',
  dataType: 'json',
  successL function( resp ) {
    console.log( resp.people );
  },
  error: function( req, status, err ) {
    console.log( 'something went wrong', status, err);
  }
});


// Convenience methods - making a simple request and don't care about error handling
// jquery provides several 'convience methods' with abbreviated syntax

$.get('/data/people.html', function ( html ) {
  $('#target').html(html);
});

$.post('/data/save', {name: 'Rebecca'}, function(resp) {
  console.log( resp );
});


// SENDING Data and Working With Forms
$( 'form' ).submit(function( event ){
  event.preventDefault();

  var form = $( this );

  $.ajax({
    type: 'POST',
    url: '/data/save',
    data: form.serialize(),
    dataType: 'json',
    success: function( resp ){
      console.log( resp );
    }
  });
});


var req = $.ajax({
  url: '/data/people.json',
  dataType: 'json'
});

var success = function( resp ) {
  $('#target').append(
    '<p>people: ' + resp.people.length + '</p>'
  );
  console.log( resp.people );
};

var err = function( req, status, err ) {
  $( '#target' ).append( '<p> something went wrong </p>');
};

req.then( success, err);
req.then(function(){
  $( '#target' ).append('<p>it ')
});

req.done( success );
req.fail( err );

req.always(function(){
  $( '#target' )
    .append('<p>one way or another, it is done now </p>');
});

// JSPON

$.ajax({
  url: '/data/search.jsonp',
  data: {q: 'a'};
  dataType: 'jsonp',
  success: function( resp ){
    $('#target').html( 'Results: ' + resp.results.length);
  }
});

$.getJSON('/data/search.jsonp?q=a&callback=?',
  function( resp ) {
    $('#target').html('Results: ' + resp.results.length);
  }
);

// Deferreds
function doSomethingLater(fn, time) {
  var dfd = $.Deferred();

  setTimeout(function() {
    dfd.resolve( fn() );
  }, time || 0);

  return dfd.promise();
}


var promise = doSomethingLater(function(){
  console.log('This function will be called in 100ms');
}, 100);

// We can attach success and error handlers with .then(), .done(), .fail(), .always()

function doSomethingLater( fn, time ){
  var dfd = $.Deferred();

  setTimeout(function(), {
    dfd.resolve( fn() );
  }, time || 0);

  return dfd.promise();
}


var success = function( resp ) {
  $('#target').html('it worked');
};

var err = function( req, status, err ){
  $('#target').html('it failed');
};


var dfd = doSomethingLater(function(){ /*....*/}, 100);

dfd.then( success, err);

// pipe() - a promise to react to the resolution of an asynchronous operation by mainuplating the value it returns and creating a new deferred


function doSomethingLater( fn, time ){
  var dfd = $.Deferred();

  setTimeout(function() {
    dfd.resolve( fn() );
  }, time || 0);

  return dfd.promise();
}

var dfd = doSomethingLater(function(){ return 1; }, 100);

dfd
  .pipe(function(resp) { return resp + '' + resp; })
  .done(function(upperCaseResp){
    $('#target').html( upperCaseResp );
  });

// For potentially cached results use .when()

function maybeAsync( num ) {
  var dfd = $.Deferred();

  // return a deferred when num === 1
  if (num === 1) {
    setTimeout(function() {
      dfd.resolve( num );
    }, 100);
    return dfd.promise();
  }

  //return immediately otherwise

  return num;
}

// this will resolve async
$.when( maybeAsync( 1 )).then(function( resp ){
  $('#target').append('<p>' + resp + '</p>');
})


// this will return immediately

$.when( maybeAsync( 0 )).then(function( resp ){
  $('#target').append('<p>' + resp + '</p>');
});

// Can pass arguments to .when()

function maybeAsync( num ) {
  var dfd = $.Deferred();

  // return a deferred when num === 1
  if (num === 1 ) {
    setTimeout(function() {
      dfd.resolve( num );
    }, 100);
    return dfd.promise();
  }

  // return immediately otherwise
  return num;
}

$.when( maybeAsync( 0 ), maybeAsync( 1 ))
  .then(function( resp1, resp2 ) {
    var target = $('#target');
    target.append('<p>' + resp1 + '</p>');
    target.append('<p>' + resp2 + '</p>');
  });


// when a jqXHR is one of the arguments to $.when(), an array of arguments is
// passed to the callback function

function maybeAsync( num ) {
  var dfd = $.Deferred();

  // return a number when num === 1
  if (num === 1) {
    setTimeout(function() {
      dfd.resolve(num);
    }, 100);
    return dfd.promise();
  }

  //return immediately otherwise
  return num;
}

$.when( maybeAsync( 0 ), $.get('/data/people.json') )
  .then(function( resp1, resp2 ) {
    console.log("Both operations are done", resp1, resp2);
  });
