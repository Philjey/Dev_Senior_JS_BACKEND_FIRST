//Una función es un bloque de código con nombre que se define una vez y se ejecuta las veces que quieras. Puede recibir datos (parámetros) y devolver un resultado (retorno).
//Definirla no la ejecuta: hay que llamarla por su nombre.

function saludar() {
  console.log("Hola, bienvenido al gestor de tareas");
}

saludar();   // ← esto la ejecuta
saludar();   // ← la usamos otra vez sin reescribirla

//Con parámetros: darle datos de entrada
//Una receta sin ingredientes siempre da lo mismo. Los parámetros reciben datos distintos cada vez.
function saludarA(nombre) {
  console.log("Hola, " + nombre);
}

saludarA("Ana");      // Hola, Ana
saludarA("Carlos");   // Hola, Carlos

//Con retorno: que devuelvan un resultado
// console.log solo muestra. Pero muchas veces queremos que la función nos entregue un valor para seguir usándolo. Eso es return.

function clasificar(prioridad) {
  if (prioridad > 3) {
    return "URGENTE";
  } else {
    return "normal";
  }
}

const resultado = clasificar(5);
console.log(resultado);       // URGENTE
console.log(clasificar(2));   // normal

