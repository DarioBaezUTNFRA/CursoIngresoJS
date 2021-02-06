/* Dario Baez */
/* Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) . */

/*Ej 4 InstruccionIF */
function mostrar()
{
	//declaracion de variables
	var edad;
	var mensaje;
	
	//ingresar una edad
	edad = document.getElementById('txtIdEdad').value;

	//parseInt
	edad = parseInt(edad);
    
	//console.log(edad);
    
	//edad entre 13 y 17 años (inclusive)
	/*if(edad > 12)
	{
		if(edad < 18)
		{   
			//informar si la persona es adolescente
			alert("La persona es adolescente");	
		}	
	}*/

	if( edad < 18 && edad > 12)
	{
		//informar si la persona es adolescente
		alert("La persona es adolescente");	
		
	}

}//FIN DE LA FUNCIÓN