var canvas = new fabric.Canvas("myCanvas");
playerX = 10;
playerY = 10;
heroWidth = 30;
heroHeight = 30;
var playerObject = "";
var heroObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(IMG){
        playerObject = IMG;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY, left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(IMG){
        heroObject = IMG;
        heroObject.scaleToWidth(heroWidth);
        heroObject.scaleToHeight(heroHeight);
        heroObject.set({
            top: playerY, left: playerX
        });
        canvas.add(heroObject);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift keys pressed");
        heroWidth = heroWidth + 10;
        heroHeight = heroHeight + 10;
        document.getElementById("current_width").innerHTML = heroWidth;
        document.getElementById("current_height").innerHTML = heroWidth;
    }
    if (e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift keys pressed");
        heroWidth = heroWidth - 10;
        heroHeight = heroHeight - 10;
        document.getElementById("current_width").innerHTML = heroWidth;
        document.getElementById("current_height").innerHTML = heroWidth;
    }
    if (keyPressed == "38") {
        up();
        console.log("up key pressed");
    }
    if (keyPressed == "37") {
        left();
        console.log("left key pressed");
    }
    if (keyPressed == "39") {
        right();
        console.log("right key pressed");
    }
    if (keyPressed == "40") {
        down();
        console.log("down key pressed");
    }
    if (keyPressed == "83") {
        newImage("spiderman_face.png");
        console.log("s key pressed");
    }
    if (keyPressed == "72") {
        newImage("hulk_body.png");
        console.log("h key pressed");
    }
    if (keyPressed == "84") {
        newImage("thor_right_hand.png");
        console.log("t key pressed");
    }
    if (keyPressed == "67") {
        newImage("captain_america_left_hand.png");
        console.log("c key pressed");
    }
    if (keyPressed == "73") {
        newImage("ironman_legs.png");
        console.log("i key pressed");
    }
    if (keyPressed == "70") {
        newImage("ironman_face.png");
        console.log("f key pressed");
    }
    if (keyPressed == "76") {
        newImage("hulk_legs.png");
        console.log("l key pressed");
    }
    if (keyPressed == "66") {
        newImage("spiderman_body.png");
        console.log("b key pressed");
    }

}