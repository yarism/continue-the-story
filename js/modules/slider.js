/*global define*/

(function(factory) {

    if (typeof define === "function" && define.amd) {
        define(['jquery', 'glide'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }

})(function($) {

    $('.slider').glide({
        autoplay: false,
        arrows: true,
        circular: false,
        animationDuration: 800
      });
});