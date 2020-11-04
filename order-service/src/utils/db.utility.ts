import mysql, { PoolConnection } from 'mysql';
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


    getConnection(): Promise<mysql.PoolConnection> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(connection);
                }
            })
        });
    }

    beginTransaction(): Promise<PoolConnection> {
        return new Promise(async (resolve, reject) => {
            const connection = await this.getConnection();
            connection.beginTransaction((err) => {
                err ? reject(err) : resolve(connection);
            });
        });
    }

    executeQuery(query: string, params?: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.query(query, params, (error: any, results: any, fields: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}