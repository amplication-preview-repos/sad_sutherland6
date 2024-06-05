import { Mandate as TMandate } from "../api/mandate/Mandate";

export const MANDATE_TITLE_FIELD = "id";

export const MandateTitle = (record: TMandate): string => {
  return record.id?.toString() || String(record.id);
};
