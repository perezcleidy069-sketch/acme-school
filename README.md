# ACME School

Aplicación de consola para administrar ciudades, aulas, cursos, horarios,
tipos de identificación, inscripciones, calificaciones, estudiantes, docentes
y temas.

## Requisitos

- Node.js 18 o posterior
- MySQL con el esquema de `src/database/acme-school.sql`

## Configuración

La aplicación carga automáticamente un archivo `.env` en la raíz del proyecto.
Puedes crearlo usando `.env.example` como referencia. También puedes definir
las variables en el entorno:

- `DB_HOST` (opcional, predeterminado: `localhost`)
- `DB_USER` (opcional, usa el usuario local configurado)
- `DB_PASSWORD` (opcional, usa la contraseña local configurada)
- `DB_NAME` (opcional, predeterminado: `acme_school`)
- `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD` y `MYSQL_DATABASE` también son compatibles.

No subas el archivo `.env` al repositorio. La aplicación no modifica usuarios
ni contraseñas de MySQL.

## Ejecución

```sh
npm install
npm start
```

El menú principal permite entrar al submenú CRUD de cada entidad. Las
operaciones sobre registros requieren que existan previamente las entidades
referenciadas por sus claves foráneas.

## Pruebas

```sh
npm test
```
