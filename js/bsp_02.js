/**
 * Created by devebiz on 11/2/15.
 */
(function () {
    "use strict";
    var t1 = "Text";
    var t2 = "Mein ";
    console.log(t1, typeof t1);

    var t3 = t2 + t1;
    console.log(t3, typeof t3);

    t1=4;
    t2 = "2";
    t3 = t1 + t2;
    console.log(t3, typeof t3);

    t2 = parseInt(t2, 10);
    t3 = t1 + t2;
    console.log(t3, typeof t3);

    console.log(t3.toString(), typeof t3.toString());

    var z1 = 123;
    var z2 = 0;
    var z3 =z2;
    z2 += 1;
    console.log(z2);
    console.log(z3);
    console.log(0.1 + 0.2);
    console.log(typeof ("Teilmich" / 3));
    console.log(NaN === ("Teilmich" / 3));
    console.log(isNaN("Teilmich" / 3));

    var u;
    console.log(u, typeof u);

    //----------------
    var o = null;
    console.log(o, typeof o);
    console.log(new Object());
    console.dir(Object);

    var obj1 = new Object();

    obj1.farbe = "grün";
    console.log(obj1.farbe);

    // Object literal Notation
    var obj2 = {
        farbe : "rot",
        anzahl : 2
    }
    obj2.feature = "neu";
    console.log(obj2);


    var b1 = 2 == "2"; // ANTIPATTERN
    var b2 = 2 === "2";

    var liste = new Array();


    console.log(liste, typeof liste);
    console.log(liste instanceof Object);
    console.log(liste instanceof Array);

    var liste2 = [2,3,4,5];
    var l = liste2.length;
    var i;
    for (i = 0; i < l; i+=1) {
        console.log(liste2[i]);
    }

    // var f1 = new Function("console.log('OK');");

    var f1 = function() {
      console.log("OK");
        return 0;
    };

    function f2(message) {
        console.log(message);
        return 0;
    }
    var erg = f1();
    f2("Stoffl");

    console.log(typeof f1);
    console.log(f1 instanceof Object);
    console.log(f1 instanceof Function);
}());