import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CleaningTeamServiceBase } from "./base/cleaningTeam.service.base";

@Injectable()
export class CleaningTeamService extends CleaningTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
