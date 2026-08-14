// hoy veremos el tema de condicionales, empezamos por if

const prioridad = 5;
 if (prioridad > 3) {
    console.log("Es una tarea URGENTE");
}

// ahora vamos con if else

const prioridad = 5;
if (prioridad > 3) {
    console.log("Es una tarea URGENTE");
} else {
    console.log("Es una tarea NORMAL")
}

// ahora vamos con if con niveles

const prioridad = 4;

if (prioridad >=5) {
    console.log("Prioridad Crítica");
} else if (prioridad >=3) {
    console.log("Priorida Alta");
} else{
    console.log("Prioridad Baja");
}

    


