// css:
//
//   .form-control{
//     padding:0;
//     border:none;
//     width:100% !important;
//     border-bottom: 1px solid #DDD;
//   }
//   .error .form-control {
//     border-bottom: 2px solid red;
//   }
//
// html:
//
//   <!-- material text span -->
//   <template id="x-foo">
//     <b class="foo"></b>
//     <span type="text" autocorrect="off" title="" placeholder="" class="form-control">
//     <span class="highlight"></span>
//     <span class="bar"></span></div> 
//   </template>
//
//   <x-span-string placeholder="foo" type="text"/>

var xMediaButton = function(){

  this.createdCallback = function(){
  }

  this.attachedCallback = function(){
	var type = this.getAttribute("type")
	if( !type ) throw 'data-type attribute not found in <mediabutton>'
	if (! ('ontouchstart' in document.documentElement) )
	  return false; // record audio mostly is supported on desktop pc browser's (not ios etc)
    this.innerHTML = document.getElementById( "x-mediabutton-"+type ).innerHTML
    var input = this.input = $(this).find('input')[0]
	var attributes = []
    for ( var i in attributes  ) {
	  if( i == "text" ) continue
      var attribute = attributes[i]
      if( this.getAttribute( attribute ) ) input.setAttribute( attribute, this.getAttribute(attribute) )
    }
    input.setAttribute('name', this.getAttribute('id'))
    input.setAttribute('id', this.getAttribute('id'))
	this.setAttribute( 'id', "_"+this.getAttribute('id') )
  }

  this.detachedCallback = function(){}

  this.attributeChangedCallback = function( name, previousValue, value ){
    if (previousValue == null) {
      // new
    } else if (value == null) {
      // removed
    } else {
    }
  }  

}
