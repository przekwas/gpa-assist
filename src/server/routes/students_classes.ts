import { Router } from 'express';
import db from '../db';

const router = Router();

router.post('/', async (req, res, next) => {
	try {
		const registration = req.body;
        const result = await db.students_classes.insert(registration.student_id, registration.class_id);
        res.json(result);
	} catch (error) {
		next(error);
	}
});

export default router;