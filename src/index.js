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

// Menu Climat & Actus
const btn_climat = document.querySelector('#btn_climat')
const btn_actus = document.querySelector('#btn_actus')
const btns = document.querySelectorAll('.menu_icon')
const menu_climat = document.querySelector('#menu_climat')
const menu_actus = document.querySelector('#menu_actus')
const menus = [menu_climat, menu_actus]
let menuHeight = 0
let target = null

btns.forEach(el => el.addEventListener('mouseover', (e) => {
    if (el === btn_climat) {
        console.log('btn_climat')
        target = menu_climat
        target.style.display = 'flex'
    } else if (el === btn_actus) {
        target = menu_actus
        target.style.display = 'flex'
    } else {
        target = null
    }
    menuHeight = target ? target.offsetHeight : 0
    console.log('HEIGHT', menuHeight)
    showMenu(target)
}))

function observerClientY(e) {
        console.log('target:', e.target)
        if (e.clientY > menuHeight + 165 || e.clientY < 120) {
            target = null
            showMenu(target)
            menuHeight = 0
        }

}

function showMenu(target) {
    if (target === null) {
        console.log('CLOSE')
        menus.forEach(el => {
            el.style.opacity = 0
            setTimeout(() => el.style.display = 'none', 500)
            window.removeEventListener('mousemove', observerClientY, true)
        })

    } else {
        console.log('OPEN')
        const close = menus.filter(x => x !== target)[0]
        close.style.display = 'none'
        target.style.opacity = 1
        window.addEventListener('mousemove', observerClientY,true)
    }
}


// Menu burger
const burger_menu = document.querySelector('#burger_menu')
const burger_menu_top = document.querySelector('#burger_menu_top')
const burger = [burger_menu, burger_menu_top]
const sidebar = document.querySelector('.sidebar_page')
const overlay = document.querySelector('.sidebar_overlay')
let burgerActive = false

burger.forEach(el => el.addEventListener('mouseup', () => {
    burgerActive = !burgerActive

    if (burgerActive) {
        console.log('active')
        sidebar.classList.add('sidebar-active')
        overlay.style.display = 'flex'
        overlay.style.opacity = 1
    }
}))

overlay.addEventListener('mouseup', () => {
    burgerActive = !burgerActive

    if (!burgerActive) {
        console.log('inactive')
        sidebar.classList.remove('sidebar-active')
        overlay.style.display = 'none'
        overlay.style.opacity = 0
    }
})