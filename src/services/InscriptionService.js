import repository from "../repository/InscriptionsRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "courseScheduleId", label: "ID del horario", type: "number", required: false },
  { name: "studentId", label: "ID del estudiante", type: "number", required: true },
  { name: "registerDate", label: "Fecha de inscripción (AAAA-MM-DD HH:mm:ss)", type: "date", required: true },
  { name: "active", label: "Activo", type: "boolean", required: true }
];

export class InscriptionService extends BaseCrudService {
  constructor(inscriptionRepository = repository) {
    super(inscriptionRepository, fields);
  }
}