import { RESTLocalizedString } from ".";

export interface RESTPaintSquadVersionDataSet {
  internal_name: string;
  level: number;
  ai_range_begin: number;
  price: number;
  ai_range_end: number;
  primary_weapon: number;
  secondary_weapon: number;
  special_weapon: number;
  name: RESTLocalizedString;
  id: number;
  is_in_shop: boolean;
}
