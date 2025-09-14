import {Router} from 'express';
import { createTask , getTasks , updateTasks , deleteTask } from '../controllers/tasks.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

//4 operations are to be carried out on tasks
//Create , Read , Update and Delete

//Create a task

router.post("/taskcreate",authMiddleware, createTask);
router.get("/tasks",authMiddleware,getTasks);
router.patch("/taskupdate/:id",authMiddleware,updateTasks);
router.delete("/taskdelete/:id",authMiddleware,deleteTask);

export default router;