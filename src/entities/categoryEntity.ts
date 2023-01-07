import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Snack } from "./snackEntity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 62 })
  name: string;

  @OneToMany(() => Snack, (snack) => snack.category)
  snacks: Snack[];
}
