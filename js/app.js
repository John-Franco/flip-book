const sliderItemsWidth = window.sliderWrapper.clientWidth / 4;
let translatex = (sliderItemsWidth * 4);
if (window.addEventListener) {
    window.addEventListener('load', () => {
        front = document.querySelector('.face-front');
        back = document.querySelector('.face-back');
        flip = document.querySelector('.book-content');
        book = document.querySelectorAll('.book');

        frontB = document.querySelectorAll('.face-front');
        backB = document.querySelectorAll('.face-back');
        flipB = document.querySelectorAll('.book-content');

        contZindex = 2;
        customZindex = 1;

        start();

        cPages = 0;

        document.getElementById("previous").addEventListener("click", () => {
            if (cPages == 0) {
                return;
            } else {
                let page = backB[cPages - 1].parentNode;
                let tgtid = backB[cPages - 1].getAttribute('id')
                let formface = backB[cPages - 1].getAttribute("class");

                turnLeaf(page, formface);
                moveBook(tgtid);
            }
        });


        document.getElementById("next").addEventListener("click", () => {
            if (cPages == frontB.length) {
                return;
            } else {
                let page = frontB[cPages].parentNode;
                let tgtid = frontB[cPages].getAttribute('id')
                let formface = frontB[cPages].getAttribute("class");

                turnLeaf(page, formface);
                moveBook(tgtid);
            }
        });

        // turnLeaf(el, formface);
    });
}

/**
 * This method handles click event to flipbook
 */
function start() {
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
function turnLeaf(el, formface) {
    el.style.zIndex = contZindex;
    contZindex += 20;

    if (formface == 'face-front') {
        if (cPages == frontB.length) { return; }
        cPages++;
        el.style.transform = 'rotateY(-180deg)';
        translatex += sliderItemsWidth;
        window.sliderContent.style.transform = 'translatex(-' + translatex + 'px)';
    } else {
        if (cPages == 0) { return; }
        cPages--;
        el.style.transform = 'rotateY(0deg)';
        translatex += (-sliderItemsWidth);
        window.sliderContent.style.transform = 'translatex(-' + translatex + 'px)';
    }
}

/**
 * This method allows to move the book
 */
function moveBook(leaf) {
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

window.sliderContent.style.width = document.body.clientWidth + 'px';

let cloneContent = '';
document.querySelectorAll('.slider-item').forEach((item, index) => {
    item.style.width = sliderItemsWidth + 'px';
    cloneContent += item.outerHTML;
});

window.sliderContent.innerHTML = cloneContent + cloneContent + cloneContent;

window.sliderContent.style.transform = 'translatex(-' + translatex + 'px)';