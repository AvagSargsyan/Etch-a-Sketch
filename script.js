const board = document.querySelector('.board');
const eraseBtn = document.querySelector('.erase-btn');
const initialPixelColor = board.style.backgroundColor;
const scaleInput = document.querySelector('#scale');
const scaleNumber = document.querySelector('.scale-number');
const boardWidth = getComputedStyle(board).width.split('px')[0];
const boardHeight = getComputedStyle(board).height.split('px')[0];
let scale = scaleInput.value;
let colorInput = document.querySelector('#color-input');
let pixels = [];

scaleNumber.textContent = scaleInput.value;

function addPixels() {
    for (let i = 0; i < scale**2; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = boardWidth / scale - 2 + 'px';
        pixel.style.height = boardHeight / scale - 2 + 'px';
        pixels.push(pixel);
    }
    pixels.forEach(p => {
        p.classList.add('pixel');
        board.appendChild(p);
        p.addEventListener('mouseover', (e) => {
            p.style.backgroundColor = colorInput.value;
        })
    });
}

function erasePixels(arrOfPixels) {
    arrOfPixels.forEach(p => {
        p.style.backgroundColor = initialPixelColor;
    });
}

function clearBoard() {
    board.innerHTML = '';
    pixels = [];
}

addPixels();

eraseBtn.addEventListener('click', (e) => {
    erasePixels(pixels);
});

scaleInput.addEventListener('click', (e) => {
    scaleNumber.textContent = scaleInput.value;
    scale = +scaleInput.value;
    clearBoard();
    addPixels();
});
