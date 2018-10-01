/*global define*/

(function(factory) {

    if (typeof define === "function" && define.amd) {
        define(['jquery', 'easel'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }

})(function($) {

    var canvas, stage;
    var drawingCanvas;
    var oldPt;
    var oldMidPt;
    var title;
    var color;
    var stroke;
    var colors;
    var index;

    function init() {

        canvas = document.getElementById("makeYourOwn");
        index = 0;
        colors = ["#828b20", "#b0ac31", "#cbc53d", "#fad779", "#f9e4ad", "#faf2db", "#563512", "#9b4a0b", "#d36600", "#fe8a00", "#f9a71f"];

        //check to see if we are running in a browser with touch support
        stage = new createjs.Stage(canvas);
        stage.autoClear = false;
        stage.enableDOMEvents(true);

        createjs.Touch.enable(stage);
        createjs.Ticker.setFPS(24);

        drawingCanvas = new createjs.Shape();

        stage.addEventListener("stagemousedown", handleMouseDown);
        stage.addEventListener("stagemouseup", handleMouseUp);


        stage.addChild(drawingCanvas);
        stage.update();
    }

    function stop() {}

    function handleMouseDown(event) {
        if (stage.contains(title)) { stage.clear(); stage.removeChild(title); }
        color = colors[(index++)%colors.length];
        stroke = 2;
        oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
        oldMidPt = oldPt;
        stage.addEventListener("stagemousemove" , handleMouseMove);
    }

    function handleMouseMove(event) {
        var midPt = new createjs.Point(oldPt.x + stage.mouseX>>1, oldPt.y+stage.mouseY>>1);

        drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

        oldPt.x = stage.mouseX;
        oldPt.y = stage.mouseY;

        oldMidPt.x = midPt.x;
        oldMidPt.y = midPt.y;

        stage.update();
    }

    function handleMouseUp(event) {
        stage.removeEventListener("stagemousemove" , handleMouseMove);
    }

    init();

});