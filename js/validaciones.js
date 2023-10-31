



function validar (email) {
    const correo = new RegExp("[A-Za-z0-9]{3}@.[a-z]{2}");
    return correo.test(email)
}

console.log(validarCorreo("asd@.com"));