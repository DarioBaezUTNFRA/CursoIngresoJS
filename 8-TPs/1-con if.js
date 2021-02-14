/*Dario Baez */
/* -con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hasta 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace */

/* Ej 1-con if */

 //declaracion de variables
 var distacia;
 var tiempo;
 var velocidad;
 
 //Ingreso de datos
 distacia = prompt("Ingrese la distancia: ");
 distacia = parseInt(distancia);

 tiempo   = prompt("Ingrese el tiempo: ");
 distacia = parseInt(tiempo);

 //calculo de la velocidad
 velocidad = distancia / tiempo;


 
 if (velocidad == 60) //60 km/hr = muy lento
 {
     mensaje = "Muy lento.";
 }
 else
 {
     if (velocidad > 60)
     {
         if(velocidad < 81) //hasta 80km/h= lento
         {
            mensaje = "Lento.";
         }
         else
         {
            if(velocidad < 101) //hasta 100= buen ritmo
            {
               mensaje = "Buen ritmo.";
            }
            else
            {
                if(velocidad < 121) //hasta 120= ahi de la ley
                {
                    mensaje = "Ahi de la ley.";
                }
                else
                {
                    mensaje = "Eso no se hace."; //mas = eso no se hace 
                }

            }
         }
     }
 }

alert(mensaje);