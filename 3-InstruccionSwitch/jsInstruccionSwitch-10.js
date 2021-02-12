/* Dario Baez */

/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

/* EJ 10 Switch*/
function mostrar()
{
	///declaracion de variables
	var estacion;
    var destino;
	var seViaja;

	//tomar datos ingresados por ID
	estacion  = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
    
	//Inicializaciones
	seViaja = "No se viaja";
    

	switch (estacion)
	{   
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					seViaja = "Se viaja";
					break;
			}
			break;
		case "Verano":
			switch (destino)
			{
				case "Cataratas":
				case "Mar del plata":
					seViaja = "Se viaja";
					break;
			}
			break;
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					seViaja = "No se viaja";
					break;
					
                default:
					seViaja = "Se viaja";
					break;
			}
			break;

		default:
		{
			seViaja = "Se viaja";
			break;
		}
		
	}
    
	alert( seViaja + " a " + destino +  " en " + estacion);

}//FIN DE LA FUNCIÓN