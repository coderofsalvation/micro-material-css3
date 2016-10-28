lightweight css3 stylesheet/js as boilerplate mobile webapp with material design

## Usage 

Check `index.html` to see what to include, and use these functions:

    $.registerElement('x-foo', new xFoo )      // see js/elements/x-foo.js
    $.showPage('#somediv')                     // simple page navigator in app
    $.showBackButton(true)                     // show / hide back button
    $.back()                                   // go to previous page
    $.loading( true|false, onAnimationDoneCb ) // show/hide loader

## Dependencies

  * zepto or jquery
