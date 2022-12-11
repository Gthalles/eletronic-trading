import { Postgres } from "./Postgres";
import { IUser } from "../../model/IUser";
import { QueryResult } from "pg";

class UserClient extends Postgres {
    private result: QueryResult<IUser> ;
    public async register(data: IUser) {
        try {
            await this.connect();

            const newUser = await this.client.query("INSERT INTO users VALUES ($1,$2,$3,$4);", [
                data.cpf,
                data.name,
                data.password,
                data.city,
            ]);

            console.log("User registered..");
            
            return newUser.rows;
        } catch(error: unknown) {
            console.log(error);
            throw new Error("503: Database Service Unvailable");
        } finally {
            await this.disconnect();
        }
    }

    public async list() {
        try {
            await this.connect();
            
            this.result = await this.client.query("SELECT cpf, name, city FROM users ORDER BY name;");
            return this.result.rows;
        } catch (error: unknown) {
            console.log(error);
            throw new Error("503: Database Service Unvailable");
        } finally {
            await this.disconnect();
        }
    }
}

export { UserClient };