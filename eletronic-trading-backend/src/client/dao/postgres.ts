import { Pool, PoolClient } from "pg";

class Postgres {
    private connection: PoolClient;

    public readonly client = new Pool({
        user: "postgres",
        password: "postgres",
        database: "eletronic_trading",
        host: "localhost",
        port: 5432,
    });

    public async connect() {
        try {
            this.connection = await this.client.connect();
            console.log("Connected to the PostgresDB");
        } catch(error) {
            throw new Error("500: Error on connecting to database");
        }
    }

    public async disconnect() {
        try {
            await this.connection.release();
        } catch(error) {
            throw new Error("500: Error on disconnecting to database");
        }
        console.log("Disconnected to the Postgres");
    }
}

export { Postgres };