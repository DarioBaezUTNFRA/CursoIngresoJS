/* Dario Baez */

/* al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"*/

/* EJ 03  Switch*/
function mostrar()
{
	///declaracion de variables
	var mesDelAño;
	var mensaje;
    
	//tomar datos ingresados por ID
	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño)
	{
		case "Febrero":
		{   
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		}
		default:
		{
			mensaje = "Este mes tiene 30 o más días."
			break;
		}
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN