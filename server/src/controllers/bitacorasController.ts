import {Request, Response} from 'express';

import promisePool from '../database'

class BitacorasController {
    public async list (req: Request, res: Response): Promise<void> {
        const [bitacora] = await promisePool.query('SELECT * FROM bitacora');  //consulta sql  
        res.json(bitacora);
    } 

    public async getOne (req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        const bitacora = await promisePool.query('SELECT * FROM bitacora WHERE idbitacora = ?', [id]);
        if (bitacora.length > 0) {
            return res.json(bitacora[0]);
        }
        res.status(404).json({text: "The bitacora doesn't exist"});
    } 
 
    public async create (req: Request, res: Response): Promise<void>{
        await promisePool.query('INSERT INTO bitacora set ?', [req.body]); //consulta sql
        res.json({message: 'bitacora saved'});
    }
 
    public async update (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await promisePool.query('UPDATE bitacora set ? WHERE idbitacora = ?', [req.body,id]);
        res.json({message: 'The bitacora was updated'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await promisePool.query('DELETE FROM bitacora WHERE idbitacora = ?', [id]);
        res.json({message: 'bitacora was deleted'});
    }
}

const  bitacorasController = new BitacorasController ();
export default bitacorasController;