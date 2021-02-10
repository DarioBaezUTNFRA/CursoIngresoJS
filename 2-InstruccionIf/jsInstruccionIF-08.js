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


    if( edad < 18) // si es menor
	{
	  if(estadoCivil == 'Soltero')//si estado civil es Soltero
	  { 
		
	  }
	  else //si es menor y distinto a "Soltero"
	  {
		  console.log("NO HACER NADA");

	  }
	  
	}
	else // caso contrario es menor
	{  
		if(estadoCivil == 'Soltero')//si estado civil es Soltero
		{ 
		  //si es soltero y no es menor mostrar 'Es soltero y no es menor.'
		   console.log("Es soltero y es menor");
		}
		
	 
	}
























	if(edad < 18)  //si es menor a 18 años
	{    
		if( estadoCivil =='Soltero')
		{
         
		}
		else
		{
			console.log("NO HACER NADA");
		}
		
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
		   console.log("Edad : " + edad + " Estado Civil : " + estadoCivil );
	   }
	}


}//FIN DE LA FUNCIÓN