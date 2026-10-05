async function readFields(readline, service) {
  const data = {};
  for (const field of service.fields) {
    const choices = field.values ? ` (${field.values.join("/")})` : "";
    const optional = field.required ? "" : " [opcional]";
    const answer = await readline.question(`${field.label}${choices}${optional}: `);

    if (answer === "" && !field.required) {
      data[field.name] = null;
    } else if (field.type === "number") {
      data[field.name] = Number(answer);
    } else if (field.type === "boolean") {
      const normalized = answer.trim().toLowerCase();
      data[field.name] = ["s", "si", "sí", "true", "1"].includes(normalized)
        ? true
        : ["n", "no", "false", "0"].includes(normalized)
          ? false
          : answer;
    } else {
      data[field.name] = answer;
    }
  }
  return data;
}

export async function runCrudSubmenu(readline, title, service) {
  while (true) {
    console.log(`\n--- ${title} ---`);
    console.log("1. Crear\n2. Listar\n3. Actualizar\n4. Eliminar\n0. Volver");
    const option = (await readline.question("Seleccione una opción: ")).trim();

    try {
      if (option === "0") return;
      if (option === "1") {
        console.log("Registro creado:", await service.Create(await readFields(readline, service)));
      } else if (option === "2") {
        const records = await service.GetAll();
        if (records.length === 0) console.log("No hay registros.");
        else console.table(records);
      } else if (option === "3") {
        const id = await readline.question("ID del registro: ");
        const result = await service.Update(Number(id), await readFields(readline, service));
        console.log(result ? "Registro actualizado." : "No se realizaron cambios.");
      } else if (option === "4") {
        const id = await readline.question("ID del registro: ");
        const confirmation = (await readline.question("¿Eliminar registro? (s/N): ")).trim().toLowerCase();
        if (confirmation === "s" || confirmation === "si" || confirmation === "sí") {
          const result = await service.Delete(Number(id));
          console.log(result ? "Registro eliminado." : "No se realizaron cambios.");
        }
      } else {
        console.log("Opción no válida.");
      }
    } catch (error) {
      console.error(`No se pudo completar la operación: ${error.message}`);
    }
  }
}