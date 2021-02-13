/* Dario Baez */

/* al presionar el botón  pedir un número entre 0 y 9 inclusive.*/

/*EJ While 04*/
function mostrar()
{   
	//declaracion de variables
	var numeroIngresado;  

	//ingreso de datos
	numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");

	//parseInt
	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado) == true || numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");
	}

    document.getElementById('txtIdNumero').value = numeroIngresado ;

}//FIN DE LA FUNCIÓN