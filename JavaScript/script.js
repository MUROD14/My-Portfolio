let menuBtn = document.querySelector('.menu-btn')
let navigation = document.querySelector('.navigation-item')
let navigationItems = document.querySelectorAll('.navigation-item a')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-activ')
    navigation.classList.toggle('menu-activ')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('menu-activ')
      navigation.classList.remove('menu-activ')
    })
  })
  
const scrollBtn = document.querySelector('.scrollToTop-btn')
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('active', window.scrollY > 333)
})
scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})