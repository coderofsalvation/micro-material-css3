var micromaterial = function(zepto_or_jquery){

  var me = this

  this.isLoading = false
  this.page = {
    last: [], 
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
    this.showPage( this.page.last.pop(), function(){
      $.showHeader(true)  
    }, true )
  }

  this.showHeader = function (state) {
    if( state ){
      $('body').addClass("showheader")
    }else{
      $('body').removeClass("showheader")
      $('#container').css({'height': '100%'})
    } 
  }

  this.showBackButton = function(state){
    var show = '0px'
    var hide = '-500px'
    if( state ){
      $('button#back').css({'margin-left': show}) // hide back button on homepage
      $('img#header_logo').css({'margin-left': hide})
    } else {
      $('button#back').css({'margin-left': hide})
      $('img#header_logo').css({'margin-left': show})
    }
  }

  this.showMenu = function(){
    $('.hidemenu').removeClass('hidemenu')
  }

  this.showPage = function(id,cb,no_history){
    var me = this;
    if( this.page.current != false && !no_history) 
      this.page.last.push( this.page.current )  // remember current page as last page
    this.page.current = id        // remember current page
    this.loading(true, function(){
      $('.page').css({'display':'none'})
      $(id).css({'display':'block'})
			$('#header h2').html( $(id).data('title') || '' ) 
      $('#container').css({'height': ($(window).height() - $('#header').height())+"px" }) 
      $('.page').css({'min-height': ($(window).height() - $('#header').height())+"px" }) 
      me.showBackButton( $(id+".nobackbutton").length == 0 )
      me.loading(false)
      if( cb ) cb()
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
    if( $ == undefined ) return console.error("micromaterialcss3: please include jquery or zepto")
    $('button#back').on('click', this.back.bind(this) )
  }

  this.init()

  var obj = {
    back: this.back.bind(this), 
    showPage: this.showPage.bind(this), 
    showHeader: this.showHeader.bind(this), 
    loading: this.loading.bind(this), 
    registerElement: this.registerElement.bind(this)
  }
  for ( var i in obj  ) $[i] = obj[i]
  return obj
}

new micromaterial() // create!
