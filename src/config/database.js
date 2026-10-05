import { createPool } from "mysql2/promise";

let pool;

export function ConnectData() {
  if (!process.env.MYSQL_USER) {
    throw new Error("Configura MYSQL_USER y MYSQL_PASSWORD en el entorno.");
  }

  if (!pool) {
    pool = createPool({
      host: process.env.MYSQL_HOST ?? "localhost",
      port: Number(process.env.MYSQL_PORT ?? 3306),
      user: process.env.MYSQL_USER ?? "root",
      password: process.env.MYSQL_PASSWORD ?? "Cleidy23@1",
      database: process.env.MYSQL_DATABASE ?? "acme_school",
      waitForConnections: true,
      connectionLimit: 10
    });
  }

  return pool;
}

export async function closeData() {
  if (pool) {
    await pool.end();
    pool = undefined;
  }
}