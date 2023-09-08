const rated_text = ['Rated 5 Stars in Reviews', 'Rated 5 Stars in Report Guru', 'Rated 5 Stars in BestTech'];
const rates = document.getElementById('rates');

createItem(rated_text);

function createItem(rated_text) {
	rated_text.forEach(item => {
		const stars = createStars();

		const text = document.createElement('p');
		text.textContent = item;
		text.classList.add('rate__text');

		const rate__container = document.createElement('div');
		rate__container.append(stars, text);
		rate__container.classList.add('rate__container')

		rates.append(rate__container);
		rates.classList.add('column-center');
	});
}

function createStars() {
	let stars = [];
	const starsDiv = document.createElement('div');
	starsDiv.style.display = 'flex';
	starsDiv.style.justifyContent = 'center';

	for (let i= 0; i < 5; i++) {
		stars[i] = document.createElement('img');
		stars[i].src = "./css/images/icon-star.svg";
		stars[i].alt = "icon star";
		stars[i].style.paddingRight = '5px';

		starsDiv.append(stars[i]);
	}
	return starsDiv;
}