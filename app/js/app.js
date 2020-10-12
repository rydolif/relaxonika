'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------SLIDER-gallery----------------------
		var mySwiper = new Swiper('.gallery__slider', {
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
			pagination: {
				el: '.gallery__pagination',
				clickable: 'true',
			},
			navigation: {
				nextEl: '.gallery__next',
				prevEl: '.gallery__prev',
			},
			breakpoints: {
				// when window width is >= 320px
				576: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				// when window width is >= 640px
				1200: {
					slidesPerView: 3,
					spaceBetween: 40
				}
			}
		});

	//----------------------SLIDER-video----------------------
		var mySwiper = new Swiper('.video__slider', {
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
			pagination: {
				el: '.video__pagination',
				clickable: 'true',
			},
			navigation: {
				nextEl: '.video__next',
				prevEl: '.video__prev',
			},
			breakpoints: {
				// when window width is >= 320px
				576: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				// when window width is >= 640px
				1200: {
					slidesPerView: 3,
					spaceBetween: 40
				}
			}
		});

	//----------------------SLIDER-reviews----------------------
		var mySwiper = new Swiper('.reviews__slider', {
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
      pagination: {
        el: '.reviews__pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass, index, total) {
					return '<span class="' + currentClass + '"> '+ index +' </span>' +
							' <div></div> ' +
							'<span class="' + totalClass + '"> '+ total +' </span>';
				},
			},
			navigation: {
				nextEl: '.reviews__next',
				prevEl: '.reviews__prev',
			},
		});

	//----------------------MODAL-----------------------
		const modals = (triggerSelector, modalSelector, closeSelector) => {
			const trigger = document.querySelectorAll(triggerSelector),
						modal = document.querySelector(modalSelector),
						close = document.querySelector(closeSelector);
	
			trigger.forEach(item => {
				item.addEventListener('click', (e) => {
					if (e.target) {
						e.preventDefault();
					}
					modal.style.display = 'flex';
					document.body.classList.add('modal--open')
				});
			})
	
			close.addEventListener('click', () => {
				modal.style.display = 'none';
				document.body.classList.remove('modal--open');
			});
	
			modal.addEventListener('click', (e) => {
				if (e.target === modal) {
					modal.style.display = 'none';
					document.body.classList.remove('modal--open');
				}
			});
	
		};
		// modals('.order__open', '.modal--order', '.modal--order .modal__close');

	//----------------------SCROLL-----------------------
		const scrollTo = (scrollTo) => {
			let list = document.querySelector(scrollTo);
			list = '.' + list.classList[0]  + ' li a[href^="#"';
	
			document.querySelectorAll(list).forEach(link => {
	
				link.addEventListener('click', function(e) {
						e.preventDefault();
						const scrollMenu = document.querySelector(scrollTo);
	
						let href = this.getAttribute('href').substring(1);
	
						const scrollTarget = document.getElementById(href);
	
						// const topOffset = scrollMenu.offsetHeight;
						const topOffset = 70;
						const elementPosition = scrollTarget.getBoundingClientRect().top;
						const offsetPosition = elementPosition - topOffset;
	
						window.scrollBy({
								top: offsetPosition,
								behavior: 'smooth'
						});
	
						
						let button = document.querySelector('.hamburger'),
								nav = document.querySelector('.header__nav'),
								header = document.querySelector('.header');
	
						button.classList.remove('hamburger--active');
						nav.classList.remove('header__nav--active');
						header.classList.remove('header--menu');
				});
			});
		};
		// scrollTo('.header__nav');

	//----------------------TABS-JS----------------------
		const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
			const header = document.querySelector(headerSelector),
						tab = document.querySelectorAll(tabSelector),
						content = document.querySelectorAll(contentSelector);

			function hideTabContent() {
				content.forEach(item => {
					item.style.display = "none";
				});

				tab.forEach(item => {
					item.classList.remove(activeClass);
				});
			}

			function showTabContent(i = 0) {
				content[i].style.display = "flex";
				tab[i].classList.add(activeClass);
			}

			hideTabContent();
			showTabContent();

			header.addEventListener('click', (e) => {
				const target = e.target;
				if (target && 
					(target.classList.contains(tabSelector.replace(/\./, '')) || 
					target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
					tab.forEach((item, i) => {
						if (target == item || target.parentNode == item) {
							hideTabContent();
							showTabContent(i);
						}
					});
				}
			});
		};
		tabs('.tabs', '.tabs__item', '.tabs__wrap', 'active');
	
	});
	