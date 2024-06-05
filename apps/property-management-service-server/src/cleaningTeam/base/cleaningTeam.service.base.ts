/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CleaningTeam as PrismaCleaningTeam } from "@prisma/client";

export class CleaningTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CleaningTeamCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cleaningTeam.count(args);
  }

  async cleaningTeams<T extends Prisma.CleaningTeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CleaningTeamFindManyArgs>
  ): Promise<PrismaCleaningTeam[]> {
    return this.prisma.cleaningTeam.findMany<Prisma.CleaningTeamFindManyArgs>(
      args
    );
  }
  async cleaningTeam<T extends Prisma.CleaningTeamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CleaningTeamFindUniqueArgs>
  ): Promise<PrismaCleaningTeam | null> {
    return this.prisma.cleaningTeam.findUnique(args);
  }
  async createCleaningTeam<T extends Prisma.CleaningTeamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CleaningTeamCreateArgs>
  ): Promise<PrismaCleaningTeam> {
    return this.prisma.cleaningTeam.create<T>(args);
  }
  async updateCleaningTeam<T extends Prisma.CleaningTeamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CleaningTeamUpdateArgs>
  ): Promise<PrismaCleaningTeam> {
    return this.prisma.cleaningTeam.update<T>(args);
  }
  async deleteCleaningTeam<T extends Prisma.CleaningTeamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CleaningTeamDeleteArgs>
  ): Promise<PrismaCleaningTeam> {
    return this.prisma.cleaningTeam.delete(args);
  }
}
