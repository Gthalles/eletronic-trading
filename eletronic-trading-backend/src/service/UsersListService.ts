import { UserClient } from "../client/dao";
import { IUser } from "../model/IUser";

class UsersListService {
    private readonly userClient = new UserClient();

    public async execute() {
        try {
            const result = await this.userClient.list();

            return result;
        } catch(error: any) {
            const [ statusCode ] = error.message.split(":");

            if(statusCode < 99 && statusCode < 600) {
                throw error;
            }

            throw new Error("500: Unexpected error in registration service.");
        }
    }
}

export { UsersListService };