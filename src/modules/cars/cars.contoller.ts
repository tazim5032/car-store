import { Request, Response } from "express";
import carValidationSchema from "./cars.validation";
import { carService } from "./cars.service";

const createCar = async (req: Request, res: Response) => {
  try {
    const car = req.body;

    const validateCar = carValidationSchema.parse(car);

    const result = await carService.createCarIntoDB(validateCar);

    res.status(200).json({
      success: true,
      message: "Car created successfully",
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
      success: true,
      message: "Cars retrieved successfully",
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
    const CarId = req.params.CarId;
    const updatedCar = req.body;
    const result = await carService.updateCarIntoDB(CarId, updatedCar);
    res.status(200).json({
      success: true,
      message: "Car updated successfully",
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

const deleteCar = async (req: Request, res: Response) => {
  try {
    const CarId = req.params.CarId;

    const result = await carService.deleteCarFromDB(CarId);


    if (result.deletedCount) {
      res.status(200).json({
        success: true,
        message: "Bike deleted successfully",
        data: {},
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Bike already deleted ",
        data: {},
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
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
