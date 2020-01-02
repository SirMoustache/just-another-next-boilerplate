/**
 * Absolute imports
 */
import {
  Int,
  Resolver,
  Mutation,
  Arg,
  Args,
  Field,
  Query,
  Ctx,
  ObjectType,
  InputType,
  ArgsType,
  UseMiddleware,
} from 'type-graphql';

/**
 * Middlewares
 */
import { isAuth } from '../middlewares/auth';
import { isAdmin } from '../middlewares/role';

/**
 * Entities
 */
import { ShopItem } from '../entities/ShopItem';

@InputType()
class ShopItemWhere {
  @Field({ nullable: true })
  id?: string;
}

@ArgsType()
class ShopItemArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field({ nullable: true })
  where?: ShopItemWhere;
}

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
  shopItems(@Args() { skip, take, where }: ShopItemArgs) {
    return ShopItem.find({
      skip,
      take,
      where,
    });
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  @UseMiddleware(isAdmin)
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
