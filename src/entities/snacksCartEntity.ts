import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Snack } from "./snackEntity";
import { User } from "./userEntity";

@Entity("snacks_cart")
export class SnacksCart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.snacks_cart)
  user: User;

  @ManyToOne(() => Snack)
  snack: Snack;
}
