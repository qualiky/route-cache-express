import { Request, Response } from "express";
import connection from './default.model';
import redisHandler from "./redis_handler";


const methodNotAllowed = async(req: Request, res: Response) => {
    res.status(405).json({ message: "Method is not allowed."});
}

const getAllEmployeeData = async (req: Request, res: Response) => {
    try {
        connection.connect(function(err){
            if(err) throw err;
        });
        // const employeeDataRows = await connection.query<DefaultUserModel[] & RowDataPacket[][]>('SELECT * FROM employees');
        const employeeDataRows: any = await connection.query('SELECT * FROM employees');

        if(employeeDataRows === null || employeeDataRows?.length <= 0) {
            return res.status(400).json({ message: 'No user found!', error: '404: No DefaultUserModel type found.'})
        } else {
            await redisHandler.set(`${req.protocol}://${req.get('host')}${req.originalUrl}`, JSON.stringify({message: 'Employees fetched successfully', 'data': employeeDataRows}));
            return res.status(200).json({ message: 'Employees fetched successfully', data: employeeDataRows});
        }
    } catch (e) {
        return res.status(500).json({ message: 'Server Error: Please try again later', error: e});
    }
}


module.exports = {
    getAllEmployeeData,
    methodNotAllowed
}