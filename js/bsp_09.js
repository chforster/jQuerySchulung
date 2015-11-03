/**
 * Created by devebiz on 11/3/15.
 */
/*global
 $,jQuery
 */

jQuery(function ($) {
    "use strict";

    var shopSystem = {

        clickElements : "button",
        makeEvents : function () {
            var that = this;

            // VIele Buttons
            $(this.clickElements).on("click", function (event) {
                console.dir(event); // Info zum Event
                console.dir(this); // Der einzelne Button
                console.log(that.clickElements); // vorheriger Context
            });
        }
    };

    shopSystem.makeEvents();
});