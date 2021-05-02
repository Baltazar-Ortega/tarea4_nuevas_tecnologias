import "dotenv/config";
import { getConnection, getRepository } from "typeorm";
import { crearConexion } from "./db";
import { Producto } from "./entities/Producto";

const main = async () => {
  await crearConexion();

  // select, where, count, order by
  // select
  const selectProductos = await getConnection()
    .createQueryBuilder()
    .select(["producto.nombre", "producto.descripcion"])
    .from(Producto, "producto")
    .getMany();

  // console.log("Productos: ", selectProductos);

  // Where
  const whereProducto = await getConnection()
    .createQueryBuilder()
    .select(["producto.nombre", "producto.descripcion", "producto.precio"])
    .from(Producto, "producto")
    .where("producto.nombre = :nombre", { nombre: "Cloro Mascotas" })
    .getOne();

  // console.log("Where: ", whereProducto);

  // Count
  const { count: countProductos } = await getRepository(Producto)
    .createQueryBuilder("producto")
    .select("COUNT(producto.id)", "count")
    .getRawOne();

  // console.log("Count: ", countProductos);

  // Order by
  const orderByProducto = await getRepository(Producto)
    .createQueryBuilder("producto")
    .select(["producto.nombre", "producto.precio"])
    .orderBy("producto.precio", "DESC")
    .limit(10)
    .getMany();

  console.log("orderByProducto: ", orderByProducto);
};

main().catch((err) => {
  console.log(err);
});
