import {main} from '../config/database.js';

class StudentRepository{
    async Create(student){
        const db = await main();
        const query = 'INSERT INTO Students(code, firstname, lastName, identificationTypeId, identificationNumber, gender, email, address, cityId) VALUES (?, ?, ?)';
        const [resultado] = await db.execute(query, [
            student.code,
            student.firstname,
            student.lastName,
            student.identificationTypeId,
            student.identificationNumber,
            student.gender,
            student.email,
            student.address,
            student.cityId
        ]);
        return{
            id: resultado.insertId,
            code: student.code,
            firstname: student.firstname,
            lastName: student.lastName,
            identificationTypeId: stdent.identificationTypeId,
            identificationNumber: student.identificationNumber,
            gender: student.gender,
            email: student.email,
            address: student.address,
            cityId: student.cityId
        };

    }
        async GetAll(){
            const db = await main();
            const query = 'SELECT * FROM Students';
            const [resultado] = await db.execute(query)
            return resultado
        }

        async GetId(id){
            const db = await main();
            const query = 'SELECT * FROM Students WHERE id = ?';
            const [fila] = await db.execute(query, [id])
            
            if(fila.length === 0){
                return null;
            }
            return fila[0];
        }

        async Update(student){
            const db = await main();
            const query = 'UPDATE Students SET code = ?, identificationTypeId = ?, identificationNumber = ?, address = ?, cityId = ? WHERE id = ?';
            const [resultado] = await db.execute(query, [
                student.code,
                student.identificationTypeId,
                student.identificationNumber,
                student.address,
                student.cityId,
                student.id
            ]);
            return resultado.affectedRows > 0;
        }
        async Delete(id){
            const db = await main();
            const query = 'DELETE FROM Students WHERE id = ?';
            const [resultado] = await db.execute(query, [id]);
            return resultado.affectedRows > 0;
        }
}

export default new StudentRepository();