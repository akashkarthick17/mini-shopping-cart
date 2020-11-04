import mysql from 'mysql';
import { Service } from 'typedi';
import { SQLQueries } from '../constants/sql-queries.constants';
import { SortBy, SortOrder } from '../models/request/product-request.model';

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

    public static constructSortOrderQuery(query: string, sortOrder: SortOrder) {
        if (sortOrder.toLowerCase() === SortOrder.DESC.toLowerCase()) {
            query = query + SQLQueries.DESC;
        } else {
            query = query + SQLQueries.ASC;
        }
        return query;
    }

    public static constructQuery(query: string, sortBy: SortBy, sortOrder: SortOrder): string {
        if (sortBy) {
            if (sortBy.toLowerCase() === SortBy.PRICE.toLowerCase()) {
                query = query + SQLQueries.ORDER_BY_PRICE;
                query = this.constructSortOrderQuery(query, sortOrder);
            }
        }

        return query;
    }
}