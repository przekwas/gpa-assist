import { Query } from '../config';
import type { StudentsClassesTable } from '../models';

const insert = (student_id: number, class_id: number) => 
Query('INSERT INTO students_classes (student_id, class_id) VALUE (?, ?)', [student_id, class_id]);

export default {
	insert
};
