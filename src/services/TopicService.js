import repository from "../repository/TopicsRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "courseId", label: "ID del curso", type: "number", required: true },
  { name: "code", label: "Código", type: "string", required: true },
  { name: "title", label: "Título", type: "string", required: true },
  { name: "description", label: "Descripción", type: "string", required: true },
  { name: "active", label: "Activo", type: "boolean", required: true }
];

export class TopicService extends BaseCrudService {
  constructor(topicRepository = repository) {
    super(topicRepository, fields);
  }
}