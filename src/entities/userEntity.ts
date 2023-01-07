import { hashSync } from "bcrypt";
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SnacksCart } from "./snacksCartEntity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 62 })
  name: string;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => SnacksCart, (cart) => cart.user)
  snacks_cart: SnacksCart[];
}
