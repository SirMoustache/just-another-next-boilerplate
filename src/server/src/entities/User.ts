import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int, ID } from 'type-graphql';

export enum UserRole {
  admin = 'admin',
  user = 'user',
}

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('text', { unique: true })
  email!: string;

  @Column('text')
  password!: string;

  @Column('int', { default: 0 })
  tokenVersion!: number;

  @Field(() => [String])
  @Column('text', { array: true })
  roles!: Array<UserRole>;
}
