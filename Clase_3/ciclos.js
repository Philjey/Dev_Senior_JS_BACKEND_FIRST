
// Imprime las vueltas 0, 1 y 2. let i = 0 empieza en 0 · i < 3 sigue mientras sea menor a 3 · i++ suma 1 cada vuelta.

for (let i = 0; i < 3; i++) {
  console.log("Vuelta número " + i);
}

//Casi siempre lo que queremos es recorrer una lista de cosas. Una lista se escribe entre corchetes [ ].

const tareas = ["Pagar factura", "Regar plantas", "Llamar cliente"];

for (const tarea of tareas) {
  console.log("Tarea: " + tarea);
}

//Aquí la clase se conecta. Recorremos las tareas y decidimos sobre cada una. Esto es el problema del negocio, resuelto.

const tareas = [
  { titulo: "Pagar factura", prioridad: 5 },
  { titulo: "Regar plantas", prioridad: 2 },
  { titulo: "Llamar cliente", prioridad: 4 }
];

for (const tarea of tareas) {
  if (tarea.prioridad > 3) {
    console.log(tarea.titulo + " → URGENTE");
  } else {
    console.log(tarea.titulo + " → normal");
  }
}

//Un ciclo permite aplicar una misma lógica a una cantidad de datos que puede cambiar.
//for (const tarea of tareas) { = Puedes leerlo prácticamente como:
//“Para cada tarea que exista dentro de tareas, haz lo siguiente.”
