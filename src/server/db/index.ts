import * as mysql from 'mysql';
import type { MySQLResponse } from './models';

const pool = mysql.createPool({
	host: 'localhost',
	database: 'gpa_assist',
	user: 'gpa_assist',
	password: 'gpa_assist'
});

export const Query = <T = MySQLResponse>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		pool.query(query, values, (err, results) => {
			if (err) {
				reject(err);
				return;
			}

			return resolve(results);
		});
	});
};

import students from './queries/students';
export default {
    students
}