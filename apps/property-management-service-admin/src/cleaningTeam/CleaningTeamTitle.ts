import { CleaningTeam as TCleaningTeam } from "../api/cleaningTeam/CleaningTeam";

export const CLEANINGTEAM_TITLE_FIELD = "id";

export const CleaningTeamTitle = (record: TCleaningTeam): string => {
  return record.id?.toString() || String(record.id);
};
