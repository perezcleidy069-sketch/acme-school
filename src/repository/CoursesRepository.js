import { ConnectData } from '../config/database.js';

class CourseRepository{
    async Create(course){
        const db = await ConnectData();
        const query = 'INSERT INTO Courses(code, description, intensity, weight, active) VALUES (?, ?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [
            course.code,
            course.description,
            course.intensity,
            course.weight,
            course.active
        ]);
        return {
            id: resultado.insertId,
            code: course.code,
            description: course.description,
            intensity: course.intensity,
            weight: course.weight,
            active: course.active
        }
    }

    async GetAll(){
        const db = await ConnectData();
        const query= 'SELECT * FROM Courses';
        const [resultado] = await db.execute(query)

        return resultado
    }

    async GetId(id){
        const db = await ConnectData();
        const query = 'SELECT * FROM Courses WHERE id = ?';
        const [fila] = await db.execute(query, [id])

        if(fila.length === 0){
            return null;
        }
        return fila[0];
    }

    async Update(course){
        const db = await ConnectData();
        const query = 'UPDATE Courses SET code = ?, description = ?, intensity = ?, weight = ?, active = ? WHERE id = ?';
        const [resultado] = await db.execute(query, [
            course.code,
            course.description,
            course.intensity,
            course.weight,
            course.active,
            course.id
        ]);
        return resultado.affectedRows > 0;
    }

    async Delete(id){
        const db = await ConnectData();
        const query = 'DELETE FROM Courses WHERE id = ?';
        const [resultado] = await db.execute(query, [id]);
        return resultado.affectedRows > 0;
    }

}

export default new CourseRepository();