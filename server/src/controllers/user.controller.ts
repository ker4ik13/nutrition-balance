import type { Request, Response } from "express";
import { handleError } from "../features/handleError";
import { User } from "../models/user";

class UserController {
    async getUsers (request: Request, response: Response) {
        try {
            console.log('user');
            const users = await User.find();
            response.status(200).json(users);
        } catch (error) {
            handleError(response, 500, 'Error find users');
        }
    }
}

export default new UserController();