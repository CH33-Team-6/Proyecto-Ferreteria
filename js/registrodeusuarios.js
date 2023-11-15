    const nombreElement = document.getElementById('formGroupExampleInput');
    const telefonoElement = document.getElementById('formGroupExampleInput2');
    const emailElement = document.getElementById('exampleInputEmail1');
    const contraseñaElement = document.getElementById('exampleInputPassword1');
    const conContraseñaElement = document.getElementById('exampleInputPassword2');
    const btnRegistrarElement = document.getElementById('examenpleBtnAgregar');
    const alertValidaciones = document.getElementById("alertValidaciones");

    btnRegistrarElement.addEventListener("click", function(event){
        let isValid = true;
        event.preventDefault();
        alertValidaciones.style.display="none";
        const alerta = `<svg xmlns="http://www.w3.org/2000/svg" class="d-none">  
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
      <div class="alert alert-danger d-flex align-items-center" role="alert" id="alertValidaciones">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          Todos los campos son requeridos.
        </div>
      </div>`
        
        if (nombreElement.value.length < 10) {
          console.log(alerta);
            alertValidaciones.insertAdjacentHTML("afterend", alerta)
            nombreElement.style.border="solid thin red";
            isValid = false;
            }
    
        if (!telefonoElement.value) {
            alertValidaciones.insertAdjacentHTML("afterend", alerta)
            telefonoElement.style.border="solid thin red";
            isValid = false;
            }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailElement.value)) {
            alertValidaciones.insertAdjacentHTML("afterend", alerta)
            email.style.border="solid thin red";
            isValid = false;
        }
        if (contraseñaElement.value.length < 6) {
            showAlert('La contraseña debe tener al menos 6 caracteres.');
        }
    
        if (contraseña.value !== conContraseñaElement.value) {
            showAlert('Las contraseñas no coinciden.')
        }
    

        
        })//btnRegistrar.addEventListener
        
            
        
            

    