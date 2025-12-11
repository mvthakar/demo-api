import cors from 'cors';
import express from 'express';

import type {Request, Response} from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    return res.json({
        message: "Hello, World!"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
