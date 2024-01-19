// Animation du compteur
let count = 0;
const counterElement = document.getElementById('counter');
const iterationsPerSecond = 60;

function updateCounter() {
    count += 1;
    counterElement.innerText = count;

    if (count < 430) {
        setTimeout(updateCounter, 200 / iterationsPerSecond);
    }
}

updateCounter();

