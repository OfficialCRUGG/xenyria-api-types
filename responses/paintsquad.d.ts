import {
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

/**
 * The response of the `/paintsquad/version` endpoint.
 * Represents various gameplay data of the respective game version.
 */
export interface RESTGetAPIPaintSquadVersionDataResponse {
  success: boolean;
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

export interface RESTGetAPIPaintSquadLeaderboardResponse {
  success: boolean;
  data?: RESTPaintSquadLeaderboardEntry[];
  message?: string;
}

export interface RESTGetAPIPaintSquadPlayerStatsResponse {
  success: boolean;
  data?: RESTPaintSquadPlayerData;
  message?: string;
}

export interface RESTGetAPIPaintSquadAssetRenderResponse {
  success: boolean;
  data?: RESTBase64Data;
  message?: string;
}

export interface RESTGetAPIPaintSquadArenaImageResponse {
  success: boolean;
  data?: RESTBase64Data;
  message?: string;
}

export interface RESTGetAPIPaintSquadLastMatchesResponse {
  success: boolean;
  data?: RESTPaintSquadMatch[];
  message?: string;
}

export interface RESTGetAPIPaintSquadMatchDetailsResponse {
  success: boolean;
  data?: {
    match_id: string;
    game_version: string;
    resource_hash: string;
    winning_team_name: PaintSquadTeam;
    winning_team_score: number;
    losing_team_name: PaintSquadTeam;
    losing_team_score: number;
    arena: string;
    gamemode: number;
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
  message?: string;
}

export interface RESTGetAPIPaintSquadInventoryResponse {
  success: boolean;
  data?: {
    equipped_helmet_local_id: number;
    equipped_chestplate_local_id: number;
    equipped_boots_local_id: number;
    equipped_weapon_set_local_id: number;
    items: (RESTPaintSquadInventoryItem | RESTPaintSquadInventoryWeaponSet)[];
  };
  message?: string;
}

export interface RESTGetAPIPaintSquadWeaponStatsResponse {
  success: boolean;
  data?: RESTPaintSquadWeaponSetStats[];
  message?: string;
}

export interface RESTGetAPIPaintSquadPlayerDataResponse {
  success: boolean;
  data?: {
    tutorial_finished: boolean;
    coins: number;
    xp: number;
    public_mmr: number;
    invasion_mmr: number;
  };
  message?: string;
}
