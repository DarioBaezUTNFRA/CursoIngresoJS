/* Dario Baez */

/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

/* EJ 08 Switch*/
function mostrar()
{
	///declaracion de variables
	var destino;
    var temperatura;

	//tomar datos ingresados por ID
	destino = document.getElementById('txtIdDestino').value;
    
	switch (destino)
	{   
		case "Bariloche":
		case "Ushuaia":
			temperatura = "FRIO";
			break;
		default:
			temperatura = "CALOR";
			break;
	}

	alert("En "+ destino + " hace " + temperatura);

}//FIN DE LA FUNCIÓN