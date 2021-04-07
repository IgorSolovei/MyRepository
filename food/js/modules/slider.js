function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
	//!Slider

	const slides = document.querySelectorAll(slide);
	const slider = document.querySelector(container);
	const prev = document.querySelector(prevArrow);
	const next = document.querySelector(nextArrow);
	const total = document.querySelector(totalCounter);
	const current = document.querySelector(currentCounter);
	const slidesWrapper = document.querySelector(wrapper);
	const slidesField = document.querySelector(field);
	const width = window.getComputedStyle(slidesWrapper).width;


	let slideIndex = 1;
	let offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`; //? Добовляем "0" перед счетчиком
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.7s all';

	slidesWrapper.style.overflow = 'hidden'; //? скрываем показ лишних слайдов


	slides.forEach(slide => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol');
	const dots = [];
	indicators.classList.add('carousel-indicators');
	indicators.style.cssText = `
	position: absolute;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 15;
	display: flex;
   justify-content: center;
   margin-right: 15%;
   margin-left: 15%;
   list-style: none;
	`;

	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.style.cssText = `
			box-sizing: content-box;
   flex: 0 1 auto;
   width: 30px;
   height: 6px;
   margin-right: 3px;
   margin-left: 3px;
   cursor: pointer;
   background-color: #000000;
   background-clip: padding-box;
   border-top: 10px solid transparent;
   border-bottom: 10px solid transparent;
   opacity: .5;
   transition: opacity .6s ease;
		`;
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);

	}


	const dotsStyleSwitch = function () {
		dots.forEach(dot => dot.style.opacity = '.2');
		dots[slideIndex - 1].style.opacity = 1;
	};

	const slideIndexCurrent = function () {
		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	};

	function deletNotDigits(str) {
		return +str.replace(/\D/g, ''); // ? Обрезаем 'px' регулярным выражением оставляем только цифры
	}

	next.addEventListener('click', () => {
		if (offset == deletNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deletNotDigits(width);
		}
		slidesField.style.transform = `translateX(-${offset}px)`; // ? Смещение по оси X

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		slideIndexCurrent();
		dotsStyleSwitch();
	});


	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = deletNotDigits(width) * (slides.length - 1);
		} else {
			offset -= deletNotDigits(width);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		slideIndexCurrent();
		dotsStyleSwitch();
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');
			slideIndex = slideTo;
			offset = deletNotDigits(width) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;

			slideIndexCurrent();
			dotsStyleSwitch();

		});
	});


	// showSlides(slideIndex);

	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`; //? Добовляем "0" перед счетчиком
	// } else {
	// 	total.textContent = slides.length;
	// }

	// function showSlides(n) {
	// 	if (n > slides.length) {
	// 		slideIndex = 1;
	// 	}

	// 	if (n < 1) {
	// 		slideIndex = slides.length;
	// 	}

	// 	slides.forEach(item => item.style.display = 'none');

	// 	slides[slideIndex - 1].style.display = 'block';

	// 	if (slides.length < 10) {
	// 		current.textContent = `0${slideIndex}`;
	// 	} else {
	// 		current.textContent = slides.length;
	// 	}
	// }

	// function plusSlides(n) {
	// 	showSlides(slideIndex += n);
	// }

	// prev.addEventListener('click', () => {
	// 	plusSlides(-1);
	// });

	// next.addEventListener('click', () => {
	// 	plusSlides(1);
	//});
}

export default slider;