import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('text')
  email!: string;

  @Column('text')
  password!: string;

  @Column('int', { default: 0 })
  tokenVersion!: number;
}
