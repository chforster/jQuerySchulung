/**
 * Created by devebiz on 11/3/15.
 */
/*global
 $,jQuery
 */

// IIFE
//(function ($) {
//    "use strict";
//    $(document).ready(function () {
//
//    });
//}(jQuery));

// $(document).ready(function () {
//
//    });


// wird erst ausgeführt, wenn DOM aufgebaut ist - document.ready()
jQuery(function ($) {

    "use strict";
    var $h2,
        $col1 = $("#col1").text("Neu");
    $h2 = $("<h2></h2>", {
        id: "feature-article",
        text: "Inhalt"
    });
    // $h2.appendTo($col1);
    // $col1.append($h2)

    // appendTo()
    $("<h2></h2>", {
        id: "feature-article",
        text: "AppendTo"
    }).appendTo($col1);

    // append()
    $col1.append("<h2>append</h2>");

    // insertBefore()
    $("<h2></h2>", {
        id: "feature-article",
        text: "insertBefore"
    }).insertBefore($col1);

    // prepend()
    $col1.prepend("<h2>prepend</h2>");

    //after()
    $col1.after("<h2>after</h2>");

    // before()
    $col1.before("<h2>before</h2>");

    //insertAfter()
    $("<h2></h2>", {
        id: "feature-article",
        text: "insertAfter"
    }).insertAfter($col1);

});
