/* Dario Baez */

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

/*EJ While 10*/
function mostrar()
{
	//declaracion de contadores y variables 
	var contador;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
    var promedioPositivos;
    var promedioNegativos;
    var diferencia;
  
	//Inicializacion de contadores y variables 
	respuesta          = "si"; //1° parte del while
	contador           = 0; 
	contadorPositivos  = 0;
	contadorNegativos  = 0;
	contadorCeros      = 0;
	contadorPares      = 0;
	sumaNegativos      = 0;
	sumaPositivos      = 0;
    promedioPositivos  = 0;
    promedioNegativos  = 0;
    diferencia         = 0;

	// 2° parte del while
	while(respuesta == "si")
	{   
		//La primera vez ingresa y arranca el contador
		contador = contador + 1;

        //Ingreso de datos
		numeroIngresado = prompt("Ingrese un número: ");
		//parseInt
		numeroIngresado = parseInt(numeroIngresado);

        //Validacion del numero ingresado con funcion isNaN()
	   	while(isNaN(numeroIngresado) == true)
	   	{
		   //Ingreso de datos mostrandole el numero que debe ingresar
			numeroIngresado = prompt("Error. Ingrese número: #" + contador);
	   		//parseInt
	   		numeroIngresado = parseInt(numeroIngresado);
		}

		//si es un numero positivo
        if(numeroIngresado > 0)
		{   
			contadorPositivos = contadorPositivos + 1;
			sumaPositivos     = sumaPositivos + numeroIngresado;

			//si es un numero par
			if((numeroIngresado % 2) == 0)
			{
				contadorPares = contadorPares + 1;
			}
		}
		else
		{   //si es un numero negativo
			if (numeroIngresado < 0)
			{
				contadorNegativos = contadorNegativos + 1;
				sumaNegativos =  sumaNegativos + numeroIngresado;
			}
			// caso contrario es cero
			else
			{
				contadorCeros = contadorCeros + 1;
			}
		}

		//3° parte del while  (corte del control), modifico la variable en este caso preguntar al usuario si quiere continuar
		respuesta = respuesta=prompt("Desea continuar? si/no");
	}
    
	//Calcular Promedio de positivos.
	promedioPositivos = sumaPositivos / contadorPositivos;
	//Calcular Promedios de negativos.
	promedioNegativos = sumaNegativos / contadorNegativos;

    //Calcular Diferencia entre positivos y negativos, (positvos-negativos). */
    diferencia = contadorPositivos - contadorNegativos ;


    //Mostrar con document.write
	document.write("<p>La suma de los negativos es: " + sumaNegativos + "</p>");
    document.write("<p>La suma de los positivos es: " + sumaPositivos + "</p>");
	document.write("<p>La cantidad de positivos es: " + contadorPositivos + "</p>");
	document.write("<p>La cantidad de negativos es: " + contadorNegativos + "</p>");
	document.write("<p>La cantidad de ceros es: " + contadorCeros + "</p>");
	document.write("<p>La cantidad de números pares es: " + contadorPares + "</p>");
	document.write("<p>El promedio de positivos es: " + promedioPositivos + "</p>");
	document.write("<p>El promedio de negativos es: " + promedioNegativos + "</p>");
	document.write("<p>La diferencia entre positivos y negativos, (positvos-negativos) es: " + diferencia + "</p>");

}//FIN DE LA FUNCIÓN