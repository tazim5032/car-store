import mongoose from "mongoose";
import { CarModel } from "../cars/cars.model";
import { Order } from "./orders.interface";
import { OrderModel } from "./orders.model";

const createOrderIntoDB = async (order: Order) => {
  const car = await CarModel.findById({
    _id: new mongoose.Types.ObjectId(order.car),
  });

  if (!car) {
    throw new Error("Car is not found");
  }

  if (car.quantity < order.quantity) {
    throw new Error("Insufficient stock to fulfill the order");
  }

  const result = await OrderModel.create(order);

  await CarModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(order.car) },
    {
      $inc: { quantity: -order.quantity },
    }
  );

  const carUpdate = await CarModel.findById({
    _id: new mongoose.Types.ObjectId(order.car),
  });

  if (!carUpdate) {
    throw new Error("Car is not found");
  }

  if (carUpdate.quantity === 0) {
    await CarModel.updateOne(
      { _id: new mongoose.Types.ObjectId(order.car) },
      { $set: { instock: false } }
    );
  }

  return result;
};

const GetRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $project: {
        total: {
          $multiply: ["$quantity", "$totalPrice"],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: "$total",
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result;
};

export const orderService = {
  createOrderIntoDB,
  GetRevenue,
};
