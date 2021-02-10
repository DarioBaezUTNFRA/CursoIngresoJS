/* Dario Baez */

/* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

/* Ej 9 IF */
function mostrar()
{
	var numeroRandom;
	
	//Genero el número RANDOM entre 1 y 10 inclusive
	numeroRandom = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
	
	//mostrar un número Random del 1 al 10 inclusive
    console.log("El número random es: " + numeroRandom);  

}//FIN DE LA FUNCIÓN