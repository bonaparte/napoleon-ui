var objct = require("objct");


///////////////////////////////////////////////////////////////////////////////

module.exports = objct(
  require("./tag"),
  scroll
);

///////////////////////////////////////////////////////////////////////////////

function scroll(){
  var tag = this;
  scrollBarWidth = scrollBarWidth || getScrollBarWidth();

  console.log(scrollBarWidth);
  // this.firstElementChild.addEventListener("scroll", function(){

    

  // });

  tag.addListener("createdCallback", createdCallback)


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
  
  var scrollBarWidth = false;

///////////////////////////////////////////////////////////////////////////////

  function createdCallback(){

  }

///////////////////////////////////////////////////////////////////////////////

  function getScrollBarWidth(){
    var width = document.body.clientWidth;
    var overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "scroll";
    width -= document.body.clientWidth;
    document.documentElement.style.overflow = overflow;
    return width;
  }

///////////////////////////////////////////////////////////////////////////////

}
