import { RESTLocalizedString } from ".";

export interface RESTPaintSquadVersionDataInvasionMMLadder {
  metadata: {
    hazardBegin: string;
    color: string;
    hazardEnd: string;
  };
  start: number;
  end: number;
  title: RESTLocalizedString;
}
