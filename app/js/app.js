// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	// Custom JS

	// аккордеон на станице Home и About
	function accordionInit (list) {
		let wrap = list
		if (!wrap) {
			return
		}
		wrap.addEventListener('click', function (e) {
			if(e.target.classList.contains('accordion__item-title')) {
				let openedElement = document.querySelector('.accordion__item.open')
				openedElement.classList.remove('open')
				e.target.parentElement.classList.add('open')
			}
		})
	}
	accordionInit (document.querySelector('.accordion'))


	// слайдер статей на странице Home
	function blogPreviwSlider () {
		let swiper = new Swiper(".blog-preview__slider", {
			slidesPerView: 3,
			spaceBetween: 24,
			pagination: {
			  clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1
				  },
				  768: {
					slidesPerView: 2
				  },
				  992: {
					slidesPerView: 3
				  }
			}
		  });
	}
	blogPreviwSlider ()

	// мобильное меню
	function mobMenuToggle () {
		let btn = document.querySelector('.header__navigation-btn-menu')
		let menu = document.querySelector(btn.dataset.toggle)
			btn.addEventListener('click', function (e) {
				btn.classList.toggle('active')
				menu.classList.toggle('active')
			})
	}
	mobMenuToggle ()


	// фильтрация по категориям на странице Blog
	function blogCategoryToggle () {
		let categories = document.querySelector('.blog__categories')
		if (!categories) {
			return
		}
		let articles = document.querySelectorAll('.article-thumbnail')
		let activeCategory = document.querySelector('.blog__categories-btn.active').dataset.category
		categories.addEventListener('click', function (e) {
			if (e.target.classList.contains('blog__categories-btn')) {
				document.querySelector('.blog__categories-btn.active').classList.remove('active')
				e.target.classList.add('active')
				activeCategory = e.target.dataset.category

				sortArticles (activeCategory, articles)
			}
		})

		function sortArticles (category, articles) {
			for (let i = 0; i < articles.length; i++) {
				console.log(articles.length)
				if ((category === articles[i].dataset.category) || category === 'all') {
					articles[i].parentElement.style.display = ""
				} else {
					articles[i].parentElement.style.display = "none"
				}
			}
		}
	}
	blogCategoryToggle ()


	// функция появления попапа
	function joinWaitlist (formSelector) {

		let form = document.querySelector(formSelector)
		if (!form) {
			return
		}
		let popup = document.querySelector(form.dataset.popup)
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			
			popup.classList.add('active')
		})
		popup.addEventListener('click', function (e) {
			if (e.target.classList.contains('popup__btn')) {
				e.currentTarget.classList.remove('active')
			}
		})
	}
	joinWaitlist ('.waitlist__form')




})
