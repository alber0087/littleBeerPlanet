document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character')
    
    let isJumping = false
    let isGoingRight = false
    let isGoingLeft = false

    let bottom = 50
    let gravity = 0.9
    let left = 20
    let leftTimerId
    let rightTimerId
    let upTimerId
    let container

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
// IMPLEMENTAR Set Interval
            isJumping = true
            bottom += 100
            bottom = bottom * gravity
            character.style.bottom = bottom + 'px'
        }, 30)
    }

    function moveLeft() {
// IMPLEMENTAR Set Interval y keyUp
        isGoingLeft = true
        if(left>0){
            left -= 20
            character.style.left = left + 'px'            
        }
    }

    function moveRight() {
// IMPLEMENTAR Set Interval y keyUp
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        if (left < 1100) {
            left += 20    
                character.style.left = left + 'px' 
        }    
    }
    

    //assign functions to keycodes
    function control(e) {
        if (e.keyCode === 39) {
            moveRight() //if we press the right arrow on our keyboard
        }
        if (e.keyCode === 32) {
            jump() // if we press space
        }
        if (e.keyCode === 37){ 
            moveLeft() // if we press left
        }
    }
    document.addEventListener('keydown', control)
})

