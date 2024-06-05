import * as graphql from "@nestjs/graphql";
import { RentResolverBase } from "./base/rent.resolver.base";
import { Rent } from "./base/Rent";
import { RentService } from "./rent.service";

@graphql.Resolver(() => Rent)
export class RentResolver extends RentResolverBase {
  constructor(protected readonly service: RentService) {
    super(service);
  }
}
