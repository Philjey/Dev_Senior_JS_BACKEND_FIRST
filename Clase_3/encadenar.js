// Mira: construirEtiqueta no sabe clasificar — le pide ese trabajo a clasificar y usa su resultado.

function clasificar(prioridad) {
  if (prioridad > 3) return "URGENTE";
  else return "normal";
}

function construirEtiqueta(titulo, prioridad) {
  const nivel = clasificar(prioridad);   // ← usa el RETURN de clasificar
  return titulo + " [" + nivel + "]";
}

console.log(construirEtiqueta("Pagar factura", 5));   // Pagar factura [URGENTE]
console.log(construirEtiqueta("Regar plantas", 2));   // Regar plantas [normal]

//El cierre del círculo
//Reescribimos el ciclo del tema anterior usando la función. La regla "urgente si > 3" vive ahora en un solo sitio.

function clasificar(prioridad) {
  if (prioridad > 3) return "URGENTE";
  else return "normal";
}

const tareas = [
  { titulo: "Pagar factura", prioridad: 5 },
  { titulo: "Regar plantas", prioridad: 2 },
  { titulo: "Llamar cliente", prioridad: 4 }
];

for (const tarea of tareas) {
  console.log(tarea.titulo + " → " + clasificar(tarea.prioridad));
}

//Un guiño a TypeScript
//Todo lo de hoy fue en .js. Pero recuerda a TypeScript: así se vería esta misma función con la promesa de tipos.

function clasificar(prioridad: number): string {
  if (prioridad > 3) return "URGENTE";
  else return "normal";
}

//prioridad: number promete que entra un número, y : string promete que sale texto. Si alguien llamara clasificar("hola"), TypeScript lo subrayaría en rojo antes de correr — igual que te protegió del 510. La misma lógica, con un chaleco de seguridad encima.

//Por qué es mejor que clasificar devuelva el nivel en vez de imprimirlo ella misma?
//Porque si clasificar imprime, solo sirve para imprimir. Si devuelve, sirve para todo: imprimir, guardar en archivo, mandar por correo, pintar en una web. Una función que devuelve es reutilizable; una que imprime queda atada a una sola tarea.
