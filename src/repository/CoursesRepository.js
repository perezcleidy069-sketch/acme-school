import ConnectData from '../config/database.js';

export {ConnectData} from '../config/database.js';

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

    }
}

export default new CourseRepository();