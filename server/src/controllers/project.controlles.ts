import type { Request, Response } from "express";
import { handleError } from "../features/handleError";
import { Project } from "../models/project";

class ProjectController {
    async getProjects (request: Request, response: Response) {
        try {
            const projects = await Project.find();
            response.status(200).json(projects);
        } catch (error) {
            handleError(response, 500, 'Error find projects');
        }
    }
    
    async getProject (request: Request, response: Response) {
        try {
            const project = await Project.findById(request.params.id);
            response.status(200).json(project);
        } catch (error) {
            handleError(response, 500, 'Error find project');
        }
    }

    async addProject (request: Request, response: Response) {
        try {
            const project = new Project(request.body);
            const result = await project.save();
            response.status(201).json(result);
        } catch (error) {
            handleError(response, 500, 'Error add project');
        }
    }

    async deleteProject (request: Request, response: Response) {
        try {
            const result = await Project.findByIdAndDelete(request.params.id);
            response.status(200).json(result);
        } catch (error) {
            
        }
    }
}

export default new ProjectController();