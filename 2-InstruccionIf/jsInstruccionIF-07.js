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
   
	
	if( edad > 17) // Si ingresa una edad mayor a 17 incluye el 18 y mayores de 18 años
	{
       console.log("Edad : " + edad + " Estado Civil : " + estadoCivil );
	}
	else // caso contrario la edad es menor a 18 años
	{  
      if(estadoCivil == 'Soltero')//si estado civil es Soltero
	  {
		console.log("Edad : " + edad + " Estado Civil : " + estadoCivil );
	  }  
	  else // caso contrario estado civil distinto a "Soltero"
	  {
		alert("Es muy pequeño para NO ser soltero");
	  }
	}
}//FIN DE LA FUNCIÓN