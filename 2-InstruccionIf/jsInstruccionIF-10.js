/* Dario Baez*/

/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

/* EJ 10 IF  */
function mostrar()
{   
	//declaracion de variables
	var nota;
    
	//asignar una nota RANDOM al examen entre 1 y 10 inclusive
    nota = Math.floor(Math.random() * 10 ) + 1;

    console.log("nota: " + nota);

	//para notas menores a 4 
	if( nota < 4)
	{   
		//mostrar "Vamos, la proxima se puede"
		alert("Vamos, la proxima se puede");
	}
	else 
	{  
		if(nota > 8) //para notas igual a 9 o 10
		{
			alert("EXCELENTE");

		}
		else // para notas mayores a 4
		{
			alert("APROBÓ");
		}
	}
}//FIN DE LA FUNCIÓN