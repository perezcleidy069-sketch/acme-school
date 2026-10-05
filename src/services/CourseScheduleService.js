import repository from "../repository/CourseSchedulesRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "courseId", label: "ID del curso", type: "number", required: true },
  { name: "teacherId", label: "ID del docente", type: "number", required: true },
  { name: "classroomId", label: "ID del aula", type: "number", required: true },
  { name: "startDate", label: "Fecha de inicio (AAAA-MM-DD HH:mm:ss)", type: "date", required: true },
  { name: "endDate", label: "Fecha de finalización (AAAA-MM-DD HH:mm:ss)", type: "date", required: true },
  { name: "active", label: "Activo", type: "boolean", required: true }
];

export class CourseScheduleService extends BaseCrudService {
  constructor(scheduleRepository = repository) {
    super(scheduleRepository, fields);
  }
}