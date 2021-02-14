/* Dario Baez */
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

/*EJ While 09*/
function mostrar()
{	
	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var banderaDelPrimeroIngresado;
	var respuesta;

	//iniciar variables
	// 1° parte  de la bandera (inicializa la variable de la bandera)
	banderaDelPrimeroIngresado = true; 

	// 1° parte  del while (inicializa la variable del control del while)
	respuesta = "si"; 
    
	// 2° parte while (la logica del while)
	while(respuesta =="si") 
	{    
		//Ingreso de datos
		numeroIngresado = prompt("Ingrese un número: ");
		//parseInt
		numeroIngresado = parseInt(numeroIngresado);

		//validacion con funcion isNaN()
		while(isNaN(numeroIngresado == true))
		{
          //Ingreso de datos
			numeroIngresado = prompt("Error. Ingrese un número: ");
			//parseInt
			numeroIngresado = parseInt(numeroIngresado);
		}

	   // ° 2 parte de la bandera ( la logica de la bandera)
	   //LA PRIMERA VEZ QUE ENTRA banderaDelPrimeroIngresad == true;
       if(banderaDelPrimeroIngresado == true)
	   {
			//La primera vez que ingresa el numero va a ser maximo y minimo, 
			//si ingresa un solo numero, ese numero tiene que ser maximo y tiene que ser minimo
			numeroMinimo = numeroIngresado
			numeroMaximo = numeroIngresado;

			//°3 parte de la bandera ( cambio de la bandera porque si entro aca, ya dejo ser el primero)
		    banderaDelPrimeroIngresado = false;
		}
		//caso contrario, ya no es la primera vez que ingresa
	   	else
	   	{
			//tengo que evaluar si el numero ingresado es  el minimo
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			
			//tengo que evaluar si el numero ingresado es  el máximo
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
		}

		//°3 parte del while  (corte del control), modifico la variable en este caso preguntar al usuario si quiere continuar
		respuesta = respuesta=prompt("Desea continuar? si/no"); 
	}

	//mostrar el número máximo
	document.getElementById('txtIdMaximo').value = "El número máximo es : "  + numeroMaximo;

	 //mostrar el número mínimo
	 document.getElementById('txtIdMinimo').value = "El número mínimo es: " + numeroMinimo;

}//FIN DE LA FUNCIÓN