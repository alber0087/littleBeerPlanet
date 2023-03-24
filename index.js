document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character')
    let isJumping = false
    let isGoingRight = false
    let isGoingLeft = false
    let bottom = 0
    let gravity = 0.9
    let left = 0
    let leftTimerId
    let rightTimerId

    function jump() {
        //jump up
        isJumping = true
        bottom += 30
        bottom = bottom * gravity
        character.style.bottom = bottom + 'px'
    }

    function moveLeft() {
            left -= 5
            character.style.left = left + 'px'
    }

    function moveRight() {
        left += 5    
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

