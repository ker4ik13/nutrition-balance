import express from 'express';
// Controllers
import PostController from '../controllers/post.controller';

const router = express.Router();

// Обработка запросов Posts
router.get("/posts", PostController.getPosts);
router.get("/posts/:id", PostController.getPost);
router.post("/posts", PostController.addPost);
router.patch("/posts/:id", PostController.patchPost);
router.delete("/posts/:id", PostController.deletePost);

export default router;