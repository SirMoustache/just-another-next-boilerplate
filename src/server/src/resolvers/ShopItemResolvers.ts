/**
 * Absolute imports
 */
import {
  Resolver,
  Mutation,
  Arg,
  ObjectType,
  Field,
  Ctx,
  Query,
  Args,
  InputType,
} from 'type-graphql';

/**
 * Entities
 */
import { ShopItem } from '../entities/ShopItem';

@InputType()
export class CreateShopItemRequest {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field({ nullable: true })
  metaTitle?: string;

  @Field({ nullable: true })
  metaDescription?: string;

  @Field({ nullable: true })
  previewImg?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  category?: string;
}

@Resolver()
export class ShopItemResolvers {
  @Query(() => [ShopItem])
  shopItems() {
    return ShopItem.find();
  }

  @Mutation(() => Boolean)
  async createShopItem(
    @Arg('input') input: CreateShopItemRequest,
  ): Promise<boolean> {
    const creationDate = new Date();
    const updateDate = new Date();

    try {
      await ShopItem.insert({
        ...input,
        creationDate,
        updateDate,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
}
