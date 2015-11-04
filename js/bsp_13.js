/**
 * Created by devebiz on 11/4/15.
 */
jQuery(function ($) {
    "use strict";
    $("#box2").on("click", function (event) {
        var $target = $(event.target);
        if ($target.is("button")) {
            switch ($target.attr("id")) {
                case "go1":
                    console.log("hurra");
                    break;
                case "go2":
                    break;
            }
        }
    });
});