const formularioProductos= document.getElementById("formularioProductos");
    formularioProductos.insertAdjacentHTML("afterbegin",`
    <div class="input-group mb-3">
      <input type="file" class="form-control" id="inputGroupFile02">
      <label class="input-group-text" for="inputGroupFile02">Upload</label>
    </div>
    
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Nombre del producto</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Categoría</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Id del producto</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Descripción</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <span class="input-group-text">0.00</span>
      <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
    </div>
    <button type="button" class="btn btn-danger" style="display: flex; align-items: center;">Agregar</button>
    </div>`)

