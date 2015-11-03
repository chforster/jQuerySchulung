/**
 * Created by devebiz on 11/2/15.
 */
window.SWAROVSKI = window.SWAROVSKI || {};
window.SWAROVSKI.shop = (function () { // Closure

    "use strict";

    var basket = []; // private

    return {
        addItem: function (item) {
            basket.push(item);

            return this; // Method Chaining
        }
    };
}());