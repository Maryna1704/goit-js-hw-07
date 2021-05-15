const validationInput = document.querySelector('#validation-input');

function onInputBlur() {
    const textLength = validationInput.value.length;
    const validLenght = parseInt(validationInput.getAttribute('data-length'));
    if (textLength === validLenght) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}

validationInput.addEventListener('blur', onInputBlur);