const character = document.querySelector('.character')

let isJumping = false
let isGoingRight = false
let isGoingLeft = false
let bottom = 50
let left = 20
let leftTimerId
let rightTimerId
let gravity = 0.9


// PLANTEAMIENTO: CREAR VARIABLES PARA X E Y (POS) PARA SALTO Y MOVIMIENTO

function jump() {
    let upTimerId = setInterval(function() {
        // Jump down
        if (bottom >  49) {
            clearInterval(upTimerId)
            let downTimerId = setInterval(function() {
                if (bottom < 50){
                    clearInterval(downTimerId)
                    isJumping = false
                }
                bottom = bottom * gravity
                character.style.bottom = bottom + 'px'
            }, 30)
        }
        //jump up
        isJumping = true
        bottom += 100
        bottom = bottom * gravity
        character.style.bottom = bottom + 'px'
    }, 30)
}

function moveLeft() {
    isGoingLeft = true
    if(left>0){
        left -= 20
        character.style.left = left + 'px'            
    }
}

function moveRight() {
    if (isGoingLeft) {
        clearInterval(leftTimerId)
        isGoingLeft = false
    }
    if (left < 1100) {
        left += 20    
        character.style.left = left + 'px' 
    }    
}

function control(e) {
    if (e.keyCode === 39) { moveRight() }
    if (e.keyCode === 32) { jump()      }
    if (e.keyCode === 37) { moveLeft()  }
}

document.addEventListener('keydown', control)


function Game() {
    // start()
    // gameover()
    // control()
    // OBSTACLES
    
}

// OBSTÁCULOS
const canvas = document.querySelector('#canvas') 

var boxLeft = 1200
var obstacles = []

function Obstacle() {
    this.box = document.createElement('div')
    this.boxLeft = 1200
    this.timerId
    
}

Obstacle.prototype.create = function() {
    canvas
        .appendChild(caja.box)
        .classList.add('obst')
}

Obstacle.prototype.move = function() {
    this.boxLeft -= 10  
    caja.box.style.left = this.boxLeft + 'px'
    if (this.boxLeft < (50)) {
        clearInterval(caja.timerId)
        canvas.removeChild(caja.box)
    }
    this.timerId = setInterval(this.move, 50)
}

setInterval(function(){
    var caja = new Obstacle
    caja.create()
    caja.move()

}, 1500)








