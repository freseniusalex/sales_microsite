/* Main Js Start */

(function ($) {
	'use strict';

	$(document).ready(function () {
		// odometer init
		if ($('.odometer').length) {
			var odo = $('.odometer');
			odo.each(function () {
				var od = new Odometer({
					el: this,
					value: 0,
					format: 'ddd',
					theme: 'default'
				});
				$(this).appear(function () {
					var countNumber = $(this).attr('data-count');
					od.update(countNumber);
				});
			});
		}

		// sticky header
		$(window).on('scroll', function () {
			if ($(window).scrollTop() >= 60) {
				$('.header').addClass('fixed-header');
			} else {
				$('.header').removeClass('fixed-header');
			}
		});

		new WOW().init();

		var swiper = new Swiper('.mySwiperSliderCompany', {
			slidesPerView: 3, // Show 5 slides by default
			spaceBetween: 0, // Space between slides
			loop: true, // Enable infinite loop
			autoplay: {
				delay: 3000, // Auto slide every 3 seconds
				disableOnInteraction: false, // Continue autoplay after user interaction
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'none', // Remove pagination
			},
			breakpoints: {
				// When the viewport width is 768px or less (mobile view)
				768: {
					slidesPerView: 4, // Show 2 slides on mobile
					spaceBetween: 0, // Smaller space between slides on mobile
				},
				// You can add more breakpoints if needed, e.g. tablet (1024px)
				1024: {
					slidesPerView: 5, // Show 4 slides on tablet
					spaceBetween: 0, // Adjust space between slides for tablet
				},
				// You can add more breakpoints if needed, e.g. tablet (1024px)
				1524: {
					slidesPerView: 5, // Show 4 slides on tablet
					spaceBetween: 200, // Adjust space between slides for tablet
				},
			},
		});

		var swiper2 = new Swiper('.mySwiper', {
			loop: true, // Enable infinite loop
			autoplay: {
				delay: 3000, // Auto slide every 3 seconds
				disableOnInteraction: false, // Continue autoplay after user interaction
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		var swiper3 = new Swiper('.testiomnial2', {
			slidesPerView: 1, // Show 5 slides by default
			spaceBetween: 0, // Space between slides
			loop: true, // Enable infinite loop
			autoplay: {
				delay: 3000, // Auto slide every 3 seconds
				disableOnInteraction: false, // Continue autoplay after user interaction
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			breakpoints: {
				// When the viewport width is 768px or less (mobile view)
				450: {
					slidesPerView: 2, // Show 2 slides on mobile
					spaceBetween: 22, // Smaller space between slides on mobile
				},
			},
		});

		function setupVideoPlayer(videoId, playButtonId, options = {}) {
			const video = document.getElementById(videoId);
			const playButton = document.getElementById(playButtonId);

			if (video && playButton) {
				playButton.addEventListener('click', function () {
					if (video.paused) {
						video.play();
						video.classList.add(options.playingClass || 'playing');
					}
				});

				video.addEventListener('click', function () {
					if (!video.paused) {
						video.pause();
						video.classList.remove(options.playingClass || 'playing');
					}
				});

				video.addEventListener('play', function () {
					playButton.style.display = 'none';
				});

				video.addEventListener('pause', function () {
					playButton.style.display = 'block';
				});
			} else {
				console.error(
					`Unable to find elements with IDs: videoId=${videoId}, playButtonId=${playButtonId}`
				);
			}
		}
		// setupVideoPlayer('my-video', 'play-button', { playingClass: 'playing' });
		// setupVideoPlayer('my-video-banner', 'play-button-banner', {
		// 	playingClass: 'playing',
		// });
	});
})(jQuery);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Select all `.content` elements
const sections = document.querySelectorAll('.row');

// Loop through each section and add animations
sections.forEach((content) => {
	gsap.fromTo(
		content,
		{ opacity: 0, y: 50 }, // Start values
		{
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: content, // Element to watch
				start: 'top 90%', // Trigger animation when the top of the element reaches 80% of the viewport height
				toggleActions: 'play none none reverse', // Actions: onEnter, onLeave, onEnterBack, onLeaveBack
			},
		}
	);
});

// Select all `.content` elements
const projectList = document.querySelectorAll('.row');

// Loop through each content and add left-to-right animation
projectList.forEach((content, index) => {
	// Alternate animations for even and odd sections
	const animation =
		index % 2 === 0
			? { opacity: 1, x: 0 } // Left-to-right
			: { opacity: 1, y: 0 }; // Fade and slide up

	gsap.fromTo(
		content,
		index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, y: 50 }, // Start values
		{
			...animation,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: content,
				start: 'top 80%',
			},
		}
	);
});

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);

	// Section title animation
	gsap.from('.section-title', {
		scrollTrigger: {
			trigger: '.section-title',
			start: 'top 85%', // Start when the title is in the viewport
			toggleActions: 'play none none reverse',
		},
		opacity: 0, // Start invisible
		y: -50, // Slide in from above
		duration: 1, // Animation duration
		ease: 'power2.out', // Smooth easing
	});

	// Subtitle animation
	gsap.from('.section-subtitle', {
		scrollTrigger: {
			trigger: '.section-subtitle',
			start: 'top 85%',
			toggleActions: 'play none none reverse',
		},
		opacity: 0,
		y: 50, // Slide in from below
		duration: 1.2,
		delay: 0.3, // Delay for better timing with the title
		ease: 'power2.out',
	});

	// Profile image animation
	gsap.from('.my-profile-wrap', {
		scrollTrigger: {
			trigger: '.my-profile-wrap',
			start: 'top 85%',
			toggleActions: 'play none none reverse',
		},
		opacity: 0,
		scale: 0.8, // Start with a smaller scale
		duration: 1.5,
		ease: 'elastic.out(1, 0.5)', // Elastic bounce effect
	});

	// Text content animation
	gsap.from('.content', {
		scrollTrigger: {
			trigger: '.content',
			start: 'top 85%',
			toggleActions: 'play none none reverse',
		},
		opacity: 0,
		y: 30, // Slide in from below
		duration: 1,
		stagger: 0.3, // Stagger the animation for each line
		ease: 'power3.out',
	});

	// Swiper slider animation
	gsap.from('.swiper-slide', {
		scrollTrigger: {
			trigger: '.swiper-wrapper',
			start: 'top 85%',
			toggleActions: 'play none none reverse',
		},
		opacity: 0,
		x: 50, // Slide in horizontally
		duration: 1,
		stagger: 0.2, // Stagger between slides
		ease: 'power3.out',
	});

	// Hover effect for swiper slides
	const slides = document.querySelectorAll('.swiper-slide');
	slides.forEach((slide) => {
		slide.addEventListener('mouseenter', () => {
			gsap.to(slide, {
				scale: 1.1, // Slight zoom on hover
				duration: 0.3,
				boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Add shadow
			});
		});
		slide.addEventListener('mouseleave', () => {
			gsap.to(slide, {
				scale: 1, // Reset scale
				duration: 0.3,
				boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Reset shadow
			});
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const sections = [
		'banner',
		'testimonials',
		'recent-project',
		'about-me',
		'innovation',
		'faq'
	]; // Specific IDs for your sections
	const navLinks = document.querySelectorAll('.menu ul li a');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Remove active class from all links
					navLinks.forEach((link) => link.classList.remove('active'));

					// Add active class to the current section's link
					const activeLink = document.querySelector(
						`.menu ul li a[href="#${entry.target.id}"]`
					);
					if (activeLink) {
						activeLink.classList.add('active');
					}
				}
			});
		},
		{
			threshold: 0.6, // Trigger when 60% of the section is visible
		}
	);

	// Observe sections by specific IDs
	sections.forEach((id) => {
		const section = document.getElementById(id);
		if (section) observer.observe(section);
	});
});
