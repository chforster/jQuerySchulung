/**
 * Created by devebiz on 11/2/15.
 */
define(['bsp_06_moduleA', "jquery"], function (shop,$) {
    "use strict";
    $("<h1>Super Query!</h1>").prependTo("body");
    shop.addItem("Butter").addItem("Brot");
    console.log("main");
});