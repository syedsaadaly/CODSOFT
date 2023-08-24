const screen = document.querySelector('.screen');

function handleButtonClicked(value) {
    screen.value += value;
}

function calculateResult() {
    try {
        const result = eval(screen.value);
        if (Number.isFinite(result)) {
            screen.value = result;
        } else {
            screen.value = 'Error: Invalid calculation';
        }
    } catch (error) {
        screen.value = 'Error: Invalid input';
    }
}

function clearScreen() {
    screen.value = '';
}
