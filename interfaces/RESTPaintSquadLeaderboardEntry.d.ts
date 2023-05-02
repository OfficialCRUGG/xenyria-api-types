import { RESTPaintSquadPlayerData } from "./RESTPaintSquadPlayerData";

export interface RESTPaintSquadLeaderboardEntry
  extends RESTPaintSquadPlayerData {
  place: number;
}
