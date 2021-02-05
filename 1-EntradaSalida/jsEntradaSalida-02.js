/* Dario Baez

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

/*ejercicio 2*/
function mostrar()
{   
	//declarar variables
	var nombreIngresado;
	var mensaje

	//tomar un nombre con 'prompt'
	nombreIngresado = prompt("Ingrese su nombre","")

	//mostrarlo por 'alert'
	mensaje = "El nombre ingresado es: " + nombreIngresado;
	alert(mensaje);
}