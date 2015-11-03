/**
 * Created by devebiz on 11/2/15.
 */
(function ($) {
    "use strict";

    //Collection enthält alle h2
    $("h2").text("Alles Neu macht der Mai");

    // der h2 COllection werden alle p-Elemente hinzugefügt
    $("h2")
        .add("div")
        .css("backgroundColor", "yellow")

        // FIlter - erstes Element aus der COllection
        .eq(0)
        .css({
            border: "2px solid green",
            backgroundColor : "#aaaaff" // Alternativ dazu könnte man auch "background-color" schreiben
        });
}(jQuery));