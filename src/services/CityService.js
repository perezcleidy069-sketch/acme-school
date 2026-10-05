import repository from "../repository/CitiesRepository.js";
import { BaseCrudService } from "./BaseCrudService.js";

const fields = [
  { name: "code", label: "Código", type: "string", required: true },
  { name: "name", label: "Nombre", type: "string", required: true }
];

export class CityService extends BaseCrudService {
  constructor(cityRepository = repository) {
    super(cityRepository, fields);
  }
}