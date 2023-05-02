import { RESTPaintSquadItem } from "./RESTPaintSquadItem";

export interface RESTPaintSquadInventoryItem {
  data: RESTPaintSquadItem;
  local_id: number;
  type: "helmet" | "chestplate" | "boots";
}
