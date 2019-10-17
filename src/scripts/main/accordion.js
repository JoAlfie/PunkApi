const Accordion = function() {
	var options,
		defaults = {
			elementClass: 'accordion__section', // {string} = wrap each accordion inner element
			toggleClass: 'accordion__title', // {string} = toggle button / title of accordion inner element
			panelClass: 'accordion__panel' // {string} = accordion inner element contents
		},
		accordion,
		accordionElements;

	/**
	 * Init Accordion
	 * @param {string} selector = selector of accordion element
	 * @param {object} userOptions = user defined options to override defaults
	 */
	const init = function(selector, userOptions) {
		// create options by extending defaults with the passed in arguments
		if (userOptions && typeof userOptions === 'object') {
			options = extendDefaults(defaults, userOptions);
		} else {
			options = defaults;
		}

		accordion = document.querySelector(selector);
		accordion.setAttribute('role', 'tablist');
		accordionElements = accordion.querySelectorAll(`.${options.elementClass}`);
		accordionElements.forEach(el => {
			setAria(el);
		});

		accordion.addEventListener('click', clickHandler);
	};

	/**
	 * Set initial aria properties
	 * @param {object} element = current accordion inner element
	 */
	const setAria = function(element) {
		const { toggleClass, panelClass } = options;
		const toggle = element.querySelector(`.${toggleClass}`);
		const panel = element.querySelector(`.${panelClass}`);

		toggle.setAttribute('role', 'tab');
		toggle.setAttribute('aria-expanded', false);
		panel.setAttribute('role', 'tabpanel');
	};

	/**
	 * Update aria properties
	 * @param {object} element = current accordion inner element
	 * @param {boolean} value = value of attribute (open/closed)
	 */
	const updateAria = function(element, value) {
		const { toggleClass } = options;
		const toggle = element.querySelector(`.${toggleClass}`);
		console.log('updateAria', toggle);
		toggle.setAttribute('aria-expanded', value);
	};

	/**
	 * Open or close sepecificed accordion panel
	 * @param {object} element = current accordian inner element
	 */
	const toggleElement = function(element) {
		console.log(element);
		const { panelClass } = options;
		const panel = element.querySelector(`.${panelClass}`);
		const height = panel.scrollHeight;
		const currentlyOpen = element.classList.contains('active-panel');
		const ariaValue = !currentlyOpen;

		// toggle active class
		element.classList.toggle('active-panel');
		updateAria(element, ariaValue);
	};

	/**
	 * Close all panels except selected on
	 * @param {number} current = index of selected panel
	 */
	const closeAllElements = function(current) {
		for (let i = 0; i < accordionElements.length; i++) {
			if (i != current) {
				const element = accordionElements[i];
				if (element.classList.contains('active-panel')) {
					element.classList.remove('active-panel');
				}
				updateAria(element, false);
			}
		}
	};

	/**
	 * Call toggle on specific panel
	 * @param {object} e = event
	 */
	const callElement = function(e) {
		const target = e.target;
		const { toggleClass } = options;

		for (let i = 0; i < accordionElements.length; i++) {
			// find element that was clicked
			if (accordionElements[i].contains(target)) {
				if (
					target.classList.contains(toggleClass) ||
					target.parentNode.classList.contains(toggleClass)
				) {
					console.log('is toggle');
					e.preventDefault();
					closeAllElements(i);
					toggleElement(accordionElements[i]);
				}
				break;
			}
		}
	};

	/**
	 * Handle click event on accordion
	 * @param {obect} e = click event
	 */
	const clickHandler = function(e) {
		console.log('click handler');
		callElement(e);
	};

	/**
	 * Extend defaults
	 * @param {object} defaults = defaults options defined in script
	 * @param {object} properties = options defined by user
	 * @return {object} defaults = modified options
	 */
	const extendDefaults = (defaults, properties) => {
		for (let property in properties) {
			defaults[property] = properties[property];
		}

		return defaults;
	};

	/**
	 * RequestAnimationFrame
	 */
	window.requestAnimationFrame = (() => {
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			}
		);
	})();

	/**
	 * Return accessible functions for Accordion module
	 */
	return {
		init: init
	};
};
