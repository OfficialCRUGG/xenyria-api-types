import { RESTLocalizedString, RESTPaintSquadItemBase } from ".";
import { PaintSquadPerk, PaintSquadItemCategory } from "../enums";

export interface RESTPaintSquadVersionDataStaticItem
  extends RESTPaintSquadItemBase {
  overriden_color: string;
  item_id: number;
  model_prefix: string;
  fallback_material?: string;
  name: RESTLocalizedString;
  perks: "null"[];
  color_sensitive: boolean;
  primary_perk: PaintSquadPerk;
  category: PaintSquadItemCategory;
}
