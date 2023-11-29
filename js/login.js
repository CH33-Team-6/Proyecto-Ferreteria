const btnEnviar = document.querySelector(`#btnEnviar`);

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  const emailElement = document.getElementById("exampleInputEmail1");
  const contraseñaElement = document.getElementById("exampleInputPassword1");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const validUser = usuarios.find(
    (user) =>
      user.usuario === emailElement.value &&
      user.contraseña === contraseñaElement.value
  );

  if (!validUser) {
    return alert("Usuario y/o contraseña incorrectos");
  }

  alert(`Bienvenido ${validUser.nombre}`);
  localStorage.setItem("login_success", JSON.stringify(validUser));
  localStorage.setItem("sesionActiva", "true");
  localStorage.setItem("userName", validUser.nombre);
  window.location.href = "./index.html";
});
