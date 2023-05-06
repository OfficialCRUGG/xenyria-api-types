import { RESTLocalizedString } from ".";
import { PaintSquadModeId } from "../enums";

export interface RESTPaintSquadVersionDataMode {
  database_id: number;
  name: RESTLocalizedString;
  description: RESTLocalizedString;
  id: PaintSquadModeId;
}
