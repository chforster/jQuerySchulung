/**
 * Created by devebiz on 11/3/15.
 */
$(function () {
    "use strict";

    var articles = [{
        title: "Artikel 1",
        text: "1 Stück für 2.50€",
        id: "12315151"
    }, {
        title: "Artikel 2",
        text: "1 Stück für 3,80€",
        id: "534534534"
    }, {
        title: "Artikel 3",
        text: "1 Stück für 1,90€",
        id: "98423423"
    }];

    articles.forEach(function (article) {
        var $h2 = $("<h2></h2>").text(article.title),
            $button = $("<button></button>").text("Hinzufügen"),
            $p = $("<p></p>")
                .text(article.text + " ")
                .append($button),
            $article = $("<article></article>");

        $article
            .data("id", article.id)
            .append($h2)
            .append($p)
            .appendTo("main");
    })

    // erzeugt function je button - schlechte Performance
    //$("button").on("click", function () {
    //
    //}) ;

    // Function ist nur bei "main" hinterlegt
    $("main").click(function (event) {
        var $target = $(event.target)
        if ($target.is("button")) {
            console.log("... in den Warenkorb");
            console.log(event.target);
            console.log($target.parent().parent().data("id"));
        }
    });
});