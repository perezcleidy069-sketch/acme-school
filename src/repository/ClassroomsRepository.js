import {ConnectData} from '../config/database.js';

class ClassroomsRepository{
    async Create(classroom){
        const db = await ConnectData();
        const query = 'INSERT INTO Classrooms (code, description, capacity, active) VALUES (?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [
            classroom.code,
            classroom.description,
            classroom.capacity,
            classroom.active
        ]);
        return{
            id: resultado.insertId,
            code: classroom.code,
            description: classroom.description,
            capacity: classroom.capacity,
            active: classroom.active
        };
    }
    async GetAll(){
        const db = await ConnectData();
        const query = 'SELECT * FROM Classrooms';
        const [resultado]= await db.execute(query)
        return resultado
    }

    async GetId(id){
        const db= await ConnectData();
        const query = 'SELECT * FROM Classrooms WHERE id =?';
        const [fila] = await db.execute(query, [id])

        if(fila.length===0){
            return null
        }

        return fila[0]
    }

    async Update(classroom){
        const db= await ConnectData();
        const query = 'UPDATE Classrooms SET code =?, description =?, capacity =?, active =? WHERE id =?';
        const [resultado]= await db.execute(query, [
            classroom.code,
            classroom.description,
            classroom.capacity,
            classroom.active,
            classroom.id
        ]);

        return resultado.affectedRows>0
    }

    async Delete(id){
        const db = await ConnectData();
        const query= 'DELETE FROM Classrooms WHERE id =?';
        const [resultado]= await db.execute(query, [id])

        return resultado.affectedRows>0
    }
}

export default new ClassroomsRepository();