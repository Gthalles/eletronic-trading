import express from "express";
import Routes from "./route";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.express.use(Routes);
    }
}

export { App };