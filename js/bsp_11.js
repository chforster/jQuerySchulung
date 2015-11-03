/**
 * Created by devebiz on 11/3/15.
 */
$(function () {
    "use strict";

    $("#anmeldung").on("submit", function (event) {
        var value;
        event.preventDefault(); //Default "submit" von Event entfernen

        value = $("input[name='vorname']").val();
        if (value.length < 3) {
            alert("Bitte mindestens 3 Zeichen");
        } else {
            this.submit();
        }
    });

    $("a.box").on("click", function (event) {
        event.preventDefault();
        var infotext = $(this).attr("data-info");
        alert(infotext);
    });
});