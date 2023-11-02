const navbar = document.querySelector("#nav");

const div = document.createElement("div");
const a = document.createElement("a");


div.className = "container-fluid";
navbar.prepend(div);
a.className = "navbar-brand";
a.href = "#";
a.href = "./index.html"
div.prepend(a);
a.insertAdjacentHTML("beforeend", `<img src="./assets/img/precio_justo.png" alt="logo precio justo" width= "200rem" height= "100rem">`)

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
<li><a class="dropdown-menu" href="#">Ferreteria</a></li>
<ul>  <li><a class="dropdown-item" href="./productos.html">Ver ferreteria</a></li>
<li><a class="dropdown-item" href="./nosotras.html">Accesorios</a></li>
    <ul>`);