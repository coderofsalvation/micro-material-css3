var micromaterial = function(){

  this.isLoading = false
  this.page = {
    home: false, 
    last: false, 
    current: false
  }

  this.loading = function(state,cb){
    $('#loadscreen').css({ 'opacity': (state ? 1.0 : 0.0 ) })
    if( this.isLoading ) clearTimeout( this.isLoading )
    this.isLoading = setTimeout( function(me,state){
      //if( !state ) $('#loadscreen').css({ 'display': 'none' })
      isLoading = false 
      if( cb ) cb(me,state)
    }, 500, this, state, cb )
  }

  this.back = function(){
    this.showPage( this.page.last )
  }

  this.showPage = function(id){
    var me = this;
    if( !this.page.home ) this.page.home = id // remember first page as homepage
    this.page.last = this.page.current  // remember current page as last page
    this.page.current = id        // remember current page
    this.loading(true, function(){
      $('.page').css({'display':'none'})
      $(id).css({'display':'block'})
      $(id).css({'height': ($(window).height() - $('#header').height())+"px" }) 
      if( id == me.page.home ) 
        $('button#back').css({'margin-left': '-500px'}) // hide back button on homepage
      else
        $('button#back').css({'margin-left': '0px'})
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

  this.init = function(){
    $('button#back').on('click', this.back.bind(this) )
  }

  this.init()

  return {
    back: this.back.bind(this), 
    showPage: this.showPage.bind(this), 
    loading: this.loading.bind(this), 
    registerElement: this.registerElement.bind(this)
  }
}
