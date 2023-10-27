import express from "express";
// Controllers
import ProjectController from "../controllers/project.controlles";

const router = express.Router();

// Обработка запросов Projects
router.get('/works', ProjectController.getProjects);
router.get('/works/:id', ProjectController.getProject);
router.post('/works', ProjectController.addProject);
router.delete('/works/:id', ProjectController.deleteProject);

export default router;