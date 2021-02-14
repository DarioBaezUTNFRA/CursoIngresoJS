/* Dario Baez */
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

/*EJ While 08*/

function mostrar()
{   
	//declaracion de variables
	var contador;
	var respuesta;
	var numeroIngresado;
	var suma;
	var producto;
	

	//inicializacion
	contador      = 0;
	respuesta     = "si";  //1° parte (inicializa la variables)
	suma          = 0;
	producto      = 1;


   while(respuesta == "si") // 2° parte (la logica del while)
   {   
	   //La primera vez ingresa y arranca el contador
	   contador = contador + 1;

	   //Ingreso de datos mostrandole el numero que debe ingresar
	   numeroIngresado = prompt("Ingrese número: #" + contador);
	   //parseInt
	   numeroIngresado = parseInt(numeroIngresado);

	   //Validacion del numero ingresado con funsion isNaN()
	   while(isNaN(numeroIngresado) == true)
	   {
		   //Ingreso de datos mostrandole el numero que debe ingresar
			numeroIngresado = prompt("Error. Ingrese número: #" + contador);
	   		//parseInt
	   		numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado < 0) //calcular la multiplicacion de negativos
		{
			producto  = producto * numeroIngresado;
		}
		else //calcula la suma de positivos
		{
			suma = suma + numeroIngresado;
		}

		//°3 parte (corte del control), modifico la variable en este caso preguntar al usuario si quiere continuar
		respuesta = respuesta=prompt("Desea continuar? si/no");

   }

   //mostrar la suma de positivos
    document.getElementById('txtIdSuma').value = "La suma de los positivos es :"  + suma;

   //mostrar la multiplicacion de negativos
   document.getElementById('txtIdProducto').value = "El producto de los negativos es:" + producto;


}//FIN DE LA FUNCIÓN