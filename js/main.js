/* global $ */ // turn off jslint warning for $ (jQuery)

// Tell jQuery to execute the onReady function when the
// document is ready
$(function onReady() {
  
  // select the td by element and child element with class
  var keyupCell = $('table td.up');
  
  // variable to count number of keyup events
  var keyupCounter = 0;
  var before = new Date().getTime();
  
  // attach a keyup listener to the window object 
  $(window).keyup(function onKeyup(eventArgument) {
    var after = new Date().getTime();
    // increment the keydownCounter by 1
    keyupCounter++;
    alert(after - before)
     if(keyupCounter > 50) {
      
    }
   
    
    // set the text of the keyupCell
    keyupCell.text(keyupCounter);
  });

});