// Waits for loading all the assets

window.addEventListener('load', function () {

    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = 680
    canvas.width = 1200

    function InputHandler() {
        this.keys = []
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key) // Push its in the array
            }
        })
        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowUp') {
                this.keys.splice(this.keys.indexOf(e.key), 1) // Removes from the array
            }
        })
    }

    const input = new InputHandler()




    // --------------------------------------------------------------- //

    const gravity = 0.1

    function Player() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 50
        this.direction = 0
    }

    Player.prototype.drawCharacter = function () {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    Player.prototype.update = function () {
        this.drawCharacter()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity
        else this.velocity.y = 0
    }

    const character = new Player()
    const keys = {
        left: { isPressed: false },
        right: { isPressed: false }
    }


    // OBSTÁCULOS

    function Obstacle() {
        this.box = document.createElement('div')
        this.boxLeft = 1200
        this.timerId
    }

    Obstacle.prototype.create = function () {
        canvas
            .appendChild(caja.box)
            .classList.add('obst')
    }

    Obstacle.prototype.move = function () {
        this.boxLeft -= 10
        caja.box.style.left = this.boxLeft + 'px'
        if (this.boxLeft < (-50)) {
            clearInterval(caja.timerId)
            canvas.removeChild(caja.box)
        }
        this.timerId = setInterval(this.move, 50)
    }

    let caja = new Obstacle

    caja.create()
    caja.move()

    function handleObstacles() {

    }

    function displayStats() {

    }

    function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        character.update()

        //keys.left.isPressed ? character.velocity.x = -5 : character.velocity.x = 0
        //keys.right.isPressed ? character.velocity.x = 5 : character.velocity.x = 0
    }

    animate()

    window.addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 37:
                console.log('left')
                keys.left.isPressed = true
                break
            case 38:
                console.log('up')
                character.velocity.y -= 10
                break
            case 39:
                console.log('right')
                keys.right.isPressed = true
                break
        }
    })

    window.addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 37:
                console.log('left')
                keys.left.isPressed = false
                break
            case 38:
                console.log('up')
                character.velocity.y = 0
                break
            case 39:
                console.log('right')
                keys.right.isPressed = false
                break
        }
    })





    // character = document.querySelector('.character')


    function Game() {

        // start() --> Loop
        // Player
        // OBSTACLES  
        // Collisions
        // control()
    }

    function Start() {

    }

    // gameover()





})


