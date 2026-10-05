import repository from "../repository/ClassroomsRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "code", label: "Código", type: "string", required: true },
  { name: "description", label: "Descripción", type: "string", required: true },
  { name: "capacity", label: "Capacidad", type: "number", required: true },
  { name: "active", label: "Activo", type: "boolean", required: true }
];

export class ClassroomService extends BaseCrudService {
  constructor(classroomRepository = repository) {
    super(classroomRepository, fields);
  }
}