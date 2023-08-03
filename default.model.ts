import exp from 'constants';
import mysql2, { RowDataPacket } from 'mysql2';

interface DefaultUserModel extends RowDataPacket {
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string | null;
    hire_date: Date;
    job_id: number;
    salary: number;
    manager_id: number | null;
    department_id: number | null;
    created_on: Date;
    address_id: number | null;
}

let connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Root_123"
});

export default connection;

