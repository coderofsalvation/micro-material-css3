document.querySelector('#header_menu').onclick = function(e){
  notie.select('Menu', ' <b class="icon">▼</a> ', [
    {
      title: 'Home',
      color: '#555555',
      handler: function () {
        woofr.showPage('#home')
      }
    },
    {
      title: 'Media',
      color: '#444444',
      handler: function () {
        woofr.showPage('#media')
      }
    },
    {
      title: 'Calendar',
      color: '#222222',
      handler: function () {
        woofr.showPage('#calendar') //notie.alert(3, 'Foo bar!', 3)
      }
    }
  ])
}

document.querySelector( '#input').onclick = function(e){
  notie.input({
    type: 'email',
    placeholder: 'name@example.com',
    prefilledValue: 'jane@doe.com'
  }, 'Please enter your email:', 'Submit', 'Cancel', function(valueEntered) {
    notie.alert(1, 'You entered: ' + valueEntered,2)
  }, function(valueEntered) {
    notie.alert(3, 'You cancelled with value: ' + valueEntered, 2)
  })
  FastClick.attach(document.body); // remove 300ms from all generated clickevents
  e.preventDefault(); // don't cascade into extra click-event
  //notie.confirm('Are you sure you want to do that?', 'Yes', 'Cancel', function() {
  //  notie.alert(1, 'Good choice!', 2, function(){
  //  })
  //})
}

var mmcss3 = new micromaterial()
mmcss3.registerElement("x-foo", new xFoo ) // registers dom element <x-foo> to browser
mmcss3.registerElement("x-mediabutton", new xMediaButton ) 
//mmcss3.registerElement("x-template", new xTemplate ) // *TODO* 

setTimeout( function(){
  mmcss3.showPage('#home')
  $('#foo').html("foobar")
}, 1000 )

