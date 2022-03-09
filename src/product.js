/* eslint-disable keyword-spacing */
// select Dom Items

const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('.menu-nav')

let showMenu = false // set initial show menu state

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu () {
  if(!showMenu) {
    menuBtn.classList.add('close') // Change hamburger into X
    menuNav.classList.add('show') // Show hidden Nav Links

    showMenu = true // Set menu state
  } else {
    menuBtn.classList.remove('close') // Change X into hamburger
    menuNav.classList.remove('show') // Hide Nav Links

    showMenu = false // Set menu state
  }
}
