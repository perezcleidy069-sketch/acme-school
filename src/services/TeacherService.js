import repository from "../repository/TeachersRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "firstName", label: "Nombres", type: "string", required: true },
  { name: "lastName", label: "Apellidos", type: "string", required: true },
  { name: "identificationTypeId", label: "ID del tipo de identificación", type: "number", required: true },
  { name: "identificationNumber", label: "Número de identificación", type: "string", required: true },
  { name: "email", label: "Correo electrónico", type: "string", required: true }
];

export class TeacherService extends BaseCrudService {
  constructor(teacherRepository = repository) {
    super(teacherRepository, fields);
  }
}