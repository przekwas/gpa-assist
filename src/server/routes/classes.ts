import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const classes = await db.classes.all();
		res.json(classes);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const [classDetail] = await db.classes.one(id);
		res.json(classDetail);
	} catch (error) {
		next(error);
	}
});

export default router;
