import { RESTLocalizedString, RESTPaintSquadLevelReward } from ".";

export interface RESTPaintSquadVersionDataLevelList {
  end: number;
  id: number;
  title: RESTLocalizedString;
  begin: number;
  rewards: RESTPaintSquadLevelReward[];
}
