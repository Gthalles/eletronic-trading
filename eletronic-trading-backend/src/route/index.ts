import express from "express";
import cors from "cors";
import UsersRoute from "./user";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(UsersRoute);

export default app;