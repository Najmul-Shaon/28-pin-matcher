// make a pin 4 digit by using function

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

// generate random pin by using funtion 

function randoemGeneratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

// set pin to display section 


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = makeFourDigitPin();
    // console.log(pin);
    const pinDisplayElement = document.getElementById('pin-display');
    pinDisplayElement.value = pin;

    return pin;
})


// button operation in user end 


document.getElementById('buttons').addEventListener('click', function (event) {
    const singleButton = event.target.innerText;
    const typedDisplayElement = document.getElementById('typed-display');
    const previousTypedNumber = typedDisplayElement.value;
    if (isNaN(singleButton)) {
        if (singleButton === 'C') {
            typedDisplayElement.value = '';
        }

        else if (singleButton === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainDigit = digit.join('');
            typedDisplayElement.value = remainDigit;
        }
    }

    else {
        const newTypedNumber = previousTypedNumber + singleButton;
        typedDisplayElement.value = newTypedNumber;
    }
})


// mathcing pin 

document.getElementById('submit').addEventListener('click', function () {
    const generatedPinElement = document.getElementById('pin-display');
    const generatedPinString = generatedPinElement.value;
    const generatedPin = parseInt(generatedPinString);

    const inputPinElement = document.getElementById('typed-display');
    const inputPinString = inputPinElement.value;
    const inputPin = parseInt(inputPinString);

    const matchedTextElement = document.getElementById('pin-matched');
    const notMatchedTextElement = document.getElementById('pin-not-matched');

    if (generatedPin === inputPin) {
        notMatchedTextElement.style.display = 'none';
        matchedTextElement.style.display = 'block';
        generatedPinElement.value = '';
        inputPinElement.value = '';
        alert(matchedTextElement.innerText);
    }

    else {

        notMatchedTextElement.style.display = 'block';
        matchedTextElement.style.display = 'none';
        generatedPinElement.value = '';
        inputPinElement.value = '';
        alert(notMatchedTextElement.innerText);

    }


})
