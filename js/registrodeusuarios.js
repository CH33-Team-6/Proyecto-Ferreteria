const nombreElement = document.getElementById('formGroupExampleInput');
const telefonoElement = document.getElementById('formGroupExampleInput2');
const emailElement = document.getElementById('exampleInputEmail1');
const contraseñaElement = document.getElementById('exampleInputPassword1');
const conContraseñaElement = document.getElementById('exampleInputPassword2');
const btnRegistrarElement = document.getElementById('examenpleBtnAgregar');
const alertValidaciones = document.getElementById('alertValidaciones');
const alert = document.getElementById('alert-red');

let usuarios = [];
alert.style.display = 'none';

btnRegistrarElement.addEventListener('click', function (event) {
  event.preventDefault();
  let errores = [];
  let isValid = true;

  nombreElement.style.border = '';
  telefonoElement.style.border = '';
  emailElement.style.border = '';
  contraseñaElement.style.border = '';
  conContraseñaElement.style.border = '';

  if (nombreElement.value.length < 10) {
    errores.push('Por favor coloca tu nombre completo.');
    nombreElement.style.border = 'solid thin red';
    isValid = false;
    nombreElement.style.border = 'solid thin red';
  }

  if (!telefonoElement.value) {
    errores.push('El campo teléfono es requerido o está mal escrito.');
    telefonoElement.style.border = 'solid thin red';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailElement.value)) {
    errores.push('El campo email es requerido o tiene un formato inadecuado.');
    emailElement.style.border = 'solid thin red';
    isValid = false;
  }

  if (contraseñaElement.value.length < 6) {
    errores.push('La contraseña debe tener al menos 6 caracteres.');
    contraseñaElement.style.border = 'solid thin red';
    isValid = false;
  }

  if (contraseñaElement.value !== conContraseñaElement.value) {
    alert('Las contraseñas no coinciden.');
    isValid = false;
  }
  if (errores.length > 0) {
    alert.style.display = 'block';
    alertValidaciones.innerHTML = ''; // Limpiar mensajes anteriores

    for (let error of errores) {
      alertValidaciones.insertAdjacentHTML('beforeend', `<div>${error}</div>`);
    }
  } else {
    const elemento = {
      nombre: nombreElement.value,
      numero: telefonoElement.value,
      usuario: emailElement.value,
      contraseña: conContraseñaElement.value,
    };
    if (isValid) {
      usuarios.push(elemento);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Bienvenido ' + nombreElement.value);
      window.location.href = './login.html';
    }
    nombreElement.value = '';
    telefonoElement.value = '';
    emailElement.value = '';
    conContraseñaElement.value = '';
    contraseñaElement.value = '';
  }
}); //btnRegistrar.addEventListener
