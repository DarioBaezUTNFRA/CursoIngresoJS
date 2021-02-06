/*Dario Baez*/
/*Al ingresar una edad debemos informar solo si la persona es mayor de edad */

/*Ej 2 InstruccinoIF */
function mostrar()
{
	//declaracion de variables
	var edad;
	
	//ingreso de datos
	edad = document.getElementById('txtIdEdad').value;

	//parseInt
	edad = parseInt(edad);

	//informar solo si la persona es mayor de edad
	if(edad > 17)
	{
		//informar solo si la persona es mayor de edad
		alert("La persona es mayor de edad");	
	}
	

}//FIN DE LA FUNCIÓN