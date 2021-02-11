/* Dario Baez */

/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

/* EJ 04  Switch*/
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
			mensaje = "Este mes tiene 28 días.";
			break;
		}
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		{
			mensaje = "Este mes tiene 30 días.";
			break;
		}
		default:
		{
			mensaje = "Este mes tiene 31 días."
			break;
		}
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN