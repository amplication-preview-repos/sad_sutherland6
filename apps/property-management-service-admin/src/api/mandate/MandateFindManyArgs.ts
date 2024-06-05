import { MandateWhereInput } from "./MandateWhereInput";
import { MandateOrderByInput } from "./MandateOrderByInput";

export type MandateFindManyArgs = {
  where?: MandateWhereInput;
  orderBy?: Array<MandateOrderByInput>;
  skip?: number;
  take?: number;
};
