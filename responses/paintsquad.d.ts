import {
  PaintSquadMode,
  PaintSquadModeId,
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
  RESTGetAPIResponse,
} from "../interfaces";

/**
 * The response of the `/paintsquad/version` endpoint.
 * Represents various gameplay data of the respective game version.
 */
export interface RESTGetAPIPaintSquadVersionDataResponse
  extends RESTGetAPIResponse {
  data: {
    game_version: string;
    modes: {
      [key in PaintSquadMode]: RESTPaintSquadVersionDataMode;
    };
    sets: RESTPaintSquadVersionDataSet[];
    invasion_mm_ladder: RESTPaintSquadVersionDataInvasionMMLadder[];
    created: number;
    equipment_quality: {
      [key: string]: RESTPaintSquadVersionDataEquipmentQuality;
    };
    arena: RESTPaintSquadVersionDataArenas;
    static_items: RESTPaintSquadVersionDataStaticItem[];
    level_list: RESTPaintSquadVersionDataLevelList[];
    build_date: string;
    public_mm_ladder: RESTPaintSquadVersionDataPublicMMLadder[];
    build_number: string;
    perks: {
      [key in PaintSquadPerkLowercase]: RESTPaintSquadVersionDataPerk;
    };
    weapons: RESTPaintSquadVersionDataWeapon[];
  };
}

export interface RESTGetAPIPaintSquadLeaderboardResponse
  extends RESTGetAPIResponse {
  data?: RESTPaintSquadLeaderboardEntry[];
}

export interface RESTGetAPIPaintSquadPlayerStatsResponse
  extends RESTGetAPIResponse {
  data?: RESTPaintSquadPlayerData;
}

export interface RESTGetAPIPaintSquadAssetRenderResponse
  extends RESTGetAPIResponse {
  data?: RESTBase64Data;
}

export interface RESTGetAPIPaintSquadArenaImageResponse
  extends RESTGetAPIResponse {
  data?: RESTBase64Data;
}

export interface RESTGetAPIPaintSquadLastMatchesResponse
  extends RESTGetAPIResponse {
  data?: RESTPaintSquadMatch[];
}

export interface RESTGetAPIPaintSquadMatchDetailsResponse
  extends RESTGetAPIResponse {
  data?: {
    match_id: string;
    game_version: string;
    resource_hash: string;
    winning_team_name: PaintSquadTeam;
    winning_team_score: number;
    losing_team_name: PaintSquadTeam;
    losing_team_score: number;
    arena: string;
    gamemode: PaintSquadModeId;
    minecraft_version: string;
    metadata: {
      game_info: {
        duration: number;
        alpha_color: string;
        bravo_color: string;
      };
      player_info: RESTPaintSquadMatchPlayerInfo[];
    };
    timestamp: number;
  };
}

export interface RESTGetAPIPaintSquadInventoryResponse
  extends RESTGetAPIResponse {
  data?: {
    equipped_helmet_local_id: number;
    equipped_chestplate_local_id: number;
    equipped_boots_local_id: number;
    equipped_weapon_set_local_id: number;
    items: (RESTPaintSquadInventoryItem | RESTPaintSquadInventoryWeaponSet)[];
  };
}

export interface RESTGetAPIPaintSquadWeaponStatsResponse
  extends RESTGetAPIResponse {
  data?: RESTPaintSquadWeaponSetStats[];
}

export interface RESTGetAPIPaintSquadPlayerDataResponse
  extends RESTGetAPIResponse {
  data?: {
    tutorial_finished: boolean;
    coins: number;
    xp: number;
    public_mmr: number;
    invasion_mmr: number;
  };
}
