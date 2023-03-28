
// Waits for loading all the assets

window.addEventListener('load', function() {

    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = 680
    canvas.width = 1200

    function InputHandler() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') { character.velocity.y -= 15 }
        })
        window.addEventListener('keyup',   (e) => {
            if (e.key === 'ArrowUp') { character.velocity.y = 0   }
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
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
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
        this.position.x -= 2
    }
    
    const obstacle1 = new Obstacle()

    function handleObstacles(){

    }

    function displayStats(){

    }

    function animate(){
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        character.update()
        obstacle1.moveObstacle()
    }

    animate()  
    
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






