/**
 * Created by devebiz on 11/2/15.
 */
define(["jquery"], function ($) { // Closure

    "use strict";

    var basket = []; // private

    return {
        addItem: function (item) {
            basket.push(item);
            console.log("add");
            $("<li>" + item + "</li>").appendTo("body");
            return this; // Method Chaining
        }
    };
});