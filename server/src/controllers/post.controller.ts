import type { Request, Response } from "express";
import { handleError } from "../features/handleError";
import { Post } from "../models/post";

class PostController {
    async getPosts (request: Request, response: Response) {
        try {
            const posts = await Post.find();
            response.status(200).json(posts);
        } catch (error) {
            handleError(response, 500, `Error get posts: ${error}`);
        }
    };

    async getPost (request: Request, response: Response) {
        try {
            const post = await Post.findById(request.params.id)
            response.status(200).json(post);
        } catch (error) {
            handleError(response, 500, `Error get post: ${error}`);
        }
    };

    async addPost (request: Request, response: Response) {
        try {
            const post = new Post(request.body);
            const result = await post.save();
            response.status(201).json(result);
        } catch (error) {
            handleError(response, 500, `Error send post: ${error}`);
        }
    };

    async deletePost (request: Request, response: Response) {
        try {
            const result = await Post.findByIdAndDelete(request.params.id);
            response.status(200).json(result);
        } catch (error) {
            handleError(response, 500, `Error delete post: ${error}`);
        }
    };

    async patchPost (request: Request, response: Response) {
        try {
            const result = await Post.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json(result);
        } catch (error) {
            handleError(response, 500, `Error patch post by id: ${error}`)
        }
    };
}

export default new PostController();