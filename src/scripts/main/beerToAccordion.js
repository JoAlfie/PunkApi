const accordionContainer = document.getElementById('accordion');
const punkAPIBeersURL = 'https://api.punkapi.com/v2/beers';
const accordionElementClass = 'accordion__section';
const accordionToggleClass = 'accordion__title';
const accordionPanelClass = 'accordion__panel';

/**
 * Add beer data too accordion
 * @param {array} beers = beers returned from PunkAPI
 */
const addBeersToAccordion = beers => {
	return beers.map(beer => {
		// create section container
		let accordionSection = createNode('div');
		accordionSection.classList.add(accordionElementClass);

		// create toggle button
		let accordionToggleButton = createNode('button');
		accordionToggleButton.classList.add(accordionToggleClass);
		let accordionToggleTitle = createNode('h3');
		accordionToggleTitle.textContent = beer.name;
		append(accordionToggleButton, accordionToggleTitle);

		// create panel container
		let accordionPanel = createNode('div');
		accordionPanel.classList.add(accordionPanelClass, 'beer');
		// and content
		let image = createNode('img');
		image.src = beer.image_url;
		image.alt = '';
		image.classList.add('beer__image');
		let tagline = createNode('p');
		tagline.classList.add('beer__tagline');
		tagline.textContent = beer.tagline;
		let description = createNode('p');
		description.classList.add('beer__description');
		let firstBrewed = beer.first_brewed
			? ` This beer was first brewed on ${beer.first_brewed}.`
			: '';
		let descriptionText = beer.description + firstBrewed;
		description.textContent = descriptionText;
		append(accordionPanel, image);
		append(accordionPanel, tagline);
		append(accordionPanel, description);

		// put pieces together and add to accordion
		append(accordionSection, accordionToggleButton);
		append(accordionSection, accordionPanel);
		append(accordionContainer, accordionSection);
	});
};

const accordion = Accordion();

fetch(punkAPIBeersURL)
	.then(resp => resp.json())
	.then(data => {
		addBeersToAccordion(data);
		accordion.init('#accordion');
	})
	/* should probably do something if it goes wrong */
	.catch(e => console.log(e));
