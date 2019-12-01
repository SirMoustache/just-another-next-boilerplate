import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
@Entity('shopItem')
export class ShopItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('text')
  title!: string;

  @Field()
  @Column('text')
  description!: string;

  @Field()
  @Column('text', { nullable: true })
  metaTitle?: string;

  @Field()
  @Column('text', { nullable: true })
  metaDescription?: string;

  @Field()
  @Column('text', { nullable: true })
  previewImg?: string;

  @Field()
  @Column('text')
  creationDate!: Date;

  @Field()
  @Column('text')
  updateDate!: Date;

  @Field()
  @Column('float', { nullable: true })
  price?: number;

  @Field()
  @Column('text', { nullable: true })
  category?: string;

  @Field(() => [String])
  @Column('text', { array: true, nullable: true })
  tags?: Array<string>;
}
