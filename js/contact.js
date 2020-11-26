const inputsValue = {
    firstName : '',
    lastName : '',
    email : '',
    website : '',
    message: ''
}

function submitForm() {
    if (document.querySelector('form').checkValidity()) {
        // e.preventDefault();
        for (const property in inputsValue) {
            if (property !== 'message') {
                inputsValue[property] = document.querySelector(`div.form-input input[name='${property}']`).value;
            } else {
                inputsValue[property] = document.querySelector('textarea').value;
            }
        }
        console.log(inputsValue);
    }
}