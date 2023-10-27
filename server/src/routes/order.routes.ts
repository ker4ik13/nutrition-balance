import express from 'express';
// Controllers
import OrderController from '../controllers/order.controller';

const router = express.Router();

// Обработка запросов Orders
router.get("/orders", OrderController.getOrders);
router.get("/orders/:id", OrderController.getOrder);
router.post("/orders", OrderController.addOrder);
router.patch("/orders/:id", OrderController.patchOrder);
router.delete("/orders/:id", OrderController.deleteOrder);

export default router;