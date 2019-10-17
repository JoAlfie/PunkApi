const Accordion = function() {
	var options,
		defaults = {
			elementSelector: '.accordion__section', // {string} = wrap each accordion inner element
			toggleSeletor: '.accordion__title', // {string} = toggle button / title of accordion inner element
			panelSelector: '.accordion__panel' // {string} = accordion inner element contents
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
		accordionElements = accordion.querySelectorAll(options.elementSelector);
		accordionElements.forEach(el => {
			setAria(el);
		});
	};

	/**
	 * Set initial aria properties
	 * @param {object} element = current accordion inner element
	 */
	const setAria = function(element) {
		const { toggleSeletor, panelSelector } = options;
		const toggle = element.querySelector(toggleSeletor);
		const panel = element.querySelector(panelSelector);

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
		const { toggleSelector } = options;
		const toggle = element.querySelector(toggleSelector);
		toggle.setAttribute('aria-expanded', value);
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
	 * Return accessible functions for Accordion module
	 */
	return {
		init: init
	};
};
