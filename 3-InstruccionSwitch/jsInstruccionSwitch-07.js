/* Dario Baez */

/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

/* EJ 07 Switch*/
function mostrar()
{
	///declaracion de variables
	var destino;
    var puntoCardinal;
	//tomar datos ingresados por ID
	destino = document.getElementById('txtIdDestino').value;
    
	switch (destino)
	{   
		case "Bariloche":
			puntoCardinal = "Oeste";
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Mar del plata":
			puntoCardinal = "Este";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
			break;
	}

	alert(destino + " se encuentra al " + puntoCardinal + " de nuestro pais.");

}//FIN DE LA FUNCIÓN