function login() {
    const form = document.getElementById('login');
    const form_data = new FormData(form);

    const inputs = form.querySelectorAll('input');
    let form_valido = true;
    let errorMessage = '';

    const errorMessageElement = document.getElementById('error-message');
    inputs.forEach(input => {
        input.classList.remove('invalid');

        if (input.hasAttribute("required") && (input.value == null || input.value == undefined || input.value.trim() === '')) {
            form_valido = false;
            errorMessage += `Riempire il campo ${input.name}.<br>`;
            input.classList.add('invalid');
        }

    });

    if (form_valido) {
        fetch('finduser', {
            method: 'POST',
            body: form_data
        }).then(response => {
            if (response.ok) {
                form.submit();
            } else {
                errorMessageElement.innerHTML = errorMessage;
            }
        })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        errorMessageElement.innerHTML = errorMessage;
    }
}