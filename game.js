$(".start-game").click(startGame);

function startGame() {

    var num = 2;
    while (num > 0) {
        makeFruit();
        num--;
    }
}

function makeFruit() {



    // Add fruit element
    var onion = $("<img class='fruit' />");
    var onion2 = $("<img class='fruit' />");

    // Add image source
    onion.attr("src", "image/onion1.svg");
    onion2.attr("src", "image/onion2.svg");

    // Add fruit element to the screen
    $(".game-container").append(onion,onion2);
    // Generate random number for x position
    var xPos = getRandomInt(0, 750);
    var xPos2 = getRandomInt(0, 750);
    onion.css("left", xPos + "px");
    onion2.css("left", xPos2 + "px");

    onion.css("top", "-100px");
    onion2.css("top", "-100px");
    // Get random animation interval
    var speed = getRandomInt(8000, 10000);

    // Start animation
    onion.animate({"top": "560px"}, speed, "swing", makeFruit);
    onion2.animate({"top": "560px"}, speed, "swing", makeFruit);


    // Add click listener for fruits
    onion.click(fruitClick);

    function fruitClick() {
        var fruitPoints = Number($(this).attr("data-points"));
        points = points + fruitPoints;
        $(".points-text").text(points);
        $(this).remove();
    }

}

// This function is given to you; you do not need to change anything below this line
// To use this function, define the mininum and maximum number for the range you want a random number from
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
