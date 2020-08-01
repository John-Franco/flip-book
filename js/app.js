
if(window.addEventListener){
	window.addEventListener('load', () => {
		// Front face of the page
		front = document.querySelector('.face-front');
		// Back face of the page
		back = document.querySelector('.face-back');  
		// Container's book
		flip = document.querySelector('.book-content');
		// Book's pages
		book = document.querySelectorAll('.book');
		contZindex = 2;
		customZindex = 1;

		start();
	});
}

/**
 * This method handles click event to flipbook
 */
function start(){
	book.forEach(page => {
		page.style.zIndex = customZindex;
		customZindex--;

		page.addEventListener('click', (e) => {
			let tgt = e.target;
			let tgtid = tgt.getAttribute('id')
			let unoThis = page;
			let formface = tgt.getAttribute("class")
			unoThis.style.zIndex = contZindex;
			contZindex++;

			turnLeaf(unoThis, formface);
			moveBook(tgtid);
		});
	});
}

/**
 * This method allows to bring previous page
 */
function turnLeaf(el, formface){
	el.style.zIndex = contZindex;
	contZindex +=20;

	if (formface == 'face-front') {
		el.style.transform = 'rotateY(-180deg)';
	}
	else
	{
		el.style.transform = 'rotateY(0deg)';
	}
}

/**
 * This method allows to move the book
 */
function moveBook(leaf){
	if (leaf == 'portada') {
		flip.classList.remove("trnsf-reset");
		flip.classList.add("trnsf");
	}
	if (leaf == 'trsf') {
		flip.classList.remove("trnsf");
		flip.classList.add("trnsf-reset");
	}
}