var counter = 0;
var win = 0;
var lost = 0;

$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * (120)) + 19;
    
    
    var counter1;
    var counter2;
    var counter3;
    var counter4;


    function calcValues(){
        counter1 = Math.floor(Math.random() * (12)) + 1;
        counter2 = Math.floor(Math.random() * (12)) + 1;
        counter3 = Math.floor(Math.random() * (12)) + 1;
        counter4 = Math.floor(Math.random() * (12)) + 1;
    }

    $(".random-number").text("Random Number: " + randomNumber);

    function clear() {
        randomNumber = Math.floor(Math.random() * (120)) + 19;
        $(".random-number").text("Random Number: " + randomNumber);
        counter = 0;
        $(".counter-text").html(counter);
        calcValues();
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

    function addClickValues(value){
        value += $(this).val();
        value = parseInt(value);
        counter += value;
        run();
    }

    $(".crystal-img1").on("click", function(){
        addClickValues(counter1);
    });

    $(".crystal-img2").on("click", function () {
        addClickValues(counter2);
    });

    $(".crystal-img3").on("click", function () {
        addClickValues(counter3);
    });

    $(".crystal-img4").on("click", function () {
        addClickValues(counter4);
    });

    calcValues();
    
});