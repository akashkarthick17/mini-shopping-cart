import mysql from 'mysql';
import { Service } from 'typedi';

@Service('mysql.client')
export class MySQLClient {

    private pool: mysql.Pool;

    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            connectionLimit: 10,
            queueLimit: 5,
        });
    }

    executeQuery(query: string, params?: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.query(query, params, function (error: any, results: any, fields: any) {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
        });
    }
}