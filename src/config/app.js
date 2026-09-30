import { asyncWrapProviders } from "async_hooks";
import { createConnection } from "mysql2/promise";

import{createInterFace} from 'readline/promises';
import BodyReadable from "undici-types/readable";

const rl=createInterFace({
  input:process.stdin,
  output:process.stdout
});

let dbConnection;

async function main(){
  try{
    dbConnection = await createConnection({
      host: 'localhost',
      user: 'campus2023',
      password: 'campus2023',
      database: 'acme_school'
    });

    console.log('Conectado exitosamente a al base de datos acme_campus en MySQL.\n')
    await showMenu();
  }
  catch(error){
    console.log('Erro al conectarse a la base de datos o al inicial la app.', error)
  }

}