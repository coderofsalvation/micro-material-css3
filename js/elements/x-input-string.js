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
//   <!-- material text input -->
//   <template id="x-input-string">
//     <b class="inputlabel"></b>
//     <input type="text" autocorrect="off" title="" placeholder="" class="form-control">
//     <span class="highlight"></span>
//     <span class="bar"></span></div> 
//   </template>
//
//   <x-input-string placeholder="foo" type="text"/>

var xInputString = function(){

  this.createdCallback = function(){
  }

  this.attachedCallback = function(){
    this.innerHTML = document.getElementById("x-input-string").innerHTML
    $(this).find('b.inputlabel').text( this.getAttribute("title") )
    var input = this.input = $(this).find('input')[0]
    var attributes = ["title", "placeholder", "name", "value", "type"]
    for ( var i in attributes  ) {
      var attribute = attributes[i]
      if( this.getAttribute( attribute ) ) input.setAttribute( attribute, this.getAttribute(attribute) )
    }
    this.setValidator = function(validator){
      $(input).on('keyup change', validator )
    }
    this.value = function(value){
      if( value ) input.value = value
      else return input.value
    }
  }

  this.detachedCallback = function(){}

  this.attributeChangedCallback = function( name, previousValue, value ){
    if (previousValue == null) {
      // new
    } else if (value == null) {
      // removed
    } else {
      this.data.input.setAttribute(name, value)
    }
  }  

}

$.registerElement("x-input-string", new xInputString ) 
