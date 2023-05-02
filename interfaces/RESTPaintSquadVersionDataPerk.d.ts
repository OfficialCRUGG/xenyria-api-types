import { RESTLocalizedString } from "./RESTLocalizedString";

export interface RESTPaintSquadVersionDataPerk {
  performance_description: RESTLocalizedString;
  name: RESTLocalizedString;
  functionality_description: RESTLocalizedString;
  icon: string;
  main_effect: number;
  is_main_only: boolean;
  sub_effect: number;
  ordinal: number;
}
