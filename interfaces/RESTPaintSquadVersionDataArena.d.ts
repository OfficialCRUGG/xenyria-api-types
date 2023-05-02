import { RESTLocalizedString, RESTPaintSquadVersionDataArenaWave } from ".";
import { PaintSquadMode } from "../enums";

export interface RESTPaintSquadVersionDataArena {
  max_teams?: number;
  max_players_total?: number;
  author: string;
  max_players_per_team?: number;
  name: RESTLocalizedString;
  id: string;
  waves?: RESTPaintSquadVersionDataArenaWave[];
  layouts?: {
    [key in PaintSquadMode]?: string;
  };
}
