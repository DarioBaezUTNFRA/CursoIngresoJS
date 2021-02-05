/* Dario Sebastian Baez */

/* Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
/* ejercicio 5 */
function mostrar()
{	
	//declaracion de variables
	var nombre;
	var edad;
	var mensaje;
	
	//ingreso de datos
	nombre   = document.getElementById("txtIdNombre").value;
	edad     = document.getElementById("txtIdEdad").value;

	//concatenar mensaje
	mensaje = "Usted se llama " +  nombre  + " y tiene " + edad +" años";

	//mostrar
	alert(mensaje);
}