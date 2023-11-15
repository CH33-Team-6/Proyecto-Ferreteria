




const emailRegex = /^\S+@\S+\.\S+$/;
if (!emailRegex.test(inputEmail.value.trim())) {
    validarEmail.textContent = "Por favor, ingrese un correo electrónico válido.";
    return;
}
console.log(validar("asd@.com"));