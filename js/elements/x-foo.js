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

var xFoo = function(){

  this.createdCallback = function(){
  }

  this.attachedCallback = function(){
    this.innerHTML = document.getElementById("x-foo").innerHTML
    var span = this.span = $(this).find('span')[0]
    var attributes = ["title", "placeholder", "name", "value", "type"]
    for ( var i in attributes  ) {
      var attribute = attributes[i]
      if( this.getAttribute( attribute ) ) span.setAttribute( attribute, this.getAttribute(attribute) )
    }
    span.setAttribute('id', this.getAttribute('data-id'))
    span.innerHTML = this.getAttribute('data-value')
  }

  this.detachedCallback = function(){}

  this.attributeChangedCallback = function( name, previousValue, value ){
    if (previousValue == null) {
      // new
    } else if (value == null) {
      // removed
    } else {
      this.data.span.setAttribute(name, value)
    }
  }  

}

$.registerElement("x-foo", new xFoo )
