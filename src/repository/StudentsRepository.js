import { ConnectData } from '../config/database.js';

class StudentRepository{
    async Create(student){
        const db = await ConnectData();
        const query = 'INSERT INTO Students(code, firstName, lastName, identificationTypeId, identificationNumber, gender, birthDate, email, address, cityId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [
            student.code,
            student.firstName,
            student.lastName,
            student.identificationTypeId,
            student.identificationNumber,
            student.gender,
            student.birthDate,
            student.email,
            student.address,
            student.cityId
        ]);
        return{
            id: resultado.insertId,
            code: student.code,
            firstName: student.firstName,
            lastName: student.lastName,
            identificationTypeId: student.identificationTypeId,
            identificationNumber: student.identificationNumber,
            gender: student.gender,
            birthDate: student.birthDate,
            email: student.email,
            address: student.address,
            cityId: student.cityId
        };

    }
        async GetAll(){
            const db = await ConnectData();
            const query = 'SELECT * FROM Students';
            const [resultado] = await db.execute(query)
            return resultado
        }

        async GetId(id){
            const db = await ConnectData();
            const query = 'SELECT * FROM Students WHERE id = ?';
            const [fila] = await db.execute(query, [id])
            
            if(fila.length === 0){
                return null;
            }
            return fila[0];
        }

        async Update(student){
            const db = await ConnectData();
            const query = 'UPDATE Students SET code = ?, firstName = ?, lastName = ?, identificationTypeId = ?, identificationNumber = ?, gender = ?, birthDate = ?, email = ?, address = ?, cityId = ? WHERE id = ?';
            const [resultado] = await db.execute(query, [
                student.code,
                student.firstName,
                student.lastName,
                student.identificationTypeId,
                student.identificationNumber,
                student.gender,
                student.birthDate,
                student.email,
                student.address,
                student.cityId,
                student.id
            ]);
            return resultado.affectedRows > 0;
        }
        async Delete(id){
            const db = await ConnectData();
            const query = 'DELETE FROM Students WHERE id = ?';
            const [resultado] = await db.execute(query, [id]);
            return resultado.affectedRows > 0;
        }
}

export default new StudentRepository();