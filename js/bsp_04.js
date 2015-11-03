/**
 * Created by devebiz on 11/2/15.
 */
$.noConflict();

(function($) {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
       console.log("2.");
    });
    window.addEventListener("load", function() {
       console.log("3.");
    });

    console.log("1.");

    $(document).ready(function () {
        console.log("jQ");
    });
}(jQuery));
