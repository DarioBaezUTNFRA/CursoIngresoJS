/* Dario Baez */

/* una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

/* EJ 09 Switch*/
function mostrar()
{
	///declaracion de variables
	var estacion;
    var destino;
	var precioBase;
	var porcentajeDescuento;
	var porcentajeAumento;
	var precioFinal;
	var aumento;
	var descuento;

	//tomar datos ingresados por ID
	estacion  = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
    
	//Inicializaciones
	precioBase          = 15000;
    porcentajeDescuento = 0;
	porcentajeAumento   = 0;
    

	switch (estacion)
	{   
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					porcentajeAumento = 20;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentajeDescuento = 10;
					break;

				case "Mar del plata":
					porcentajeDescuento = 20;
					break;
			}
			break;
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					porcentajeDescuento = 20;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentajeAumento = 10;
					break;
					
				case "Mar del plata":
					porcentajeAumento = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Cordoba":
					porcentajeDescuento = 0
					break;
					
                default:
					porcentajeAumento = 10;
					break;
			}
			break;

		default:
		{
			break;
		}
		
	}
    //calcular descuento del x %
	descuento = (precioBase * porcentajeDescuento) / 100;
	aumento   = (precioBase * porcentajeAumento)   / 100;
	
	//precioFinal 
    precioFinal = (precioBase + aumento) - descuento;
	
	alert(destino +  " en " + estacion + " tiene un precio final de: $" + precioFinal );

}//FIN DE LA FUNCIÓN