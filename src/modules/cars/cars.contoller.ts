import { Request, Response } from "express";
import carValidationSchema from "./cars.validation";
import { carService } from "./cars.service";

const createCar = async (req: Request, res: Response) => {
  try {
    const car = req.body;

    const validateCar = carValidationSchema.parse(car);

    const result = await carService.createCarIntoDB(validateCar);

    res.status(200).json({
      message: "Car created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Validation failed",
      error,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await carService.getAllCarsFromDB();

    res.status(200).json({
      message: "Cars retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carService.getSingleCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: "Car retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId;
    const carData = req.body; 
    const result = await carService.updateCarIntoDB(id, carData);

    res.status(200).json({
      message: "Car updated successfully",
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

const deleteCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId;

    const result = await carService.deleteCarFromDB(id);


    if (result.deletedCount) {
      res.status(200).json({
        message: "Car deleted successfully",
        success: true,
        data: {},
      });
    } else {
      res.status(200).json({
        message: "Car already deleted ",
        success: true,
        data: {},
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      success: false,
      error,
    });
  }
};

export const carController = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
  deleteCar
};
