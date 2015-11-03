/**
 * Created by devebiz on 11/3/15.
 */

(function () {
    "use strict";
    var Person = function (vn) {
      var closureVar = "431325";

        //this.vorname = vn;
        Object.defineProperties(this, {
            vorname: {
                value: vn,
                writable: true,
                configurable: true,
                enumerable: true
            },
            personalId: {
                get: function () {
                    return closureVar;
                },
                set: function (newValue) {
                    if (typeof newValue === "string") {
                        closureVar = newValue;
                    }
                }
            }
        });

        Object.seal(this);
    }, p1, p2;

    Object.defineProperties(Person.prototype, {
        sagName: {
            value: function () {
                return "Hallo, ich bin " + this.vorname;
            }
        }
    });

    p1 = new Person("Hans");
    p2 = new Person("Peter");

    console.dir(p1);
    p1.personalId = "fdsafsf";
    console.log(p1.personalId);

    console.log(p1.sagName());
    console.log(p2.sagName());
}());
