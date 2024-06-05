import * as graphql from "@nestjs/graphql";
import { CleaningTeamResolverBase } from "./base/cleaningTeam.resolver.base";
import { CleaningTeam } from "./base/CleaningTeam";
import { CleaningTeamService } from "./cleaningTeam.service";

@graphql.Resolver(() => CleaningTeam)
export class CleaningTeamResolver extends CleaningTeamResolverBase {
  constructor(protected readonly service: CleaningTeamService) {
    super(service);
  }
}
