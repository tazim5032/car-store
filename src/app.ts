import express, { Request, Response } from "express";
import cors from "cors";
import { CarRoutes } from "./modules/cars/cars.routes";


const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/cars', CarRoutes);
// app.use('/api/orders', OrderRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send({
        status: true,
        message: "Hello",
    })
});

export default app;
