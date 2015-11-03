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

    // css selector nth-child - jedes 2. Element, startet mit 4. Element
    $("li:nth-child(2n+4)").css({
        fontWeight : "bold"
    });
    //jQuery Selektor (schlechtere Performance)
    //$("li:even").css({
    //   backgroundColor:"green"
    //});

    //besser
    $("li").filter(":even").css({
        backgroundColor:"green"
    });

    // $("li:first-child") - css selektor
    $("li:first").css({
        color:"white"
    });

    // Text contains case sensitive "D"
    $("li:contains('D')").css({
        backgroundColor:"pink"
    });

    // $("h3").parent().css("border", "2px solid blue");

    $("article").filter(":has(h3)").css("border", "2px solid blue");


}(jQuery));