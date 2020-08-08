
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
		
		document.getElementById("previous").addEventListener("click", () => {
			let page = back.parentNode;
			let tgtid = back.getAttribute('id')
			let formface = back.getAttribute("class");
			
			page.style.zIndex = contZindex;
			contZindex++;

			turnLeaf(page, formface);
			moveBook(tgtid);

			console.log("back");
			console.log(page.style.zIndex);
			console.log(page);
			console.log(formface);
		});

		document.getElementById("next").addEventListener("click", () => {
			let page = front.parentNode;

			let tgtid = front.getAttribute('id')
			let formface = front.getAttribute("class");
			
			page.style.zIndex = contZindex;
			contZindex++;

			turnLeaf(page, formface);
			moveBook(tgtid);

			console.log("go");
			console.log(page.style.zIndex);
			console.log(page);
			console.log(formface);
		});

		// turnLeaf(el, formface);
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
	switch (leaf) {
		case 'cover':
		case 'back-cover':
				flip.classList.remove("trnsf-reset");
				flip.classList.remove("trnsf-end");
				flip.classList.add("trnsf");	
			break;
		case 'trsf':
				flip.classList.remove("trnsf");
				flip.classList.remove("trnsf-end");
				flip.classList.add("trnsf-reset");
			break;
		case 'end':
				flip.classList.remove("trnsf");
				flip.classList.remove("trnsf-reset");
				flip.classList.add("trnsf-end");
			break;
	}
}