import {ConnectData} from '../config/database.js';

class InscriptionRepository{
    async Create(inscription){
        const db = await ConnectData();
        const query = 'INSERT INTO Inscriptions (courseScheduledId, studentId, registerDate, active) VALUES(?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [
            inscription.courseScheduleId,
            inscription.studentId,
            inscription.registerDate,
            inscription.active
        ])
        return{
            id: resultado.insertId,
            courseScheduleId: inscription.courseScheduleId,
            studentId: inscription.studentId,
            registerDate: inscription.registerDate,
            active: inscription.active
        }
    }

    async GetAll(){
        const db = await ConnectData();
        const query = 'SELECT * FROM Inscriptions';
        const [resultado] = await db.execute(query)
        return resultado; 
    }

    async GetId(id){
        const db = await ConnectData();
        const query = 'SELECT * FROM Inscriptions WHERE = ?';
        const [fila] = await db.execute(query, [id])

        if(fila.lenght === 0){
            return null
        }

        return fila [0]
        
        
    }

    async Update(inscription){
        const db= await ConnectData();
        const query = 'UPDATE Inscriptions SET courseScheduleId = ?, registerDate= ?, active = ? WHERE = ?';
        const [resultado] = await db.execute(query, [
            inscription.courseScheduleId,
            inscription.registerDate,
            inscription.active
        ]);
        return resultado.affectedRows > 0;
    }

    async Delete(id){
        const db = await ConnectData();
        const query = 'DELETE FROM Inscriptions WHERE = ?';
        const [resultado] = await db.execute(query, [id])

        return resultado.affectedRows > 0;
    }

}


export default InscriptionRepository;