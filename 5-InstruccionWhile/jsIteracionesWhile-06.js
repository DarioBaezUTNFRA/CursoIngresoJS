/* Dario Baez */
/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

/*EJ While 06*/


function mostrar()
{   
	//declaracion de variables

	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
    
	//inicializacion
	contador   = 0;
	acumulador = 0;
   
	//pedir 5 números
	while(contador < 5)
	{   
		//ingresa la 1° vez y arranca el contador
		contador        = contador + 1;  
		
		//Ingreso de datos
	    numeroIngresado = prompt("Ingrese numero : #" + contador);

		//si la función isNaN() es true, entonces el valor ingresado no es un numero
        while (isNaN(numeroIngresado) == true) 
		{
			//Ingreso de datos 
			numeroIngresado = prompt("Error, Ingrese numero : #" + contador);
		}

		//parseInt
		numeroIngresado = parseInt(numeroIngresado);

		//calcula la suma acumulada
        acumulador = acumulador + numeroIngresado;
	}

	//calcula el promedio
    promedio = acumulador / contador ;
    
	//informar la suma acumulada 
	document.getElementById('txtIdSuma').value = acumulador;

	//informar el promedio 
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN