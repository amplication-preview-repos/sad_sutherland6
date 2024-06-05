import { Module } from "@nestjs/common";
import { MandateModuleBase } from "./base/mandate.module.base";
import { MandateService } from "./mandate.service";
import { MandateController } from "./mandate.controller";
import { MandateResolver } from "./mandate.resolver";

@Module({
  imports: [MandateModuleBase],
  controllers: [MandateController],
  providers: [MandateService, MandateResolver],
  exports: [MandateService],
})
export class MandateModule {}
