import { PRODUCTOS } from "./arrayProductos.js";

const formularioProductos= document.getElementById("formularioProductos");

const cargarImagen = document.getElementById("inputGroupFile02");
let cargarImagenvalue = cargarImagen.value;
let extension = cargarImagenvalue.substring(cargarImagenvalue.lastIndexOf(".")+1).toLowerCase();

const btnAgregar = document.getElementById("btnAgregar");
const productosAgregados = document.getElementById("productos-agregados")
const alertValidaciones = document.getElementById("invalid")
const inputNombre = document.getElementById("inputNombre")
const inputCategoria = document.getElementById("inputCategoria")
const inputId = document.getElementById("inputId")
const inputDescripcion = document.getElementById("inputDescripcion")
const inputPrecio = document.getElementById("inputPrecio")
let datos = [];

inputId.addEventListener("input", function(e) {
  let valor = inputId.value;
  valor = valor.replace(/[^0-9]/g, "");
  inputId.value = valor;
}); // permitir solamente numeros en el campo número.
inputPrecio.addEventListener("input", function(e) {
  let valor = inputPrecio.value;
  valor = valor.replace(/[^0-9]/g, "");
  inputPrecio.value = valor;
}); // permitir solamente numeros en el campo número.

function numerosConsecutivos()  {
  let patronConsecutivo = /^(?!(\d)\1{4})\d{5}$/;

  // Agregar mensajes de depuración
  console.log("Valor de inputId:", inputId.value);
  console.log(!patronConsecutivo.test(inputId.value));
  if (patronConsecutivo.test(inputId.value) || patronConsecutivo.test(inputPrecio.value)) {
    return true; // Puedes permitir que el formulario se envíe
  }else {
    inputId.value = "";
    inputPrecio.value = "";
    alert("El número no puede tener todos los dígitos consecutivos.");
    clearForm();
    return false;
  }
}

btnAgregar.addEventListener("click", function(event){
  let isValid =true;
  event.preventDefault();
  alertValidaciones.style.display="none";
  cargarImagen.style.border="";
  
  if(cargarImagen.files.length == 0){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.innerHTML="Por favor cargue una imágen de tipo jpg, jpeg o png";
    alertValidaciones.style.display="block";
    cargarImagen.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//cargarImagen
  
  if(inputNombre.value.length < 3){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.innerHTML="Por favor agregue un nombre válido";
    alertValidaciones.style.display="block";
    inputNombre.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputNombre
  
  if(inputCategoria.value === ""){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.innerHTML="Seleccione una categoría";
    alertValidaciones.style.display="block";
    inputCategoria.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false;
  }//inputCategoria
  
  if(inputId.value.length < 3 || !numerosConsecutivos()){
    
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputId.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputId
  
  if(inputDescripcion.value.length < 8){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos, asegúrate de llenar la descripción correctamente.";
    alertValidaciones.style.display="block";
    inputDescripcion.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputDescripcion
  
  if(inputPrecio.value.length < 1){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputPrecio.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputDescripcion
  // agregar imagen a imgBB
  
  let img = "";
  if (cargarImagen.files.length > 0) {
    const file = cargarImagen.files[0];
    const formData = new FormData();
    formData.append('image', file);
    
    fetch('https://api.imgbb.com/1/upload?key=1d621c661bda048835063260b6cd5344', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (data.success) {
      
      // Muestra la imagen subida
      img = data.data.url;
      console.log(img, "hola");
      
      const pahtml = `<p> Id: ${inputId.value} </p> 
      <p> Nombre: ${inputNombre.value} </p>
      <p> Precio: ${inputPrecio.value} </p>
      <p> Categoria: ${inputCategoria.value} </p>
      <p> Descripción: ${inputDescripcion.value} </p>
      <p> Imágen: ${img} </p>`
      
      console.log('img antes de guardar', img)
      const elemento = {
        id: inputId.value,
        nombre: inputNombre.value,
        img,
        precio: inputPrecio.value,
        descripcion: inputDescripcion.value, 
        categoria: inputCategoria.value
      }
      
      datos.push(elemento);
      localStorage.setItem("datos", JSON.stringify(datos));
      productosAgregados.insertAdjacentHTML("beforeend", pahtml)
    } else {
      console.error('Error al subir la imagen:', data.error.message);
    }
  })
  .catch(error => console.error('Error en la solicitud:', error));
} else {
  console.error('Por favor, selecciona una imagen.');
}
// imgBB
if (isValid) {
  alert("Producto agregado con éxito")
  
  // limpiar campos
  
  inputId.value = ""
  inputNombre.value = ""
  inputPrecio.value = ""
  inputCategoria.value = ""
  inputDescripcion.value = ""
}
})//addEventListener

window.addEventListener("load", function(event){
  
  if (localStorage.getItem("datos") !== null){
    datos = JSON.parse(localStorage.getItem("datos"));
    datos.forEach((r) => {
      // r de registro
      let pahtml = `<p> Id: ${r.id} </p> 
      <p> Nombre: ${r.nombre} </p>
      <p> Precio: ${r.precio} </p>
      <p> Categoria: ${r.categoria} </p>
      <p> Descripción: ${r.descripcion} </p>
      <p> Imágen: ${r.img} </p>`
      productosAgregados.insertAdjacentHTML("beforeend", pahtml)
    });//forEach
    
  }//datos!=null
  if (localStorage.getItem("datos") === null){
    localStorage.setItem("datos", JSON.stringify(PRODUCTOS));  
    console.log("SDFD");
  }//datos=null
});//load event










