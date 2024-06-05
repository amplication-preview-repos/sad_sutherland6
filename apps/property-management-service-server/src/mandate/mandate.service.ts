import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MandateServiceBase } from "./base/mandate.service.base";

@Injectable()
export class MandateService extends MandateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
