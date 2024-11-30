import { Request, Response } from "express";
import { orderService } from "./orders.service";
import orderValidationSchema from "./orders.validation";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const validateOrder = orderValidationSchema.parse(order);

    const result = await orderService.createOrderIntoDB(validateOrder);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      res.status(404).json({
        success: false,
        message: "Validation failed",
        error,
      });
    } else {
      res.status(404).json({
        success: false,
        message: (error as Error).message || "An error occurred",
      });
    }
  }
};

const GetRevenue = async (req: Request, res: Response) => {
    try{
        const result = await orderService.GetRevenue();

        res.status(200).json({
            success: true,
            message: 'Revenue calculated successfully',
            data: result,
        });
    }catch(error){
        res.status(404).json({
            success: false,
            message: 'Somethin went wrong',
            error,
        });
    }
}

export const orderController = {
  CreateOrder,
  GetRevenue,
};
