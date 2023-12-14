import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "./routes/main.routes";

const app: Application = express();
app.set("PORT", process.env.PORT || 3000);
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", mainRouter);
export default app;
