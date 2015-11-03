/**
 * Created by devebiz on 11/3/15.
 */
/*global
 $,jQuery
 */

jQuery(function ($) {
    "use strict";

    var shopSystem = {

        basket : [],
        clickElements: {},
        makeEvents : function (config) {
            var that = this,
                addItem = function (event) {
                    console.dir(event);
                    console.dir(this);
                    console.log(that.clickElements);

                    that.basket.push("Element");
                    console.log(that.basket);

                    $(this).off("click", addItem);
                };

            this.clickElements = config;

            $(this.clickElements.addItem).one("click", function () {
                alert("Wurde hinzugefügt. Den warenkorb finden sie unten");
            });
            // VIele Buttons
            $(this.clickElements.addItem).on("click", addItem);
        }
    };

    shopSystem.makeEvents({
        addItem : "button"
    });
});