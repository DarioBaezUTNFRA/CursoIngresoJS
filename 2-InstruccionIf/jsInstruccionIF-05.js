/* Dario Baez */

/* Al ingresar una edad solo debemos informar si la persona NO es adolescente.

/*Ej 5 InstruccionIF */
function mostrar()
{
	//declaracion de variables
	var edad;
	//ingresar una edad
	edad = document.getElementById('txtIdEdad').value;

	//parseInt
	edad = parseInt(edad);
    
	//console.log(edad);
 
	

	// 1- CON DOS IF 
  /*if (edad > 17)
	{

	}
	if (edad < 13)
	{

	}*/

	//2 - CON OPERADOR &&
	/*
	if(!(edad < 17 && edad > 13))
	{
		//informar si la persona es adolescente
		alert("La persona NO es adolescente");	
	} */

	//3 - CON OPERADOR ||
	if(edad > 17 || edad < 13)
	{
		//informar si la persona es adolescente
		alert("La persona NO es adolescente");	
	} 


}//FIN DE LA FUNCIÓN