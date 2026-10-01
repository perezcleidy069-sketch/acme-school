import {ConnectData} from '../config/database.js';

class CourseScheduleRepository{
    async Create(schedule){
        const db = await ConnectData();
        const query = 'INSERT INTO CourseSchedules (courseId, teacherId, classroomId, startDate, endDate, active) VALUES (?, ?, ?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [
            schedule.courseId,
            schedule.teacherId,
            schedule.classroomId,
            schedule.startDate,
            schedule.endDate,
            schedule.active
        
        ])
        return{
            id: resultado.insertId,
            courseId: schedule.courseId,
            teacherId: schedule.teacherId,
            classroomId: schedule.classroomId,
            startDate: schedule.startDate,
            endDate: schedule.endDate,
            active: schedule.active
        }

    }
    async GetAll(){
        const db = await ConnectData();
        const query = 'SELECT * FROM CourseSchedules';
        const [resultado]= await db.execute(query)
        return resultado
    }

    async GetId(id){
        const db= await ConnectData();
        const query = 'SELECT FROM CourseSchedules WHERE =?';
        const [fila] = await db.execute(query, [id])

        if(fila.length===0){
            return null
        }

        return fila[0]
    }

    async Update(schedule){
        const db= await ConnectData();
        const query = 'UPDATE CourseSchedules SET teacherId =?, classrromId=?, startDate=?, endDate=?, active=?';
        const [resultado]= await db.execute(query, [
            schedule.teacherId,
            schedule.classroomId,
            schedule.startDate,
            schedule.endDate,
            schedule.active
        ]);

        return resultado.affectedRows>0
    }

    async Delete(id){
        const db = await ConnectData();
        const query= 'DELETE FROM CourseSchedules WHERE=?';
        const [resultado]= await db.execute(query, [id])

        return resultado.affectedRows>0
    }
}

export default CourseScheduleRepository;