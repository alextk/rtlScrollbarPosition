/*
* rtlScrollbarPosition - jQuery plugin calculating rtl scrollbar position
*
* Version: 0.0.1
* Build: 27
* Copyright 2011 Alex Tkachev
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: 13 Dec 2011 21:49:42
*/

(function($) {

  $.rtlScrollbarPosition = (function() {
    var position = null;

    return function(){
      if(position === null){
        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
        var child = parent.children();
        var offset1 = child.offset();
        var offset2 = child.height(99).offset();
        parent.remove();
        position = offset2.left > offset1.left ? 'left' : 'right';
      }
      return position;
    };
  })();

})(jQuery);
