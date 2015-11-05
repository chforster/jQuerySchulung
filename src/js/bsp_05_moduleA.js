/**
 * Created by devebiz on 11/2/15.
 * @namespace SWAROVSKI
 */
window.SWAROVSKI = window.SWAROVSKI || {};
/**
 *
 * @module SWAROVSKI/shop
 */
window.SWAROVSKI.shop = (function () { // Closure

    "use strict";

    /**
     * private Variable für den Warenkorb
     * @type {Array}
     */
    var basket = []; // private

    return {
        /**
         * addItem
         * @param item {String} Warenkorb
         * @returns {window.SWAROVSKI.shop} Ware
         */
        addItem: function (item) {
            basket.push(item);

            return this; // Method Chaining
        }
    };
}());