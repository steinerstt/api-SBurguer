import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./categoryEntity";

@Entity("snacks")
export class Snack {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 62, unique: true })
  name: string;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  price: number;

  @Column()
  img: string;

  @ManyToOne(() => Category, (category) => category.snacks)
  category: Category;
}
