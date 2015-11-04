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
                case "load":

                    // Parameter: URL, Daten, ResponseFunktion
                    $box1.load("bsp_14_ajax_snippet.html #content1", {
                        id: 34 // x-beliebige Daten, die an Server übertragen werden können
                    }, function (response, status, http) {
                        console.log("Daten wurden geholt");
                        http.done(function () {
                            console.log("Status OK");
                        });
                    });

                    break;

            }
        }
    });
    // Event an zukünftig eingebundene Elemente hängen
    // Live Binding
    $(document).on("click", "#content1", function () {
        alert("Live Binding");
    });

});
