import { RESTPaintSquadItemBase } from ".";
import {
  PaintSquadItemCategoryLowercase,
  PaintSquadPerkLowercase,
} from "../enums";

export interface RESTPaintSquadItem extends RESTPaintSquadItemBase {
  item_id: number;
  model_id: string;
  category: PaintSquadItemCategoryLowercase;
  perks: (PaintSquadPerkLowercase | "null")[];
  primary_perk: PaintSquadPerkLowercase;
}
