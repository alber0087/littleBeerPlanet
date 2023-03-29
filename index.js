
// Waits for loading all the assets

window.addEventListener('load', function() {

    const canvas = document.querySelector('canvas')

    const ctx = canvas.getContext('2d')
    canvas.height = 680
    canvas.width = 1200

    function InputHandler() {
        let isJumping = false
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' && !isJumping) { 
                character.velocity.y -= 15 
            }
        })
        window.addEventListener('keyup',   (e) => {
            if (e.key === 'ArrowUp') { 
                character.velocity.y = 0
            }
        })
    }

    const input = new InputHandler()


    // --------------------------------------------------------------- //

    const gravity = 0.1

    function Player(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 100
        this.height = 100
    }
    
    Player.prototype.drawCharacter = function() {
        ctx.beginPath()
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // ctx.drawImage(image, this.position.x, this.position.y, this.width, this.height)

    }

    Player.prototype.update = function() {
        this.drawCharacter()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity 
        else this.velocity.y = 0
    }

    const character = new Player()

    
    // OBSTÁCULOS
    
    function Obstacle() {
        this.position = {
            x: 1100,
            y: 580
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 100
        this.height = 100
    }
    
    Obstacle.prototype.drawObstacle = function() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    Obstacle.prototype.moveObstacle = function() {
        this.drawObstacle()
        this.position.x += this.velocity.x
        this.position.x -= 3

        if (this.position.x < (this.width)*(-1)) { this.velocity = 0}
    }
    
    const obstacle1 = new Obstacle()
    const obstacle2 = new Obstacle()
    const obstacle3 = new Obstacle()

    obstacle2.position.x = 1800
    obstacle3.position.x = 2400


    console.log(obstacle1.position.x)
    console.log(obstacle2.position.x)

    function handleObstacles(){
        // let obstaclesArray = []
    }

    function displayStats(){

    }

    function animate(){
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        character.update()
        obstacle1.moveObstacle()
        obstacle2.moveObstacle()
        obstacle3.moveObstacle()


        collisions()
        
    }
    
    function collisions() {

        let charPos = character.position
        let obstPos = obstacle1.position
        
        if  (
            charPos.x + character.width  > obstPos.x &&
            charPos.y + character.height > obstPos.y &&
            charPos.y < obstPos.y + obstacle1.height &&
            charPos.x < obstPos.x + obstacle1.width 
            ){
                character.velocity = 0
                obstacle1.velocity = 0
                gameOver()
            }        
    }
        
        
    function gameOver() {
        
        const container = document.querySelector('#container')

        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        const mensaje = document.createElement('img')
        mensaje.classList.add('game-over')
        mensaje.setAttribute('src', './assets/img/gameover.png')

        container.appendChild(wrapper)
        wrapper.appendChild(mensaje)

        const restart = document.createElement('div')

        setTimeout(() => {
            restart.classList.add('restart')
            wrapper.appendChild(restart)

            restart.innerHTML = '<span>-- RESTART --</span>'

        }, 1500)
        
        restart.addEventListener('click', function(){
            location.reload()
        })
    }
    
    function start(){
        const start = document.createElement('div')
        start.classList.add('start')
        document.body.appendChild(start)
    
        start.innerHTML = '<span>START</span>'
        start.addEventListener('click', function(){
            document.body.removeChild(start)
            animate()
        })
    }

    start()

})







