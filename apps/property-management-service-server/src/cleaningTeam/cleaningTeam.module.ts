import { Module } from "@nestjs/common";
import { CleaningTeamModuleBase } from "./base/cleaningTeam.module.base";
import { CleaningTeamService } from "./cleaningTeam.service";
import { CleaningTeamController } from "./cleaningTeam.controller";
import { CleaningTeamResolver } from "./cleaningTeam.resolver";

@Module({
  imports: [CleaningTeamModuleBase],
  controllers: [CleaningTeamController],
  providers: [CleaningTeamService, CleaningTeamResolver],
  exports: [CleaningTeamService],
})
export class CleaningTeamModule {}
