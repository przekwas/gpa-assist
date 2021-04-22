import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const students = await db.students.all();
		res.json(students);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const [student] = await db.students.one(id);
		res.json(student);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const badKid = await db.students.destroy(id);
		res.json(badKid);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newStudent = req.body;
		const result = await db.students.insert(
			newStudent.name,
			newStudent.email,
			newStudent.password
		);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const editedStudent = req.body;
		const result = await db.students.update(editedStudent.name, id);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

export default router;
