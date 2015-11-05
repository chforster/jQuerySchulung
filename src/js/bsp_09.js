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
                    console.dir(event); // INfo zum Events
                    console.dir(this); // Der einzelne Button
                    console.log(that.clickElements);

                    that.basket.push("Element");
                    console.log(that.basket);

                    // entfernt Event von Button
                    $(this).off("click", addItem);
                };
            // Viele Buttons
            this.clickElements = config;

            //nur einmal
            $(this.clickElements.addItem).one("click", function () {
                alert("Wurde hinzugefügt. Den warenkorb finden sie unten");
            });

            $(this.clickElements.addItem).on("click", addItem);
        }
    };

    shopSystem.makeEvents({
        addItem : "button"
    });
});