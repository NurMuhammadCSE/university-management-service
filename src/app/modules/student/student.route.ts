import express from 'express';
import { StudentValidation } from './student.validation';
import validateRequest from '../../middleware/validateRequest';
import { StudentController } from './student.controller';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRoutes = router;
