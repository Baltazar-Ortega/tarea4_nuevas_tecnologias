import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "producto" })
export class Producto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  precio!: number;
}
