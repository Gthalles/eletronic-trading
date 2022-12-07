import { UserRegistrationService } from "../service";
import { Request, Response } from "express";

class UserRegistrationController {
    private readonly userRegistrationService = new UserRegistrationService();

    public async handle(req: Request, res: Response) {
        try {
            await this.userRegistrationService.execute(req.body);

            return res.status(200).send("User has ben registered.");
        } catch(error: any) {
            const [statusCode, message ] = error.message.split(":");

            if(statusCode > 99 && statusCode < 600) {
                return res.status(statusCode).send(message);
            }

            return res.status(500).send("Unexpected error in user registration controller.");
        }
    }
}

export { UserRegistrationController };