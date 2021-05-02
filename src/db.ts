import { createConnection } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { DB_PASSWORD } from "./constants";
import { Producto } from "./entities/Producto";

export const crearConexion = async () => {
  await createConnection({
    type: "postgres",
    database: "hyu_db_v2",
    username: "postgres",
    password: DB_PASSWORD,
    logging: true,
    entities: [Producto],
    namingStrategy: new SnakeNamingStrategy(),
  });
};
