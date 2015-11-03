/**
 * Created by devebiz on 11/3/15.
 */
$(function () {
    "use strict";

    $("#anmeldung").on("submit", function (event) {
        var value;
        event.preventDefault(); //Default "submit" von Event entfernen
        event.stopPropagation(); // Events werden nicht an das Parent durchgereicht
        value = $("input[name='vorname']").val();
        if (value.length < 3) {
            alert("Bitte mindestens 3 Zeichen");
        } else {
            this.submit();
        }
    });

    $("a.box").on("click", function (event) {

        var infotext = $(this).attr("data-info");
        alert(infotext);

        event.preventDefault();
        event.stopPropagation(); // click wird nicht an parent (article) durchgereicht
    });

    $("article").on("mouseenter", function () {
        $(this).css("backgroundColor", "#dadada");
    });
    $("article").on("mouseleave", function () {
        $(this).css("backgroundColor", "inherit");
    });

    $("article.clickme").on("click", function () {
        $(this).css("backgroundColor", "pink");
    });
});