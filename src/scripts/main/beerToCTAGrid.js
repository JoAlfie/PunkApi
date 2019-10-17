const grid = document.getElementById('ctagrid');
const punkAPI8BeersURL = 'https://api.punkapi.com/v2/beers?per_page=8';

const addBeersToCTAGrid = beers => {
	return beers.map(beer => {
		// create elements
		let gridItem = createNode('div');
		let gridItemImage = createNode('img');
		let gridItemTextContainer = createNode('div');
		let gridItemTitle = createNode('h2');
		let gridItemTagline = createNode('span');

		// add classes
		gridItem.classList.add('ctagrid__item', 'griditem');
		gridItemImage.classList.add('griditem__image');
		gridItemTextContainer.classList.add('griditem__textContainer');
		gridItemTitle.classList.add('griditem__title');
		gridItemTagline.classList.add('griditem__tagline');

		// add image
		gridItemImage.src = beer.image_url;
		gridItemImage.alt = '';

		// add title
		gridItemTitle.textContent = beer.name;

		// add tagline
		gridItemTagline.textContent = beer.tagline;

		// add text parts to text container
		append(gridItemTextContainer, gridItemTitle);
		append(gridItemTextContainer, gridItemTagline);

		// add elements to grid item
		append(gridItem, gridItemImage);
		append(gridItem, gridItemTextContainer);

		// add grid item to grid
		append(grid, gridItem);
	});
};

fetch(punkAPI8BeersURL)
	.then(resp => resp.json())
	.then(data => {
		addBeersToCTAGrid(data);
	})
	/* should probably do something if it goes wrong */
	.catch(e => console.log(e));
