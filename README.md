# ACME School

Aplicación de consola para administrar ciudades, aulas, cursos, horarios,
tipos de identificación, inscripciones, calificaciones, estudiantes, docentes
y temas.

## Requisitos

- Node.js 18 o posterior
- MySQL con el esquema de `src/database/acme-school.sql`

## Configuración

Define estas variables en el entorno antes de iniciar la aplicación:

- `MYSQL_HOST` (opcional, predeterminado: `localhost`)
- `MYSQL_PORT` (opcional, predeterminado: `3306`)
- `MYSQL_USER` (obligatoria)
- `MYSQL_PASSWORD` (opcional si la cuenta no tiene contraseña)
- `MYSQL_DATABASE` (opcional, predeterminado: `acme_school`)

La aplicación no cambia la contraseña ni los usuarios de MySQL. Mantén las
credenciales en el entorno local y no las agregues al repositorio.

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
