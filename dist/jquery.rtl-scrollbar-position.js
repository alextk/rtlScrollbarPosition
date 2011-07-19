/*
* rtlScrollbarPosition - jQuery plugin for rendering dialog
*
* Version: 0.0.1a
* Copyright 2011 Alex Tkachev
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Tue Jul 19 12:23:58 2011 +0300
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