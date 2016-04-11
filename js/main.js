/* global $ */ // turn off jslint warning for $ (jQuery)

// Tell jQuery to execute the onReady function when the
// document is ready
$(function onReady() {
  
  // select the code element by id
  var testOutputContainer = $('#test');
  
  // select the td by class
  var keypressCell = $('.press');
  
  // variable to count number of keypress events
  var keypressCounter = 0;
  
  // array to store all the key presses
  var keypresses = [];
  
  // attach a keypress listener to the window object 
  $(window).keypress(function onKeypress(eventArgument) {
    // get the key from the event arguemnt
    var key = eventArgument.key;
    
    // add the key to the end of the keypresses array
    keypresses.push(key);
    
    // increment the keypressCounter by 1
    keypressCounter = keypressCounter + 1;
    
    // set the text of the keydownCell
    keypressCell.text(keypressCounter);
    
    // set the text of the test output container
    testOutputContainer.text(keypresses.join(' '));
  });
  
  
  // select the td by element and child class
  var keydownCell = $('table .down');
  
  // variable to count number of keydown events
  var keydownCounter = 0;
  
  // attach a keydown listener to the window object 
  $(window).keydown(function onKeydown(eventArgument) {
    // increment the keydownCounter by 1
    keydownCounter += 1;
    
    // set the text of the keydownCell
    keydownCell.text(keydownCounter);
  });
  
  // select the td by element and child element with class
  var keyupCell = $('table td.up');
  
  // variable to count number of keyup events
  var keyupCounter = 0;
  
  // attach a keyup listener to the window object 
  $(window).keyup(function onKeyup(eventArgument) {
    // increment the keydownCounter by 1
    keyupCounter++;
    
    // set the text of the keyupCell
    keyupCell.text(keyupCounter);
  });

});