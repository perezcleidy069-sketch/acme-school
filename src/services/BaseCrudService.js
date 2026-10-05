export class BaseCrudService {
  constructor(repository, fields, idMethod = "GetId") {
    this.repository = repository;
    this.fields = fields;
    this.idMethod = idMethod;
  }

  normalize(data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("Los datos deben tener un formato válido.");
    }

    const normalized = {};
    for (const field of this.fields) {
      const rawValue = data[field.name];
      const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;
      if (value === undefined || value === null || value === "") {
        if (field.required) {
          throw new Error(`${field.label} es obligatorio.`);
        }
        normalized[field.name] = null;
        continue;
      }

      if (field.type === "number" && (!Number.isInteger(value) || value <= 0)) {
        throw new Error(`${field.label} debe ser un entero positivo.`);
      }
      if (field.type === "boolean" && typeof value !== "boolean") {
        throw new Error(`${field.label} debe ser verdadero o falso.`);
      }
      if (field.type === "enum" && !field.values.includes(value)) {
        throw new Error(`${field.label} debe ser uno de: ${field.values.join(", ")}.`);
      }
      if (["string", "date"].includes(field.type) && typeof value !== "string") {
        throw new Error(`${field.label} debe ser texto.`);
      }

      normalized[field.name] = value;
    }

    return normalized;
  }

  Create(data) {
    return this.repository.Create(this.normalize(data));
  }

  GetAll() {
    return this.repository.GetAll();
  }

  async GetID(id) {
    this.validateId(id);
    const record = await this.repository[this.idMethod](id);
    if (!record) {
      throw new Error("No se encontró el registro.");
    }
    return record;
  }

  async Update(id, data) {
    this.validateId(id);
    await this.GetID(id);
    return this.repository.Update({ ...this.normalize(data), id });
  }

  async Delete(id) {
    this.validateId(id);
    await this.GetID(id);
    return this.repository.Delete(id);
  }

  validateId(id) {
    const parsedId = Number(id);
    if (!Number.isInteger(parsedId) || parsedId <= 0) {
      throw new Error("El ID debe ser un entero positivo.");
    }
    return parsedId;
  }
}