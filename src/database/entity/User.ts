import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  BeforeInsert,
} from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: "images/avatar.png" })
  profileImage: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: number;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @BeforeInsert()
  insert() {
    this.createdAt = new Date();
  }
}
