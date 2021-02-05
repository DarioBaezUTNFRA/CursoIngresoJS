/* Dario Sebastian Baez
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*
ejercicio 4
*/
function mostrar()
{
	var nombreIngresado;
	var mensajeDeRespuesta;

	nombreIngresado = prompt("Ingrese su nombre","")
	mensajeDeRespuesta = "Su nombre es: " + nombreIngresado;
	document.getElementById("txtIdNombre").value = mensajeDeRespuesta;
}