import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CleaningTeamService } from "./cleaningTeam.service";
import { CleaningTeamControllerBase } from "./base/cleaningTeam.controller.base";

@swagger.ApiTags("cleaningTeams")
@common.Controller("cleaningTeams")
export class CleaningTeamController extends CleaningTeamControllerBase {
  constructor(protected readonly service: CleaningTeamService) {
    super(service);
  }
}
