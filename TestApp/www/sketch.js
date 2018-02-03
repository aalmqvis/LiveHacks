var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];
var red;
var green;
var blue;


/////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    red = color (228, 34, 17);
    green = color (0, 119, 64);
    blue = color (1, 73, 118);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
    background(32);
    for (var particleA = 0; particleA < mass.length; particleA++) {
        var accelerationX = 0, accelerationY = 0;

        for (var particleB = 0; particleB < mass.length; particleB++) {
            if (particleA != particleB) {
                var distanceX = positionX[particleB] - positionX[particleA];
                var distanceY = positionY[particleB] - positionY[particleA];

                var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance < 1) distance = 1;

                var force = (distance - 320) * mass[particleB] / distance;
                accelerationX += force * distanceX;
                accelerationY += force * distanceY;
            }
        }

        velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
        velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
    }

    for (var particle = 0; particle < mass.length; particle++) {
        positionX[particle] += velocityX[particle];
        positionY[particle] += velocityY[particle];

        ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////


function addNewParticle() {
    mass.push(random(0.003, 0.03));
    positionX.push(mouseX);
    positionY.push(mouseY);
    velocityX.push(0);
    velocityY.push(0);
    //fill (red);
    fill (green);
    //fill (blue);
}


// function addNewParticlered() {
//     mass.push(random(0.003, 0.03));
//     positionX.push(mouseX);
//     positionY.push(mouseY);
//     velocityX.push(0);
//     velocityY.push(0);
//     fill (red);
//     //fill (green);
//     //fill (blue);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
    addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
    // addNewParticlered();
}
