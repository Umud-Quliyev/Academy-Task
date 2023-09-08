let firstBox = document.getElementById('one');
let secondBox = document.getElementById('two');
let thirdBox = document.getElementById('three');

function process(selectedBox, duration) {
    selectedBox.classList.add('selected');

    firstBox.classList.remove('box-animation-rotation', 'box-animation-toggle');
    secondBox.classList.remove('box-animation-rotation', 'box-animation-toggle');
    thirdBox.classList.remove('box-animation-rotation', 'box-animation-toggle');

    let action = parseInt(prompt("Secilen qutuya ne edilsin? (1: Rotate, 2: Toggle)"));

    if (action === 1) {
        selectedBox.style.transitionDuration = `${duration}s`;
        selectedBox.classList.add('box-animation-rotation');
        setTimeout(() => {
            selectedBox.classList.remove('box-animation-rotation');
        }, duration * 1000);
    } else if (action === 2) {
        selectedBox.style.transitionDuration = `${duration}s`;
        selectedBox.classList.add('box-animation-toggle');
        setTimeout(() => {
            selectedBox.classList.remove('box-animation-toggle');
        }, duration * 1000);
    } else {
        alert('Sehv secim');
    }
}

let choosebox = parseInt(prompt("Qutulardan birini secin (1, 2, 3)"));
let duration = parseFloat(prompt("Animasiya nece saniye olsun"));

if (choosebox === 1) {
    process(firstBox, duration);
} else if (choosebox === 2) {
    process(secondBox, duration);
} else if (choosebox === 3) {
    process(thirdBox, duration);
} else {
    alert('Sehv secim');
}
