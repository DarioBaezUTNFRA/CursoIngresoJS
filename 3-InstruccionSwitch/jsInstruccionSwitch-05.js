/* Dario Baez */

/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/

/* EJ 05 Switch*/
function mostrar()
{
	///declaracion de variables
	var hora;

	//tomar datos ingresados por ID
	hora = document.getElementById('txtIdHora').value;
    
	//parseInt
	hora = parseInt(hora);

	switch (hora)
	{   
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			console.log("Hora: " + hora);
			break;
	}
	
}//FIN DE LA FUNCIÓN