import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const orderSchema = new Schema({
    orderId: { type: Schema.Types.ObjectId },
    userId: { type: Schema.Types.ObjectId},
    state: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true },
    phone: String,
    telegram: String,
    message: { type: String, required: true },
    confidential: { type: Boolean, required: true },
})

export const Order = mongoose.model("Order", orderSchema);