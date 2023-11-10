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

btnAgregar.addEventListener("click", function(event){
  let isValid =true;
  event.preventDefault();
  alertValidaciones.style.display="none";
  cargarImagen.style.border="";
  
  if(cargarImagen.files.length==0){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    cargarImagen.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//cargarImagen
  
  if(inputNombre.value.length<3){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputNombre.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputNombre
  
  if(inputCategoria.value.length<3){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputCategoria.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputCategoria
  
  if(inputId.value.length<3){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputId.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputId
  
  if(inputDescripcion.value.length<3){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputDescripcion.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputDescripcion
  
  if(inputPrecio.value.length<1){
    alertValidaciones.innerHTML="Todos los campos deben de estar llenos";
    alertValidaciones.style.display="block";
    inputPrecio.style.border="solid thin red";
    alertValidaciones.style.color="red";
    isValid = false; 
    
  }//inputDescripcion
  
  const pahtml = `<p> Id: ${inputId.value} </p> 
  <p> Nombre: ${inputNombre.value} </p>
  <p> Precio: ${inputPrecio.value} </p>
  <p> Categoria: ${inputCategoria.value} </p>
  <p> Descripción: ${inputDescripcion.value} </p>
  <p> Imágen: ${cargarImagen.value} </p>`
  
  const elemento = {
    id: inputId.value,
    nombre: inputNombre.value,
    img: cargarImagen.value,
    precio: inputPrecio.value,
    descripcion: inputDescripcion.value, 
    categoria: inputCategoria.value
  }
  
  datos.push(elemento);
  localStorage.setItem("datos", JSON.stringify(datos));
  productosAgregados.insertAdjacentHTML("beforeend", pahtml)
})//addEventListener

window.addEventListener("load", function(event){
  
  if (localStorage.getItem("datos") !== null){
    datos = JSON.parse(localStorage.getItem("datos"));
    console.log(datos)
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
  
});//load event









