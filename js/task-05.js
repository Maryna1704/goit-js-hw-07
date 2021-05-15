const nameOutputRef = document.querySelector('#name-output');
const nameInputRef = document.querySelector('#name-input');
const changeName = (e) => {
     let txtResult = e.currentTarget.value
    if (txtResult) {
        nameOutputRef.textContent = txtResult;
     } 
    else {
        nameOutputRef.textContent = 'незнакомец';
    }
}



nameInputRef.addEventListener('input', changeName)