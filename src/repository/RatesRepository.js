import {main} from '../config/database.js';

class RatesRespository{
    async Create(rates){
        const db = await main();
        const query = 'INSERT INTO Rate(inscriptionId, rate, comments) VALUES (?, ?, ?)'
        const [resultado] = await db.execute (query, [
            rates.inscriptionId,
            rates.rate,
            rates.comments
        ])
        return{
            id: resultado.insertId,
            inscriptionId: rates.inscriptionId,
            rate: rates.rate,
            comments: rates.comments
        }
    }
    async GetAll(){
        const db = await main();
        const query = 'SELECT * FROM Rates';
        const [fila] = await db.execute(query)
        return fila;
    }

    async GetId(id){
        const db= await main();
        const query = 'SELECT * FROM Rates WHERE= ?';
        const [fila] = await db.execute(query, [id])

        if (fila.length === 0){
            return null
        }

        return fila [0];
    }

    async Update(rates){
        const db = await main();
        const query = 'UPDATE Rates SET rate = ?, comments = ? WHERE = ?';
        const [resultado] = await db.execute(query, [
            rates.rate,
            rates.comments,
            rates.id
        ]);

        return resultado.affectedRows > 0;
    }

    async Delete(id){
        const db = await main();
        const query = 'DELETE FROM Rates WHERE = ?';
        const [resultado] = await db.execute(query, [id])

        return resultado.affectedRows > 0;
    }

}

export default RatesRespository;