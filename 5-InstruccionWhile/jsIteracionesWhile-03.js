/* Dario Baez */

/*al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

/*EJ While 03 */

function mostrar()
{   
	//declaracion de variables
	var claveIngresada;
	var claveCorrecta;

	
	claveCorrecta = "utn750"
	claveIngresada = prompt("Ingrese el número clave.");

	while(claveIngresada != claveCorrecta)
	{
		claveIngresada = prompt("La clave ingresada es inválida. Ingrese el número clave.");
	}
	 
	prompt("La clave ingresada es válida!");
	
}//FIN DE LA FUNCIÓN
