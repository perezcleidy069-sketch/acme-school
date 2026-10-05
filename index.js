import { createInterface } from "node:readline/promises";
import { pathToFileURL } from "node:url";
import { ConnectData, closeData } from "./src/config/database.js";
import { ServiceFactory } from "./src/patterns/factory/ServiceFactory.js";
import showCitiesMenu from "./src/cli/CitiesMenu.js";
import showClassroomsMenu from "./src/cli/ClassroomsMenu.js";
import showCoursesMenu from "./src/cli/CoursesMenu.js";
import showCourseSchedulesMenu from "./src/cli/CourseSchedulesMenu.js";
import showIdentificationTypesMenu from "./src/cli/IdentificationTypesMenu.js";
import showInscriptionsMenu from "./src/cli/InscriptionsMenu.js";
import showRatesMenu from "./src/cli/RatesMenu.js";
import showStudentsMenu from "./src/cli/StudentsMenu.js";
import showTeachersMenu from "./src/cli/TeachersMenu.js";
import showTopicsMenu from "./src/cli/TopicsMenu.js";

const menuEntries = [
  ["1", "Ciudades", "cities", showCitiesMenu],
  ["2", "Aulas", "classrooms", showClassroomsMenu],
  ["3", "Cursos", "courses", showCoursesMenu],
  ["4", "Horarios de cursos", "courseSchedules", showCourseSchedulesMenu],
  ["5", "Tipos de identificación", "identificationTypes", showIdentificationTypesMenu],
  ["6", "Inscripciones", "inscriptions", showInscriptionsMenu],
  ["7", "Calificaciones", "rates", showRatesMenu],
  ["8", "Estudiantes", "students", showStudentsMenu],
  ["9", "Docentes", "teachers", showTeachersMenu],
  ["10", "Temas", "topics", showTopicsMenu]
];

export async function main() {
  const readline = createInterface({ input: process.stdin, output: process.stdout });

  try {
    const database = await ConnectData();
    await database.query("SELECT 1");
    console.log("Conexión a MySQL establecida.\n");
    const services = ServiceFactory.create();

    while (true) {
      console.log("\n=== ACME SCHOOL ===");
      for (const [option, label] of menuEntries) console.log(`${option}. ${label}`);
      console.log("0. Salir");
      const option = (await readline.question("Seleccione una opción: ")).trim();

      if (option === "0") break;
      const entry = menuEntries.find(([key]) => key === option);
      if (!entry) {
        console.log("Opción no válida.");
        continue;
      }
      await entry[3](readline, services[entry[2]]);
    }
  } catch (error) {
    console.error(`No se pudo iniciar la aplicación: ${error.message}`);
    process.exitCode = 1;
  } finally {
    readline.close();
    await closeData();
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}