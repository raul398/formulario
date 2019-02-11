

function validar(){
	var formulario = document.getElementById('formulario')[0];
	var elementos = formulario.elements;
	var boton = document.getElementById('enviar');

	var validarNombre = function(e){
		if (formulario.nombre.value == 0){
			alert("Completa la fecha de nacimiento");
			e.preventDefault();
		}
	}

	var validarRadio = function(e){
		if (formulario.exampleRadios[0].checked == true || formulario.exampleRadios[1].checked == true){
		}else{
			alert("Complete el campo Sexo");
			e.preventDefault();
		}
	}

	var validarFecha = function(e){
		if (formulario.fecha.value == 0){
			alert("Complete la fecha de nacimiento");
			e.preventDefault();
		}
	}

	var validarMail = function(e){
		if (formulario.mail.value == 0){
			alert("Complete el campo Mail");
			e.preventDefault();
		}
	}

	var validar = function(e){
		validarNombre(e);
		validarRadio(e);
		validarFecha(e);
		validarMail(e);
	};

	formulario.addEventListener("submit",validar);

}