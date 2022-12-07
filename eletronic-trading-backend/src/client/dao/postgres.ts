import { Pool, PoolClient } from "pg";

class Postgres {
    private connection: PoolClient;

    public readonly client = new Pool({
        user: "postgres",
        password: "postgres",
        host: "localhost",
        database: "eletronic_trading",
        port: 5432,
    });

    public async connect () {
        try {
            this.connection = await this.client.connect();
            console.log("Conectando ao PostgreSQL!");
        } catch (error) {
            throw new Error("500: Erro ao tentar conectar ao BD!");
        }
    }

    public async disconnect () {
        try {
            await this.connection.release();
        } catch (error) {
            throw new Error("500: Erro ao tentar desconectar do BD!");
        }
        console.log("Desconectando do PostgreSQL!");
    }
}

export { Postgres };