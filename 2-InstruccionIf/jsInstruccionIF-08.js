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

	if( (edad < 18) &&  ( ! (estadoCivil =='Soltero')) ) //si es menor y distinto a Soltero
	{  
		//no hacer nada
	}
	else 
	{
		// es menor    y es soltero  ó
	    // no es menor y es soltero  ó
		// no es menor y no es soltero
	
       if((estadoCivil =='Soltero') && ( ! (edad < 18)) ) // si no es menor y es soltero 
	   {
		   // mostrar el mensaje 'Es soltero y no es menor'
           alert("Es soltero y no es menor");
	   }
	   else
	   {    
		   // es menor    y es soltero
		   // no es menor y no es soltero
		   alert("El Estado Civil es : " + estadoCivil +  " y la Edad es : " + edad);
	   }
	}


}//FIN DE LA FUNCIÓN