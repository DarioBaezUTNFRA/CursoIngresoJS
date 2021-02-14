/* Dario Baez */

/* Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

/*EJ While 07*/

function mostrar()
{
    
   //declaracion de variables
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var respuesta;

	//inicializacion
	contador   = 0;
	acumulador = 0;
	respuesta = "si";// 1° parte, inicializo la variable

	while(respuesta == "si") //2° parte, la logica de la condicion del while
	{   
		//ingresa la primera vez y arranca el contador
		contador        = contador + 1;  
		
		//Ingreso de datos mostrando el numero  que debe ingresar
		numeroIngresado = prompt("Ingrese numero : #" + contador);
        //parseInt
		numeroIngresado = parseInt(numeroIngresado);

		//VALIDACION si la función isNaN() es true, entonces el valor ingresado no es un numero
		while (isNaN(numeroIngresado) == true) 
		{
			//Ingreso de datos mostrando el numero  que debe ingresar
			numeroIngresado = prompt("Error, Ingrese numero : #" + contador);
			//parseInt
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		//calcula la suma acumulada
		acumulador = acumulador + numeroIngresado;
		
		//°3 parte, modifico la variable en este caso preguntar al usuario si quiere continuar
		respuesta = prompt("Ingrese 'si' para continuar.");
	}

	//calcula el promedio
	promedio = acumulador / contador ;

	//informar la suma acumulada 
	document.getElementById('txtIdSuma').value = acumulador;

	//informar el promedio 
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN