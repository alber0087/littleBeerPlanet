const character = document.querySelector('.character')

let isJumping = false
let isGoingRight = false
let isGoingLeft = false

let bottom = 50
let left = 20
let leftTimerId
let rightTimerId
let upTimerId
let container
let gravity = 0.9


// PLANTEAMIENTO: CREAR VARIABLES PARA X E Y (POS) PARA SALTO Y MOVIMIENTO

    //obstacles
/*     function createObstacle() {
        let obstacles =document.createElement('div')
        container.appendChild(obstacles)
        obstacles.classList.add('obst')
        obstacles.style.left = container.bottom + 'px'
    }

    createObstacle() */

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

// OBSTÁCULOS
const canvas = document.querySelector('#canvas')
const box    = document.createElement('div')

function addObst() {
    canvas
        .appendChild(box)
        .classList.add('obst')
    }

addObst()



