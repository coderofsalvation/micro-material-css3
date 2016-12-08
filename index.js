$.micromaterial = new micromaterial($)

$('#header_menu').on('click', function(e){
  notie.select('Menu', ' <b class="icon">▼</a> ', [
    {
      title: 'Home',
      color: '#555555',
      handler: function () {
        $.showPage('#home')
      }
    },
    {
      title: 'Media',
      color: '#444444',
      handler: function () {
        $.showPage('#media')
      }
    },
    {
      title: 'Calendar',
      color: '#222222',
      handler: function () {
        $.showPage('#calendar') //notie.alert(3, 'Foo bar!', 3)
      }
    }
  ])
})

$('#input').on('click', function(e){
  notie.input({
    type: 'email',
    placeholder: 'name@example.com',
    prefilledValue: 'jane@doe.com'
  }, 'Please enter your email:', 'Submit', 'Cancel', function(valueEntered) {
    notie.alert(1, 'You entered: ' + valueEntered,2)
  }, function(valueEntered) {
    notie.alert(3, 'You cancelled with value: ' + valueEntered, 2)
  })
})

$('#button-media').on('click', function(){ $.showPage('#media') })
$('#button-form').on('click', function(){ $.showPage('#form') })

setTimeout( function(){
  $.showPage('#home')
  $('#foo').html("foobar")
}, 1000 )

