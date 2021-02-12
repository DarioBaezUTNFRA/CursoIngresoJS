/*Dario Baez */
/* al presionar el botón mostrar 10 repeticiones con números DESCENDENTES, desde el 10 al 1.*/

/*EJ While 02 */
function mostrar()
{   
	//Inicializacion contador
	var contador = 10;

	while (contador > 0)
	{
		alert( "Número :" + contador);
		contador= contador - 1;
	}

}//FIN DE LA FUNCIÓN