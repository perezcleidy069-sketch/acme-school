import { createConnection } from "mysql2/promise";
import { createInterface } from "readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let dbConnection;

async function showMenu() {
  // Define aquí la lógica de tu menú
  console.log("Menú principal...");
}

async function main() {
  try {
    dbConnection = await createConnection({
      host: 'localhost',
      user: 'campus2023',
      password: 'campus2023',
      database: 'acme_school'
    });

    console.log('Conectado exitosamente a la base de datos acme_school en MySQL.\n');
    await showMenu();
  } catch (error) {
    console.error('Error al conectarse a la base de datos o al iniciar la app:', error);
  } finally {
    if (dbConnection) await dbConnection.end();
    rl.close();
  }
}

main();