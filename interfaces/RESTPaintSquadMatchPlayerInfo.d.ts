import { PaintSquadPlayerType, PaintSquadTeam } from "../enums";
import { RESTPaintSquadItem } from "./RESTPaintSquadItem";
import { RESTSkinProfileData } from "./RESTSkinProfileData";
export interface RESTPaintSquadMatchPlayerInfo extends RESTSkinProfileData {
  player_id: number;
  name: string;
  type: PaintSquadPlayerType;
  kills: number;
  deaths: number;
  assists: number;
  set: number;
  special_use: number;
  stats_type: string;
  team: string;
  team_type: PaintSquadTeam;
  points: number;
  mmr: number;
  helmet: RESTPaintSquadItem;
  chestplate: RESTPaintSquadItem;
  boots: RESTPaintSquadItem;
}
