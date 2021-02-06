/*Dario Baez*/
/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */

/*Ej 1 InstruccionIF */
function mostrar()
{   
	//declaracion de variables
	var edad;

	//ingreso de datos
	edad = document.getElementById('txtIdEdad').value;

	//parseInt
	edad = parseInt(edad);

	//ingresar una edad que sea igual a 15
	if(edad == 15)
	{
		//mostrar el mensaje "niña bonita"
		alert("niña bonita");	
	} 
	
}//FIN DE LA FUNCIÓN