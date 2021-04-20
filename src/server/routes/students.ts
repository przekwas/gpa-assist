import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const students = await db.students.all();
		res.json(students);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const [student] = await db.students.one(id);
		res.json(student);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const [student] = await db.students.one(id);
		res.json(student);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const badKid = await db.students.destroy(id);
		res.json(badKid);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newStudent = req.body;
		const result = await db.students.insert(newStudent.name, newStudent.email, newStudent.password);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const editedStudent = req.body;
		const result = await db.students.update(editedStudent.name, id);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

export default router;
