function addItem(item){
    const itemHTML = `<div class="card" style="width: 18rem; object-fit:contain; height:100%; padding:1rem; margin-bottom: 12px;"onmouseover="this.style.backgroundColor='#D9D9D9'"onmouseout="this.style.backgroundColor='transparent'"> 
           <img src= " ${item.img}  " class="card-img-top" alt="image">
           <div class="card-body" style="text-align:center; "> 
               <h5 class="card-title" style="color:#C10F19;">$${item.precio}</h5>
              <p class="card-text">${item.nombre}.00</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem( {
    "id": 459,
    "nombre": "RUGO MAXIFLEX",
    "img": "./assets/img-productos/PRODUCTOS/459.png",
    "precio": 55,
    "descripción": "MANGUERA PARA FREGADERO Y LAVABO 13 X 13 X 55"
  });

addItem({
    "id": 789,
    "nombre": "DIABLO HEXAGONAL",
    "img": "./assets/img-productos/PRODUCTOS/789.png",
    "precio": 40,
    "descripción": "DIABLO HEXAGONAL 10"
  });

    addItem({
        "id": 808,
        "nombre": "COLD PATCH",
        "img": "./assets/img-productos/PRODUCTOS/808.png",
        "precio": 40,
        "descripción": "COLD PATCH C48"
      });

addItem({
    "id": 809,
    "nombre": "VERMAR TUBO",
    "img": "./assets/img-productos/PRODUCTOS/809.png",
    "precio": 22,
    "descripción": "TUBO PARCHE PARA BICICLETA 15 ML"
  });

    addItem({
        "id": 819,
        "nombre": "GVSA CÁMARA R-20",
        "img": "./assets/img-productos/PRODUCTOS/819.png",
        "precio": 55,
        "descripción": "GVSA CÁMARA R-20 X 2.125"
      });

addItem({
    "id": 820,
    "nombre": "GVSA CÁMARA R-16",
    "img": "./assets/img-productos/PRODUCTOS/820.png",
    "precio": 50,
    "descripción": "GVSA CÁMARA R-16 X 2.125"
  });

    addItem({
        "id": 827,
        "nombre": "ALTREGO CADENA",
        "img": "./assets/img-productos/PRODUCTOS/827.png",
        "precio": 55,
        "descripción": "ALTREGO CADENA STANDAR 12 X 18 X 114L"
      });

addItem( {
    "id": 900,
    "nombre": "PENS SELLADOR NEGRO",
    "img": "./assets/img-productos/PRODUCTOS/900.png",
    "precio": 80,
    "descripción": "PENS SELLADOR NEGRO 300 ML"
  });

    addItem({
        "id": 977,
        "nombre": "CÁMARA PARA MOTO",
        "img": "./assets/img-productos/PRODUCTOS/977.png",
        "precio": 70,
        "descripción": "CÁMARA PARA MOTO PMAYA 183041"
      });

addItem({
    "id": 986,
    "nombre": "RUBBER SOLUTION",
    "img": "./assets/img-productos/PRODUCTOS/986.png",
    "precio": 15,
    "descripción": "RUBBER SOLUTION 20 ML"
  });