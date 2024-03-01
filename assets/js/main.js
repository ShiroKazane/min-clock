document.addEventListener('DOMContentLoaded', () => {
	$(window).on('load', function () {
		$('.preloader').fadeOut('slow');
	});

	// Load Theme
	if (localStorage.getItem('theme')) {
		document.querySelector('body').classList.toggle(localStorage.getItem('theme'));
		if (localStorage.getItem('theme') == 'light') {
			$(".favicon").attr("href","assets/images/light.png");
		}
	}

	// Theme Toggle
	document.querySelector('.themeSwitch').onclick = function () {
		document.querySelector('body').classList.toggle('light');
		localStorage.setItem('theme', document.querySelector('body').classList.value);
		if (localStorage.getItem('theme') == 'light') {
			$(".favicon").attr("href","assets/images/light.png");
		} else {
			$(".favicon").attr("href","assets/images/dark.png");
		}
	};

	// Analog
	const hours = document.querySelector('.hours');
	const minutes = document.querySelector('.minutes');
	const seconds = document.querySelector('.seconds');

	const hour = document.createElement('div');
	hour.classList.add('hour');
	hours.appendChild(hour);

	const minute = document.createElement('div');
	minute.classList.add('minute');
	minutes.appendChild(minute);

	const second = document.createElement('div');
	second.classList.add('second');
	seconds.appendChild(second);

	// Digital

	const digital = document.querySelector('.digital');

	const hr = document.createElement('div');
	hr.classList.add('hr');
	digital.appendChild(hr);

	const min = document.createElement('div');
	min.classList.add('min');
	digital.appendChild(min);

	const sc = document.createElement('div');
	sc.classList.add('sc', 'alt');
	digital.appendChild(sc);

	const ampm = document.createElement('div');
	ampm.classList.add('ampm');
	digital.appendChild(ampm);

	const greeting = document.querySelector('.greeting');

	let date = new Date();
	let day = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
	let hh = day.getHours() * 3600;
	let mm = day.getMinutes() * 60;
	let ss = day.getSeconds();

	hours.style.animationDelay = `-${hh}s`;
	minutes.style.animationDelay = `-${mm}s`;
	seconds.style.animationDelay = `-${ss}s`;

	setInterval(() => {
		let date = new Date();
		let day = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
		let h = day.getHours();
		let m = day.getMinutes();
		let s = day.getSeconds();
		var am = "AM";
		var greet = "Good Night";

		if (h > 1 && h < 11) {
			var greet = "Good Morning";
		} else if (h > 10 && h < 18) {
			var greet = "Good Afternoon";
		} else if (h > 17 && h < 23) {
			var greet = "Good Night";
		}

		if (h > 12) {
			h = h - 12;
			var am = "PM";
		}

		h = h < 10 ? "0" + h : h;
		m = m < 10 ? "0" + m : m;
		s = s < 10 ? "0" + s : s;

		hr.innerHTML = h + ":";
		min.innerHTML = m + ":";
		sc.innerHTML = s + "&nbsp";
		ampm.innerHTML = am;
		greeting.innerHTML = greet;

		var TxtType = function (el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10);
			this.txt = "";
			this.tick();
			this.isDeleting = false;
		};

		TxtType.prototype.tick = function () {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

			var that = this;
			var delta = 200 - Math.random() * 100;

			if (this.isDeleting) {
				delta /= 2;
			}

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === "") {
				this.isDeleting = false;
				this.loopNum++;
				delta = 1000;
			}

			setTimeout(function () {
				that.tick();
			}, delta);
		};

		window.onload = function () {
			var elements = document.getElementsByClassName("typendelete");
			for (var i = 0; i < elements.length; i++) {
				var toRotate = elements[i].getAttribute("data-type");
				var period = elements[i].getAttribute("data-period");
				if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
		};
	});
});
