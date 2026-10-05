export class IdentificationTypeService {
    constructor(IdentificationTypeRepository) {
        this.IdentificationTypeRepository = IdentificationTypeRepository;
        this.fields = [
            { name: "code", label: "Código", type: "string", required: true },
            { name: "name", label: "Nombre", type: "string", required: true },
            { name: "description", label: "Descripción", type: "string", required: false }
        ];
    }

    async Create(code, name, description) {
        if (code && typeof code === "object") {
            ({ code, name, description } = code);
        }
        // Validaciones de presencia
        if (!code || typeof code !== 'string' || code.trim() === '') throw new Error("Code is required");
        if (!name || typeof name !== 'string' || name.trim() === '') throw new Error("Name is required");
        if (description !== undefined && description !== null && typeof description !== 'string') throw new Error("Description must be text");

        const trimmedCode = code.trim();
        const trimmedName = name.trim();

        // Validar duplicados
        const existingCode = await this.IdentificationTypeRepository.FindByCode(trimmedCode);
        if (existingCode) throw new Error("An identification type with this code already exists");

        const existingName = await this.IdentificationTypeRepository.FindByName(trimmedName);
        if (existingName) throw new Error("An identification type with this name already exists");

        const identificationType = {
            code: trimmedCode,
            name: trimmedName,
            description: typeof description === 'string' ? description.trim() || null : null
        };

        return await this.IdentificationTypeRepository.Create(identificationType);
    }

    async GetAll() {
        return await this.IdentificationTypeRepository.GetAll();
    }

    async GetID(id) {
        if (!id || !Number.isInteger(id) || id <= 0) throw new Error("ID must be a valid positive integer");
        
        const identificationType = await this.IdentificationTypeRepository.GetID(id);
        if (!identificationType) throw new Error("Identification type not found");
        
        return identificationType;
    }

    async Update(id, code, name, description) {
        if (code && typeof code === "object") {
            ({ code, name, description } = code);
        }
        // 1. Validar ID y campos requeridos
        if (!id || !Number.isInteger(id) || id <= 0) throw new Error("ID must be a valid positive integer");
        if (!code || typeof code !== 'string' || code.trim() === '') throw new Error("Code is required");
        if (!name || typeof name !== 'string' || name.trim() === '') throw new Error("Name is required");
        if (description !== undefined && description !== null && typeof description !== 'string') throw new Error("Description must be text");

        // 2. Verificar que el registro exista
        const currentRecord = await this.IdentificationTypeRepository.GetID(id);
        if (!currentRecord) throw new Error("Identification type not found");

        const trimmedCode = code.trim();
        const trimmedName = name.trim();

        // 3. Validar si el nuevo CÓDIGO le pertenece a OTRO registro distinto
        const codeOccupied = await this.IdentificationTypeRepository.FindByCode(trimmedCode);
        if (codeOccupied && codeOccupied.id !== id) {
            throw new Error("An identification type with this code already exists");
        }

        // 4. Validar si el nuevo NOMBRE le pertenece a OTRO registro distinto
        const nameOccupied = await this.IdentificationTypeRepository.FindByName(trimmedName);
        if (nameOccupied && nameOccupied.id !== id) {
            throw new Error("An identification type with this name already exists");
        }

        const updatedIdentificationType = {
            id,
            code: trimmedCode,
            name: trimmedName,
            description: typeof description === 'string' ? description.trim() || null : null
        };

        return await this.IdentificationTypeRepository.Update(id, updatedIdentificationType);
    }

    async Delete(id) {
        if (!id || !Number.isInteger(id) || id <= 0) throw new Error("ID must be a valid positive integer");
        
        const identificationType = await this.IdentificationTypeRepository.GetID(id);
        if (!identificationType) throw new Error("Identification type not found");
        
        return await this.IdentificationTypeRepository.Delete(id);
    }
}