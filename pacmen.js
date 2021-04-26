var pos = 0;

const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
const pacMen = [];
// Array that holds PacMen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale,
    };
};
    // Factory to make PacMan at a random position with random velocity
function makePac() {

    // Returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    let open = false;
    
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');

    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;
    
    // Position set below
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    
    // Add new Child image to game
    game.appendChild(newimg);
    
    // Return details in an object
    return {
        position,
        velocity,
        newimg,
        open
    };
};

function update() {
    
    // Loop over PacMen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    
    // detect collision with all walls and make PacMan bounce
    if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
        item.position.x < 0) {
            item.velocity.x = -item.velocity.x;
         };

    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y < 0) {
            item.velocity.y = -item.velocity.y;
        };        
};

// Will add a new PacMan
function makeOne() {
    pacMen.push(makePac()); 
};