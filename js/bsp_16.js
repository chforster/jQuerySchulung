/**
 * Created by devebiz on 11/4/15.
 */
$(function () {
    "use strict";
    var $art1 = $("#art1")
    $art1
        .resizable()
        .draggable();

    $("#art2").droppable({
        drop: function (event, ui) {
            $art1.text("Angedockt");
            console.log(ui);
        }

    });

    var tabs = $("#tabs").tabs();

    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function () {
            tabs.tabs("refresh");
        }
    });
});