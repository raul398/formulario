var id = 0

function agregarFila(){
	id++;
  document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+id+'</td><td>'+ $('input[name="nombre"]').val() +'</td><td>'+ $('input[name="fecha"]').val() +'</td><td>'+ $('input[name="exampleRadios"]').val() +'</td><td>'+ $('input[name="email"]').val() +'</td><td><button type="button" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button></td>';
  document.getElementById("formulario").reset();
  document.getElementById('exampleModalCenter').hide();
}

function deleteRow(r){
   var i = r.parentNode.parentNode.rowIndex;
   document.getElementById("tablaprueba").deleteRow(i);
}