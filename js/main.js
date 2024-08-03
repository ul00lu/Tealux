const headerBtn = document.querySelector('.header__btn')
const headerClose = document.querySelector('.header__close')
const headerList = document.querySelector('.header__menu-list')

headerBtn.addEventListener('click', () => {
	headerList.classList.toggle('header__menu-list--open')
	menuClose.classList.toggle('menu--open')
})

headerClose.addEventListener('click', () => {
	headerList.classList.remove('header__menu-list--open')
	menuClose.classList.remove('menu--open')
})
