import { RESTSkinProfileData } from "./RESTSkinProfileData";

export interface RESTPaintSquadPlayerData {
  xen_id: number;
  uuid: string;
  username: string;
  points: number;
  wins: number;
  losses: number;
  kills: number;
  assists: number;
  deaths: number;
  profile?: RESTSkinProfileData;
}
