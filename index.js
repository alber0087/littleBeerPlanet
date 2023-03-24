const character = document.querySelector('.character')
let bottom = 0

function jump() {
    bottom += 200
    character.style.bottom = bottom + 'px'
}

function controls(e) {
    switch(e.code) {
        case 37:

            break
        case 39:

            break
        case 32 :
            jump()
            break
    }
}

document.addEventListener('keydown', controls)
