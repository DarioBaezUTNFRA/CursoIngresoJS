/*Dario Baez */

/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

/* Ej 7 IF */
function mostrar()
{
	//declaracion de variables
	var edad;
    var estadoCivil;

	//ingresar una edad
	edad = document.getElementById('txtIdEdad').value;
	//ingresar un estado civil 
	estadoCivil = document.getElementById('estadoCivil').value;

	//parseInt
	edad = parseInt(edad);
   
	
	if( edad > 18 || edad == 18) // Si ingresa una edad mayor o igual a 18 años 
	{
       //no hacer nada;
	}
	else // caso contrario la edad es menor a 18 años
	{  
      if(estadoCivil == 'Soltero')//si estado civil es Soltero
	  {
         //no hacer nada;
	  }  
	  else // caso contrario estado civil distinto a "Soltero"
	  {
		alert("Es muy pequeño para NO ser soltero");
	  }
	}
}//FIN DE LA FUNCIÓN