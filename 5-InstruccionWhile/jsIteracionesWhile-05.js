/* Dario Baez */
/*Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/

/*EJ While 05*/
function mostrar()
{   
	//declaracion de variables
	var sexoIngresado; 

	//ingreso de datos
	sexoIngresado = prompt("Ingrese 'f' o 'm'.");

	while( sexoIngresado != "f" && sexoIngresado != "m" )
	{
		sexoIngresado = prompt("Ingrese 'f' o 'm'.");
	}
    
	if (sexoIngresado == "f")
	{
		document.getElementById('txtIdSexo').value = "Femenino";
	}
	else
	{
		document.getElementById('txtIdSexo').value = "Masculino";
	}
	
}//FIN DE LA FUNCIÓN
