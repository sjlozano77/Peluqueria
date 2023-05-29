//empleado
const dato1 = document.getElementById("dato1");
const dato2 = document.getElementById("dato2");
const dato3 = document.getElementById("dato3");

//reserva
const dato4 = document.getElementById("dato4");
const dato5 = document.getElementById("dato5");
const dato6 = document.getElementById("dato6");
const dato7 = document.getElementById("dato7");



const buttonReservar = document.getElementById("buttonReservar");
const buttonOtraReserva = document.querySelector("buttonOtraReserva");


buttonReservar.addEventListener("submit", validar => {
	if (dato1.value.length>0 && dato2.value.length>0 && dato3.value.length>0) {
		if (dato4.value.length>0 && dato5.value.length>0 && dato6.value.length>0
		&& dato7.value.length>0) {
			alert ("Reserva Ok");
		   // conexion *.php;
		}

		else {
			alert ("Faltan datos de Reserva");
		}

	else{
		alert ("Faltan datos del Empleado");
		}
	} 
});

buttonOtraReserva.addEventListener("click", resetear);

const resetear = () => {
    form.reset();
}



