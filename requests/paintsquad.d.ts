import {
  PaintSquadLeaderboardRankingType,
  PaintSquadLeaderboardTimeSpan,
  PaintSquadMode,
  PaintSquadPerkLowercase,
  PaintSquadTeam,
} from "../enums";
import {
  RESTPaintSquadVersionDataArenas,
  RESTPaintSquadVersionDataEquipmentQuality,
  RESTPaintSquadVersionDataInvasionMMLadder,
  RESTPaintSquadVersionDataLevelList,
  RESTPaintSquadVersionDataMode,
  RESTPaintSquadVersionDataPublicMMLadder,
  RESTPaintSquadVersionDataSet,
  RESTPaintSquadVersionDataStaticItem,
  RESTPaintSquadVersionDataPerk,
  RESTPaintSquadVersionDataWeapon,
  RESTPaintSquadLeaderboardEntry,
  RESTPaintSquadPlayerData,
  RESTBase64Data,
  RESTPaintSquadMatch,
  RESTPaintSquadMatchPlayerInfo,
  RESTPaintSquadInventoryWeaponSet,
  RESTPaintSquadInventoryItem,
  RESTPaintSquadWeaponSetStats,
} from "../interfaces";

export interface RESTGetAPIPaintSquadVersionDataRequest {
  version?: string;
}

export interface RESTGetAPIPaintSquadLeaderboardRequest {
  timespan: PaintSquadLeaderboardTimeSpan;
  ranking_type: PaintSquadLeaderboardRankingType;
  skin_data?: boolean;
}

export interface RESTGetAPIPaintSquadPlayerStatsRequest {
  xen_id: number;
  timespan: PaintSquadLeaderboardTimeSpan;
  ranking_type: PaintSquadLeaderboardRankingType;
  skin_data?: boolean;
}

export interface RESTGetAPIPaintSquadAssetRenderRequest {
  asset_name: string;
}

export interface RESTGetAPIPaintSquadArenaImageRequest {
  arena_id: string;
}

export interface RESTGetAPIPaintSquadLastMatchesRequest {
  xen_id: number;
}

export interface RESTGetAPIPaintSquadMatchDetailsRequest {
  match_id: string;
}

export interface RESTGetAPIPaintSquadInventoryRequest {
  xen_id: number;
}

export interface RESTGetAPIPaintSquadWeaponStatsRequest {
  xen_id: number;
  sets: "all" | string;
}

export interface RESTGetAPIPaintSquadPlayerDataRequest {
  xen_id: number;
}
