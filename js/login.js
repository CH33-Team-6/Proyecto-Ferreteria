

btnEnviar. addEventListener("click", function(event){
    const correoElement=document.getElementById("exampleInputEmail1").value;
    const contraseñaElement=document.getElementById("exampleInputPassword1").value;
    const btnEnviar=document.getElementById("btnEnviar"); 
    const errorMessage = document.getElementById("errorMessage");

    if (correoElement === "" || contraseñaElement === "") {
        errorMessage.txtContent = "Por favor, ingrese nombre de usuario y contraseña";
    } else {
        const storedUsarname = localStorage.getItem("correoElement");
        const storedPassword = localStorage.getItem("contraseñaElement");

        if (correoElement === storedUsarname && contraseñaElement === storedPassword) {
            errorMessage.txtContent = "Inicio de sesión exitoso.";
        } else {
            errorMessage.txtContent = "Nombre de usuario y contraseña incorrectos.";
        }
    }
});//btnEnviar