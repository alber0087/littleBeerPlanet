document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character')
    let isJumping = false

    let bottom = 50
    let gravity = 0.9
    let left = 20
    let leftTimerId
    let rightTimerId
    let upTimerId
    

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
        left -= 20
        character.style.left = left + 'px'
    }

    function moveRight() {
        left += 20    
        character.style.left = left + 'px'  
    }
    

    //assign functions to keycodes
    function control(e) {
        if (e.keyCode === 39) {
            moveRight() //if we press the right arrow on our keyboard
        } else if (e.keyCode === 32) {
            jump() // if we press space
        } else if (e.keyCode === 37){ 
            moveLeft() // if we press left
        }
        console.log(e)
    }
    document.addEventListener('keyup', control)
})

