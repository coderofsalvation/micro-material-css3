var micromaterial = function(){
  this.isLoading = false

  this.loading = function(state,cb){
    $('#loadscreen').css({ 'opacity': (state ? 1.0 : 0.0 ) })
    if( this.isLoading ) clearTimeout( this.isLoading )
    this.isLoading = setTimeout( function(me,state){
      //if( !state ) $('#loadscreen').css({ 'display': 'none' })
      isLoading = false 
      if( cb ) cb(me,state)
    }, 500, this, state, cb )
  }

  this.showPage = function(id){
    var me = this;
    this.loading(true, function(){
      $('.page').css({'display':'none'})
      $(id).css({'display':'block'})
      $(id).css({'height': ($(window).height() - $('#header').height())+"px" }) 
      me.loading(false)
    })
  }

  // wrapper function for registerElement
  this.registerElement = function (type, options) {
      for( i in options )
        if( typeof options[i] == "function" )
          options[i] = { value: options[i] }
      var prototype = { "prototype": Object.create( HTMLElement.prototype, options ) } 
      return document.registerElement( type, prototype )
  }

  return {
    showPage: this.showPage.bind(this), 
    loading: this.loading.bind(this), 
    registerElement: this.registerElement.bind(this)
  }
}
