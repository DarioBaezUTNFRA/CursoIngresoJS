/* Dario Baez */

/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

/* Ej 8 IF */
function mostrar()
{
	//declaracion de variables
	var edad;
	var estadoCivil;

	//ingreso de datos
	edad        = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	//paseInt
	edad = parseInt(edad);


	if(estadoCivil == 'Soltero')//si estado civil es Soltero
	{    
		if (edad > 17) //si es mayor
	   {
			//si es soltero y no es menor mostrar 'Es soltero y no es menor.'
			alert("Es soltero y no es menor");
	   }	   
	}

}//FIN DE LA FUNCIÓN