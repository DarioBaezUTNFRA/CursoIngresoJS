/* Dario Baez

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/* Ejercicio 7 */
function sumar()
{	
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//tomar Los numeros por ID
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
    
	//transformarlos a enteros (parseInt)
	numeroDos = parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	
	//realizar la operación correcta
	resultado = numeroDos + numeroUno;

	//mostrar el resulto por medio de "ALERT
	mensaje   = "La Suma es : " + resultado;
	alert(mensaje);	
}

function restar()
{
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//ingreso
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroDos = parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	//fin ingreso

	//inicio operar
	resultado = numeroUno - numeroDos;
	mensaje = "La Resta es : " + resultado;

	//mostrar
	alert(mensaje);
	
}

function multiplicar()
{ 
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//ingreso
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroDos = parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	//fin ingreso

	//inicio operar
	resultado = numeroUno * numeroDos;
	mensaje = "La Multiplicacion es : " + resultado;

	//mostrar
	alert(mensaje);
	
}

function dividir()
{
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//ingreso
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroDos = parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	//fin ingreso

	//inicio operar
	resultado = numeroUno / numeroDos;
	mensaje = "La Division es : " + resultado;

	//mostrar
	alert(mensaje);
}