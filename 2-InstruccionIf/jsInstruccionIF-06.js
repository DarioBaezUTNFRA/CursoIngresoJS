/*Dario Baez */

/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

/* Ej 6 IF */
function mostrar()
{
	//declaracion de variables
	var edad;

	//ingresar una edad
	edad = document.getElementById('txtIdEdad').value;
	
	//parseInt
	edad = parseInt(edad);
		
	/// SIEMPRE  MINIMO 1 cosulta al procesador Y MAXIMO 2 
    
	//niño (menor a 13 años)
	if( edad < 13 ) //1 cosulta al procesador
	{
		alert("La persona es un niño");
	}
	else
	{   
		//si la persona es mayor de edad (mas de 18 años)
		if( edad > 18 ) //2 cosulta al procesador
		{
			alert("La persona es mayor de edad");
		}
		//adolescente (entre 13 y 17 años)
		else
		{
			alert("La persona es adolescente");
		}
	}

}//FIN DE LA FUNCIÓN