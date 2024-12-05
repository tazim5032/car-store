import { model, Schema} from "mongoose";
import { Order } from "./orders.interface";


const orderSchema = new Schema<Order>(
  {
    email: { type: String, required: true },
    car: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

orderSchema.post("save", function (doc, next) {
  next();
});

export const OrderModel = model<Order>("OrderModel", orderSchema);
