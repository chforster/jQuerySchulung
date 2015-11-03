/**
 * Created by devebiz on 11/2/15.
 */
(function () {
    "use strict";


    var wert = "aha";
    var f3 = function () {
        console.log(wert);
        var wert = "soso"; // Antipattern
        console.log(wert);
    };

    f3();

    var wert = "aha";
    var f3 = function () {
        var wert;
        console.log(wert);
        wert = "soso";
        console.log(wert);
    };

    f3();
}());