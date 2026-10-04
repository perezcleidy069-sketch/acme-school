import {ConnectData} from '../config/database.js';

class TopicRepository{
    async Create(topic){
        const db = await ConnectData();
        const query= 'INSERT INTO Topics (courseId, code, title, description, active) VALUES (?, ?, ?, ?, ?)';
        const [resultado]= await db.execute(query, [
            topic.courseId,
            topic.code,
            topic.title,
            topic.description,
            topic.active
        ])

        return{
            id: resultado.insertId,
            courseId: topic.courseId,
            code: topic.code,
            title: topic.title,
            description: topic.description,
            active: topic.active
        }
    }
    async GetAll(){
        const db = await ConnectData();
        const query = 'SELECT * FROM Topics';
        const [resultado] = await db.execute(query)

        return resultado;
    }

    async GetId(id){
        const db= await ConnectData();
        const query = 'SELECT * FORM Topics WHERE = ?';
        const [fila] = await db.execute(query, [id])

        if(fila.lenght === 0){
            return null;
        }

        return fila[0]
    }

    async Update(topic){
        const db = await ConnectData();
        const query = 'UPDATE Topics SET code =?, title=?, description=?, active=? WHERE= ?';
        const [resultado] = await db.execute(query, [
            topic.code,
            topic.title,
            topic.description,
            topic.active
        ])
        return resultado.affectedRows >0;
    }

    async Delete(id){
        const db = await ConnectData();
        const query = 'DELETE FROM Topics WHERE= ?';
        const [resultado] = await db.execute(query, [id])

        return resultado.affectedRows>0
    }
}

export default TopicRepository;