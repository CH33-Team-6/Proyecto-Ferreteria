import { PRODUCTOS } from "./arrayProductos.js";


window.addEventListener("load", function(event){
  if (localStorage.getItem("datos") === null){
    localStorage.setItem("datos", JSON.stringify(PRODUCTOS));  
  }//datos=null
  loadProducts();
});//load event
function loadProducts(){
  const products = JSON.parse(localStorage.getItem("datos"));
  products.forEach(product => {
    addItem(product);
  });
}

function addItem(item){
    const itemHTML = `<div class="card" style="width: 18rem; object-fit:contain; height:100%; padding:1rem; margin-bottom: 12px; border-radius: 50px;"onmouseover="this.style.backgroundColor='#D9D9D9'"onmouseout="this.style.backgroundColor='transparent'"> 
           <img src= " ${item.img}  " class="card-img-top" alt="image">
           <div class="card-body" style="text-align:center; "> 
               <h5 class="card-title" style="color:#C10F19;">$${item.precio}.00</h5>
              <p class="card-text">${item.nombre}</p>
                <a href="#" class="btn" style="background-color:#3135A0; color:#fff">Agregar al carrito</a>
            </div>
        </div>
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
