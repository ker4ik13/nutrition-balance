import type { Request, Response } from "express";
import { handleError } from "../features/handleError";
import { Order } from "../models/order";

class OrderController {
    async getOrders (request: Request, response: Response) {
        try {
            const orders = await Order.find();
            response.status(200).json(orders);
        } catch (error) {
            handleError(response, 500, `Error get orders: ${error}`);
        }
    };

    async getOrder (request: Request, response: Response) {
        try {
            const order = await Order.findById(request.params.id);
            response.status(200).json(order);
        } catch (error) {
            handleError(response, 500, `Error get order: ${error}`);
        }
    }

    async addOrder (request: Request, response: Response) {
        try {
            const order = new Order(request.body);
            const result = await order.save();
            response.status(201).json(result);
        } catch (error) {
            handleError(response, 500, `Error send order: ${error}`);
        }
    }

    async deleteOrder (request: Request, response: Response) {
        try {
            const result = await Order.findByIdAndDelete(request.params.id);
            response.status(200).json(result);
        } catch (error) {
            handleError(response, 500, `Error delete order: ${error}`);
        }
    }

    async patchOrder (request: Request, response: Response) {
        try {
            const result = await Order.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json(result);
        } catch (error) {
            handleError(response, 500, `Error patch order by id: ${error}`)
        }
    };

}

export default new OrderController();