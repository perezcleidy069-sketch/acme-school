import repository from "../repository/StudentsRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "code", label: "Código", type: "string", required: true },
  { name: "firstName", label: "Nombres", type: "string", required: true },
  { name: "lastName", label: "Apellidos", type: "string", required: true },
  { name: "identificationTypeId", label: "ID del tipo de identificación", type: "number", required: true },
  { name: "identificationNumber", label: "Número de identificación", type: "string", required: true },
  { name: "gender", label: "Género (M/F)", type: "enum", values: ["M", "F"], required: true },
  { name: "birthDate", label: "Fecha de nacimiento (AAAA-MM-DD)", type: "date", required: true },
  { name: "email", label: "Correo electrónico", type: "string", required: true },
  { name: "address", label: "Dirección", type: "string", required: true },
  { name: "cityId", label: "ID de ciudad", type: "number", required: true }
];

export class StudentService extends BaseCrudService {
  constructor(studentRepository = repository) {
    super(studentRepository, fields);
  }
}