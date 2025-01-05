const burgeMenu = () => {
	const burgerBtn = document.querySelector(".header__burger");
	const burgeMenu = document.querySelector(".menu");
	const burgerLinks = document.querySelectorAll(".menu__link");
	const headerLogo = document.querySelector(".header__logo");

	const cssActiveClass = "header__burger--active";
	const cssActiveMenuClass = "menu--active";
	const cssHiddenClass = "header__logo--hidden";

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle(cssActiveClass);
		burgeMenu.classList.toggle(cssActiveMenuClass);
		headerLogo.classList.toggle(cssHiddenClass);
	});

	burgerLinks.forEach((element) => {
		element.addEventListener("click", () => {
			burgerBtn.classList.remove(cssActiveClass);
			burgeMenu.classList.remove(cssActiveMenuClass);
			headerLogo.classList.remove(cssHiddenClass);
		});
	});
};

export default burgeMenu;
