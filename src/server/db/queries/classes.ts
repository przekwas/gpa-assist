import { Query } from '../config';
import type { ClassesTable } from '../models';

const all = () => Query<ClassesTable[]>('SELECT * FROM classes');

const one = (id: number) => Query<ClassesTable[]>('SELECT * FROM classes WHERE id = ?', [id]);

export default {
	all,
	one
};