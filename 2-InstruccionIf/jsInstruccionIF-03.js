/*Dario Baez*/

/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */
/*Ej 3 IF */
function mostrar()
{
	//declaracion de variables
	var edad;
	var mensaje;
	
	//ingresar una edad
	edad = document.getElementById('txtIdEdad').value;

	//parseInt
	edad = parseInt(edad);

	
	if(edad > 17)
	{
		//informar si la persona es mayor de edad
		mensaje ="La persona es mayor de edad"
	}
	else
	{
		//informar que es un menor de edad
		mensaje ="es un menor de edad"
	}

	alert(mensaje);	
	

}//FIN DE LA FUNCIÓN