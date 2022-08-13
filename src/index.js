import "./styles/index.scss"

// legende_carte BUTTONS  // previsions / vent / uv
const legende_carte = document.querySelectorAll('.legende_carte>div')
const carte = document.querySelector('.carte')

legende_carte.forEach(el => {
    // Change btns icons & colors
    el.addEventListener('mouseup', () => {
        legende_carte.forEach(x => {
            x.classList.remove('legende-active')
            x.children[0].src = x.children[0].src.includes('on') ? x.children[0].src.replace('on', 'off') : x.children[0].src
        })
        el.classList.add('legende-active')
        el.children[0].src = el.children[0].src.replace('off', 'on')

        // Change maps
        switch (el.id) {
            case "legende_carte_prev":
                carte.style.backgroundImage = 'url("./assets/img/carte/map_prev.png")'
                break
            case "legende_carte_vent":
                carte.style.backgroundImage = 'url("./assets/img/carte/map_vent.png")'
                break
            case "legende_carte_uv":
                carte.style.backgroundImage = 'url("./assets/img/carte/map_uv.png")'
                break
        }
    })
})


// card_multi A LA UNE
const ul = document.querySelector('.card_multi_ul')
const dots = document.querySelectorAll('.dot')
const dot_posX = [0, 100, 200, 300]

dots.forEach((dot, i) => {
    dot.addEventListener('mouseup', () => {
        dots.forEach(x => {
            x.classList.remove('dot-active')
        })
        dot.classList.add('dot-active')
        ul.style.left = `-${dot_posX[i]}%`
    })
})

// Menu burger
const burger_menu = document.querySelector('#burger_menu')
const sidebar = document.querySelector('.sidebar_page')
const overlay = document.querySelector('.sidebar_overlay')
let burgerActive = false

burger_menu.addEventListener('mouseup', () => {
    burgerActive = !burgerActive

    if (burgerActive) {
        console.log('active')
        sidebar.classList.add('sidebar-active')
        overlay.style.display = 'flex'
        overlay.style.opacity = 1
    }
})

overlay.addEventListener('mouseup', () => {
    burgerActive = !burgerActive

    if (!burgerActive) {
        console.log('inactive')
        sidebar.classList.remove('sidebar-active')
        overlay.style.display = 'none'
        overlay.style.opacity = 0
    }
})