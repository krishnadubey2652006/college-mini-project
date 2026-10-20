let ball = document.getElementById("ball");

let x = 0;
let y = 0;

let speedX = 3;
let speedY = 3;

let colors = ["red", "blue", "green", "purple", "orange"];

let colorIndex = 0;

let edgeTouched = false;
let edgeTime = 0;


function moveBall() {

    x = x + speedX;
    y = y + speedY;


    // Edge touch
    if (
        x <= 0 ||
        x >= window.innerWidth - 25 ||
        y <= 0 ||
        y >= window.innerHeight - 25
    ) {

        speedX = -speedX;
        speedY = -speedY;

        // Timer sirf ek baar start hoga
        if (edgeTouched == false) {
            edgeTouched = true;
            edgeTime = Date.now();
        }
    }


    // 5 seconds ke baad color change
    if (
        edgeTouched == true &&
        Date.now() - edgeTime >= 5000
    ) {

        document.body.style.backgroundColor =
            colors[colorIndex];

        colorIndex++;

        if (colorIndex >= colors.length) {
            colorIndex = 0;
        }

        edgeTouched = false;
    }


    ball.style.left = x + "px";
    ball.style.top = y + "px";

    requestAnimationFrame(moveBall);
}

moveBall();