import { RESTLocalizedString } from ".";
import { PaintSquadModeDbId, PaintSquadModeId } from "../enums";

export interface RESTPaintSquadVersionDataMode {
  database_id: PaintSquadModeDbId;
  name: RESTLocalizedString;
  description: RESTLocalizedString;
  id: PaintSquadModeId;
}
