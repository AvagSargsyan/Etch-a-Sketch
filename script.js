const board = document.querySelector('.board');
const eraseBtn = document.querySelector('.erase-btn');
const initialPixelColor = board.style.backgroundColor;
let scale = 32;
let pixels = [];


function addPixels() {
    for (let i = 0; i < 256; i++) {
        let pixel = document.createElement('div');
        pixels.push(pixel);
    }
    
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].classList.add('pixel');
        board.appendChild(pixels[i]);
    }

    pixels.forEach(pl => {
        pl.addEventListener('mouseover', (e) => {
            pl.style.backgroundColor = 'red';
        })
    })
}

function erasePixels(arrOfPixels) {
    arrOfPixels.forEach(p => {
        p.style.backgroundColor = initialPixelColor;
    });
}

addPixels();

eraseBtn.addEventListener('click', (e) => {
    erasePixels(pixels);
})