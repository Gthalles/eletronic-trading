import { UsersListService } from "../service";
import { Request, Response } from "express";

class UsersListController {
    private readonly usersListService = new UsersListService();

    public async handle(req: Request, res: Response) {
        try {
            const result = await this.usersListService.execute();

            return res.status(200).send(result);
        } catch(error: any) {
            const [statusCode, message ] = error.message.split(":");

            if(statusCode > 99 && statusCode < 600) {
                return res.status(statusCode).send(message);
            }

            return res.status(500).send("Unexpected error in user list controller.");
        }
    }
}

export { UsersListController };