import { Postgres } from "./postgres";
import { IUser } from "../../model/IUser";

class UserClient extends Postgres {
    public async register(data: IUser) {
        try {
            await this.connect();

            const newUser = await this.client.query("INSERT INTO users VALUES ($1,$2,$3,$4);", [
                data.cpf,
                data.name,
                data.password,
                data.city,
            ]);
            
            console.log("User registered!");

            return newUser.rows;
        } catch (error: unknown) {
            console.log(error);
            throw new Error("503: Database Service Unvailable");
        }
    }
}

export { UserClient };