import { Query } from '../';
import type { StudentsTable } from '../models';

const all = () => Query<StudentsTable[]>('SELECT * FROM students');

const one = (id: number) => Query<StudentsTable[]>('SELECT * FROM students WHERE id = ?', [id]);

const destroy = (id: number) => Query('DELETE FROM students WHERE id = ?', [id]);

const insert = (name: string, email: string, password: string) =>
	Query('INSERT INTO students (name, email, password) VALUE (?, ?, ?)', [
		name,
		email,
		password
	]);

const update = (name: string, id: number) =>
	Query('UPDATE students SET name = ? WHERE id = ?', [name, id]);

export default {
	all,
	one,
	destroy,
	insert,
    update
};
