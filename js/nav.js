const navbar = document.querySelector("#nav");

const div = document.createElement("div");
const a = document.createElement("a");
const li = document.createElement("li");

div.className = "container-fluid";
navbar.prepend(div);
li.className= "nav-item";

a.className = "navbar-brand";
a.href = "#";
a.href = "./index.html"
div.prepend(a);
a.insertAdjacentHTML("beforeend", `<img src="./assets/img/precio_justo.png" alt="logo precio justo" width= "250rem" height= "150rem">`)

div.insertAdjacentHTML("beforeend", `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>`);
const div2 = document.createElement("div");
div2.className = "collapse navbar-collapse";
div2.id = "navbarSupportedContent";
const ul = document.createElement("ul");
div.appendChild(div2);
div2.appendChild(ul);
ul.className = "navbar-nav me-auto mb-2 mb-lg-0";

ul.insertAdjacentHTML("afterbegin", `<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 Productos
</a> <!--Comienza menú de productos--> 
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="./productos.html">Ver ferreteria</a></li>
<li><a class="dropdown-item" href="">Accesorios</a></li>
    </ul>`);
ul.insertAdjacentHTML("beforeend",`<li class="nav-item">
    <a class="nav-link" aria-current="page" href="./nuestraHistoria.html">Nuestra Historia</a>
</li>`);
ul.insertAdjacentHTML("beforeend",` <li class="nav-item">
<a class="nav-link" href="./contacto.html">Contacto</a>
</li>`);
ul.insertAdjacentHTML("beforeend",`<li class="nav-item">
    <a class="nav-link" aria-current="page" href="./nosotras.html">Equipo de desarrollo</a>
</li>`);
div2.insertAdjacentHTML("beforeend",`    <div class="icon-nav">
<a href="./registrodeusuarios.html" class="nav-link"><i class="fa-regular fa-circle-user fa-lg" style="color: #3135A0;"></i></a>
</div>
<div class="icon-nav">
<a href="#" class="nav-link"><i class="fa-solid fa-cart-shopping fa-flip-horizontal fa-lg" style="color: #3135a0;"></i></a>
</div>
</div>`);

