const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', (e) => {
    const inputLength = e.target.value.length;
    const dataLength = +inputRef.dataset.length
    inputLength===dataLength ? inputRef.style.borderColor = 'green'
    : inputRef.style.borderColor = 'red'
})





