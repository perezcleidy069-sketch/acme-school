import repository from "../repository/RatesRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "inscriptionId", label: "ID de inscripción", type: "number", required: true },
  { name: "rate", label: "Calificación", type: "number", required: true },
  { name: "comments", label: "Comentarios", type: "string", required: false }
];

export class RateService extends BaseCrudService {
  constructor(rateRepository = repository) {
    super(rateRepository, fields);
  }
}