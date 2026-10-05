import { ConnectData } from '../config/database.js';

class TeacherRepository{
    async Create(teacher){
        const db = await ConnectData();
        const query = 'INSERT INTO Teachers(firstname, lastName, identificationTypeId, identificationNumber, email) VALUES (?, ?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [
            teacher.firstname,
            teacher.lastName,
            teacher.identificationTypeId,
            teacher.identificationNumber,
            teacher.email
        ]);
        return{
            id: resultado.insertId,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            identificationTypeId: teacher.identificationTypeId,
            identificationNumber: teacher.identificationNumber,
            email: teacher.email
        };

    }
        async GetAll(){
            const db = await ConnectData();
            const query = 'SELECT * FROM Teachers';
            const [resultado] = await db.execute(query)
            return resultado
        }

        async GetId(id){
            const db = await ConnectData();
            const query = 'SELECT * FROM Teachers WHERE id = ?';
            const [fila] = await db.execute(query, [id])
            
            if(fila.length === 0){
                return null;
            }
            return fila[0];
        }

        async Update(teacher){
            const db = await ConnectData();
            const query = 'UPDATE Teachers SET firstName = ?, lastName = ?, identificationTypeId = ?, identificationNumber = ?, email = ? WHERE id = ?';
            const [resultado] = await db.execute(query, [
                teacher.firstName,
                teacher.lastName,
                teacher.identificationTypeId,
                teacher.identificationNumber,
                teacher.email,
                teacher.id
            ]);
            return resultado.affectedRows > 0;
        }
        async Delete(id){
            const db = await ConnectData();
            const query = 'DELETE FROM Teachers WHERE id = ?';
            const [resultado] = await db.execute(query, [id]);
            return resultado.affectedRows > 0;
        }
}
        

export default new TeacherRepository();