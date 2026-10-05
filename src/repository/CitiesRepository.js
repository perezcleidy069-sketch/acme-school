import {ConnectData} from '../config/database.js';

class CitiesRepository{
    async Create(city){
        const db = await ConnectData();
        const query = 'INSERT INTO Cities (name, countryId) VALUES (?, ?)';
        const [resultado] = await db.execute(query, [
            city.name,
            city.countryId
        ]);
        return{
            id: resultado.insertId,
            name: city.name,
            countryId: city.countryId
        };
    }

    async GetAll(){
        const db = await ConnectData();
        const query = 'SELECT * FROM Cities';
        const [resultado] = await db.execute(query);
        return resultado;
    }

    async GetId(id){
        const db = await ConnectData();
        const query = 'SELECT * FROM Cities WHERE id = ?';
        const [fila] = await db.execute(query, [id]);

        if(fila.length === 0){
            return null;
        }

        return fila[0];
    }

    async Update(city){
        const db = await ConnectData();
        const query = 'UPDATE Cities SET name = ?, countryId = ? WHERE id = ?';
        const [resultado] = await db.execute(query, [
            city.name,
            city.countryId,
            city.id
        ]);

        return resultado.affectedRows > 0;
    }

    async Delete(id){
        const db = await ConnectData();
        const query = 'DELETE FROM Cities WHERE id = ?';
        const [resultado] = await db.execute(query, [id]);

        return resultado.affectedRows > 0;
    }
}

export default new CitiesRepository();