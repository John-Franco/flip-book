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
		// Book's cover
		cover = document.querySelectorAll('#portada');
		contZindex = 2;
		customZindex = 1;

		start();
	});
}

function start(){
	book.forEach(page => {
		page.style.zIndex = customZindex;
		customZindex--;

		page.addEventListener('click', function(e){
			let tgt = e.target;
			let tgtid = tgt.getAttribute('id')
			let unoThis = this;
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
		setTimeout(function(){
			el.style.transform = 'rotateY(-180deg)';
		}, 500);
	}
	else
	{
		setTimeout(function(){
			el.style.transform = 'rotateY(0deg)';
		}, 500);
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



