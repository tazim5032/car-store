import express from "express";
import { carController } from "./cars.contoller";


const router = express.Router();

router.post('/', carController.createCar);
router.get('/', carController.getAllCars);
router.get('/:carId', carController.getSingleCar);
router.put('/:carId', carController.updateCar);
router.delete('/:carId', carController.deleteCar);

export const CarRoutes = router;