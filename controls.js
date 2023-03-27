export default function Control () {

    function jump() {
        let upTimerId = setInterval(function () {
            // Jump down
            if (bottom > 49) {
                clearInterval(upTimerId)
                let downTimerId = setInterval(function () {
                    if (bottom < 50) {
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
        if (left > 0) {
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

    function control(e) {
        if (e.keyCode === 39) { moveRight() }
        if (e.keyCode === 32) { jump() }
        if (e.keyCode === 37) { moveLeft() }
    }

    document.addEventListener('keydown', control)
}
