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
	
    //VALIDACION si la función isNaN() es true, entonces el valor ingresado no es un numero
	while(isNaN(numeroIngresado) == true || numeroIngresado < 0 || numeroIngresado > 9)
	{   
		//ingreso de datos
		numeroIngresado = prompt("Error.Ingrese un número entre 0 y 9 inclusive.");
		//parseInt
		numeroIngresado = parseInt(numeroIngresado);

	}
    
	//No hay dudad que el numero es entre entre 0 y 9 inclusive porque si no no hubiera salido del while
    document.getElementById('txtIdNumero').value = numeroIngresado ;

}//FIN DE LA FUNCIÓN