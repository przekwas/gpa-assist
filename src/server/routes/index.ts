import { Router } from 'express';
import studentsRouter from './students';
import classesRouter from './classes';
import students_classesRouter from './students_classes';

const router = Router();

router.use('/students', studentsRouter);
router.use('/classes', classesRouter);
router.use('/students_classes', students_classesRouter);

export default router;