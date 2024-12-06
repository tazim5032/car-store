import { Request, Response } from "express";
import { orderService } from "./orders.service";
import orderValidationSchema from "./orders.validation";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const validateOrder = orderValidationSchema.parse(order);

    const result = await orderService.createOrderIntoDB(validateOrder);

    res.status(200).json({
      message: "Order created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      res.status(404).json({
        message: "Validation failed",
        success: false,
        error,
      });
    } else {
      res.status(404).json({
        message: (error as Error).message || "An error occurred",
        success: false,
      });
    }
  }
};

const GetRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.GetRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      success: false,
      error,
    });
  }
};

export const orderController = {
  CreateOrder,
  GetRevenue,
};
