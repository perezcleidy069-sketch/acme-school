import { createConnection } from "mysql2/promise";
import "dotenv/config";

let dbConnection;

export async function conectarDB() {
  if (dbConnection) {
    return dbConnection;
  }

  if (process.env.MYSQL_HOST === undefined && process.env.DB_HOST !== undefined) {
    process.env.MYSQL_HOST = process.env.DB_HOST;
  }
  if (process.env.MYSQL_USER === undefined && process.env.DB_USER !== undefined) {
    process.env.MYSQL_USER = process.env.DB_USER;
  }
  if (process.env.MYSQL_PASSWORD === undefined && process.env.DB_PASSWORD !== undefined) {
    process.env.MYSQL_PASSWORD = process.env.DB_PASSWORD;
  }
  if (process.env.MYSQL_DATABASE === undefined && process.env.DB_NAME !== undefined) {
    process.env.MYSQL_DATABASE = process.env.DB_NAME;
  }

  dbConnection = await createConnection({
      host: process.env.MYSQL_HOST ?? "localhost",
      port: Number(process.env.MYSQL_PORT ?? 3306),
      user: process.env.MYSQL_USER ?? "root",
      password: process.env.MYSQL_PASSWORD ?? "Cleidy23@1",
      database: process.env.MYSQL_DATABASE ?? "acme_school"
    });

  console.log(`Conectado exitosamente a la base de datos ${process.env.MYSQL_DATABASE ?? "acme_school"} en MySQL.\n`);
  return dbConnection;
}

export const ConnectData = conectarDB;
export { dbConnection };

export async function closeData() {
  if (dbConnection) {
    await dbConnection.end();
    dbConnection = undefined;
  }
}