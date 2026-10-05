import {ConnectData} from '../config/database.js';

class IdentificationTypeRepository{
    async Create(identificationType){
        const db = await ConnectData();
        const query = 'INSERT INTO IdentificationTypes (code, name, description) VALUES (?, ?, ?)';
        const [resultado] = await db.execute(query, [
            identificationType.code,
            identificationType.name,
            identificationType.description
        ]);
        return {
            id: resultado.insertId,
            code: identificationType.code,
            name: identificationType.name,
            description: identificationType.description
        }
    }

    async GetAll(){
        const db = await ConnectData();
        const query= 'SELECT * FROM IdentificationTypes';
        const [resultado] = await db.execute(query)

        return resultado
    }

    async GetID(id){
        const db = await ConnectData();
        const query = 'SELECT * FROM IdentificationTypes WHERE id = ?';
        const [fila] = await db.execute(query, [id])

        if(fila.length === 0){
            return null;
        }

        return fila[0];
    }

    async Update(identificationType){
        const db = await ConnectData();
        const query = 'UPDATE IdentificationTypes SET code = ?, name = ?, description = ? WHERE id = ?';
        const [resultado] = await db.execute(query, [
            identificationType.code,
            identificationType.name,
            identificationType.description,
            identificationType.id
        ]);
        return resultado.affectedRows > 0;
    }

    async Delete(id){
        const db = await ConnectData();
        const query = 'DELETE FROM IdentificationTypes WHERE id = ?';
        const [resultado] = await db.execute(query, [id]);
        return resultado.affectedRows > 0;
    }

}

export default new IdentificationTypeRepository();