// Код написан с использованием библиотеки p5.js с опорой на наработки из примера: https://codepen.io/tjc7/pen/VRaNZG
let dots = [];
let guideDots = [];
let currentIndex = 0;
let drawingCompleted = false;

let lastPos = { x: 122, y: 240 };
let currentPos = { x: 122, y: 240 };
let dotSize = 23;

let guidePoints = [
    { x: 470 + 50, y: 320 },
    { x: 470 + 50, y: 320 },
    { x: 505 + 50, y: 440 },
    { x: 330 + 50, y: 250 },
    { x: 300 + 50, y: 314 },
    { x: 380 + 50, y: 220 },
    { x: 400 + 50, y: 316 },
    { x: 420 + 50, y: 400 },
];

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    connect(px, py) {
        stroke(0);
        strokeWeight(2);
        line(this.x, this.y, px, py);
    }
    plot(fillColor, strokeColor) {
        // fill(200);
        fill(fillColor);
        stroke(0, 120, 211);
        strokeWeight(2);
        ellipse(this.x, this.y, dotSize);
    }
    plotText(txt) {
        fill(0, 120, 211);
        stroke(200);
        textSize(20);
        textAlign(CENTER);
        text(txt, this.x, this.y + 7);
    }
    within(px, py) {
        let isWithin = false;
        let d = dist(px, py, this.x, this.y);
        isWithin = d < dotSize ? true : false;
        return isWithin;
    }
}

// подключение шрифта
let font;
function preload() {
    font = loadFont("/fonts/EuclidCircularBRegular.ttf");
}

// создание поля для рисования
function setup() {
    // let canvas = createCanvas(550, 375);
    let canvas = createCanvas(windowWidth / 2, windowHeight);
    canvas.parent('connecting_dots_canvas')
    for (let i = 1; i < guidePoints.length; i++) {
        guideDots.push(new Dot(guidePoints[i].x, guidePoints[i].y));
    }
}

function draw() {
    background(200);
    textFont(font);

    for (let i = 0; i < guideDots.length; i++) {
        guideDots[i].plot(200);
        guideDots[i].plotText(i + 1);
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].plot(0);
        if (i > 0) {
            dots[i].connect(dots[i - 1].x, dots[i - 1].y);
        }
    }

    if (currentIndex == 0) {
        fill(0);
        stroke(200);
        textSize(18);
        strokeWeight(6);
        text("Протяни провод ↑", guideDots[0].x - 74, guideDots[0].y + 36);
    }
    else if (!drawingCompleted) {
        stroke(0, 120, 211);
        strokeWeight(2);
        line(lastPos.x, lastPos.y, currentPos.x, currentPos.y);
    }
    else {
        fillVertex();
        fill(0);
        stroke(200);
        strokeWeight(5);
        textSize(18);
        text("Микрофон подключен!", guideDots[0].x - 74, guideDots[0].y + 36);
    }
}

function fillVertex() {
}


function mousePressed() {
    currentPos.x = mouseX;
    currentPos.y = mouseY;
    if (!drawingCompleted &&
        guideDots[currentIndex].within(mouseX, mouseY)) {
        dots.push(new Dot(mouseX, mouseY));
        currentIndex++;
        lastPos.x = mouseX;
        lastPos.y = mouseY;
        if (currentIndex == guideDots.length) {
            drawingCompleted = true;
        }
    }
}

function mouseMoved() {
    currentPos.x = mouseX;
    currentPos.y = mouseY;
}

function windowResized() {
    resizeCanvas(windowWidth / 2, windowHeight);
}
