/*global require,define*/

require(['jquery', 'require', 'glide', 'bootstrap'], function($, require) {

    // init stuff here
    $(function() {

        // Slider
        /*var slider = $("[data-widget*=slider]");
        if (slider.length) {
            require(['js/modules/slider']);
        }*/

        var paint = $("[data-widget*=paint]");
        if (paint.length) {
            require(['js/modules/jquery.paint']);
        }

    });

});