//Por qué una variable de una función no se ve por fuera, y por qué no todos los errores son iguales.
//El alcance(scope) es la zona del programa donde una variable existe. Una variable con let o const dentro de un bloque { } solo vive dentro de ese bloque.

function calcular() {
  const interno = 10;
  console.log(interno);   // funciona: estamos dentro
}

calcular();
console.log(interno);      // ❌ error: "interno" no existe aquí afuera

//La segunda línea lanza un error que se lee como interno is not defined. No es que el programa esté mal escrito: es JavaScript protegiéndote de usar algo fuera de su cuarto.
