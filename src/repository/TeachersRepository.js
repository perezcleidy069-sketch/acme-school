import {main} from '../config/database.js';

class TeacherRepository{
    async Create(teacher){
        const db = await main();
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
            firstname: teacher.firstname,
            lastName: teacher.lastName,
            identificationTypeId: teacher.identificationTypeId,
            identificationNumber: teacher.identificationNumber,
            email: teacher.email
        };

    }
        async GetAll(){
            const db = await main();
            const query = 'SELECT * FROM Teachers';
            const [resultado] = await db.execute(query)
            return resultado
        }

        async GetId(id){
            const db = await main();
            const query = 'SELECT * FROM Teachers WHERE id = ?';
            const [fila] = await db.execute(query, [id])
            
            if(fila.length === 0){
                return null;
            }
            return fila[0];
        }

        async Update(teacher){
            const db = await main();
            const query = 'UPDATE Teachers SET  identificationTypeId = ?, identificationNumber = ?, email = ? WHERE id = ?';
            const [resultado] = await db.execute(query, [
                teacher.identificationTypeId,
                teacher.identificationNumber,
                teacher.email,
                teacher.id
            ]);
            return resultado.affectedRows > 0;
        }
        async Delete(id){
            const db = await main();
            const query = 'DELETE FROM Teachers WHERE id = ?';
            const [resultado] = await db.execute(query, [id]);
            return resultado.affectedRows > 0;
        }
}
        

export default new TeacherRepository();