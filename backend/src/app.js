import express from "express";
import routes from "./routes/index.js";   
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
