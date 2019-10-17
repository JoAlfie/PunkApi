const Accordion = function() {
	var options,
		defaults = {
			elementSelector: '.accordion__section', // {string} = wrap each accordion inner element
			toggleSeletor: '.accordion__title', // {string} = toggle button / title of accordion inner element
			panelSelector: '.accordion__panel' // {string} = accordion inner element contents
		},
		accordion;

	/**
	 *
	 * @param {string} selector = selector of accordion element
	 * @param {object} userOptions = user defined options to override defaults
	 */
	const init = function(selector, userOptions) {
		// create options by extending defaults with the passed in arguments
		if (userOptions && typeof userOptions === 'object') {
			options = extendDefaults(defaults, arguments[0]);
		} else {
			options = defaults;
		}

		accordion = document.querySelector(selector);
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

	return {
		init: init
	};
};
