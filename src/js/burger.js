const burgeMenu = () => {
	const headerElem = document.querySelector('.header');
	const burgeMenuElem = document.querySelector('.menu');
	const mainElem = document.querySelector('.main');
	const burgerBtn = document.querySelector('.header__burger');
	const burgerLinks = document.querySelectorAll('.menu__link');
	const footerElem = document.querySelector('.footer');

	const cssActiveMenuClass = 'menu--active';
	const cssBurgerIsActive = 'header--burger';

	if (!headerElem && !burgeMenuElem) return;

	burgerBtn.addEventListener('click', () => {
		headerElem.classList.toggle(cssBurgerIsActive);
		burgeMenuElem.classList.toggle(cssActiveMenuClass);
		mainElem.classList.toggle('is-hidden');
		footerElem.classList.toggle('is-hidden');
	});

	burgerLinks.forEach((element) => {
		element.addEventListener('click', () => {
			headerElem.classList.remove(cssBurgerIsActive);
			burgeMenuElem.classList.remove(cssActiveMenuClass);
			mainElem.classList.remove('is-hidden');
			footerElem.classList.remove('is-hidden');
		});
	});
};

export default burgeMenu;
