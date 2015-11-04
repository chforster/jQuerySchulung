/**
 * Created by devebiz on 11/4/15.
 */
jQuery(function ($) {
    "use strict";

    var $box1 = $("#box1");
    $("#box2").on("click", function (event) {
        var $target = $(event.target);
        if ($target.is("button")) {
            switch ($target.attr("id")) {
                case "toggle":
                    // duration, Animation Style (linear or swing), function after finishment
                    //$box1.toggle(800, "swing", function () {
                    //    $target.css("backgroundColor", "pink");
                    //});

                    $box1.toggle({
                        duration: 1000,
                        complete: function () {
                            $target.text("Toggle");
                        },
                        start: function () {
                            $target.text("running...");
                        }
                    });
                    break;
                case "fadingAnimation":
                    $box1
                        .hide(500)
                        .show(500)
                        .fadeOut(500)
                        .fadeIn(500)
                        .fadeTo(1000, 0.3)
                        .fadeTo(100, 1);
                    break;
                case "fadeToggle":
                    $box1.fadeToggle();
                    break;
                case "slide":
                    $box1
                        .fadeOut(2000)
                        .slideUp({
                            duration: 2000,
                            queue: false
                        });

                    break;
            }
            }
        }
    )
    ;
    });