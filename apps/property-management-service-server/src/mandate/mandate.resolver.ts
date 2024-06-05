import * as graphql from "@nestjs/graphql";
import { MandateResolverBase } from "./base/mandate.resolver.base";
import { Mandate } from "./base/Mandate";
import { MandateService } from "./mandate.service";

@graphql.Resolver(() => Mandate)
export class MandateResolver extends MandateResolverBase {
  constructor(protected readonly service: MandateService) {
    super(service);
  }
}
