// Waits for loading all the assets

window.addEventListener('load', function() {
    
    const canvas    = document.querySelector('canvas')
    const ctx       =   canvas.getContext('2d')

    const playerGif = document.getElementById('gif')
    const obstGif   = document.getElementById('obstGif')
    
    const gravity   =        0.1
    
    canvas.height   =      680
    canvas.width    =     1200
    let score       =        0
    const obstacles =       []

    
    
    const display = document.querySelector('.display')
    let scoreDisplay = document.createElement('p')
    display.appendChild(scoreDisplay)
    
    function InputHandler() {
        
        
        window.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowUp' && character.position.y > canvas.height - character.height) { character.velocity.y -= 8 }
        })
        window.addEventListener('keyup',   (e) => {
            if(e.key === 'ArrowUp')                                                            { character.velocity.y  = 0 }
        })
    }
    
    const input = new InputHandler()
    
    
    // --------------------------------------------------------------- //
    
    function Player(){
        this.position = { x: 100, y: 100 }
        this.velocity = { x: 0,   y: 0   }
        this.width    = 120
        this.height   = 120
    }
    
    Player.prototype.drawCharacter = function() {
        ctx.drawImage(playerGif, this.position.x, this.position.y, this.width, this.height)
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
        this.position = { x: 1100, y: 580 }
        this.velocity = { x: 0,    y: 0   }
        this.width    = 100
        this.height   = 100
    }
    
    Obstacle.prototype.drawObstacle = function() {
        ctx.drawImage(obstGif, this.position.x, this.position.y, this.width, this.height)
        
    }
    Obstacle.prototype.moveObstacle = function() {
        this.drawObstacle()
        this.position.x += this.velocity.x
        this.position.x -= (3 * score) / 2.5
        
        if (this.position.x < (this.width)*(-1)) { this.velocity = 0}
    }
    
    const generateObstacle = function() {
        let count = new Obstacle
        obstacles.push(count)
        count++
    }
    
    const timer = setInterval(() => {
        generateObstacle()
    }, 3000)

    function displayStats(){
        score = obstacles.length
        scoreDisplay.innerText = score
    }

    // ---------------------------------------------------------- //
    
    function collisions() {
        obstacles.forEach((obstacle) => {
            let charPos = character.position
            let obstPos = obstacle.position
            if  (
                charPos.x + character.width  > obstPos.x &&
                charPos.y + character.height > obstPos.y &&
                charPos.y < obstPos.y + obstacle.height &&
                charPos.x < obstPos.x + obstacle.width 
                ){
                    character.velocity = 0
                    obstacle.velocity = 0
                    clearInterval(timer)
                    gameOver()
                }        
            }
        )}

    // ---------------------------------------------------------- //
            
    function animate(){
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        character.update()
        collisions()
        displayStats()
        obstacles.forEach(obstacle => {
            obstacle.moveObstacle()
        })
    }

    // ---------------------------------------------------------- //
            
    function gameOver() {
        const wrapper = document.createElement('div')
        const mensaje = document.createElement('img')
        const restart = document.createElement('div')
        wrapper.classList.add('wrapper')
        mensaje.classList.add('game-over')
        container.appendChild(wrapper)
        container.classList.remove('cursor-off')
        wrapper.appendChild(mensaje)
        mensaje.setAttribute('src', './assets/img/gameover.png')
        
        setTimeout(() => {
            restart.classList.add('restart')
            wrapper.appendChild(restart)

            restart.innerHTML = '<span>-- RESTART --</span>'

        }, 1500)
        
        restart.addEventListener('click', function(){
            location.reload()
        })
    }
    
    // ---------------------------------------------------------- //

    function start(){
        const display   = document.querySelector('.display')
        const container = document.querySelector('#container')
        container.removeChild(display) 
        container.classList.add('cursor-off')

        const start = document.createElement('div')
        start.classList.add('start')
        document.body.appendChild(start)
    
        start.innerHTML = '<span>START</span>'
        start.addEventListener('click', function(){
            document.body.removeChild(start)
            animate()
            container.appendChild(display)
        })
    }
    start()
})







