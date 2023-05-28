

function validar(posicion) {
	let TAM=5
	let entrada = new Array(TAM);
	entrada[0]=document.getElementById("nombre");
	entrada[1]=document.getElementById("apellido");
	entrada[2]=document.getElementById("mail");
	entrada[3]=document.getElementById("cantidad");
	entrada[4]=document.getElementById("rubro");
	for (var i = 0; i < posicion; i++) {
	   	switch (i) {
		  case 0:
		    validarInputTextoVacio(entrada[i], "Debe ingresar nombre")
		    break;
		  case 1:
		    validarInputTextoVacio(entrada[i], "Debe ingresar apellido")
		    break;
		 case 2:
		    validarInputTextoVacio(entrada[i], "Debe ingresar email")
		    break;
		 case 3:
		    validarInputCantidadVacio(entrada[i], 0)
		    break;
		case 4:
		  	validarSelect(entrada[i])
		 default:
		    console.log('');
		}
	}	
	event.preventDefault();  	  
}

function validarSelect(entrada){
	if (entrada.value == "" ){
		entrada.style.borderColor="#F00";
	}
	else {
		entrada.style.borderColor="black";	
	}
}

function validarInputTextoVacio(entrada, mensaje)
{
	if (entrada.value == "" || entrada.value == mensaje ) {
		entrada.style.borderColor="#F00";
    	entrada.style.color="#F00";
    	entrada.value=mensaje 
    	//document.getElementById("rubro").style.borderColor="#F00";
    	//return false;
	}
	else {
		if (entrada.value != "") {
			entrada.style.borderColor="black";
    		entrada.style.color="black";
    		entrada.value="" 
		}
	}
}


function validarInputCantidadVacio(entrada, mensaje)
{
	if (entrada.value == "" || entrada.value <= 0 ) {
		entrada.style.borderColor="#F00";
    	entrada.style.color="#F00";
    	entrada.value=mensaje 
    	//document.getElementById("rubro").style.borderColor="#F00";
    	//return false;
	}

	if (entrada.value != "" && entrada.value > 0 ) {
		entrada.style.borderColor="#black";
    	entrada.style.color="black";
    	entrada.value="" 
    	//document.getElementById("rubro").style.borderColor="#F00";
    	//return false;
	}

}

/*
 for (var i = 0; i < entrada.length; i++) {
	   	entrada[i].value = "algo"
	   }
*/

/*

*/