import { App } from "./src/app";

const app = new App();
const port = 3001;

try {
    app.express.listen(port, (): void => {
        console.log(`Conectado com Sucesso, ${port}`);
    });
} catch(error) {
    console.error(`Error occured: ${"Error"}`);
}
