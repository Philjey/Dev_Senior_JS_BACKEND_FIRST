const prioridad = 5;

if (prioridad > 3) {
  console.log("Esta tarea es URGENTE");
}

const prioridad = 2;

if (prioridad > 3) {
  console.log("URGENTE");
} else {
  console.log("normal");
}

const prioridad = 4;

if (prioridad >= 5) {
  console.log("crítica");
} else if (prioridad >= 3) {
  console.log("alta");
} else {
  console.log("baja");
}

