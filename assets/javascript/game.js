var counter = 0;
var win = 0;
var lost = 0;

$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var counter1 = Math.floor(Math.random() * (13 - 1)) + 1;
    var counter2 = Math.floor(Math.random() * (13 - 1)) + 1;
    var counter3 = Math.floor(Math.random() * (13 - 1)) + 1;
    var counter4 = Math.floor(Math.random() * (13 - 1)) + 1;

    $(".random-number").text("Random Number: " + randomNumber);
    randomNumber = parseInt(randomNumber);

    function clear() {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".random-number").text("Random Number: " + randomNumber);
        counter = 0;
        $(".counter-text").html(counter);
        counter1 = Math.floor(Math.random() * (13 - 1)) + 1;
        counter2 = Math.floor(Math.random() * (13 - 1)) + 1;
        counter3 = Math.floor(Math.random() * (13 - 1)) + 1;
        counter4 = Math.floor(Math.random() * (13 - 1)) + 1;
    }

    function run() {
        if (counter < randomNumber) {
            $(".counter-text").html(counter);
        }
        if (counter > randomNumber) {
            lost++;
            $(".lost-text").text("Lost: " + lost);
            $(".counter-text").html(counter);
            setTimeout(function () {
                clear();
            }, 1000);
        }
        if (counter === randomNumber) {
            win++;
            $(".win-text").text("Wins: " + win);
            $(".counter-text").html(counter);
            setTimeout(function () {
                clear();
            }, 1000);
        }
    };

    $(".crystal-img1").on("click", function () {
        counter1 += $(this).val();
        counter1 = parseInt(counter1);
        counter += counter1;
        run();
    });

    $(".crystal-img2").on("click", function () {
        counter2 += $(this).val();
        counter2 = parseInt(counter2);
        counter += counter2;
        run();
    });

    $(".crystal-img3").on("click", function () {
        counter3 += $(this).val();
        counter3 = parseInt(counter3);
        counter += counter3;
        run();
    });

    $(".crystal-img4").on("click", function () {
        counter4 += $(this).val();
        counter4 = parseInt(counter4);
        counter += counter4;
        run();
    });
});