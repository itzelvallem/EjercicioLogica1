/* Crear un programa en `JavaScript` que realice lo siguiente:

- Input
- Solicitar por prompt tres datos y guardarlos en sus respectivas variables.

- Output
- Mostrar los números por consola o DOM ordenados de mayor a menor, y de menor a mayor.
- Mostrar un mensaje en consola o por el DOM si los números son iguales.


Input: 4, 4, 2



Output:
4, 4, 2
2, 4, 4

-----

Consideraciones
- Al analizar los números, deberás identificar cual es el número mayor, el número del centro y el número menor.
- Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
- Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo `HTML` y enlazar tu script.
 */



//Pedir datos al usuario
let dato1 = parseInt(prompt("Ingrese el primer dato: "));
let dato2 = parseInt(prompt("Ingrese el segundo dato: "));
let dato3 = parseInt(prompt("Ingrese el tercer dato: "));

//Validar que sean números
if (isNaN(dato1) || isNaN(dato2) || isNaN(dato3)) {
    console.log("Porfavor ingrese valores numericos");
} else {


    //Revisar si alguno de los 3 datos son similares con el OR y el operador de estricto igual.
    if (dato1 === dato2 || dato1 === dato3 || dato2 === dato3) {
        if (dato1 === dato2) {
            console.log("El dato1: " + dato1 + " es igual al dato2: " + dato2);
        } else if (dato1 === dato3) {
            console.log("El dato1: " + dato1 + " es igual al dato3: " + dato3);

        } else if (dato2 === dato3) {
            console.log("El dato2: " + dato2 + " es igual al dato3: " + dato3);
        }
    }


    function MayorAMenor(dato1, dato2, dato3) {

        //Si dato1 es mayor que el dato2 y el tambien es mayor que el dato3...
        if (dato1 >= dato2 && dato1 >= dato3) {


            //Si sabemos que el dato1 es mayor, entonces checamos si el dato2 es mayor que el dato3 para poder imprimirlo en consola. 
            if (dato2 >= dato3) {
                console.log(dato1 + "," + dato2 + "," + dato3);
            } else {
                console.log(dato1 + "," + dato3 + "," + dato2);
            }

            //evaluamos la siguiente condicion donde si el dato2 es mayor que dato1 y dato3
        } else if (dato2 >= dato1 && dato2 >= dato3) {
            if (dato1 >= dato3) {
                console.log(dato2 + "," + dato1 + "," + dato3);
            } else {
                console.log(dato2 + "," + dato3 + "," + dato1);
            }

            //evaluamos la siguiente condicion donde si el dato3 es mayor que dato1 y dato2
        } else if (dato3 >= dato1 && dato3 >= dato2) {
            if (dato2 >= dato1) {
                console.log(dato3 + "," + dato2 + "," + dato1);
            } else {
                console.log(dato3 + "," + dato1 + "," + dato2);
            }
        }


        //Invocar la funcion
    } MayorAMenor(dato1, dato2, dato3);



    //Funcion Menor a Mayor

    function MenorAMayor(dato1, dato2, dato3) {
        //Si dato1 es mayor que el dato2 y el tambien es mayor que el dato3
        if (dato1 <= dato2 && dato1 <= dato3) {
            //if anidado
            //Si sabemos que el dato1 es mayor, entonces solo falta ver si el dato2 es mayor que el dato 3 para poder imprimirlo en consola
            if (dato2 <= dato3) {
                console.log(dato1 + "," + dato2 + "," + dato3);
            } else {
                console.log(dato1 + "," + dato3 + "," + dato2);
            }

            //Evaluamos la siguiente condicion donde si el dato2 es mayor que dato1 y dato3
        } else if (dato2 <= dato1 && dato2 <= dato3) {
            if (dato1 <= dato3) {
                console.log(dato2 + "," + dato1 + "," + dato3);
            } else {
                console.log(dato2 + "," + dato3 + "," + dato1);
            }

            //evaluamos la siguiente condicion donde si el dato3 es mayor que dato1 y dato2
        } else if (dato3 <= dato1 && dato3 <= dato2) {
            if (dato2 <= dato1) {
                console.log(dato3 + "," + dato2 + "," + dato1);
            } else {
                console.log(dato3 + "," + dato1 + "," + dato2);
            }
        }

        //Invocar la función
    } MenorAMayor(dato1, dato2, dato3);

}   //Cierre del else de la validación! :)