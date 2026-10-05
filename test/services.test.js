import test from "node:test";
import assert from "node:assert/strict";
import { BaseCrudService } from "../src/services/BaseCrudService.js";
import { IdentificationTypeService } from "../src/services/IdentificationTypeService.js";
import { ServiceFactory } from "../src/patterns/factory/ServiceFactory.js";

function createFakeRepository() {
  const records = new Map();
  let nextId = 1;

  return {
    async Create(data) {
      const record = { ...data, id: nextId++ };
      records.set(record.id, record);
      return record;
    },
    async GetAll() {
      return [...records.values()];
    },
    async GetId(id) {
      return records.get(id) ?? null;
    },
    async Update(data) {
      if (!records.has(data.id)) return false;
      records.set(data.id, data);
      return true;
    },
    async Delete(id) {
      return records.delete(id);
    }
  };
}

test("BaseCrudService validates data and delegates CRUD operations", async () => {
  const service = new BaseCrudService(createFakeRepository(), [
    { name: "name", label: "Nombre", type: "string", required: true },
    { name: "capacity", label: "Capacidad", type: "number", required: true }
  ]);

  const created = await service.Create({ name: " Aula 1 ", capacity: 20 });
  assert.equal(created.name, "Aula 1");
  assert.deepEqual(await service.GetAll(), [created]);
  assert.equal(await service.Update(created.id, { name: "Aula 2", capacity: 25 }), true);
  assert.equal((await service.GetID(created.id)).name, "Aula 2");
  assert.equal(await service.Delete(created.id), true);
  assert.throws(() => service.Create({ name: "", capacity: 20 }), /obligatorio/);
  assert.throws(() => service.Create({ name: "Aula", capacity: 0 }), /entero positivo/);
  await assert.rejects(service.GetID(0), /entero positivo/);
});

test("ServiceFactory provides a service for every repository entity", () => {
  const services = ServiceFactory.create();
  assert.deepEqual(Object.keys(services), [
    "cities",
    "classrooms",
    "courses",
    "courseSchedules",
    "identificationTypes",
    "inscriptions",
    "rates",
    "students",
    "teachers",
    "topics"
  ]);
  for (const service of Object.values(services)) {
    assert.equal(typeof service.Create, "function");
    assert.equal(typeof service.GetAll, "function");
    assert.equal(typeof service.Update, "function");
    assert.equal(typeof service.Delete, "function");
  }
});

test("IdentificationTypeService accepts menu objects and prevents duplicates", async () => {
  const records = [];
  const repository = {
    async FindByCode(code) {
      return records.find((record) => record.code === code) ?? null;
    },
    async FindByName(name) {
      return records.find((record) => record.name === name) ?? null;
    },
    async Create(data) {
      const record = { ...data, id: 1 };
      records.push(record);
      return record;
    },
    async GetAll() {
      return records;
    },
    async GetID(id) {
      return records.find((record) => record.id === id) ?? null;
    },
    async Update(id, data) {
      const index = records.findIndex((record) => record.id === id);
      if (index < 0) return false;
      records[index] = { ...data, id };
      return true;
    },
    async Delete(id) {
      const index = records.findIndex((record) => record.id === id);
      if (index < 0) return false;
      records.splice(index, 1);
      return true;
    }
  };
  const service = new IdentificationTypeService(repository);

  await service.Create({ code: "DPI", name: "Documento", description: null });
  await assert.rejects(
    service.Create({ code: "DPI", name: "Otro", description: null }),
    /already exists/
  );
  assert.equal(await service.Update(1, { code: "PAS", name: "Pasaporte", description: null }), true);
});