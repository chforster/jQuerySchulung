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

    $("article").filter(":has(h3)")
        .css("border", "2px solid blue");

    // Traversing Filter
    // eq() filter() first() has() is() last() map() not() slice()

    // $("p").filter(function (index) - Index optional - beinhaltet die Position des Iterators
    $("p").filter(function () {
        return $("span", this).length === 1; // p beinhaltet EIN span
    })
    //    .text("1 span ist drin")
    ;

    // find
    $("p").find("span").css({
        backgroundColor: "green"
    }).end().css({ // end beendet die Auswahlt von find()
        border : "3px solid green"
    });


}(jQuery));