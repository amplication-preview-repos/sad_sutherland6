import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MandateService } from "./mandate.service";
import { MandateControllerBase } from "./base/mandate.controller.base";

@swagger.ApiTags("mandates")
@common.Controller("mandates")
export class MandateController extends MandateControllerBase {
  constructor(protected readonly service: MandateService) {
    super(service);
  }
}
