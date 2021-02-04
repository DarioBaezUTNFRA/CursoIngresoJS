/* Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan */

/* ejercicio 5 bis */
function mostrar()
{	
	//declaracion de variables
	var nombre;
	var edad;
	var apellido;
	var mensaje;
	
	//ingreso de datos
	nombre   = document.getElementById("txtIdNombre").value;
	edad     = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su Apellido","Su apellido");

	//concatenar mensaje
	mensaje = apellido + " , usted se llama " +  nombre  + " y tiene " + edad +" años";

	//mostrar
	alert(mensaje);
}

/* Dario Sebastian Baez */
