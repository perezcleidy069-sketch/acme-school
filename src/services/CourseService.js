import repository from "../repository/CoursesRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "code", label: "Código", type: "string", required: true },
  { name: "description", label: "Descripción", type: "string", required: false },
  { name: "intensity", label: "Intensidad", type: "number", required: true },
  { name: "weight", label: "Peso", type: "number", required: true },
  { name: "active", label: "Activo", type: "boolean", required: true }
];

export class CourseService extends BaseCrudService {
  constructor(courseRepository = repository) {
    super(courseRepository, fields);
  }
}