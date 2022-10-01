function makeFourDigitPin() {
    const randomPin = randoemGeneratePin();
    const randomPinString = randomPin + '';
    if (randomPinString.length === 4) {
        return randomPin;
    }

    else {
        return makeFourDigitPin();
    }
}



function randoemGeneratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = makeFourDigitPin();
    // console.log(pin);
    const pinDisplayElement = document.getElementById('pin-display');
    pinDisplayElement.value = pin;
})
