import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send({
        status: true,
        message: "Hello",
    })
});

export default app;
