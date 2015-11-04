/**
 * Created by devebiz on 11/4/15.
 */
jQuery(function ($) {
    "use strict";

    var $box1 = $("#box1");
    $("#box2").on("click", function (event) {
        var jqXHR,
            $form1,
            $target = $(event.target);
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
                case "post":

                    jqXHR = $.post("bsp_14_ajax_snippet.html",
                        {id: 35})
                        .done(function () {
                            console.log("ok");
                        });

                    break;
                case "form1":
                    event.preventDefault();
                    $form1 = $("#anmeldung");
                    jqXHR = $.post("bsp_14_ajax_snippet.html", $form1.serialize())
                        .done(function () {
                            var div = $form1.parent();
                            div.empty().text($form1.serialize());
                            console.log("ok");
                        });

                    break;
                case "getscript":
                    $.getScript("//code.jquery.com/color/jquery.color.js", function () {
                        $box1.animate({
                            backgroundColor: "rgb(100,100,100)",
                            color: "white"
                        }, 2000).animate({
                            backgroundColor: "red",
                            color: "black"
                        }, 2000);
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
